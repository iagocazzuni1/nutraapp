// ============================================
// ANATOMICAL EXERCISE SVG LIBRARY
// High-quality anatomical figures with muscle highlighting
// ============================================

// Base SVG templates for front and back body views
const BODY_TEMPLATES = {
    front: `
        <svg viewBox="0 0 200 350" class="exercise-svg anatomical">
            <defs>
                <!-- Muscle gradient (inactive - silver/gray) -->
                <linearGradient id="muscleInactive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8B9DC3"/>
                    <stop offset="100%" style="stop-color:#6B7AA1"/>
                </linearGradient>
                <!-- Muscle gradient (active - red) -->
                <linearGradient id="muscleActive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#E53935"/>
                    <stop offset="100%" style="stop-color:#B71C1C"/>
                </linearGradient>
                <!-- Skin tone -->
                <linearGradient id="skinTone" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#C9B8A8"/>
                    <stop offset="100%" style="stop-color:#A89888"/>
                </linearGradient>
                <!-- Glow filter for active muscles -->
                <filter id="muscleGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <!-- Body outline / base structure -->
            <g class="body-structure">
                <!-- Torso -->
                <path d="M70,80 Q60,100 55,130 L55,180 Q55,200 70,210 L130,210 Q145,200 145,180 L145,130 Q140,100 130,80 Z"
                      fill="url(#skinTone)" stroke="#8B7355" stroke-width="0.5"/>

                <!-- Head -->
                <ellipse cx="100" cy="45" rx="25" ry="30" fill="url(#skinTone)" stroke="#8B7355" stroke-width="0.5"/>
                <ellipse cx="100" cy="75" rx="12" ry="8" fill="url(#skinTone)"/>
            </g>

            <!-- FRONT MUSCLES -->
            <!-- Pectorals -->
            <path id="pec-left" class="muscle peitoral" d="M70,95 Q60,100 58,115 Q60,130 75,135 Q90,138 95,125 Q98,110 92,98 Q85,92 70,95 Z"
                  fill="url(#muscleInactive)"/>
            <path id="pec-right" class="muscle peitoral" d="M130,95 Q140,100 142,115 Q140,130 125,135 Q110,138 105,125 Q102,110 108,98 Q115,92 130,95 Z"
                  fill="url(#muscleInactive)"/>

            <!-- Deltoids (front) -->
            <path id="delt-left-front" class="muscle deltoides-anterior deltoides-lateral" d="M55,90 Q45,95 42,110 Q45,125 55,130 L58,115 Q55,100 55,90 Z"
                  fill="url(#muscleInactive)"/>
            <path id="delt-right-front" class="muscle deltoides-anterior deltoides-lateral" d="M145,90 Q155,95 158,110 Q155,125 145,130 L142,115 Q145,100 145,90 Z"
                  fill="url(#muscleInactive)"/>

            <!-- Biceps -->
            <ellipse id="bicep-left" class="muscle biceps" cx="38" cy="150" rx="10" ry="25" fill="url(#muscleInactive)"/>
            <ellipse id="bicep-right" class="muscle biceps" cx="162" cy="150" rx="10" ry="25" fill="url(#muscleInactive)"/>

            <!-- Forearms -->
            <ellipse id="forearm-left" class="muscle antebraco" cx="30" cy="200" rx="8" ry="22" fill="url(#muscleInactive)"/>
            <ellipse id="forearm-right" class="muscle antebraco" cx="170" cy="200" rx="8" ry="22" fill="url(#muscleInactive)"/>

            <!-- Abdominals -->
            <g id="abs-group" class="muscle core abs">
                <rect x="88" y="140" width="24" height="15" rx="3" fill="url(#muscleInactive)"/>
                <rect x="88" y="158" width="24" height="15" rx="3" fill="url(#muscleInactive)"/>
                <rect x="88" y="176" width="24" height="15" rx="3" fill="url(#muscleInactive)"/>
            </g>

            <!-- Obliques -->
            <path id="oblique-left" class="muscle core obliques" d="M70,140 Q65,160 68,190 L80,195 L85,140 Z" fill="url(#muscleInactive)"/>
            <path id="oblique-right" class="muscle core obliques" d="M130,140 Q135,160 132,190 L120,195 L115,140 Z" fill="url(#muscleInactive)"/>

            <!-- Quadriceps -->
            <path id="quad-left" class="muscle quadriceps" d="M70,215 Q55,230 55,270 Q58,305 70,320 L90,320 Q95,290 92,250 Q90,220 85,215 Z"
                  fill="url(#muscleInactive)"/>
            <path id="quad-right" class="muscle quadriceps" d="M130,215 Q145,230 145,270 Q142,305 130,320 L110,320 Q105,290 108,250 Q110,220 115,215 Z"
                  fill="url(#muscleInactive)"/>

            <!-- Adductors (inner thigh) -->
            <path id="adductor-left" class="muscle adductors" d="M85,215 L92,215 Q98,250 95,285 L85,285 Q82,250 85,215 Z" fill="url(#muscleInactive)"/>
            <path id="adductor-right" class="muscle adductors" d="M115,215 L108,215 Q102,250 105,285 L115,285 Q118,250 115,215 Z" fill="url(#muscleInactive)"/>

            <!-- Calves (front view - tibialis) -->
            <ellipse id="calf-left-front" class="muscle panturrilha tibialis" cx="75" cy="340" rx="12" ry="25" fill="url(#muscleInactive)"/>
            <ellipse id="calf-right-front" class="muscle panturrilha tibialis" cx="125" cy="340" rx="12" ry="25" fill="url(#muscleInactive)"/>

            <!-- Arms outline -->
            <path d="M55,130 Q40,135 32,155 Q25,180 22,210 Q20,230 25,245" stroke="#8B7355" stroke-width="1" fill="none"/>
            <path d="M145,130 Q160,135 168,155 Q175,180 178,210 Q180,230 175,245" stroke="#8B7355" stroke-width="1" fill="none"/>

            <!-- Legs outline -->
            <path d="M70,210 Q55,220 52,260 Q50,300 55,340 Q58,360 65,370" stroke="#8B7355" stroke-width="1" fill="none"/>
            <path d="M130,210 Q145,220 148,260 Q150,300 145,340 Q142,360 135,370" stroke="#8B7355" stroke-width="1" fill="none"/>

            ACTIVE_MUSCLES_PLACEHOLDER
        </svg>
    `,
    back: `
        <svg viewBox="0 0 200 350" class="exercise-svg anatomical">
            <defs>
                <linearGradient id="muscleInactiveB" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8B9DC3"/>
                    <stop offset="100%" style="stop-color:#6B7AA1"/>
                </linearGradient>
                <linearGradient id="muscleActiveB" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#E53935"/>
                    <stop offset="100%" style="stop-color:#B71C1C"/>
                </linearGradient>
                <linearGradient id="skinToneB" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#C9B8A8"/>
                    <stop offset="100%" style="stop-color:#A89888"/>
                </linearGradient>
                <filter id="muscleGlowB" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <!-- Body outline -->
            <g class="body-structure">
                <path d="M70,80 Q60,100 55,130 L55,180 Q55,200 70,210 L130,210 Q145,200 145,180 L145,130 Q140,100 130,80 Z"
                      fill="url(#skinToneB)" stroke="#8B7355" stroke-width="0.5"/>
                <ellipse cx="100" cy="45" rx="25" ry="30" fill="url(#skinToneB)" stroke="#8B7355" stroke-width="0.5"/>
                <ellipse cx="100" cy="75" rx="12" ry="8" fill="url(#skinToneB)"/>
            </g>

            <!-- BACK MUSCLES -->
            <!-- Trapezius -->
            <path id="trap" class="muscle trapezio" d="M100,75 L70,90 Q60,100 58,115 L65,115 Q80,105 100,100 Q120,105 135,115 L142,115 Q140,100 130,90 Z"
                  fill="url(#muscleInactiveB)"/>

            <!-- Rear Deltoids -->
            <path id="delt-left-rear" class="muscle deltoides-posterior deltoides-lateral" d="M55,90 Q45,95 42,110 Q45,125 55,130 L60,115 Q57,100 55,90 Z"
                  fill="url(#muscleInactiveB)"/>
            <path id="delt-right-rear" class="muscle deltoides-posterior deltoides-lateral" d="M145,90 Q155,95 158,110 Q155,125 145,130 L140,115 Q143,100 145,90 Z"
                  fill="url(#muscleInactiveB)"/>

            <!-- Lats (Latissimus Dorsi) -->
            <path id="lat-left" class="muscle latissimo" d="M58,115 Q50,140 55,170 Q60,195 70,200 L85,180 Q80,150 75,125 Q70,115 65,115 Z"
                  fill="url(#muscleInactiveB)"/>
            <path id="lat-right" class="muscle latissimo" d="M142,115 Q150,140 145,170 Q140,195 130,200 L115,180 Q120,150 125,125 Q130,115 135,115 Z"
                  fill="url(#muscleInactiveB)"/>

            <!-- Rhomboids -->
            <path id="rhomboid-left" class="muscle romboides" d="M75,100 L85,100 L90,130 L80,140 L70,130 Z" fill="url(#muscleInactiveB)"/>
            <path id="rhomboid-right" class="muscle romboides" d="M125,100 L115,100 L110,130 L120,140 L130,130 Z" fill="url(#muscleInactiveB)"/>

            <!-- Erector Spinae -->
            <path id="erector-left" class="muscle eretores-espinha" d="M90,120 L95,120 L95,200 L88,200 Z" fill="url(#muscleInactiveB)"/>
            <path id="erector-right" class="muscle eretores-espinha" d="M110,120 L105,120 L105,200 L112,200 Z" fill="url(#muscleInactiveB)"/>

            <!-- Triceps -->
            <ellipse id="tricep-left" class="muscle triceps" cx="42" cy="150" rx="12" ry="28" fill="url(#muscleInactiveB)"/>
            <ellipse id="tricep-right" class="muscle triceps" cx="158" cy="150" rx="12" ry="28" fill="url(#muscleInactiveB)"/>

            <!-- Glutes -->
            <ellipse id="glute-left" class="muscle gluteos" cx="80" cy="215" rx="20" ry="18" fill="url(#muscleInactiveB)"/>
            <ellipse id="glute-right" class="muscle gluteos" cx="120" cy="215" rx="20" ry="18" fill="url(#muscleInactiveB)"/>

            <!-- Hamstrings -->
            <path id="ham-left" class="muscle isquiotibiais" d="M62,235 Q55,260 58,295 Q62,320 75,330 L90,330 Q88,295 85,260 Q82,235 78,232 Z"
                  fill="url(#muscleInactiveB)"/>
            <path id="ham-right" class="muscle isquiotibiais" d="M138,235 Q145,260 142,295 Q138,320 125,330 L110,330 Q112,295 115,260 Q118,235 122,232 Z"
                  fill="url(#muscleInactiveB)"/>

            <!-- Calves (back view - gastrocnemius) -->
            <path id="calf-left-back" class="muscle panturrilha gastrocnemius" d="M65,332 Q58,350 62,380 Q68,400 78,405 L85,405 Q90,385 88,360 Q85,340 80,332 Z"
                  fill="url(#muscleInactiveB)"/>
            <path id="calf-right-back" class="muscle panturrilha gastrocnemius" d="M135,332 Q142,350 138,380 Q132,400 122,405 L115,405 Q110,385 112,360 Q115,340 120,332 Z"
                  fill="url(#muscleInactiveB)"/>

            ACTIVE_MUSCLES_PLACEHOLDER
        </svg>
    `
};

