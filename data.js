// ============================================
// DATABASE - RECIPES AND WORKOUTS (ENGLISH)
// ============================================

// Recipes organized by goal and meal type
const RECIPES = {
    emagrecer: {
        breakfast: [
            {
                id: "lw-bf-1",
                name: "Egg White Veggie Omelette",
                type: "Breakfast",
                icon: "🍳",
                time: "15 min",
                servings: "1 serving",
                calories: 180,
                protein: 22,
                carbs: 8,
                fat: 6,
                youtubeId: "57afEWn-QDg",
                ingredients: [
                    "4 egg whites",
                    "1 whole egg",
                    "1 cup fresh spinach",
                    "1/4 cup diced bell peppers",
                    "2 tbsp cottage cheese",
                    "Salt and pepper to taste",
                    "Cooking spray"
                ],
                instructions: [
                    "Whisk egg whites and whole egg in a bowl",
                    "Season with salt and pepper",
                    "Heat a non-stick pan over medium heat with cooking spray",
                    "Pour egg mixture and add spinach and peppers",
                    "When set, add cottage cheese and fold in half",
                    "Serve immediately"
                ]
            },
            {
                id: "lw-bf-2",
                name: "Greek Yogurt Parfait",
                type: "Breakfast",
                icon: "🥣",
                time: "5 min",
                servings: "1 serving",
                calories: 220,
                protein: 20,
                carbs: 25,
                fat: 5,
                youtubeId: "V8FtS_8FiEE",
                ingredients: [
                    "1 cup non-fat Greek yogurt",
                    "1/2 cup mixed berries",
                    "2 tbsp sugar-free granola",
                    "1 tsp chia seeds",
                    "1/2 tsp cinnamon",
                    "Stevia to taste (optional)"
                ],
                instructions: [
                    "Add Greek yogurt to a bowl or glass",
                    "Layer with mixed berries",
                    "Top with granola and chia seeds",
                    "Sprinkle with cinnamon",
                    "Mix and enjoy immediately"
                ]
            },
            {
                id: "lw-bf-3",
                name: "Avocado Toast with Eggs",
                type: "Breakfast",
                icon: "🥑",
                time: "10 min",
                servings: "1 serving",
                calories: 280,
                protein: 15,
                carbs: 22,
                fat: 16,
                youtubeId: "GkhMgQQrLDc",
                ingredients: [
                    "1 slice whole grain bread",
                    "1/2 ripe avocado",
                    "2 poached eggs",
                    "Red pepper flakes",
                    "Salt and pepper",
                    "Fresh lime juice"
                ],
                instructions: [
                    "Toast the bread until golden",
                    "Mash avocado with lime juice, salt, and pepper",
                    "Spread avocado on toast",
                    "Top with poached eggs",
                    "Season with red pepper flakes"
                ]
            }
        ],
        lunch: [
            {
                id: "lw-ln-1",
                name: "Grilled Chicken Salad",
                type: "Lunch",
                icon: "🥗",
                time: "25 min",
                servings: "1 serving",
                calories: 320,
                protein: 38,
                carbs: 12,
                fat: 14,
                youtubeId: "GG1Nj6tWQDQ",
                ingredients: [
                    "6 oz chicken breast",
                    "4 cups mixed greens",
                    "1/2 cucumber, sliced",
                    "10 cherry tomatoes",
                    "1/4 red onion",
                    "2 tbsp olive oil vinaigrette",
                    "Salt, pepper, garlic powder"
                ],
                instructions: [
                    "Season chicken with salt, pepper, and garlic",
                    "Grill chicken for 6-7 minutes per side",
                    "Let rest for 5 minutes, then slice",
                    "Arrange greens, cucumber, tomatoes, and onion",
                    "Top with sliced chicken",
                    "Drizzle with vinaigrette"
                ]
            },
            {
                id: "lw-ln-2",
                name: "Tuna Lettuce Wraps",
                type: "Lunch",
                icon: "🥬",
                time: "10 min",
                servings: "1 serving",
                calories: 250,
                protein: 30,
                carbs: 8,
                fat: 11,
                youtubeId: "VaJLjF2swLM",
                ingredients: [
                    "1 can tuna in water, drained",
                    "2 tbsp Greek yogurt",
                    "1 tsp Dijon mustard",
                    "1/4 cup diced celery",
                    "Large butter lettuce leaves",
                    "Salt, pepper, lemon juice"
                ],
                instructions: [
                    "Mix tuna with Greek yogurt and mustard",
                    "Add celery, salt, pepper, and lemon juice",
                    "Spoon mixture onto lettuce leaves",
                    "Wrap and enjoy",
                    "Serve with extra lemon wedges"
                ]
            },
            {
                id: "lw-ln-3",
                name: "Shrimp Stir-Fry",
                type: "Lunch",
                icon: "🍤",
                time: "20 min",
                servings: "2 servings",
                calories: 280,
                protein: 32,
                carbs: 15,
                fat: 10,
                youtubeId: "Z8aC2CRjzKo",
                ingredients: [
                    "8 oz shrimp, peeled and deveined",
                    "2 cups broccoli florets",
                    "1 bell pepper, sliced",
                    "2 cloves garlic, minced",
                    "2 tbsp low-sodium soy sauce",
                    "1 tbsp olive oil",
                    "Ginger to taste"
                ],
                instructions: [
                    "Heat oil in a wok or large pan",
                    "Add garlic and ginger, sauté 30 seconds",
                    "Add shrimp and cook until pink",
                    "Add vegetables and stir-fry 5-6 minutes",
                    "Add soy sauce and toss",
                    "Serve immediately"
                ]
            }
        ],
        dinner: [
            {
                id: "lw-dn-1",
                name: "Baked Salmon with Asparagus",
                type: "Dinner",
                icon: "🐟",
                time: "30 min",
                servings: "2 servings",
                calories: 350,
                protein: 40,
                carbs: 8,
                fat: 18,
                youtubeId: "b-LNPH_LKUA",
                ingredients: [
                    "2 salmon fillets (6 oz each)",
                    "1 bunch asparagus",
                    "2 tbsp olive oil",
                    "3 cloves garlic, minced",
                    "1 lemon",
                    "Fresh dill",
                    "Salt and pepper"
                ],
                instructions: [
                    "Preheat oven to 400°F (200°C)",
                    "Place salmon and asparagus on baking sheet",
                    "Drizzle with olive oil and season",
                    "Add garlic and lemon slices",
                    "Bake for 15-18 minutes",
                    "Garnish with fresh dill"
                ]
            },
            {
                id: "lw-dn-2",
                name: "Turkey Meatballs Zucchini Noodles",
                type: "Dinner",
                icon: "🍝",
                time: "35 min",
                servings: "2 servings",
                calories: 320,
                protein: 35,
                carbs: 15,
                fat: 14,
                youtubeId: "xB1xBMV6N6I",
                ingredients: [
                    "1 lb ground turkey",
                    "4 medium zucchinis",
                    "1 cup marinara sauce (no sugar added)",
                    "1 egg",
                    "1/4 cup almond flour",
                    "Italian seasoning",
                    "Parmesan cheese (optional)"
                ],
                instructions: [
                    "Mix turkey, egg, almond flour, and seasonings",
                    "Form into small meatballs",
                    "Bake at 400°F for 20 minutes",
                    "Spiralize zucchini into noodles",
                    "Sauté zoodles 3-4 minutes",
                    "Top with meatballs and marinara"
                ]
            },
            {
                id: "lw-dn-3",
                name: "Grilled Chicken & Vegetables",
                type: "Dinner",
                icon: "🍗",
                time: "30 min",
                servings: "2 servings",
                calories: 310,
                protein: 36,
                carbs: 18,
                fat: 12,
                youtubeId: "gJvWPABZYxec",
                ingredients: [
                    "2 chicken breasts (6 oz each)",
                    "1 zucchini",
                    "1 bell pepper",
                    "1 cup broccoli",
                    "2 tbsp olive oil",
                    "Herbs de Provence",
                    "Salt and pepper"
                ],
                instructions: [
                    "Preheat grill or grill pan",
                    "Season chicken with herbs, salt, pepper",
                    "Grill chicken 6-7 min per side",
                    "Cut vegetables into chunks",
                    "Grill or roast vegetables with oil",
                    "Serve chicken with vegetables"
                ]
            }
        ],
        snack: [
            {
                id: "lw-sn-1",
                name: "Protein Energy Balls",
                type: "Snack",
                icon: "🥜",
                time: "15 min",
                servings: "12 balls",
                calories: 95,
                protein: 5,
                carbs: 10,
                fat: 4,
                youtubeId: "FdXAG_MYoVU",
                ingredients: [
                    "1 cup oats",
                    "1/2 cup peanut butter",
                    "1/3 cup honey",
                    "1 scoop vanilla protein powder",
                    "2 tbsp dark chocolate chips",
                    "1 tsp vanilla extract"
                ],
                instructions: [
                    "Mix all ingredients in a bowl",
                    "Refrigerate for 30 minutes",
                    "Roll into small balls",
                    "Store in refrigerator",
                    "Enjoy as a quick snack"
                ]
            },
            {
                id: "lw-sn-2",
                name: "Cucumber Hummus Bites",
                type: "Snack",
                icon: "🥒",
                time: "5 min",
                servings: "1 serving",
                calories: 120,
                protein: 6,
                carbs: 12,
                fat: 6,
                youtubeId: "l98J62-1kWE",
                ingredients: [
                    "1 large cucumber",
                    "1/4 cup hummus",
                    "Cherry tomatoes",
                    "Everything bagel seasoning",
                    "Fresh parsley"
                ],
                instructions: [
                    "Slice cucumber into thick rounds",
                    "Top each with a dollop of hummus",
                    "Add half a cherry tomato",
                    "Sprinkle with seasoning",
                    "Garnish with parsley"
                ]
            },
            {
                id: "lw-sn-3",
                name: "Apple Almond Butter Slices",
                type: "Snack",
                icon: "🍎",
                time: "5 min",
                servings: "1 serving",
                calories: 180,
                protein: 4,
                carbs: 22,
                fat: 10,
                youtubeId: "B5lkC0aHwME",
                ingredients: [
                    "1 medium apple",
                    "2 tbsp almond butter",
                    "1 tsp chia seeds",
                    "Cinnamon to taste"
                ],
                instructions: [
                    "Core and slice apple into rounds",
                    "Spread almond butter on slices",
                    "Sprinkle with chia seeds",
                    "Add cinnamon on top",
                    "Enjoy immediately"
                ]
            }
        ]
    },

    manter: {
        breakfast: [
            {
                id: "mt-bf-1",
                name: "Overnight Oats",
                type: "Breakfast",
                icon: "🥣",
                time: "5 min + overnight",
                servings: "1 serving",
                calories: 380,
                protein: 15,
                carbs: 55,
                fat: 12,
                youtubeId: "jOWPEGHl5Qo",
                ingredients: [
                    "1/2 cup rolled oats",
                    "1/2 cup milk",
                    "1/2 cup Greek yogurt",
                    "1 tbsp maple syrup",
                    "1 tbsp chia seeds",
                    "Fresh berries for topping"
                ],
                instructions: [
                    "Combine oats, milk, yogurt in a jar",
                    "Add maple syrup and chia seeds",
                    "Stir well and refrigerate overnight",
                    "In the morning, top with berries",
                    "Enjoy cold or warmed up"
                ]
            },
            {
                id: "mt-bf-2",
                name: "Whole Grain Pancakes",
                type: "Breakfast",
                icon: "🥞",
                time: "20 min",
                servings: "2 servings",
                calories: 420,
                protein: 18,
                carbs: 58,
                fat: 14,
                youtubeId: "IY5ykPd3coo",
                ingredients: [
                    "1 cup whole wheat flour",
                    "1 egg",
                    "1 cup milk",
                    "1 tbsp honey",
                    "1 tsp baking powder",
                    "1 banana, sliced",
                    "Maple syrup for serving"
                ],
                instructions: [
                    "Mix flour, baking powder in a bowl",
                    "Add egg, milk, and honey",
                    "Whisk until smooth",
                    "Cook on griddle until bubbles form",
                    "Flip and cook until golden",
                    "Top with banana and maple syrup"
                ]
            },
            {
                id: "mt-bf-3",
                name: "Breakfast Burrito",
                type: "Breakfast",
                icon: "🌯",
                time: "15 min",
                servings: "1 serving",
                calories: 450,
                protein: 25,
                carbs: 42,
                fat: 20,
                youtubeId: "xC4oJh1O_Yw",
                ingredients: [
                    "1 large whole wheat tortilla",
                    "2 scrambled eggs",
                    "1/4 cup black beans",
                    "2 tbsp salsa",
                    "1/4 avocado",
                    "2 tbsp shredded cheese"
                ],
                instructions: [
                    "Scramble eggs in a pan",
                    "Warm tortilla in microwave",
                    "Layer beans, eggs, cheese",
                    "Add salsa and avocado",
                    "Roll into a burrito",
                    "Optional: grill for crispy outside"
                ]
            }
        ],
        lunch: [
            {
                id: "mt-ln-1",
                name: "Quinoa Buddha Bowl",
                type: "Lunch",
                icon: "🥙",
                time: "30 min",
                servings: "2 servings",
                calories: 450,
                protein: 22,
                carbs: 52,
                fat: 18,
                youtubeId: "w6GiGQocuL8",
                ingredients: [
                    "1 cup quinoa",
                    "1 cup chickpeas",
                    "1 cup roasted sweet potato",
                    "2 cups kale",
                    "1/2 avocado",
                    "Tahini dressing",
                    "Sesame seeds"
                ],
                instructions: [
                    "Cook quinoa according to package",
                    "Roast sweet potato at 400°F",
                    "Massage kale with olive oil",
                    "Arrange all ingredients in bowl",
                    "Drizzle with tahini dressing",
                    "Top with sesame seeds"
                ]
            },
            {
                id: "mt-ln-2",
                name: "Turkey Club Sandwich",
                type: "Lunch",
                icon: "🥪",
                time: "10 min",
                servings: "1 serving",
                calories: 480,
                protein: 35,
                carbs: 40,
                fat: 20,
                youtubeId: "P7L3s8dPhQ4",
                ingredients: [
                    "3 slices whole grain bread",
                    "4 oz sliced turkey breast",
                    "2 strips turkey bacon",
                    "Lettuce and tomato",
                    "1 tbsp mayo",
                    "1/4 avocado"
                ],
                instructions: [
                    "Toast bread slices",
                    "Cook turkey bacon",
                    "Spread mayo on bread",
                    "Layer turkey, bacon, lettuce, tomato",
                    "Add avocado slices",
                    "Stack and cut diagonally"
                ]
            },
            {
                id: "mt-ln-3",
                name: "Asian Chicken Rice Bowl",
                type: "Lunch",
                icon: "🍚",
                time: "25 min",
                servings: "2 servings",
                calories: 520,
                protein: 38,
                carbs: 55,
                fat: 16,
                youtubeId: "W7CVLAT1FI8",
                ingredients: [
                    "1 cup brown rice",
                    "8 oz chicken thighs",
                    "1 cup edamame",
                    "1 carrot, shredded",
                    "Sesame ginger sauce",
                    "Green onions",
                    "Sesame seeds"
                ],
                instructions: [
                    "Cook rice according to package",
                    "Season and grill chicken thighs",
                    "Slice chicken when done",
                    "Arrange rice in bowls",
                    "Top with chicken, edamame, carrots",
                    "Drizzle with sauce, add toppings"
                ]
            }
        ],
        dinner: [
            {
                id: "mt-dn-1",
                name: "Beef Stir-Fry with Rice",
                type: "Dinner",
                icon: "🥩",
                time: "30 min",
                servings: "2 servings",
                calories: 520,
                protein: 35,
                carbs: 50,
                fat: 20,
                youtubeId: "jT9GfCQPW3o",
                ingredients: [
                    "8 oz beef sirloin, sliced",
                    "1 cup brown rice",
                    "2 cups mixed vegetables",
                    "3 tbsp soy sauce",
                    "1 tbsp sesame oil",
                    "Garlic and ginger",
                    "Green onions"
                ],
                instructions: [
                    "Cook rice according to package",
                    "Slice beef into thin strips",
                    "Stir-fry beef in sesame oil",
                    "Add vegetables and garlic",
                    "Add soy sauce and ginger",
                    "Serve over rice with green onions"
                ]
            },
            {
                id: "mt-dn-2",
                name: "Mediterranean Pasta",
                type: "Dinner",
                icon: "🍝",
                time: "25 min",
                servings: "2 servings",
                calories: 480,
                protein: 22,
                carbs: 62,
                fat: 16,
                youtubeId: "VZ4vqr-XjlA",
                ingredients: [
                    "8 oz whole wheat pasta",
                    "1 cup cherry tomatoes",
                    "1/2 cup kalamata olives",
                    "4 oz feta cheese",
                    "Fresh basil",
                    "3 tbsp olive oil",
                    "Garlic"
                ],
                instructions: [
                    "Cook pasta al dente",
                    "Sauté garlic in olive oil",
                    "Add halved tomatoes",
                    "Toss with pasta and olives",
                    "Crumble feta on top",
                    "Garnish with fresh basil"
                ]
            },
            {
                id: "mt-dn-3",
                name: "Honey Garlic Chicken",
                type: "Dinner",
                icon: "🍯",
                time: "35 min",
                servings: "2 servings",
                calories: 450,
                protein: 40,
                carbs: 35,
                fat: 16,
                youtubeId: "oC0B1Wy27u4",
                ingredients: [
                    "2 chicken breasts",
                    "3 tbsp honey",
                    "2 tbsp soy sauce",
                    "4 garlic cloves, minced",
                    "1 cup steamed broccoli",
                    "1 cup jasmine rice",
                    "Sesame seeds"
                ],
                instructions: [
                    "Mix honey, soy sauce, and garlic",
                    "Marinate chicken for 10 minutes",
                    "Bake chicken at 400°F for 25 min",
                    "Baste with sauce halfway through",
                    "Steam broccoli and cook rice",
                    "Serve together, top with sesame"
                ]
            }
        ],
        snack: [
            {
                id: "mt-sn-1",
                name: "Trail Mix",
                type: "Snack",
                icon: "🥜",
                time: "5 min",
                servings: "4 servings",
                calories: 200,
                protein: 6,
                carbs: 20,
                fat: 12,
                youtubeId: "8vM-YN0EkO0",
                ingredients: [
                    "1/2 cup almonds",
                    "1/2 cup walnuts",
                    "1/4 cup dark chocolate chips",
                    "1/4 cup dried cranberries",
                    "1/4 cup pumpkin seeds"
                ],
                instructions: [
                    "Combine all ingredients in a bowl",
                    "Mix well",
                    "Divide into portion bags",
                    "Store in airtight container",
                    "Grab and go when needed"
                ]
            },
            {
                id: "mt-sn-2",
                name: "Smoothie Bowl",
                type: "Snack",
                icon: "🫐",
                time: "10 min",
                servings: "1 serving",
                calories: 280,
                protein: 12,
                carbs: 45,
                fat: 6,
                youtubeId: "3tIJOJwrzsk",
                ingredients: [
                    "1 frozen banana",
                    "1/2 cup frozen berries",
                    "1/2 cup Greek yogurt",
                    "Granola for topping",
                    "Fresh fruit slices",
                    "Honey drizzle"
                ],
                instructions: [
                    "Blend frozen fruits with yogurt",
                    "Pour thick mixture into bowl",
                    "Top with granola",
                    "Add fresh fruit slices",
                    "Drizzle with honey"
                ]
            },
            {
                id: "mt-sn-3",
                name: "Caprese Skewers",
                type: "Snack",
                icon: "🍅",
                time: "10 min",
                servings: "2 servings",
                calories: 180,
                protein: 10,
                carbs: 6,
                fat: 14,
                youtubeId: "vPLjPnmrn4w",
                ingredients: [
                    "Cherry tomatoes",
                    "Fresh mozzarella balls",
                    "Fresh basil leaves",
                    "Balsamic glaze",
                    "Olive oil",
                    "Salt and pepper"
                ],
                instructions: [
                    "Thread tomato, basil, mozzarella on skewers",
                    "Arrange on a plate",
                    "Drizzle with olive oil",
                    "Add balsamic glaze",
                    "Season with salt and pepper"
                ]
            }
        ]
    },

    ganharMassa: {
        breakfast: [
            {
                id: "gm-bf-1",
                name: "Protein Banana Pancakes",
                type: "Breakfast",
                icon: "🥞",
                time: "20 min",
                servings: "1 serving",
                calories: 520,
                protein: 40,
                carbs: 58,
                fat: 14,
                youtubeId: "1ASZ7Htnc-I",
                ingredients: [
                    "2 whole eggs",
                    "1 ripe banana",
                    "1 scoop vanilla whey protein",
                    "1/2 cup oats",
                    "2 tbsp peanut butter",
                    "Maple syrup for serving"
                ],
                instructions: [
                    "Blend banana, eggs, oats, and protein",
                    "Heat non-stick pan over medium heat",
                    "Pour batter to make small pancakes",
                    "Flip when bubbles form",
                    "Stack and top with peanut butter",
                    "Drizzle with maple syrup"
                ]
            },
            {
                id: "gm-bf-2",
                name: "Mass Gainer Oatmeal",
                type: "Breakfast",
                icon: "🥣",
                time: "10 min",
                servings: "1 serving",
                calories: 580,
                protein: 35,
                carbs: 75,
                fat: 16,
                youtubeId: "VnJRKD-CUfY",
                ingredients: [
                    "1 cup oats",
                    "1.5 cups whole milk",
                    "1 scoop protein powder",
                    "1 banana, sliced",
                    "2 tbsp almond butter",
                    "1 tbsp honey",
                    "Cinnamon to taste"
                ],
                instructions: [
                    "Cook oats in milk until creamy",
                    "Remove from heat",
                    "Stir in protein powder",
                    "Top with banana slices",
                    "Add almond butter and honey",
                    "Sprinkle with cinnamon"
                ]
            },
            {
                id: "gm-bf-3",
                name: "Eggs & Avocado Toast Stack",
                type: "Breakfast",
                icon: "🍳",
                time: "15 min",
                servings: "1 serving",
                calories: 550,
                protein: 28,
                carbs: 42,
                fat: 32,
                youtubeId: "GkhMgQQrLDc",
                ingredients: [
                    "2 slices sourdough bread",
                    "3 whole eggs",
                    "1 whole avocado",
                    "2 strips bacon",
                    "Salt, pepper, red pepper flakes",
                    "Fresh herbs"
                ],
                instructions: [
                    "Toast bread until golden",
                    "Cook bacon until crispy",
                    "Fry eggs to your preference",
                    "Mash avocado with salt and pepper",
                    "Stack: toast, avocado, egg, bacon",
                    "Season and add herbs"
                ]
            }
        ],
        lunch: [
            {
                id: "gm-ln-1",
                name: "Chicken Pasta Alfredo",
                type: "Lunch",
                icon: "🍝",
                time: "30 min",
                servings: "2 servings",
                calories: 680,
                protein: 48,
                carbs: 62,
                fat: 26,
                youtubeId: "SaDqesWFHBE",
                ingredients: [
                    "8 oz fettuccine pasta",
                    "10 oz chicken breast",
                    "1 cup heavy cream",
                    "1/2 cup parmesan cheese",
                    "4 cloves garlic",
                    "2 tbsp butter",
                    "Fresh parsley"
                ],
                instructions: [
                    "Cook pasta according to package",
                    "Season and grill chicken, then slice",
                    "Melt butter, sauté garlic",
                    "Add cream and simmer 5 minutes",
                    "Stir in parmesan until melted",
                    "Toss pasta and chicken in sauce"
                ]
            },
            {
                id: "gm-ln-2",
                name: "Double Beef Burger",
                type: "Lunch",
                icon: "🍔",
                time: "25 min",
                servings: "1 serving",
                calories: 750,
                protein: 55,
                carbs: 48,
                fat: 38,
                youtubeId: "nUbWf8EfVJM",
                ingredients: [
                    "10 oz ground beef (80/20)",
                    "1 brioche bun",
                    "2 slices cheddar cheese",
                    "Lettuce, tomato, onion",
                    "Pickles",
                    "Special sauce",
                    "Salt and pepper"
                ],
                instructions: [
                    "Form beef into 2 patties",
                    "Season generously with salt and pepper",
                    "Grill patties 4-5 min per side",
                    "Add cheese in last minute",
                    "Toast the bun",
                    "Assemble with all toppings"
                ]
            },
            {
                id: "gm-ln-3",
                name: "Loaded Baked Potato",
                type: "Lunch",
                icon: "🥔",
                time: "60 min",
                servings: "1 serving",
                calories: 620,
                protein: 35,
                carbs: 65,
                fat: 25,
                youtubeId: "WnOopcLSi7I",
                ingredients: [
                    "1 large russet potato",
                    "6 oz pulled chicken",
                    "1/2 cup shredded cheese",
                    "3 tbsp sour cream",
                    "Bacon bits",
                    "Green onions",
                    "Butter"
                ],
                instructions: [
                    "Bake potato at 400°F for 50-60 min",
                    "Cut open and fluff inside",
                    "Add butter and mash slightly",
                    "Top with chicken and cheese",
                    "Add sour cream and bacon",
                    "Garnish with green onions"
                ]
            }
        ],
        dinner: [
            {
                id: "gm-dn-1",
                name: "Ribeye Steak with Potatoes",
                type: "Dinner",
                icon: "🥩",
                time: "35 min",
                servings: "1 serving",
                calories: 780,
                protein: 55,
                carbs: 45,
                fat: 42,
                youtubeId: "AmC9SmCBUj4",
                ingredients: [
                    "12 oz ribeye steak",
                    "2 medium potatoes",
                    "4 tbsp butter",
                    "Fresh rosemary and thyme",
                    "4 garlic cloves",
                    "Salt and pepper",
                    "Asparagus for side"
                ],
                instructions: [
                    "Bring steak to room temperature",
                    "Season generously with salt and pepper",
                    "Sear in cast iron with butter",
                    "Add herbs and garlic, baste steak",
                    "Cook to desired doneness",
                    "Rest 5 min, serve with roasted potatoes"
                ]
            },
            {
                id: "gm-dn-2",
                name: "Salmon Rice Bowl",
                type: "Dinner",
                icon: "🍣",
                time: "30 min",
                servings: "1 serving",
                calories: 650,
                protein: 45,
                carbs: 55,
                fat: 28,
                youtubeId: "V3zQCH7FzNI",
                ingredients: [
                    "8 oz salmon fillet",
                    "1.5 cups sushi rice",
                    "1 avocado",
                    "1/4 cup edamame",
                    "Soy sauce",
                    "Sriracha mayo",
                    "Sesame seeds, nori"
                ],
                instructions: [
                    "Cook sushi rice",
                    "Season salmon with salt, pepper, sesame oil",
                    "Bake salmon at 400°F for 15 min",
                    "Flake salmon into chunks",
                    "Assemble bowl with rice base",
                    "Add toppings and drizzle sauces"
                ]
            },
            {
                id: "gm-dn-3",
                name: "Chicken Fried Rice",
                type: "Dinner",
                icon: "🍚",
                time: "25 min",
                servings: "2 servings",
                calories: 620,
                protein: 40,
                carbs: 68,
                fat: 20,
                youtubeId: "FLdNPvla5fI",
                ingredients: [
                    "2 cups day-old rice",
                    "10 oz chicken breast, diced",
                    "3 eggs",
                    "1 cup mixed vegetables",
                    "3 tbsp soy sauce",
                    "2 tbsp sesame oil",
                    "Green onions"
                ],
                instructions: [
                    "Cook diced chicken in sesame oil",
                    "Push aside, scramble eggs",
                    "Add vegetables and cook 3 min",
                    "Add rice and mix everything",
                    "Pour soy sauce and toss",
                    "Top with green onions"
                ]
            }
        ],
        snack: [
            {
                id: "gm-sn-1",
                name: "Mass Gainer Shake",
                type: "Post-Workout",
                icon: "🥤",
                time: "5 min",
                servings: "1 serving",
                calories: 550,
                protein: 45,
                carbs: 65,
                fat: 12,
                youtubeId: "pjWPABZYxec",
                ingredients: [
                    "2 cups whole milk",
                    "2 scoops whey protein",
                    "1 banana",
                    "2 tbsp peanut butter",
                    "1/2 cup oats",
                    "Ice cubes"
                ],
                instructions: [
                    "Add all ingredients to blender",
                    "Blend until smooth",
                    "Add more milk if too thick",
                    "Consume within 30 min post-workout",
                    "Can add honey for extra calories"
                ]
            },
            {
                id: "gm-sn-2",
                name: "Peanut Butter Banana Toast",
                type: "Snack",
                icon: "🍞",
                time: "5 min",
                servings: "1 serving",
                calories: 420,
                protein: 14,
                carbs: 52,
                fat: 20,
                youtubeId: "B5lkC0aHwME",
                ingredients: [
                    "2 slices whole grain bread",
                    "3 tbsp peanut butter",
                    "1 banana, sliced",
                    "1 tbsp honey",
                    "Cinnamon"
                ],
                instructions: [
                    "Toast bread until golden",
                    "Spread peanut butter on toast",
                    "Layer banana slices on top",
                    "Drizzle with honey",
                    "Sprinkle cinnamon"
                ]
            },
            {
                id: "gm-sn-3",
                name: "Cottage Cheese & Fruit",
                type: "Snack",
                icon: "🧀",
                time: "5 min",
                servings: "1 serving",
                calories: 280,
                protein: 28,
                carbs: 30,
                fat: 6,
                youtubeId: "Uh8JpfzBmcc",
                ingredients: [
                    "1.5 cups cottage cheese",
                    "1/2 cup pineapple chunks",
                    "1/2 cup berries",
                    "2 tbsp honey",
                    "Mint leaves"
                ],
                instructions: [
                    "Scoop cottage cheese into bowl",
                    "Add pineapple and berries",
                    "Drizzle with honey",
                    "Garnish with mint",
                    "Enjoy as high-protein snack"
                ]
            }
        ]
    }
};

