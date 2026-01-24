// ============================================
// APP.JS - Main Logic for NutriPlan
// Multi-page support: index.html, planner.html, my-plan.html
// ============================================

// Detect current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// DOM Elements (get them conditionally based on page)
const form = document.getElementById('nutriForm');
const formSection = document.querySelector('.form-section');
const resultsSection = document.getElementById('resultados');
const btnRefazer = document.getElementById('btnRefazer');
const planContent = document.getElementById('planContent');
const noPlanMessage = document.getElementById('noPlanMessage');

// Global state to store user data
let userData = {};
let currentRecipes = {};
let currentWorkout = {};
let calculatedValues = {}; // Store BMR, TDEE, calories, macros

// Event Listeners (conditional based on page)
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}
if (btnRefazer) {
    // On my-plan.html, btnRefazer is a link, so we handle it differently
    if (currentPage === 'my-plan.html') {
        btnRefazer.addEventListener('click', handleStartOver);
    } else {
        btnRefazer.addEventListener('click', resetForm);
    }
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// ============================================
// CALCULATION FUNCTIONS
// ============================================

/**
 * Converts lbs to kg
 */
function lbsToKg(lbs) {
    return lbs * 0.453592;
}

/**
 * Converts inches to cm
 */
function inchesToCm(inches) {
    return inches * 2.54;
}

/**
 * Calculates BMR using Mifflin-St Jeor formula
 */
function calculateBMR(weightLbs, heightInches, age, sex) {
    const weightKg = lbsToKg(weightLbs);
    const heightCm = inchesToCm(heightInches);

    if (sex === 'masculino') {
        return (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
        return (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }
}

/**
 * Calculates TDEE based on activity level and gym frequency
 */
function calculateTDEE(bmr, activityLevel, gymFrequency) {
    const activityFactors = {
        'sedentario': 1.2,
        'leve': 1.375,
        'moderado': 1.55,
        'ativo': 1.725
    };

    const gymAdjustment = {
        '0': 0,
        '1-2': 0.1,
        '3-4': 0.15,
        '5-6': 0.2,
        '7': 0.25
    };

    const baseFactor = activityFactors[activityLevel] || 1.2;
    const adjustment = gymAdjustment[gymFrequency] || 0;

    return bmr * (baseFactor + adjustment);
}

/**
 * Adjusts calories based on goal
 */
function adjustCaloriesForGoal(tdee, goal) {
    switch (goal) {
        case 'emagrecer':
            return Math.round(tdee * 0.80); // 20% deficit
        case 'manter':
            return Math.round(tdee);
        case 'ganharMassa':
            return Math.round(tdee * 1.15); // 15% surplus
        default:
            return Math.round(tdee);
    }
}

/**
 * Calculates macronutrient distribution
 */
function calculateMacros(calories, goal, weightLbs) {
    const distribution = MEAL_PLANS[goal].distribution;

    // Protein based on body weight
    let proteinPerLb;
    switch (goal) {
        case 'emagrecer':
            proteinPerLb = 1.0; // High to preserve muscle
            break;
        case 'manter':
            proteinPerLb = 0.8;
            break;
        case 'ganharMassa':
            proteinPerLb = 1.0;
            break;
        default:
            proteinPerLb = 0.9;
    }

    const protein = Math.round(weightLbs * proteinPerLb);
    const proteinCalories = protein * 4;

    // Distribute remaining between carbs and fat
    const remainingCalories = calories - proteinCalories;
    const carbRatio = distribution.carbs / (distribution.carbs + distribution.fat);

    const carbs = Math.round((remainingCalories * carbRatio) / 4);
    const fat = Math.round((remainingCalories * (1 - carbRatio)) / 9);

    return {
        protein,
        carbs,
        fat,
        proteinCalories,
        carbCalories: carbs * 4,
        fatCalories: fat * 9
    };
}

/**
 * Calculates BMI
 */
function calculateBMI(weightLbs, heightInches) {
    const weightKg = lbsToKg(weightLbs);
    const heightM = inchesToCm(heightInches) / 100;
    return (weightKg / (heightM * heightM)).toFixed(1);
}

/**
 * Classifies BMI
 */
function classifyBMI(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    if (bmi < 35) return 'Obese I';
    if (bmi < 40) return 'Obese II';
    return 'Obese III';
}

// ============================================
// CONTENT GENERATION FUNCTIONS
// ============================================

/**
 * Generates profile summary
 */
function generateProfileSummary(data) {
    const bmi = calculateBMI(data.weight, data.height);
    const bmiClass = classifyBMI(bmi);

    const goalText = {
        'emagrecer': 'Weight Loss',
        'manter': 'Maintenance',
        'ganharMassa': 'Muscle Gain'
    };

    return `
        <div class="profile-item">
            <div class="value">${data.name.split(' ')[0]}</div>
            <div class="label">Name</div>
        </div>
        <div class="profile-item">
            <div class="value">${data.age}</div>
            <div class="label">Years Old</div>
        </div>
        <div class="profile-item">
            <div class="value">${data.weight} lbs</div>
            <div class="label">Current Weight</div>
        </div>
        <div class="profile-item">
            <div class="value">${data.height}"</div>
            <div class="label">Height</div>
        </div>
        <div class="profile-item">
            <div class="value">${bmi}</div>
            <div class="label">BMI (${bmiClass})</div>
        </div>
        <div class="profile-item">
            <div class="value">${goalText[data.goal]}</div>
            <div class="label">Goal</div>
        </div>
    `;
}

/**
 * Generates nutritional numbers display
 */
function generateNutritionNumbers(bmr, tdee, calories, macros) {
    return `
        <div class="nutrition-item">
            <div class="value">${Math.round(bmr)}</div>
            <div class="unit">kcal</div>
            <div class="label">Basal Metabolic Rate</div>
        </div>
        <div class="nutrition-item">
            <div class="value">${Math.round(tdee)}</div>
            <div class="unit">kcal</div>
            <div class="label">Total Daily Expenditure</div>
        </div>
        <div class="nutrition-item">
            <div class="value">${calories}</div>
            <div class="unit">kcal</div>
            <div class="label">Daily Calorie Target</div>
        </div>
        <div class="nutrition-item protein">
            <div class="value">${macros.protein}g</div>
            <div class="unit">protein</div>
            <div class="label">${macros.proteinCalories} kcal</div>
        </div>
        <div class="nutrition-item carbs">
            <div class="value">${macros.carbs}g</div>
            <div class="unit">carbs</div>
            <div class="label">${macros.carbCalories} kcal</div>
        </div>
        <div class="nutrition-item fat">
            <div class="value">${macros.fat}g</div>
            <div class="unit">fat</div>
            <div class="label">${macros.fatCalories} kcal</div>
        </div>
    `;
}

/**
 * Selects meals prioritizing main meals (breakfast, lunch, dinner) over snacks
 * @param {Array} allMeals - All available meals from the plan
 * @param {number} numMeals - Number of meals user wants
 * @returns {Array} - Selected meals sorted by time
 */
function selectMeals(allMeals, numMeals) {
    // Separate main meals from snacks
    const mainMeals = allMeals.filter(m => ['breakfast', 'lunch', 'dinner'].includes(m.type));
    const snacks = allMeals.filter(m => m.type === 'snack');

    let selected = [];

    if (numMeals >= 3) {
        // Include all main meals (breakfast, lunch, dinner)
        selected = [...mainMeals];

        // If user wants more than 3 meals, add snacks
        if (numMeals > 3) {
            const snacksNeeded = numMeals - 3;
            selected.push(...snacks.slice(0, snacksNeeded));
        }
    } else if (numMeals === 2) {
        // 2 meals: breakfast + dinner (skip lunch for intermittent fasting style)
        selected = mainMeals.filter(m => m.type !== 'lunch');
    } else if (numMeals === 1) {
        // 1 meal: dinner only (OMAD style)
        selected = mainMeals.filter(m => m.type === 'dinner');
    }

    // Sort by time (parse hour from time string like "7:00 AM")
    return selected.sort((a, b) => {
        const parseTime = (timeStr) => {
            const [time, period] = timeStr.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            if (period === 'PM' && hours !== 12) hours += 12;
            if (period === 'AM' && hours === 12) hours = 0;
            return hours * 60 + minutes;
        };
        return parseTime(a.time) - parseTime(b.time);
    });
}

/**
 * Generates meal plan with dropdowns
 */
function generateMealPlan(goal, calories, numMeals) {
    const plan = MEAL_PLANS[goal];
    let meals = [...plan.meals];

    // Use smart meal selection that prioritizes main meals
    meals = selectMeals(meals, numMeals);

    // Recalculate percentages
    const totalPercent = meals.reduce((acc, m) => acc + m.caloriePercent, 0);

    // Store recipes for this goal
    currentRecipes = RECIPES[goal];

    let html = '';
    meals.forEach((meal, index) => {
        const adjustedPercent = meal.caloriePercent / totalPercent;
        const mealCalories = Math.round(calories * adjustedPercent);
        const recipes = currentRecipes[meal.type] || currentRecipes.snack;

        html += `
            <div class="meal-item" data-meal-index="${index}">
                <div class="meal-header" onclick="toggleMealDropdown(${index})">
                    <div class="meal-time">
                        ${meal.time}
                        <small>${meal.name}</small>
                    </div>
                    <div class="meal-content">
                        <div class="meal-name">${meal.name}</div>
                        <div class="meal-foods">Click to see 3 recipe suggestions</div>
                    </div>
                    <div class="meal-calories">${mealCalories} kcal</div>
                    <div class="meal-toggle">▼</div>
                </div>
                <div class="meal-dropdown">
                    <div class="meal-recipes">
                        ${recipes.map(recipe => `
                            <div class="recipe-suggestion" onclick="openRecipeModal('${recipe.id}')">
                                <span class="recipe-suggestion-icon">${recipe.icon}</span>
                                <div class="recipe-suggestion-info">
                                    <div class="recipe-suggestion-name">${recipe.name}</div>
                                    <div class="recipe-suggestion-meta">${recipe.calories} kcal • ${recipe.time}</div>
                                </div>
                                <span class="recipe-suggestion-arrow">→</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    return html;
}

/**
 * Generates message for users who don't workout
 */
function generateNoWorkoutMessage() {
    return `
        <div class="no-workout-message">
            <div class="no-workout-icon">🏃</div>
            <h3>Stay Active Without the Gym</h3>
            <p>Even without gym workouts, you can stay healthy and support your goals with:</p>
            <ul class="no-workout-tips">
                <li><span>🚶</span> Daily walks (30+ minutes)</li>
                <li><span>🏠</span> Bodyweight exercises at home</li>
                <li><span>🚴</span> Active hobbies (swimming, cycling, hiking)</li>
                <li><span>🧘</span> Stretching and mobility work</li>
                <li><span>🎯</span> Focus on your nutrition plan for best results</li>
            </ul>
        </div>
    `;
}

/**
 * Gets the number of workout days based on gym frequency
 * @param {string} gymFrequency - Frequency string ('0', '1-2', '3-4', '5-6', '7')
 * @returns {number} - Number of workout days to show
 */
function getWorkoutDaysForFrequency(gymFrequency) {
    switch (gymFrequency) {
        case '0': return 0;
        case '1-2': return 2;
        case '3-4': return 3;
        case '5-6': return 4;
        case '7': return 4; // Max 4 different workouts (can repeat)
        default: return 4;
    }
}

/**
 * Gets frequency description text
 */
function getFrequencyDescription(gymFrequency, numDays) {
    const descriptions = {
        '0': { freq: 'No gym workouts', desc: 'Focus on nutrition and daily activity' },
        '1-2': { freq: '2x per week', desc: 'Full body workouts for maximum efficiency' },
        '3-4': { freq: '3x per week', desc: 'Push/Pull/Legs split for balanced development' },
        '5-6': { freq: '4-5x per week', desc: 'Upper/Lower split with targeted muscle groups' },
        '7': { freq: '6x per week', desc: 'High frequency training with adequate recovery' }
    };
    return descriptions[gymFrequency] || descriptions['3-4'];
}

/**
 * Generates workout plan cards
 * @param {string} experience - User experience level
 * @param {string} goal - User goal
 * @param {string} gymFrequency - Gym frequency ('0', '1-2', '3-4', '5-6', '7')
 */
function generateWorkoutPlan(experience, goal, gymFrequency = '3-4') {
    // Handle no workout case
    if (gymFrequency === '0') {
        currentWorkout = null;
        return generateNoWorkoutMessage();
    }

    const workout = WORKOUTS[experience][goal];
    currentWorkout = workout;
    const userIsPremium = isPremium();

    // Get number of workout days based on frequency
    const numDays = getWorkoutDaysForFrequency(gymFrequency);
    const freqInfo = getFrequencyDescription(gymFrequency, numDays);

    // Select the appropriate number of workout days
    const selectedDays = workout.split.slice(0, numDays);

    // Update currentWorkout with only selected days for modal access
    currentWorkout = {
        ...workout,
        frequency: freqInfo.freq,
        description: freqInfo.desc,
        split: selectedDays
    };

    let html = `
        <div class="workout-info" style="margin-bottom: 20px; padding: 20px; background: var(--background); border-radius: var(--radius); text-align: center;">
            <p><strong>Recommended Frequency:</strong> ${freqInfo.freq}</p>
            <p style="color: var(--text-secondary); margin-top: 5px;">${freqInfo.desc}</p>
        </div>
    `;

    selectedDays.forEach((day, index) => {
        const previewExercises = day.exercises.slice(0, 3).map(e => e.name);
        const lockedClass = userIsPremium ? '' : 'workout-preview-locked';

        html += `
            <div class="workout-day" onclick="openWorkoutModal(${index})">
                <div class="workout-header ${day.color}">
                    <h4>${day.day}</h4>
                    <span class="workout-focus">${day.focus}</span>
                </div>
                <div class="workout-preview ${lockedClass}">
                    <p>${day.exercises.length} exercises</p>
                    <div class="workout-preview-exercises">
                        ${previewExercises.map(e => `<span>${e}</span>`).join('')}
                    </div>
                </div>
                <div class="workout-cta">
                    <span>${userIsPremium ? 'View Full Workout' : 'Unlock Workout'}</span>
                    <span>→</span>
                </div>
            </div>
        `;
    });

    return html;
}

/**
 * Generates tips section
 */
function generateTips(goal) {
    const tips = TIPS[goal];
    const goalText = {
        'emagrecer': 'Weight Loss',
        'manter': 'Maintenance',
        'ganharMassa': 'Muscle Gain'
    };

    return `
        <ul class="tips-list">
            ${tips.map(tip => `<li><span>✓</span> ${tip}</li>`).join('')}
        </ul>
    `;
}

/**
 * Generates supplements section based on goal
 */
function generateSupplementsSection(goal) {
    const supplements = SUPPLEMENTS[goal];
    if (!supplements || supplements.length === 0) {
        return '';
    }

    const goalText = {
        'emagrecer': 'Weight Loss',
        'manter': 'Maintenance',
        'ganharMassa': 'Muscle Gain'
    };

    return `
        <div class="supplements-header">
            <h3>Recommended Supplements for ${goalText[goal]}</h3>
            <p>These supplements can help support your fitness goals when combined with proper nutrition and training.</p>
        </div>
        <div class="supplements-grid">
            ${supplements.map(supp => `
                <div class="supplement-card">
                    <div class="supplement-icon">${supp.icon}</div>
                    <h4 class="supplement-name">${supp.name}</h4>
                    <p class="supplement-description">${supp.description}</p>
                    <ul class="supplement-benefits">
                        ${supp.benefits.map(benefit => `<li>✓ ${benefit}</li>`).join('')}
                    </ul>
                    <div class="supplement-timing">
                        <strong>When to take:</strong> ${supp.timing}
                    </div>
                    <a href="${supp.link}" class="supplement-link btn-secondary-small">Learn More</a>
                </div>
            `).join('')}
        </div>
    `;
}

// ============================================
// MODAL FUNCTIONS
// ============================================

/**
 * Opens recipe modal
 */
function openRecipeModal(recipeId) {
    // Check premium access
    if (!isPremium()) {
        if (!isLoggedIn()) {
            openModal('loginModal');
        } else {
            openModal('premiumModal');
        }
        return;
    }

    // Find recipe in current recipes
    let recipe = null;
    for (const type in currentRecipes) {
        const found = currentRecipes[type].find(r => r.id === recipeId);
        if (found) {
            recipe = found;
            break;
        }
    }

    if (!recipe) return;

    const modalContent = document.getElementById('recipeModalContent');
    modalContent.innerHTML = `
        <div class="recipe-modal-header">
            <h2>${recipe.icon} ${recipe.name}</h2>
            <p>${recipe.type}</p>
            <div class="recipe-modal-meta">
                <span>⏱️ ${recipe.time}</span>
                <span>👥 ${recipe.servings}</span>
                <span>🔥 ${recipe.calories} kcal</span>
            </div>
        </div>
        <div class="recipe-modal-body">
            <div class="recipe-video-search">
                <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(recipe.name + ' recipe')}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="btn-youtube-search">
                    <span class="youtube-icon">▶</span>
                    Search "${recipe.name}" on YouTube
                </a>
            </div>

            <div class="recipe-details">
                <div class="recipe-ingredients">
                    <h3>📝 Ingredients</h3>
                    <ul>
                        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                </div>
                <div class="recipe-instructions">
                    <h3>👨‍🍳 Instructions</h3>
                    <ol>
                        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            </div>

            <div class="recipe-macros-grid">
                <div class="macro-card calories">
                    <div class="value">${recipe.calories}</div>
                    <div class="label">Calories</div>
                </div>
                <div class="macro-card protein">
                    <div class="value">${recipe.protein}g</div>
                    <div class="label">Protein</div>
                </div>
                <div class="macro-card carbs">
                    <div class="value">${recipe.carbs}g</div>
                    <div class="label">Carbs</div>
                </div>
                <div class="macro-card fat">
                    <div class="value">${recipe.fat}g</div>
                    <div class="label">Fat</div>
                </div>
            </div>
        </div>
    `;

    openModal('recipeModal');
}

/**
 * Opens workout modal with animated SVG exercises and video demos
 */
function openWorkoutModal(workoutIndex) {
    // Check premium access
    if (!isPremium()) {
        if (!isLoggedIn()) {
            openModal('loginModal');
        } else {
            openModal('premiumModal');
        }
        return;
    }

    const day = currentWorkout.split[workoutIndex];

    const modalContent = document.getElementById('workoutModalContent');
    modalContent.innerHTML = `
        <div class="workout-modal-header ${day.color}">
            <h2>${day.day}</h2>
            <p>${day.focus}</p>
        </div>
        <div class="workout-modal-body">
            <p style="margin-bottom: 24px; color: var(--text-secondary);">
                Click on each exercise to see the animated demonstration and muscles worked
            </p>
            <div class="exercise-list">
                ${day.exercises.map((ex, index) => {
                    const exerciseData = getExerciseSVG(ex.name);
                    const gifUrl = typeof getExerciseGif === 'function' ? getExerciseGif(ex.name) : null;
                    const musclesList = exerciseData.muscles.map(muscle => {
                        const isPrimary = muscle === exerciseData.primaryMuscle;
                        return `
                            <div class="muscle-item ${isPrimary ? 'primary' : ''}">
                                <div class="muscle-indicator"></div>
                                <span class="muscle-name">${getMuscleDisplayName(muscle)}</span>
                                ${isPrimary ? '<span class="muscle-badge">Primary</span>' : ''}
                            </div>
                        `;
                    }).join('');

                    // Create animation display - video if available, otherwise SVG
                    const videoId = `video-${index}-${Date.now()}`;
                    const animationDisplay = gifUrl ? `
                        <div class="exercise-video-demo">
                            <video id="${videoId}" autoplay loop muted playsinline class="exercise-demo-video">
                                <source src="${gifUrl}" type="video/mp4" onerror="handleVideoError('${videoId}')">
                                Your browser does not support the video tag.
                            </video>
                            <div class="exercise-svg-wrapper video-fallback hidden">
                                ${exerciseData.svg}
                            </div>
                        </div>
                    ` : `
                        <div class="exercise-svg-wrapper">
                            ${exerciseData.svg}
                        </div>
                    `;

                    return `
                        <div class="exercise-card" data-exercise-index="${index}">
                            <div class="exercise-card-header" onclick="toggleExerciseContent(this)">
                                <div class="exercise-info">
                                    <h4>${ex.name}</h4>
                                    <span>Click to see animation & muscles</span>
                                </div>
                                <div class="exercise-sets-badge">${ex.sets}</div>
                            </div>
                            <div class="exercise-content">
                                <div class="exercise-animation-container">
                                    ${animationDisplay}
                                    <div class="muscles-info">
                                        <h5>Muscles Worked</h5>
                                        <div class="muscle-list">
                                            ${musclesList}
                                        </div>
                                    </div>
                                </div>
                                <div class="exercise-video">
                                    <h5>Video Tutorial</h5>
                                    <div class="video-container">
                                        <iframe
                                            src="https://www.youtube.com/embed/${ex.youtubeId}"
                                            title="${ex.name} Tutorial"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                        <div class="video-fallback-message" style="display:none;">
                                            <p>Video unavailable. <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name + ' exercise tutorial')}" target="_blank" rel="noopener">Search on YouTube</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    openModal('workoutModal');

    // Setup video error handlers after modal is opened
    setTimeout(setupVideoErrorHandlers, 100);
}

/**
 * Toggles exercise content visibility
 */
function toggleExerciseContent(element) {
    const card = element.closest('.exercise-card');
    card.classList.toggle('open');
}

/**
 * Handles video load errors by showing SVG fallback
 */
function handleVideoError(videoId) {
    const videoElement = document.getElementById(videoId);
    if (videoElement) {
        const container = videoElement.closest('.exercise-video-demo');
        if (container) {
            videoElement.style.display = 'none';
            const fallback = container.querySelector('.video-fallback');
            if (fallback) {
                fallback.classList.remove('hidden');
            }
        }
    }
}

/**
 * Sets up video error handlers after modal is opened
 */
function setupVideoErrorHandlers() {
    document.querySelectorAll('.exercise-demo-video').forEach(video => {
        video.addEventListener('error', function() {
            handleVideoError(this.id);
        });
        // Also check if video failed to load after a timeout
        setTimeout(() => {
            if (video.readyState === 0 || video.networkState === 3) {
                handleVideoError(video.id);
            }
        }, 3000);
    });
}

/**
 * Opens a modal
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Closes a modal
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * Toggles meal dropdown
 */
function toggleMealDropdown(index) {
    const mealItem = document.querySelector(`.meal-item[data-meal-index="${index}"]`);
    mealItem.classList.toggle('open');
}

/**
 * Toggles exercise video
 */
function toggleExerciseVideo(element) {
    const card = element.closest('.exercise-card');
    card.classList.toggle('open');
}

// ============================================
// HANDLERS
// ============================================

/**
 * Handles form submission
 */
function handleFormSubmit(e) {
    e.preventDefault();

    // Check if user has a locked plan
    if (typeof isPlanLocked === 'function' && isPlanLocked()) {
        const daysRemaining = typeof getPlanDaysRemaining === 'function' ? getPlanDaysRemaining() : 0;
        alert(`Your plan is still active! You have ${daysRemaining} day(s) remaining. You can generate a new plan after your current plan expires.`);
        return;
    }

    // Collect form data
    const formData = new FormData(form);
    const planDuration = parseInt(formData.get('planDuration')) || 30;

    userData = {
        name: formData.get('nome'),
        age: parseInt(formData.get('idade')),
        sex: formData.get('sexo'),
        height: parseInt(formData.get('altura')),
        weight: parseFloat(formData.get('peso')),
        goalWeight: parseFloat(formData.get('pesoMeta')),
        activityLevel: formData.get('nivelAtividade'),
        gymFrequency: formData.get('frequenciaAcademia'),
        mealsPerDay: parseInt(formData.get('refeicoesDia')),
        workoutTime: formData.get('horarioTreino'),
        goal: formData.get('objetivo'),
        experience: formData.get('experiencia'),
        restrictions: formData.getAll('restricoes'),
        planDuration: planDuration
    };

    // Check if user is logged in - if not, save data and show account prompt
    if (typeof isLoggedIn === 'function' && !isLoggedIn()) {
        if (typeof savePendingFormData === 'function') {
            savePendingFormData(userData);
        }
        showAccountPrompt();
        return;
    }

    // User is logged in - generate and display results
    generateAndDisplayResults(userData);
}

/**
 * Shows modal prompting user to create account to see their plan
 */
function showAccountPrompt() {
    // Update the login modal to show custom message
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Add a custom message above the forms if not already present
    let promptMessage = document.getElementById('accountPromptMessage');
    if (!promptMessage) {
        promptMessage = document.createElement('div');
        promptMessage.id = 'accountPromptMessage';
        promptMessage.className = 'account-prompt-message';
        promptMessage.innerHTML = `
            <div class="prompt-icon">🎉</div>
            <h3>Your Plan is Ready!</h3>
            <p>Create a free account or sign in to view your personalized meal and workout plan.</p>
        `;

        const authContainer = document.querySelector('.auth-container');
        if (authContainer) {
            authContainer.insertBefore(promptMessage, authContainer.firstChild);
        }
    }

    // Show the login modal with register tab active
    openModal('loginModal');
    switchAuthTab('register');
}

/**
 * Processes pending form data after user logs in or registers
 */
function processPendingFormData() {
    if (typeof getPendingFormData !== 'function') return;

    const pendingData = getPendingFormData();
    if (!pendingData) {
        // No pending data, try to load existing plan
        if (typeof loadExistingPlan === 'function') {
            loadExistingPlan();
        }
        return;
    }

    // Clear pending data
    if (typeof clearPendingFormData === 'function') {
        clearPendingFormData();
    }

    // Remove the prompt message if it exists
    const promptMessage = document.getElementById('accountPromptMessage');
    if (promptMessage) {
        promptMessage.remove();
    }

    // Generate and display results with the pending data
    generateAndDisplayResults(pendingData);
}

/**
 * Generates and displays results from user data
 */
function generateAndDisplayResults(data) {
    userData = data;

    // Calculate values
    const bmr = calculateBMR(userData.weight, userData.height, userData.age, userData.sex);
    const tdee = calculateTDEE(bmr, userData.activityLevel, userData.gymFrequency);
    const calories = adjustCaloriesForGoal(tdee, userData.goal);
    const macros = calculateMacros(calories, userData.goal, userData.weight);

    // Store calculated values globally
    calculatedValues = { bmr, tdee, calories, macros };

    // Save plan if user is logged in
    if (typeof isLoggedIn === 'function' && isLoggedIn() && typeof saveUserPlan === 'function') {
        saveUserPlan({
            userData: userData,
            calculations: calculatedValues,
            planDuration: userData.planDuration || 30
        });
    }

    // If on planner page, redirect to my-plan page
    if (currentPage === 'planner.html') {
        window.location.href = 'my-plan.html';
        return;
    }

    // Generate content (for my-plan page)
    renderPlanContent(userData, calculatedValues);
}

/**
 * Renders plan content to the page
 */
function renderPlanContent(userData, calculations) {
    const { bmr, tdee, calories, macros } = calculations;

    document.getElementById('profileSummary').innerHTML = generateProfileSummary(userData);
    document.getElementById('nutritionNumbers').innerHTML = generateNutritionNumbers(bmr, tdee, calories, macros);
    document.getElementById('mealPlan').innerHTML = generateMealPlan(userData.goal, calories, userData.mealsPerDay);
    document.getElementById('workoutPlan').innerHTML = generateWorkoutPlan(userData.experience, userData.goal, userData.gymFrequency);
    document.getElementById('supplementsSection').innerHTML = generateSupplementsSection(userData.goal);
    document.getElementById('tipsSection').innerHTML = generateTips(userData.goal);

    // Show plan content, hide no plan message
    if (planContent) planContent.classList.remove('hidden');
    if (noPlanMessage) noPlanMessage.classList.add('hidden');

    // Update premium UI
    if (typeof updatePremiumUI === 'function') {
        updatePremiumUI();
    }

    // Update plan status UI
    if (typeof updatePlanStatusUI === 'function') {
        updatePlanStatusUI();
    }
}

/**
 * Resets form and returns to start
 */
function resetForm() {
    // Check if plan is locked
    if (typeof isPlanLocked === 'function' && isPlanLocked()) {
        const daysRemaining = typeof getPlanDaysRemaining === 'function' ? getPlanDaysRemaining() : 0;
        alert(`Your plan is still active! You have ${daysRemaining} day(s) remaining. You cannot create a new plan until your current plan expires.`);
        return;
    }

    if (form) form.reset();
    if (resultsSection) resultsSection.classList.add('hidden');
    if (formSection) formSection.style.display = 'block';

    // Scroll to form
    const formSectionEl = document.getElementById('form-section');
    if (formSectionEl) {
        formSectionEl.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Handles "Start Over" button click on my-plan page
 */
function handleStartOver(e) {
    // Check if plan is locked
    if (typeof isPlanLocked === 'function' && isPlanLocked()) {
        e.preventDefault();
        const daysRemaining = typeof getPlanDaysRemaining === 'function' ? getPlanDaysRemaining() : 0;
        alert(`Your plan is still active! You have ${daysRemaining} day(s) remaining. You cannot create a new plan until your current plan expires.`);
        return;
    }
    // Allow the link to navigate to planner.html
}

/**
 * Shows the user's saved plan (called from My Plan button)
 */
function showMyPlan() {
    // Redirect to my-plan page
    window.location.href = 'my-plan.html';
}

/**
 * Loads existing plan from localStorage and displays it
 * @returns {boolean} - True if plan was loaded, false otherwise
 */
function loadExistingPlan() {
    if (typeof loadUserPlan !== 'function') return false;

    const plan = loadUserPlan();
    if (!plan || !plan.userData || !plan.calculations) return false;

    // Check if plan is still active
    const status = typeof getPlanStatus === 'function' ? getPlanStatus() : { isActive: false };
    if (!status.isActive) return false;

    // Restore userData and calculations
    userData = plan.userData;
    calculatedValues = plan.calculations;

    // Render the plan content
    renderPlanContent(userData, calculatedValues);

    return true;
}

// ============================================
// INITIALIZATION
// ============================================

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Visual validation in real-time (only on pages with forms)
if (form) {
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && this.checkValidity()) {
                this.style.borderColor = 'var(--primary-color)';
            }
        });

        input.addEventListener('input', function() {
            this.style.borderColor = 'var(--border-color)';
        });
    });
}