// Muscle name translations for display
function getMuscleDisplayName(muscle) {
    const names = {
        'peitoral': 'Chest (Pectorals)',
        'peitoral-superior': 'Upper Chest',
        'deltoides-anterior': 'Front Deltoid',
        'deltoides-lateral': 'Side Deltoid',
        'deltoides-posterior': 'Rear Deltoid',
        'biceps': 'Biceps',
        'braquial': 'Brachialis',
        'triceps': 'Triceps',
        'antebraco': 'Forearms',
        'latissimo': 'Lats (Back)',
        'trapezio': 'Trapezius',
        'romboides': 'Rhomboids',
        'eretores-espinha': 'Erector Spinae',
        'quadriceps': 'Quadriceps',
        'isquiotibiais': 'Hamstrings',
        'gluteos': 'Glutes',
        'panturrilha': 'Calves',
        'gastrocnemius': 'Gastrocnemius',
        'tibialis': 'Tibialis',
        'core': 'Core',
        'abs': 'Abdominals',
        'obliques': 'Obliques',
        'adductors': 'Adductors',
        'corpo-todo': 'Full Body'
    };
    return names[muscle] || muscle.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Generate SVG with active muscles highlighted
function generateAnatomicalSVG(view, activeMuscles, primaryMuscle) {
    // Generate unique ID for this SVG to scope CSS and all gradient/filter IDs
    const svgId = `svg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const animationName = `musclePulse-${svgId}`;

    let template = view === 'back' ? BODY_TEMPLATES.back : BODY_TEMPLATES.front;

    // Add unique ID to the SVG element
    template = template.replace('<svg viewBox="0 0 200 350"', `<svg id="${svgId}" viewBox="0 0 200 350"`);

    // Replace hardcoded gradient/filter IDs with unique ones to avoid conflicts
    // when multiple SVGs are rendered on the same page
    if (view === 'back') {
        template = template
            .replace(/muscleInactiveB/g, `muscleInactiveB-${svgId}`)
            .replace(/muscleActiveB/g, `muscleActiveB-${svgId}`)
            .replace(/skinToneB/g, `skinToneB-${svgId}`)
            .replace(/muscleGlowB/g, `muscleGlowB-${svgId}`);
    } else {
        // Use negative lookahead to avoid matching the 'B' variants
        template = template
            .replace(/muscleInactive(?!B)/g, `muscleInactive-${svgId}`)
            .replace(/muscleActive(?!B)/g, `muscleActive-${svgId}`)
            .replace(/skinTone(?!B)/g, `skinTone-${svgId}`)
            .replace(/muscleGlow(?!B)/g, `muscleGlow-${svgId}`);
    }

    // Use the unique gradient/filter IDs
    const gradientId = view === 'back' ? `muscleActiveB-${svgId}` : `muscleActive-${svgId}`;
    const filterId = view === 'back' ? `muscleGlowB-${svgId}` : `muscleGlow-${svgId}`;

    // Create the muscle highlight overlay with scoped selectors
    let activeOverlay = '';

    activeMuscles.forEach(muscle => {
        const isPrimary = muscle === primaryMuscle;

        // Add style rules scoped to this specific SVG
        activeOverlay += `
            <style>
                #${svgId} .muscle.${muscle} {
                    fill: url(#${gradientId}) !important;
                    ${isPrimary ? `filter: url(#${filterId});` : ''}
                }
                #${svgId} .muscle.${muscle}:hover {
                    opacity: 0.9;
                }
            </style>
        `;
    });

    // Also add animation for primary muscle with scoped keyframes
    if (primaryMuscle) {
        activeOverlay += `
            <style>
                #${svgId} .muscle.${primaryMuscle} {
                    animation: ${animationName} 1.5s ease-in-out infinite;
                }
                @keyframes ${animationName} {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.75; }
                }
            </style>
        `;
    }

    return template.replace('ACTIVE_MUSCLES_PLACEHOLDER', activeOverlay);
}

// Exercise definitions with anatomical data
const EXERCISE_ANIMATIONS = {
    // ============================================
    // CHEST EXERCISES
    // ============================================
    "Chest Press Machine": {
        muscles: ["peitoral", "triceps", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Barbell Bench Press": {
        muscles: ["peitoral", "triceps", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Bench Press Machine": {
        muscles: ["peitoral", "triceps", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Bench Press (Barbell or Machine)": {
        muscles: ["peitoral", "triceps", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Incline Dumbbell Press": {
        muscles: ["peitoral", "deltoides-anterior", "triceps"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Incline Barbell Press": {
        muscles: ["peitoral", "deltoides-anterior", "triceps"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Decline Press": {
        muscles: ["peitoral", "triceps", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Decline Dumbbell Press": {
        muscles: ["peitoral", "triceps", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Cable Fly": {
        muscles: ["peitoral", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Cable Fly (low to high)": {
        muscles: ["peitoral", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Cable Fly (high to low)": {
        muscles: ["peitoral", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Cable Crossover": {
        muscles: ["peitoral", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Cable Crossover (high)": {
        muscles: ["peitoral", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Cable Crossover (low)": {
        muscles: ["peitoral", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Pec Deck Fly": {
        muscles: ["peitoral", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Pec Deck (drop set)": {
        muscles: ["peitoral", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Dumbbell Fly": {
        muscles: ["peitoral", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Push-Ups": {
        muscles: ["peitoral", "triceps", "deltoides-anterior", "core"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Push-Ups to failure": {
        muscles: ["peitoral", "triceps", "deltoides-anterior", "core"],
        primaryMuscle: "peitoral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Diamond Push-Ups": {
        muscles: ["triceps", "peitoral", "deltoides-anterior"],
        primaryMuscle: "triceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },

    // ============================================
    // BACK EXERCISES
    // ============================================
    "Lat Pulldown": {
        muscles: ["latissimo", "biceps", "romboides"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Wide Grip Lat Pulldown": {
        muscles: ["latissimo", "biceps", "romboides"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Lat Pulldown (wide grip)": {
        muscles: ["latissimo", "biceps", "romboides"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Wide Lat Pulldown": {
        muscles: ["latissimo", "biceps", "romboides"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Seated Cable Row": {
        muscles: ["latissimo", "romboides", "biceps", "trapezio"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Seated Row": {
        muscles: ["latissimo", "romboides", "biceps", "trapezio"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Cable Row": {
        muscles: ["latissimo", "romboides", "biceps", "trapezio"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Single Arm Dumbbell Row": {
        muscles: ["latissimo", "romboides", "trapezio", "biceps"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Dumbbell Row": {
        muscles: ["latissimo", "romboides", "trapezio", "biceps"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Single Arm Row": {
        muscles: ["latissimo", "romboides", "trapezio", "biceps"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Barbell Row": {
        muscles: ["latissimo", "romboides", "trapezio", "biceps", "eretores-espinha"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Bent Over Barbell Row": {
        muscles: ["latissimo", "romboides", "trapezio", "biceps", "eretores-espinha"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Barbell Row (overhand)": {
        muscles: ["latissimo", "romboides", "trapezio", "biceps"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Barbell Row (underhand)": {
        muscles: ["latissimo", "romboides", "biceps"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "T-Bar Row": {
        muscles: ["latissimo", "romboides", "trapezio", "biceps"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Chest Supported Row": {
        muscles: ["latissimo", "romboides", "biceps"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Pull-Ups (or Assisted)": {
        muscles: ["latissimo", "biceps", "romboides", "core"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Weighted Pull-Ups": {
        muscles: ["latissimo", "biceps", "romboides", "core"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Straight Arm Pulldown": {
        muscles: ["latissimo", "triceps"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Deadlift": {
        muscles: ["eretores-espinha", "gluteos", "isquiotibiais", "quadriceps", "trapezio", "latissimo"],
        primaryMuscle: "eretores-espinha",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Hyperextension": {
        muscles: ["eretores-espinha", "gluteos", "isquiotibiais"],
        primaryMuscle: "eretores-espinha",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Face Pull": {
        muscles: ["deltoides-posterior", "trapezio", "romboides"],
        primaryMuscle: "deltoides-posterior",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Reverse Fly Machine": {
        muscles: ["deltoides-posterior", "trapezio", "romboides"],
        primaryMuscle: "deltoides-posterior",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Reverse Fly": {
        muscles: ["deltoides-posterior", "trapezio", "romboides"],
        primaryMuscle: "deltoides-posterior",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Rear Delt Fly": {
        muscles: ["deltoides-posterior", "trapezio", "romboides"],
        primaryMuscle: "deltoides-posterior",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Shrugs": {
        muscles: ["trapezio"],
        primaryMuscle: "trapezio",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },

    // ============================================
    // LEG EXERCISES
    // ============================================
    "Leg Press": {
        muscles: ["quadriceps", "gluteos", "isquiotibiais"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Barbell Squat": {
        muscles: ["quadriceps", "gluteos", "isquiotibiais", "eretores-espinha", "core"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Smith Machine Squat": {
        muscles: ["quadriceps", "gluteos", "isquiotibiais"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Front Squat": {
        muscles: ["quadriceps", "core", "gluteos"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Goblet Squat": {
        muscles: ["quadriceps", "gluteos", "core"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Hack Squat": {
        muscles: ["quadriceps", "gluteos"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Leg Extension": {
        muscles: ["quadriceps"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Leg Extension (drop set)": {
        muscles: ["quadriceps"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Leg Curl": {
        muscles: ["isquiotibiais"],
        primaryMuscle: "isquiotibiais",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Lying Leg Curl": {
        muscles: ["isquiotibiais"],
        primaryMuscle: "isquiotibiais",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Seated Leg Curl": {
        muscles: ["isquiotibiais"],
        primaryMuscle: "isquiotibiais",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Romanian Deadlift": {
        muscles: ["isquiotibiais", "gluteos", "eretores-espinha"],
        primaryMuscle: "isquiotibiais",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Romanian Deadlift (dumbbell)": {
        muscles: ["isquiotibiais", "gluteos", "eretores-espinha"],
        primaryMuscle: "isquiotibiais",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Walking Lunges": {
        muscles: ["quadriceps", "gluteos", "isquiotibiais"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Bulgarian Split Squat": {
        muscles: ["quadriceps", "gluteos", "isquiotibiais"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Hip Thrust Machine": {
        muscles: ["gluteos", "isquiotibiais"],
        primaryMuscle: "gluteos",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Hip Abductor": {
        muscles: ["gluteos"],
        primaryMuscle: "gluteos",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Standing Calf Raise": {
        muscles: ["panturrilha"],
        primaryMuscle: "panturrilha",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Seated Calf Raise": {
        muscles: ["panturrilha"],
        primaryMuscle: "panturrilha",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Calf Raise": {
        muscles: ["panturrilha"],
        primaryMuscle: "panturrilha",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },

    // ============================================
    // SHOULDER EXERCISES
    // ============================================
    "Shoulder Press Machine": {
        muscles: ["deltoides-anterior", "deltoides-lateral", "triceps"],
        primaryMuscle: "deltoides-anterior",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Dumbbell Shoulder Press": {
        muscles: ["deltoides-anterior", "deltoides-lateral", "triceps"],
        primaryMuscle: "deltoides-anterior",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Overhead Press": {
        muscles: ["deltoides-anterior", "deltoides-lateral", "triceps", "core"],
        primaryMuscle: "deltoides-anterior",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Military Press": {
        muscles: ["deltoides-anterior", "deltoides-lateral", "triceps", "core"],
        primaryMuscle: "deltoides-anterior",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Arnold Press": {
        muscles: ["deltoides-anterior", "deltoides-lateral", "triceps"],
        primaryMuscle: "deltoides-anterior",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Lateral Raise": {
        muscles: ["deltoides-lateral"],
        primaryMuscle: "deltoides-lateral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Front Raise": {
        muscles: ["deltoides-anterior"],
        primaryMuscle: "deltoides-anterior",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Cable Front Raise": {
        muscles: ["deltoides-anterior"],
        primaryMuscle: "deltoides-anterior",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Upright Row": {
        muscles: ["deltoides-lateral", "trapezio", "biceps"],
        primaryMuscle: "deltoides-lateral",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },

    // ============================================
    // ARM EXERCISES - BICEPS
    // ============================================
    "Barbell Curl": {
        muscles: ["biceps", "antebraco"],
        primaryMuscle: "biceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "EZ Bar Curl": {
        muscles: ["biceps", "antebraco"],
        primaryMuscle: "biceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Hammer Curl": {
        muscles: ["biceps", "antebraco"],
        primaryMuscle: "biceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Incline Dumbbell Curl": {
        muscles: ["biceps"],
        primaryMuscle: "biceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Preacher Curl": {
        muscles: ["biceps"],
        primaryMuscle: "biceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Concentration Curl": {
        muscles: ["biceps"],
        primaryMuscle: "biceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },

    // ============================================
    // ARM EXERCISES - TRICEPS
    // ============================================
    "Tricep Pushdown": {
        muscles: ["triceps"],
        primaryMuscle: "triceps",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Rope Pushdown": {
        muscles: ["triceps"],
        primaryMuscle: "triceps",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Tricep Pushdown (rope)": {
        muscles: ["triceps"],
        primaryMuscle: "triceps",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Overhead Tricep Extension": {
        muscles: ["triceps"],
        primaryMuscle: "triceps",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Overhead Extension": {
        muscles: ["triceps"],
        primaryMuscle: "triceps",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Skull Crushers": {
        muscles: ["triceps"],
        primaryMuscle: "triceps",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Close Grip Bench Press": {
        muscles: ["triceps", "peitoral"],
        primaryMuscle: "triceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Close Grip Bench": {
        muscles: ["triceps", "peitoral"],
        primaryMuscle: "triceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Dips (assisted)": {
        muscles: ["triceps", "peitoral", "deltoides-anterior"],
        primaryMuscle: "triceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Dips (assisted if needed)": {
        muscles: ["triceps", "peitoral", "deltoides-anterior"],
        primaryMuscle: "triceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Dips (weighted)": {
        muscles: ["triceps", "peitoral", "deltoides-anterior"],
        primaryMuscle: "triceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Tricep Dips": {
        muscles: ["triceps", "peitoral", "deltoides-anterior"],
        primaryMuscle: "triceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Weighted Dips": {
        muscles: ["triceps", "peitoral", "deltoides-anterior"],
        primaryMuscle: "triceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Parallel Dips": {
        muscles: ["triceps", "peitoral", "deltoides-anterior"],
        primaryMuscle: "triceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },

    // ============================================
    // CORE EXERCISES
    // ============================================
    "Ab Machine": {
        muscles: ["core"],
        primaryMuscle: "core",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Cable Crunch": {
        muscles: ["core"],
        primaryMuscle: "core",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Plank": {
        muscles: ["core", "deltoides-anterior"],
        primaryMuscle: "core",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },

    // ============================================
    // CARDIO EXERCISES
    // ============================================
    "Treadmill Intervals": {
        muscles: ["quadriceps", "isquiotibiais", "panturrilha", "gluteos"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Elliptical": {
        muscles: ["quadriceps", "isquiotibiais", "gluteos"],
        primaryMuscle: "quadriceps",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Stair Climber": {
        muscles: ["quadriceps", "gluteos", "panturrilha"],
        primaryMuscle: "gluteos",
        view: "front",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    },
    "Rowing Machine": {
        muscles: ["latissimo", "biceps", "quadriceps", "core"],
        primaryMuscle: "latissimo",
        view: "back",
        get svg() { return generateAnatomicalSVG(this.view, this.muscles, this.primaryMuscle); }
    }
};

// Function to get exercise SVG data (maintains backwards compatibility)
function getExerciseSVG(exerciseName) {
    const exercise = EXERCISE_ANIMATIONS[exerciseName];

    if (exercise) {
        return {
            muscles: exercise.muscles,
            primaryMuscle: exercise.primaryMuscle,
            svg: exercise.svg
        };
    }

    // Default fallback for unknown exercises
    return {
        muscles: ["corpo-todo"],
        primaryMuscle: "corpo-todo",
        svg: generateAnatomicalSVG('front', ["quadriceps", "peitoral", "biceps"], "peitoral")
    };
}

console.log('Anatomical Exercise Library loaded successfully!');