// Meal plan templates
const MEAL_PLANS = {
    emagrecer: {
        distribution: { protein: 0.35, carbs: 0.35, fat: 0.30 },
        meals: [
            { name: "Breakfast", time: "7:00 AM", caloriePercent: 0.25, type: "breakfast" },
            { name: "Morning Snack", time: "10:00 AM", caloriePercent: 0.10, type: "snack" },
            { name: "Lunch", time: "12:30 PM", caloriePercent: 0.30, type: "lunch" },
            { name: "Afternoon Snack", time: "3:30 PM", caloriePercent: 0.10, type: "snack" },
            { name: "Dinner", time: "7:00 PM", caloriePercent: 0.25, type: "dinner" }
        ]
    },
    manter: {
        distribution: { protein: 0.30, carbs: 0.45, fat: 0.25 },
        meals: [
            { name: "Breakfast", time: "7:00 AM", caloriePercent: 0.25, type: "breakfast" },
            { name: "Morning Snack", time: "10:00 AM", caloriePercent: 0.10, type: "snack" },
            { name: "Lunch", time: "12:30 PM", caloriePercent: 0.30, type: "lunch" },
            { name: "Afternoon Snack", time: "4:00 PM", caloriePercent: 0.10, type: "snack" },
            { name: "Dinner", time: "7:30 PM", caloriePercent: 0.25, type: "dinner" }
        ]
    },
    ganharMassa: {
        distribution: { protein: 0.30, carbs: 0.50, fat: 0.20 },
        meals: [
            { name: "Breakfast", time: "7:00 AM", caloriePercent: 0.20, type: "breakfast" },
            { name: "Morning Snack", time: "10:00 AM", caloriePercent: 0.10, type: "snack" },
            { name: "Lunch", time: "12:30 PM", caloriePercent: 0.25, type: "lunch" },
            { name: "Pre-Workout", time: "3:30 PM", caloriePercent: 0.10, type: "snack" },
            { name: "Post-Workout", time: "6:00 PM", caloriePercent: 0.10, type: "snack" },
            { name: "Dinner", time: "8:00 PM", caloriePercent: 0.25, type: "dinner" }
        ]
    }
};