/**
 * Initialize the planner page (form)
 */
function initPlannerPage() {
    // Check if user already has an active plan
    if (typeof isLoggedIn === 'function' && isLoggedIn()) {
        if (typeof isPlanLocked === 'function' && isPlanLocked()) {
            // User has active plan, redirect to my-plan
            window.location.href = 'my-plan.html';
            return;
        }
    }

    // Process pending form data if any (after auth redirect back)
    if (typeof getPendingFormData === 'function') {
        const pendingData = getPendingFormData();
        if (pendingData && typeof isLoggedIn === 'function' && isLoggedIn()) {
            if (typeof clearPendingFormData === 'function') {
                clearPendingFormData();
            }
            generateAndDisplayResults(pendingData);
        }
    }
}

/**
 * Initialize the my-plan page (results)
 */
function initMyPlanPage() {
    // Check if user is logged in
    if (typeof isLoggedIn !== 'function' || !isLoggedIn()) {
        // Show no plan message and prompt to login/create plan
        if (noPlanMessage) noPlanMessage.classList.remove('hidden');
        if (planContent) planContent.classList.add('hidden');
        return;
    }

    // Try to load existing plan
    const planLoaded = loadExistingPlan();

    if (!planLoaded) {
        // No active plan, show no plan message
        if (noPlanMessage) noPlanMessage.classList.remove('hidden');
        if (planContent) planContent.classList.add('hidden');
    }
}

/**
 * Initialize the landing page
 */
function initLandingPage() {
    // Landing page doesn't need special initialization
    // Just update nav auth if available
}

// Page-specific initialization
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for auth.js to initialize
    setTimeout(() => {
        // Initialize based on current page
        if (currentPage === 'planner.html') {
            initPlannerPage();
        } else if (currentPage === 'my-plan.html') {
            initMyPlanPage();
        } else {
            initLandingPage();
        }

        // Update plan status UI if available
        if (typeof updatePlanStatusUI === 'function') {
            updatePlanStatusUI();
        }
    }, 100);
});

console.log('NutriPlan loaded successfully! 🥗');