// Workouts organized by experience level and goal
const WORKOUTS = {
    iniciante: {
        emagrecer: {
            frequency: "3-4x per week",
            description: "Focus on learning movements, building consistency, and fat burning",
            split: [
                {
                    day: "Workout A",
                    focus: "Chest + Triceps + Cardio",
                    color: "treino-a",
                    exercises: [
                        { name: "Chest Press Machine", sets: "3x12", youtubeId: "xUm0BiZCWlQ" },
                        { name: "Incline Dumbbell Press", sets: "3x12", youtubeId: "8iPEnn-ltC8" },
                        { name: "Cable Fly", sets: "3x15", youtubeId: "Iwe6AmxVf7o" },
                        { name: "Tricep Pushdown", sets: "3x12", youtubeId: "2-LAMcpzODU" },
                        { name: "Overhead Tricep Extension", sets: "3x12", youtubeId: "YbX7Wd8jQ-Q" },
                        { name: "Treadmill Intervals", sets: "15 min", youtubeId: "H6mRkx1x77k" }
                    ]
                },
                {
                    day: "Workout B",
                    focus: "Back + Biceps + Cardio",
                    color: "treino-b",
                    exercises: [
                        { name: "Lat Pulldown", sets: "3x12", youtubeId: "CAwf7n6Luuc" },
                        { name: "Seated Cable Row", sets: "3x12", youtubeId: "GZbfZ033f74" },
                        { name: "Single Arm Dumbbell Row", sets: "3x12", youtubeId: "pYcpY20QaE8" },
                        { name: "Face Pull", sets: "3x15", youtubeId: "rep-qVOkqgk" },
                        { name: "Barbell Curl", sets: "3x12", youtubeId: "kwG2ipFRgfo" },
                        { name: "Elliptical", sets: "15 min", youtubeId: "LkD4Xq7M_g8" }
                    ]
                },
                {
                    day: "Workout C",
                    focus: "Legs + Glutes + Cardio",
                    color: "treino-c",
                    exercises: [
                        { name: "Leg Press", sets: "3x15", youtubeId: "IZxyjW7MPJQ" },
                        { name: "Leg Extension", sets: "3x12", youtubeId: "YyvSfVjQeL0" },
                        { name: "Leg Curl", sets: "3x12", youtubeId: "1Tq3QdYUuHs" },
                        { name: "Smith Machine Squat", sets: "3x12", youtubeId: "7RZ5qx6f50g" },
                        { name: "Hip Abductor", sets: "3x15", youtubeId: "FXyPqONQeDk" },
                        { name: "Stair Climber", sets: "10 min", youtubeId: "yxJzZwWJ_f4" }
                    ]
                },
                {
                    day: "Workout D",
                    focus: "Shoulders + Core + Cardio",
                    color: "treino-d",
                    exercises: [
                        { name: "Shoulder Press Machine", sets: "3x12", youtubeId: "qEwKCR5JCog" },
                        { name: "Lateral Raise", sets: "3x15", youtubeId: "3VcKaXpzqRo" },
                        { name: "Front Raise", sets: "3x12", youtubeId: "gzDsgRsOHsE" },
                        { name: "Reverse Fly Machine", sets: "3x15", youtubeId: "5YK4bgzXDp0" },
                        { name: "Cable Crunch", sets: "3x20", youtubeId: "2fbu8H69Dxg" },
                        { name: "Rowing Machine", sets: "10 min", youtubeId: "ymIDbq9wPrc" }
                    ]
                }
            ]
        },
        manter: {
            frequency: "3-4x per week",
            description: "Balanced approach to maintain fitness and overall health",
            split: [
                {
                    day: "Workout A",
                    focus: "Chest + Triceps",
                    color: "treino-a",
                    exercises: [
                        { name: "Bench Press Machine", sets: "3x12", youtubeId: "xUm0BiZCWlQ" },
                        { name: "Incline Dumbbell Press", sets: "3x12", youtubeId: "8iPEnn-ltC8" },
                        { name: "Pec Deck Fly", sets: "3x15", youtubeId: "Z57CtFmRMxA" },
                        { name: "Tricep Pushdown", sets: "3x12", youtubeId: "2-LAMcpzODU" },
                        { name: "Skull Crushers", sets: "3x12", youtubeId: "d_KZxkY_0cM" },
                        { name: "Dips (assisted)", sets: "3x10", youtubeId: "2z8JmcrW-As" }
                    ]
                },
                {
                    day: "Workout B",
                    focus: "Back + Biceps",
                    color: "treino-b",
                    exercises: [
                        { name: "Lat Pulldown", sets: "3x12", youtubeId: "CAwf7n6Luuc" },
                        { name: "Seated Row", sets: "3x12", youtubeId: "GZbfZ033f74" },
                        { name: "T-Bar Row", sets: "3x12", youtubeId: "j3Igk5nyZE4" },
                        { name: "Straight Arm Pulldown", sets: "3x15", youtubeId: "lueEJGjTuPQ" },
                        { name: "EZ Bar Curl", sets: "3x12", youtubeId: "kwG2ipFRgfo" },
                        { name: "Hammer Curl", sets: "3x12", youtubeId: "zC3nLlEvin4" }
                    ]
                },
                {
                    day: "Workout C",
                    focus: "Legs + Glutes",
                    color: "treino-c",
                    exercises: [
                        { name: "Leg Press", sets: "3x15", youtubeId: "IZxyjW7MPJQ" },
                        { name: "Leg Extension", sets: "3x12", youtubeId: "YyvSfVjQeL0" },
                        { name: "Leg Curl", sets: "3x12", youtubeId: "1Tq3QdYUuHs" },
                        { name: "Goblet Squat", sets: "3x12", youtubeId: "MeIiIdhvXT4" },
                        { name: "Hip Thrust Machine", sets: "3x15", youtubeId: "SEdqd1n0cvg" },
                        { name: "Standing Calf Raise", sets: "4x15", youtubeId: "gwLzBJYoWlI" }
                    ]
                },
                {
                    day: "Workout D",
                    focus: "Shoulders + Abs",
                    color: "treino-d",
                    exercises: [
                        { name: "Shoulder Press Machine", sets: "3x12", youtubeId: "qEwKCR5JCog" },
                        { name: "Lateral Raise", sets: "3x15", youtubeId: "3VcKaXpzqRo" },
                        { name: "Front Raise", sets: "3x12", youtubeId: "gzDsgRsOHsE" },
                        { name: "Reverse Fly", sets: "3x15", youtubeId: "5YK4bgzXDp0" },
                        { name: "Ab Machine", sets: "3x20", youtubeId: "vOz1Lxm4DQU" },
                        { name: "Plank", sets: "3x30s", youtubeId: "ASdvN_XEl_c" }
                    ]
                }
            ]
        },
        ganharMassa: {
            frequency: "4x per week",
            description: "Focus on progressive overload and muscle building fundamentals",
            split: [
                {
                    day: "Workout A",
                    focus: "Chest + Triceps",
                    color: "treino-a",
                    exercises: [
                        { name: "Bench Press (Barbell or Machine)", sets: "4x10", youtubeId: "rT7DgCr-3pg" },
                        { name: "Incline Dumbbell Press", sets: "4x10", youtubeId: "8iPEnn-ltC8" },
                        { name: "Cable Crossover", sets: "3x12", youtubeId: "taI4XduLpTk" },
                        { name: "Dips (assisted if needed)", sets: "3x10", youtubeId: "2z8JmcrW-As" },
                        { name: "Tricep Pushdown (rope)", sets: "4x12", youtubeId: "vB5OHsJ3EME" },
                        { name: "Overhead Tricep Extension", sets: "3x12", youtubeId: "YbX7Wd8jQ-Q" }
                    ]
                },
                {
                    day: "Workout B",
                    focus: "Back + Biceps",
                    color: "treino-b",
                    exercises: [
                        { name: "Lat Pulldown (wide grip)", sets: "4x10", youtubeId: "CAwf7n6Luuc" },
                        { name: "Seated Cable Row", sets: "4x10", youtubeId: "GZbfZ033f74" },
                        { name: "Dumbbell Row", sets: "3x12", youtubeId: "pYcpY20QaE8" },
                        { name: "Straight Arm Pulldown", sets: "3x15", youtubeId: "lueEJGjTuPQ" },
                        { name: "Barbell Curl", sets: "4x10", youtubeId: "kwG2ipFRgfo" },
                        { name: "Incline Dumbbell Curl", sets: "3x12", youtubeId: "soxrZlIl35U" }
                    ]
                },
                {
                    day: "Workout C",
                    focus: "Legs (Quad Focus)",
                    color: "treino-c",
                    exercises: [
                        { name: "Leg Press", sets: "4x12", youtubeId: "IZxyjW7MPJQ" },
                        { name: "Smith Machine Squat", sets: "4x10", youtubeId: "7RZ5qx6f50g" },
                        { name: "Leg Extension", sets: "4x12", youtubeId: "YyvSfVjQeL0" },
                        { name: "Walking Lunges", sets: "3x12 each", youtubeId: "L8fvypPrzzs" },
                        { name: "Seated Calf Raise", sets: "4x15", youtubeId: "JbyjNymZOt0" },
                        { name: "Standing Calf Raise", sets: "4x12", youtubeId: "gwLzBJYoWlI" }
                    ]
                },
                {
                    day: "Workout D",
                    focus: "Shoulders + Hamstrings",
                    color: "treino-d",
                    exercises: [
                        { name: "Dumbbell Shoulder Press", sets: "4x10", youtubeId: "qEwKCR5JCog" },
                        { name: "Lateral Raise", sets: "4x12", youtubeId: "3VcKaXpzqRo" },
                        { name: "Face Pull", sets: "3x15", youtubeId: "rep-qVOkqgk" },
                        { name: "Rear Delt Fly", sets: "3x15", youtubeId: "5YK4bgzXDp0" },
                        { name: "Lying Leg Curl", sets: "4x12", youtubeId: "1Tq3QdYUuHs" },
                        { name: "Romanian Deadlift (dumbbell)", sets: "4x10", youtubeId: "jEy_czb3RKA" }
                    ]
                }
            ]
        }
    },

    intermediario: {
        emagrecer: {
            frequency: "4-5x per week",
            description: "Increased intensity with supersets for maximum fat burning",
            split: [
                {
                    day: "Workout A",
                    focus: "Chest + Triceps",
                    color: "treino-a",
                    exercises: [
                        { name: "Barbell Bench Press", sets: "4x10", youtubeId: "rT7DgCr-3pg" },
                        { name: "Incline Dumbbell Press", sets: "4x10", youtubeId: "8iPEnn-ltC8" },
                        { name: "Cable Fly (low to high)", sets: "3x12", youtubeId: "Iwe6AmxVf7o" },
                        { name: "Push-Ups", sets: "3x15", youtubeId: "IODxDxX7oi4" },
                        { name: "Rope Pushdown", sets: "4x12", youtubeId: "vB5OHsJ3EME" },
                        { name: "Skull Crushers", sets: "3x12", youtubeId: "d_KZxkY_0cM" },
                        { name: "Diamond Push-Ups", sets: "3x12", youtubeId: "J0DnG1_S92I" }
                    ]
                },
                {
                    day: "Workout B",
                    focus: "Back + Biceps",
                    color: "treino-b",
                    exercises: [
                        { name: "Pull-Ups (or Assisted)", sets: "4x8-10", youtubeId: "eGo4IYlbE5g" },
                        { name: "Bent Over Barbell Row", sets: "4x10", youtubeId: "FWJR5Ve8bnQ" },
                        { name: "Wide Grip Lat Pulldown", sets: "3x12", youtubeId: "CAwf7n6Luuc" },
                        { name: "Chest Supported Row", sets: "3x12", youtubeId: "H75im9fAUMc" },
                        { name: "Straight Arm Pulldown", sets: "3x15", youtubeId: "lueEJGjTuPQ" },
                        { name: "EZ Bar Curl", sets: "4x10", youtubeId: "kwG2ipFRgfo" },
                        { name: "Hammer Curl", sets: "3x12", youtubeId: "zC3nLlEvin4" },
                        { name: "Preacher Curl", sets: "3x12", youtubeId: "fIWP-FRFNU0" }
                    ]
                },
                {
                    day: "Workout C",
                    focus: "Legs (Quad Focus)",
                    color: "treino-c",
                    exercises: [
                        { name: "Barbell Squat", sets: "4x10", youtubeId: "bEv6CCg2BC8" },
                        { name: "Leg Press", sets: "4x12", youtubeId: "IZxyjW7MPJQ" },
                        { name: "Hack Squat", sets: "3x12", youtubeId: "0tn5K9NlCfo" },
                        { name: "Leg Extension", sets: "4x12", youtubeId: "YyvSfVjQeL0" },
                        { name: "Walking Lunges", sets: "3x12 each", youtubeId: "L8fvypPrzzs" },
                        { name: "Standing Calf Raise", sets: "4x15", youtubeId: "gwLzBJYoWlI" },
                        { name: "Seated Calf Raise", sets: "4x20", youtubeId: "JbyjNymZOt0" }
                    ]
                },
                {
                    day: "Workout D",
                    focus: "Shoulders + Hamstrings",
                    color: "treino-d",
                    exercises: [
                        { name: "Dumbbell Shoulder Press", sets: "4x10", youtubeId: "qEwKCR5JCog" },
                        { name: "Lateral Raise", sets: "4x12", youtubeId: "3VcKaXpzqRo" },
                        { name: "Cable Front Raise", sets: "3x12", youtubeId: "sOcYlBI85hc" },
                        { name: "Upright Row", sets: "3x12", youtubeId: "amCU-ziHITM" },
                        { name: "Reverse Fly Machine", sets: "4x15", youtubeId: "5YK4bgzXDp0" },
                        { name: "Lying Leg Curl", sets: "4x12", youtubeId: "1Tq3QdYUuHs" },
                        { name: "Romanian Deadlift", sets: "4x10", youtubeId: "jEy_czb3RKA" },
                        { name: "Seated Leg Curl", sets: "3x12", youtubeId: "Orxowest56U" }
                    ]
                }
            ]
        },
        manter: {
            frequency: "4-5x per week",
            description: "Well-rounded program for maintaining strength and physique",
            split: [
                {
                    day: "Workout A",
                    focus: "Chest + Triceps",
                    color: "treino-a",
                    exercises: [
                        { name: "Barbell Bench Press", sets: "4x10", youtubeId: "rT7DgCr-3pg" },
                        { name: "Incline Dumbbell Press", sets: "4x10", youtubeId: "8iPEnn-ltC8" },
                        { name: "Cable Crossover", sets: "3x12", youtubeId: "taI4XduLpTk" },
                        { name: "Dumbbell Fly", sets: "3x12", youtubeId: "eozdVDA78K0" },
                        { name: "Rope Pushdown", sets: "4x12", youtubeId: "vB5OHsJ3EME" },
                        { name: "Close Grip Bench Press", sets: "3x10", youtubeId: "nEF0bv2FW94" },
                        { name: "Tricep Dips", sets: "3x12", youtubeId: "2z8JmcrW-As" }
                    ]
                },
                {
                    day: "Workout B",
                    focus: "Back + Biceps",
                    color: "treino-b",
                    exercises: [
                        { name: "Deadlift", sets: "4x8", youtubeId: "op9kVnSso6Q" },
                        { name: "Barbell Row", sets: "4x10", youtubeId: "FWJR5Ve8bnQ" },
                        { name: "Lat Pulldown", sets: "4x12", youtubeId: "CAwf7n6Luuc" },
                        { name: "Cable Row", sets: "3x12", youtubeId: "GZbfZ033f74" },
                        { name: "Face Pull", sets: "3x15", youtubeId: "rep-qVOkqgk" },
                        { name: "Barbell Curl", sets: "4x10", youtubeId: "kwG2ipFRgfo" },
                        { name: "Incline Dumbbell Curl", sets: "3x12", youtubeId: "soxrZlIl35U" }
                    ]
                },
                {
                    day: "Workout C",
                    focus: "Legs Complete",
                    color: "treino-c",
                    exercises: [
                        { name: "Barbell Squat", sets: "4x10", youtubeId: "bEv6CCg2BC8" },
                        { name: "Romanian Deadlift", sets: "4x10", youtubeId: "jEy_czb3RKA" },
                        { name: "Leg Press", sets: "4x12", youtubeId: "IZxyjW7MPJQ" },
                        { name: "Leg Extension", sets: "4x12", youtubeId: "YyvSfVjQeL0" },
                        { name: "Leg Curl", sets: "4x12", youtubeId: "1Tq3QdYUuHs" },
                        { name: "Calf Raise", sets: "5x15", youtubeId: "gwLzBJYoWlI" }
                    ]
                },
                {
                    day: "Workout D",
                    focus: "Shoulders + Arms",
                    color: "treino-d",
                    exercises: [
                        { name: "Overhead Press", sets: "4x10", youtubeId: "2yjwXTZQDDI" },
                        { name: "Lateral Raise", sets: "4x12", youtubeId: "3VcKaXpzqRo" },
                        { name: "Rear Delt Fly", sets: "4x15", youtubeId: "5YK4bgzXDp0" },
                        { name: "Barbell Curl", sets: "3x12", youtubeId: "kwG2ipFRgfo" },
                        { name: "Tricep Pushdown", sets: "3x12", youtubeId: "2-LAMcpzODU" },
                        { name: "Hammer Curl", sets: "3x12", youtubeId: "zC3nLlEvin4" },
                        { name: "Overhead Extension", sets: "3x12", youtubeId: "YbX7Wd8jQ-Q" }
                    ]
                }
            ]
        },
        ganharMassa: {
            frequency: "5x per week",
            description: "High volume training for maximum muscle growth",
            split: [
                {
                    day: "Workout A",
                    focus: "Chest + Triceps",
                    color: "treino-a",
                    exercises: [
                        { name: "Barbell Bench Press", sets: "5x8", youtubeId: "rT7DgCr-3pg" },
                        { name: "Incline Dumbbell Press", sets: "4x10", youtubeId: "8iPEnn-ltC8" },
                        { name: "Decline Press", sets: "4x10", youtubeId: "LfyQBUKR8SE" },
                        { name: "Cable Fly", sets: "4x12", youtubeId: "Iwe6AmxVf7o" },
                        { name: "Dips (weighted)", sets: "4x10", youtubeId: "2z8JmcrW-As" },
                        { name: "Rope Pushdown", sets: "4x12", youtubeId: "vB5OHsJ3EME" },
                        { name: "Skull Crushers", sets: "3x12", youtubeId: "d_KZxkY_0cM" },
                        { name: "Overhead Extension", sets: "3x12", youtubeId: "YbX7Wd8jQ-Q" }
                    ]
                },
                {
                    day: "Workout B",
                    focus: "Back + Biceps",
                    color: "treino-b",
                    exercises: [
                        { name: "Deadlift", sets: "5x5", youtubeId: "op9kVnSso6Q" },
                        { name: "Weighted Pull-Ups", sets: "4x8", youtubeId: "eGo4IYlbE5g" },
                        { name: "Barbell Row", sets: "4x10", youtubeId: "FWJR5Ve8bnQ" },
                        { name: "Lat Pulldown", sets: "4x12", youtubeId: "CAwf7n6Luuc" },
                        { name: "Seated Cable Row", sets: "4x12", youtubeId: "GZbfZ033f74" },
                        { name: "Barbell Curl", sets: "4x10", youtubeId: "kwG2ipFRgfo" },
                        { name: "Preacher Curl", sets: "3x12", youtubeId: "fIWP-FRFNU0" },
                        { name: "Concentration Curl", sets: "3x12", youtubeId: "0AUGkch3tzc" }
                    ]
                },
                {
                    day: "Workout C",
                    focus: "Legs (Quad Focus)",
                    color: "treino-c",
                    exercises: [
                        { name: "Barbell Squat", sets: "5x8", youtubeId: "bEv6CCg2BC8" },
                        { name: "Leg Press", sets: "4x12", youtubeId: "IZxyjW7MPJQ" },
                        { name: "Hack Squat", sets: "4x10", youtubeId: "0tn5K9NlCfo" },
                        { name: "Leg Extension", sets: "4x12", youtubeId: "YyvSfVjQeL0" },
                        { name: "Bulgarian Split Squat", sets: "3x10 each", youtubeId: "2C-uNgKwPLE" },
                        { name: "Standing Calf Raise", sets: "5x15", youtubeId: "gwLzBJYoWlI" },
                        { name: "Seated Calf Raise", sets: "4x20", youtubeId: "JbyjNymZOt0" }
                    ]
                },
                {
                    day: "Workout D",
                    focus: "Shoulders + Rear Delts",
                    color: "treino-d",
                    exercises: [
                        { name: "Overhead Press", sets: "5x8", youtubeId: "2yjwXTZQDDI" },
                        { name: "Arnold Press", sets: "4x10", youtubeId: "6Z15_WdXmVw" },
                        { name: "Lateral Raise", sets: "5x12", youtubeId: "3VcKaXpzqRo" },
                        { name: "Cable Front Raise", sets: "4x12", youtubeId: "sOcYlBI85hc" },
                        { name: "Face Pull", sets: "4x15", youtubeId: "rep-qVOkqgk" },
                        { name: "Reverse Fly", sets: "4x15", youtubeId: "5YK4bgzXDp0" },
                        { name: "Shrugs", sets: "4x12", youtubeId: "cJRVVxmytaM" }
                    ]
                }
            ]
        }
    },

    avancado: {
        emagrecer: {
            frequency: "5-6x per week",
            description: "High intensity training with advanced techniques for cutting",
            split: [
                {
                    day: "Workout A",
                    focus: "Chest",
                    color: "treino-a",
                    exercises: [
                        { name: "Barbell Bench Press", sets: "5x8", youtubeId: "rT7DgCr-3pg" },
                        { name: "Incline Dumbbell Press", sets: "4x10", youtubeId: "8iPEnn-ltC8" },
                        { name: "Decline Press", sets: "4x10", youtubeId: "LfyQBUKR8SE" },
                        { name: "Cable Fly (high to low)", sets: "4x12", youtubeId: "Iwe6AmxVf7o" },
                        { name: "Cable Fly (low to high)", sets: "4x12", youtubeId: "Iwe6AmxVf7o" },
                        { name: "Pec Deck (drop set)", sets: "3x15", youtubeId: "Z57CtFmRMxA" },
                        { name: "Push-Ups to failure", sets: "3 sets", youtubeId: "IODxDxX7oi4" }
                    ]
                },
                {
                    day: "Workout B",
                    focus: "Back",
                    color: "treino-b",
                    exercises: [
                        { name: "Weighted Pull-Ups", sets: "4x max", youtubeId: "eGo4IYlbE5g" },
                        { name: "Barbell Row (overhand)", sets: "4x10", youtubeId: "FWJR5Ve8bnQ" },
                        { name: "Barbell Row (underhand)", sets: "4x10", youtubeId: "FWJR5Ve8bnQ" },
                        { name: "Wide Grip Lat Pulldown", sets: "4x12", youtubeId: "CAwf7n6Luuc" },
                        { name: "Chest Supported Row", sets: "4x10", youtubeId: "H75im9fAUMc" },
                        { name: "Straight Arm Pulldown", sets: "4x12", youtubeId: "lueEJGjTuPQ" },
                        { name: "Single Arm Row", sets: "3x12", youtubeId: "pYcpY20QaE8" },
                        { name: "Hyperextension", sets: "3x15", youtubeId: "ph3pddpKzzw" }
                    ]
                },
                {
                    day: "Workout C",
                    focus: "Legs",
                    color: "treino-c",
                    exercises: [
                        { name: "Barbell Squat", sets: "5x8", youtubeId: "bEv6CCg2BC8" },
                        { name: "Leg Press", sets: "4x12", youtubeId: "IZxyjW7MPJQ" },
                        { name: "Hack Squat", sets: "4x10", youtubeId: "0tn5K9NlCfo" },
                        { name: "Leg Extension (drop set)", sets: "4x12", youtubeId: "YyvSfVjQeL0" },
                        { name: "Romanian Deadlift", sets: "4x10", youtubeId: "jEy_czb3RKA" },
                        { name: "Lying Leg Curl", sets: "4x12", youtubeId: "1Tq3QdYUuHs" },
                        { name: "Bulgarian Split Squat", sets: "3x12", youtubeId: "2C-uNgKwPLE" },
                        { name: "Standing Calf Raise", sets: "5x15", youtubeId: "gwLzBJYoWlI" },
                        { name: "Seated Calf Raise", sets: "4x20", youtubeId: "JbyjNymZOt0" }
                    ]
                },
                {
                    day: "Workout D",
                    focus: "Shoulders + Arms",
                    color: "treino-d",
                    exercises: [
                        { name: "Military Press", sets: "4x10", youtubeId: "2yjwXTZQDDI" },
                        { name: "Arnold Press", sets: "4x10", youtubeId: "6Z15_WdXmVw" },
                        { name: "Lateral Raise", sets: "5x12", youtubeId: "3VcKaXpzqRo" },
                        { name: "Front Raise", sets: "4x12", youtubeId: "gzDsgRsOHsE" },
                        { name: "Face Pull", sets: "4x15", youtubeId: "rep-qVOkqgk" },
                        { name: "Barbell Curl", sets: "4x10", youtubeId: "kwG2ipFRgfo" },
                        { name: "Hammer Curl", sets: "3x12", youtubeId: "zC3nLlEvin4" },
                        { name: "Rope Pushdown", sets: "4x12", youtubeId: "vB5OHsJ3EME" },
                        { name: "Skull Crushers", sets: "3x12", youtubeId: "d_KZxkY_0cM" },
                        { name: "Parallel Dips", sets: "3x max", youtubeId: "2z8JmcrW-As" }
                    ]
                }
            ]
        },
        manter: {
            frequency: "5x per week",
            description: "Advanced program for maintaining peak performance",
            split: [
                {
                    day: "Workout A",
                    focus: "Chest + Triceps",
                    color: "treino-a",
                    exercises: [
                        { name: "Barbell Bench Press", sets: "5x6-8", youtubeId: "rT7DgCr-3pg" },
                        { name: "Incline Dumbbell Press", sets: "4x10", youtubeId: "8iPEnn-ltC8" },
                        { name: "Cable Fly", sets: "4x12", youtubeId: "Iwe6AmxVf7o" },
                        { name: "Weighted Dips", sets: "4x10", youtubeId: "2z8JmcrW-As" },
                        { name: "Close Grip Bench", sets: "4x10", youtubeId: "nEF0bv2FW94" },
                        { name: "Rope Pushdown", sets: "4x12", youtubeId: "vB5OHsJ3EME" },
                        { name: "Overhead Extension", sets: "3x12", youtubeId: "YbX7Wd8jQ-Q" }
                    ]
                },
                {
                    day: "Workout B",
                    focus: "Back + Biceps",
                    color: "treino-b",
                    exercises: [
                        { name: "Deadlift", sets: "5x5", youtubeId: "op9kVnSso6Q" },
                        { name: "Weighted Pull-Ups", sets: "4x8", youtubeId: "eGo4IYlbE5g" },
                        { name: "Barbell Row", sets: "4x10", youtubeId: "FWJR5Ve8bnQ" },
                        { name: "T-Bar Row", sets: "4x10", youtubeId: "j3Igk5nyZE4" },
                        { name: "Lat Pulldown", sets: "4x12", youtubeId: "CAwf7n6Luuc" },
                        { name: "Barbell Curl", sets: "4x10", youtubeId: "kwG2ipFRgfo" },
                        { name: "Preacher Curl", sets: "3x12", youtubeId: "fIWP-FRFNU0" },
                        { name: "Hammer Curl", sets: "3x12", youtubeId: "zC3nLlEvin4" }
                    ]
                },
                {
                    day: "Workout C",
                    focus: "Legs",
                    color: "treino-c",
                    exercises: [
                        { name: "Barbell Squat", sets: "5x6-8", youtubeId: "bEv6CCg2BC8" },
                        { name: "Romanian Deadlift", sets: "4x10", youtubeId: "jEy_czb3RKA" },
                        { name: "Leg Press", sets: "4x12", youtubeId: "IZxyjW7MPJQ" },
                        { name: "Leg Extension", sets: "4x12", youtubeId: "YyvSfVjQeL0" },
                        { name: "Lying Leg Curl", sets: "4x12", youtubeId: "1Tq3QdYUuHs" },
                        { name: "Walking Lunges", sets: "3x12 each", youtubeId: "L8fvypPrzzs" },
                        { name: "Calf Raise", sets: "6x15", youtubeId: "gwLzBJYoWlI" }
                    ]
                },
                {
                    day: "Workout D",
                    focus: "Shoulders",
                    color: "treino-d",
                    exercises: [
                        { name: "Overhead Press", sets: "5x6-8", youtubeId: "2yjwXTZQDDI" },
                        { name: "Arnold Press", sets: "4x10", youtubeId: "6Z15_WdXmVw" },
                        { name: "Lateral Raise", sets: "5x12", youtubeId: "3VcKaXpzqRo" },
                        { name: "Cable Front Raise", sets: "4x12", youtubeId: "sOcYlBI85hc" },
                        { name: "Face Pull", sets: "4x15", youtubeId: "rep-qVOkqgk" },
                        { name: "Reverse Fly", sets: "4x15", youtubeId: "5YK4bgzXDp0" },
                        { name: "Shrugs", sets: "4x12", youtubeId: "cJRVVxmytaM" }
                    ]
                }
            ]
        },
        ganharMassa: {
            frequency: "6x per week",
            description: "Maximum volume and intensity for serious muscle building",
            split: [
                {
                    day: "Workout A",
                    focus: "Chest",
                    color: "treino-a",
                    exercises: [
                        { name: "Barbell Bench Press", sets: "5x5", youtubeId: "rT7DgCr-3pg" },
                        { name: "Incline Barbell Press", sets: "4x8", youtubeId: "DbFgADa2PL8" },
                        { name: "Decline Dumbbell Press", sets: "4x10", youtubeId: "LfyQBUKR8SE" },
                        { name: "Dumbbell Fly", sets: "4x12", youtubeId: "eozdVDA78K0" },
                        { name: "Cable Crossover (high)", sets: "4x12", youtubeId: "taI4XduLpTk" },
                        { name: "Cable Crossover (low)", sets: "4x12", youtubeId: "taI4XduLpTk" },
                        { name: "Pec Deck (drop set)", sets: "3x15", youtubeId: "Z57CtFmRMxA" }
                    ]
                },
                {
                    day: "Workout B",
                    focus: "Back",
                    color: "treino-b",
                    exercises: [
                        { name: "Deadlift", sets: "5x5", youtubeId: "op9kVnSso6Q" },
                        { name: "Weighted Pull-Ups", sets: "4x8", youtubeId: "eGo4IYlbE5g" },
                        { name: "Barbell Row (overhand)", sets: "4x10", youtubeId: "FWJR5Ve8bnQ" },
                        { name: "T-Bar Row", sets: "4x10", youtubeId: "j3Igk5nyZE4" },
                        { name: "Wide Lat Pulldown", sets: "4x12", youtubeId: "CAwf7n6Luuc" },
                        { name: "Seated Cable Row", sets: "4x12", youtubeId: "GZbfZ033f74" },
                        { name: "Straight Arm Pulldown", sets: "4x12", youtubeId: "lueEJGjTuPQ" },
                        { name: "Hyperextension", sets: "3x15", youtubeId: "ph3pddpKzzw" }
                    ]
                },
                {
                    day: "Workout C",
                    focus: "Legs",
                    color: "treino-c",
                    exercises: [
                        { name: "Barbell Squat", sets: "5x5", youtubeId: "bEv6CCg2BC8" },
                        { name: "Front Squat", sets: "4x8", youtubeId: "m4ytaCJZpl0" },
                        { name: "Leg Press", sets: "4x12", youtubeId: "IZxyjW7MPJQ" },
                        { name: "Leg Extension", sets: "4x15", youtubeId: "YyvSfVjQeL0" },
                        { name: "Romanian Deadlift", sets: "4x10", youtubeId: "jEy_czb3RKA" },
                        { name: "Lying Leg Curl", sets: "4x12", youtubeId: "1Tq3QdYUuHs" },
                        { name: "Bulgarian Split Squat", sets: "3x10 each", youtubeId: "2C-uNgKwPLE" },
                        { name: "Standing Calf Raise", sets: "6x15", youtubeId: "gwLzBJYoWlI" },
                        { name: "Seated Calf Raise", sets: "4x20", youtubeId: "JbyjNymZOt0" }
                    ]
                },
                {
                    day: "Workout D",
                    focus: "Shoulders + Arms",
                    color: "treino-d",
                    exercises: [
                        { name: "Military Press", sets: "5x6", youtubeId: "2yjwXTZQDDI" },
                        { name: "Arnold Press", sets: "4x10", youtubeId: "6Z15_WdXmVw" },
                        { name: "Lateral Raise", sets: "5x12", youtubeId: "3VcKaXpzqRo" },
                        { name: "Face Pull", sets: "4x15", youtubeId: "rep-qVOkqgk" },
                        { name: "Shrugs", sets: "4x12", youtubeId: "cJRVVxmytaM" },
                        { name: "Barbell Curl", sets: "4x10", youtubeId: "kwG2ipFRgfo" },
                        { name: "Incline Dumbbell Curl", sets: "3x12", youtubeId: "soxrZlIl35U" },
                        { name: "Close Grip Bench", sets: "4x10", youtubeId: "nEF0bv2FW94" },
                        { name: "Skull Crushers", sets: "3x12", youtubeId: "d_KZxkY_0cM" },
                        { name: "Weighted Dips", sets: "3x max", youtubeId: "2z8JmcrW-As" }
                    ]
                }
            ]
        }
    }
};

// Tips by goal (in English)
const TIPS = {
    emagrecer: [
        "Maintain a caloric deficit of 300-500 kcal below your TDEE",
        "Prioritize protein in every meal to preserve muscle mass",
        "Drink at least 8-10 glasses of water daily",
        "Do cardio 3-4x per week (20-30 min) for extra calorie burn",
        "Sleep 7-8 hours per night to optimize fat burning hormones",
        "Track your food intake to ensure you stay in a deficit",
        "Eat more fiber-rich vegetables to stay full longer"
    ],
    manter: [
        "Stay consistent with your eating schedule",
        "Vary your food choices to get all necessary nutrients",
        "Strength train 3-4x per week to maintain muscle",
        "Allow yourself flexible meals in moderation",
        "Monitor your weight weekly and adjust if needed",
        "Focus on sustainable habits, not quick fixes",
        "Balance cardio and strength training equally"
    ],
    ganharMassa: [
        "Maintain a caloric surplus of 300-500 kcal above your TDEE",
        "Consume 0.8-1g of protein per pound of body weight daily",
        "Never skip meals - consistency is key for growth",
        "Rest muscle groups 48-72h between training sessions",
        "Prioritize sleep - muscle grows during recovery",
        "Progressive overload: gradually increase weights",
        "Eat complex carbs before and after training"
    ]
};

// Supplements organized by goal
const SUPPLEMENTS = {
    emagrecer: [
        {
            id: "fat-burner",
            name: "Thermogenic Fat Burner",
            icon: "🔥",
            description: "Increases metabolism and helps burn stored fat. Contains caffeine and green tea extract.",
            benefits: ["Accelerates fat burning", "Boosts energy", "Reduces appetite"],
            timing: "Take 30 minutes before workout",
            link: "https://www.amazon.com/s?k=thermogenic+fat+burner&tag=nutraapp-20"
        },
        {
            id: "cla",
            name: "CLA (Conjugated Linoleic Acid)",
            icon: "💊",
            description: "Helps reduce body fat while preserving lean muscle mass.",
            benefits: ["Reduces body fat", "Preserves muscle", "Improves body composition"],
            timing: "Take with meals",
            link: "https://www.amazon.com/s?k=cla+supplement&tag=nutraapp-20"
        },
        {
            id: "l-carnitine",
            name: "L-Carnitine",
            icon: "⚡",
            description: "Transports fatty acids to cells for energy production.",
            benefits: ["Enhances fat oxidation", "Increases endurance", "Speeds recovery"],
            timing: "Take 30-60 minutes before cardio",
            link: "https://www.amazon.com/s?k=l-carnitine&tag=nutraapp-20"
        }
    ],
    manter: [
        {
            id: "multivitamin",
            name: "Daily Multivitamin",
            icon: "💎",
            description: "Complete vitamin and mineral formula to fill nutritional gaps.",
            benefits: ["Fills nutritional gaps", "Supports immunity", "Promotes energy"],
            timing: "Take with breakfast",
            link: "https://www.amazon.com/s?k=daily+multivitamin&tag=nutraapp-20"
        },
        {
            id: "omega3",
            name: "Omega-3 Fish Oil",
            icon: "🐟",
            description: "Essential fatty acids for heart, brain, and joint health.",
            benefits: ["Heart health", "Brain function", "Joint support"],
            timing: "Take with meals",
            link: "https://www.amazon.com/s?k=omega+3+fish+oil&tag=nutraapp-20"
        },
        {
            id: "vitamin-d",
            name: "Vitamin D3",
            icon: "☀️",
            description: "Supports bone health, immune function, and mood.",
            benefits: ["Bone strength", "Immune support", "Mood enhancement"],
            timing: "Take in the morning with fat",
            link: "https://www.amazon.com/s?k=vitamin+d3&tag=nutraapp-20"
        }
    ],
    ganharMassa: [
        {
            id: "whey-protein",
            name: "Whey Protein Isolate",
            icon: "🥛",
            description: "Fast-absorbing protein for muscle recovery. 25g protein per serving.",
            benefits: ["Muscle growth", "Fast absorption", "Post-workout recovery"],
            timing: "Within 30 minutes post-workout",
            link: "https://www.amazon.com/s?k=whey+protein+isolate&tag=nutraapp-20"
        },
        {
            id: "creatine",
            name: "Creatine Monohydrate",
            icon: "💪",
            description: "Most researched supplement for strength gains. Increases ATP production.",
            benefits: ["Increases strength", "Muscle volume", "Enhanced performance"],
            timing: "5g daily, any time",
            link: "https://www.amazon.com/s?k=creatine+monohydrate&tag=nutraapp-20"
        },
        {
            id: "mass-gainer",
            name: "Mass Gainer Protein",
            icon: "🏋️",
            description: "High-calorie shake for hard gainers. 1000+ calories per serving.",
            benefits: ["Caloric surplus", "Muscle building", "Weight gain"],
            timing: "Between meals or post-workout",
            link: "https://www.amazon.com/s?k=mass+gainer+protein&tag=nutraapp-20"
        },
        {
            id: "bcaa",
            name: "BCAA (Branched Chain Amino Acids)",
            icon: "🧬",
            description: "Essential amino acids to prevent muscle breakdown.",
            benefits: ["Prevents catabolism", "Reduces soreness", "Supports recovery"],
            timing: "During or after workout",
            link: "https://www.amazon.com/s?k=bcaa+supplement&tag=nutraapp-20"
        }
    ]
};
