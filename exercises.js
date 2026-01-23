// ============================================
// ANIMATED EXERCISE SVG LIBRARY
// Each exercise has an animated SVG showing the movement and muscle activation
// ============================================

const EXERCISE_ANIMATIONS = {
    // ============================================
    // CHEST EXERCISES
    // ============================================
    "Chest Press Machine": {
        muscles: ["peitoral", "triceps", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <!-- Body base -->
            <defs>
                <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <!-- Bench -->
            <rect x="40" y="200" width="120" height="15" rx="3" fill="#374151"/>
            <rect x="30" y="215" width="10" height="60" fill="#4b5563"/>
            <rect x="160" y="215" width="10" height="60" fill="#4b5563"/>

            <!-- Torso lying down -->
            <ellipse cx="100" cy="160" rx="35" ry="45" fill="url(#skinGrad)" class="torso"/>

            <!-- Pectoral muscles (highlighted) -->
            <ellipse cx="85" cy="145" rx="18" ry="12" class="muscle-pec muscle-active" fill="url(#muscleActive)" filter="url(#glow)"/>
            <ellipse cx="115" cy="145" rx="18" ry="12" class="muscle-pec muscle-active" fill="url(#muscleActive)" filter="url(#glow)"/>

            <!-- Head -->
            <circle cx="100" cy="95" r="22" fill="url(#skinGrad)"/>
            <circle cx="93" cy="92" r="3" fill="#374151"/>
            <circle cx="107" cy="92" r="3" fill="#374151"/>
            <path d="M95 102 Q100 107 105 102" stroke="#374151" stroke-width="2" fill="none"/>

            <!-- Arms with animation -->
            <g class="arm-left">
                <ellipse cx="55" cy="150" rx="12" ry="8" fill="url(#skinGrad)" class="shoulder"/>
                <rect x="35" y="130" width="25" height="12" rx="6" fill="url(#skinGrad)" class="upper-arm" transform="rotate(-20 47 136)"/>
                <rect x="20" y="115" width="22" height="10" rx="5" fill="url(#skinGrad)" class="forearm"/>
                <!-- Tricep highlight -->
                <ellipse cx="40" cy="138" rx="8" ry="5" class="muscle-tricep muscle-active" fill="url(#muscleActive)" opacity="0.7"/>
            </g>

            <g class="arm-right">
                <ellipse cx="145" cy="150" rx="12" ry="8" fill="url(#skinGrad)" class="shoulder"/>
                <rect x="140" y="130" width="25" height="12" rx="6" fill="url(#skinGrad)" class="upper-arm" transform="rotate(20 153 136)"/>
                <rect x="158" y="115" width="22" height="10" rx="5" fill="url(#skinGrad)" class="forearm"/>
                <!-- Tricep highlight -->
                <ellipse cx="160" cy="138" rx="8" ry="5" class="muscle-tricep muscle-active" fill="url(#muscleActive)" opacity="0.7"/>
            </g>

            <!-- Weights/Machine handles -->
            <rect x="10" y="110" width="15" height="20" rx="3" fill="#6366f1" class="weight-left"/>
            <rect x="175" y="110" width="15" height="20" rx="3" fill="#6366f1" class="weight-right"/>

            <!-- Legs -->
            <ellipse cx="85" cy="210" rx="12" ry="8" fill="url(#skinGrad)"/>
            <ellipse cx="115" cy="210" rx="12" ry="8" fill="url(#skinGrad)"/>
            <rect x="75" y="218" width="15" height="35" rx="5" fill="url(#skinGrad)"/>
            <rect x="110" y="218" width="15" height="35" rx="5" fill="url(#skinGrad)"/>
        </svg>
        `,
        animation: "chest-press"
    },

    "Barbell Bench Press": {
        muscles: ["peitoral", "triceps", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActive2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
                <filter id="glow2">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>

            <!-- Bench -->
            <rect x="40" y="200" width="120" height="15" rx="3" fill="#374151"/>
            <rect x="30" y="215" width="10" height="60" fill="#4b5563"/>
            <rect x="160" y="215" width="10" height="60" fill="#4b5563"/>

            <!-- Torso -->
            <ellipse cx="100" cy="160" rx="35" ry="45" fill="url(#skinGrad2)"/>

            <!-- Pectorals -->
            <ellipse cx="85" cy="145" rx="18" ry="12" class="muscle-active" fill="url(#muscleActive2)" filter="url(#glow2)"/>
            <ellipse cx="115" cy="145" rx="18" ry="12" class="muscle-active" fill="url(#muscleActive2)" filter="url(#glow2)"/>

            <!-- Head -->
            <circle cx="100" cy="95" r="22" fill="url(#skinGrad2)"/>
            <circle cx="93" cy="92" r="3" fill="#374151"/>
            <circle cx="107" cy="92" r="3" fill="#374151"/>

            <!-- Barbell -->
            <g class="barbell-group">
                <rect x="5" y="118" width="190" height="6" rx="3" fill="#9ca3af"/>
                <rect x="5" y="110" width="20" height="22" rx="3" fill="#374151"/>
                <rect x="175" y="110" width="20" height="22" rx="3" fill="#374151"/>
            </g>

            <!-- Arms holding barbell -->
            <g class="arms-bench">
                <rect x="45" y="125" width="25" height="10" rx="5" fill="url(#skinGrad2)" transform="rotate(-15 57 130)"/>
                <rect x="130" y="125" width="25" height="10" rx="5" fill="url(#skinGrad2)" transform="rotate(15 143 130)"/>
                <!-- Hands -->
                <circle cx="40" cy="121" r="8" fill="url(#skinGrad2)"/>
                <circle cx="160" cy="121" r="8" fill="url(#skinGrad2)"/>
            </g>

            <!-- Legs -->
            <rect x="75" y="205" width="15" height="45" rx="5" fill="url(#skinGrad2)"/>
            <rect x="110" y="205" width="15" height="45" rx="5" fill="url(#skinGrad2)"/>
        </svg>
        `,
        animation: "bench-press"
    },

    "Incline Dumbbell Press": {
        muscles: ["peitoral-superior", "deltoides-anterior", "triceps"],
        primaryMuscle: "peitoral-superior",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActive3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Incline Bench -->
            <polygon points="50,220 150,220 160,140 40,140" fill="#374151"/>
            <rect x="30" y="220" width="140" height="10" rx="3" fill="#4b5563"/>

            <!-- Torso on incline -->
            <ellipse cx="100" cy="175" rx="32" ry="40" fill="url(#skinGrad3)" transform="rotate(-15 100 175)"/>

            <!-- Upper pectorals highlighted -->
            <ellipse cx="82" cy="155" rx="15" ry="10" class="muscle-active" fill="url(#muscleActive3)" transform="rotate(-15 82 155)">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="118" cy="155" rx="15" ry="10" class="muscle-active" fill="url(#muscleActive3)" transform="rotate(-15 118 155)">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Head -->
            <circle cx="100" cy="115" r="20" fill="url(#skinGrad3)"/>
            <circle cx="94" cy="112" r="3" fill="#374151"/>
            <circle cx="106" cy="112" r="3" fill="#374151"/>

            <!-- Arms with dumbbells -->
            <g class="incline-arms">
                <rect x="40" y="140" width="22" height="10" rx="5" fill="url(#skinGrad3)" class="left-arm"/>
                <rect x="138" y="140" width="22" height="10" rx="5" fill="url(#skinGrad3)" class="right-arm"/>
                <!-- Dumbbells -->
                <rect x="25" y="135" width="20" height="20" rx="4" fill="#6366f1"/>
                <rect x="155" y="135" width="20" height="20" rx="4" fill="#6366f1"/>
            </g>

            <!-- Legs -->
            <rect x="75" y="220" width="15" height="40" rx="5" fill="url(#skinGrad3)"/>
            <rect x="110" y="220" width="15" height="40" rx="5" fill="url(#skinGrad3)"/>
        </svg>
        `,
        animation: "incline-press"
    },

    "Cable Fly": {
        muscles: ["peitoral", "deltoides-anterior"],
        primaryMuscle: "peitoral",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradFly" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveFly" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Cable machine posts -->
            <rect x="5" y="50" width="10" height="200" fill="#4b5563"/>
            <rect x="185" y="50" width="10" height="200" fill="#4b5563"/>

            <!-- Cables -->
            <line x1="10" y1="80" x2="50" y2="140" stroke="#9ca3af" stroke-width="3" class="cable-left"/>
            <line x1="190" y1="80" x2="150" y2="140" stroke="#9ca3af" stroke-width="3" class="cable-right"/>

            <!-- Standing figure -->
            <!-- Legs -->
            <rect x="80" y="220" width="18" height="60" rx="6" fill="url(#skinGradFly)"/>
            <rect x="102" y="220" width="18" height="60" rx="6" fill="url(#skinGradFly)"/>

            <!-- Torso -->
            <ellipse cx="100" cy="175" rx="30" ry="50" fill="url(#skinGradFly)"/>

            <!-- Pectorals highlighted -->
            <ellipse cx="85" cy="155" rx="16" ry="12" class="muscle-active" fill="url(#muscleActiveFly)">
                <animate attributeName="rx" values="16;18;16" dur="1.5s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="115" cy="155" rx="16" ry="12" class="muscle-active" fill="url(#muscleActiveFly)">
                <animate attributeName="rx" values="16;18;16" dur="1.5s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Head -->
            <circle cx="100" cy="105" r="22" fill="url(#skinGradFly)"/>
            <circle cx="93" cy="102" r="3" fill="#374151"/>
            <circle cx="107" cy="102" r="3" fill="#374151"/>

            <!-- Arms extended -->
            <g class="fly-arms">
                <rect x="35" y="135" width="35" height="12" rx="6" fill="url(#skinGradFly)" class="arm-left"/>
                <rect x="130" y="135" width="35" height="12" rx="6" fill="url(#skinGradFly)" class="arm-right"/>
                <!-- Handles -->
                <circle cx="45" cy="141" r="8" fill="#6366f1"/>
                <circle cx="155" cy="141" r="8" fill="#6366f1"/>
            </g>
        </svg>
        `,
        animation: "cable-fly"
    },

    // ============================================
    // BACK EXERCISES
    // ============================================
    "Lat Pulldown": {
        muscles: ["latissimo", "biceps", "romboides"],
        primaryMuscle: "latissimo",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradLat" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveLat" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Machine frame -->
            <rect x="95" y="20" width="10" height="50" fill="#4b5563"/>
            <rect x="50" y="20" width="100" height="10" fill="#374151"/>

            <!-- Cable -->
            <line x1="100" y1="70" x2="100" y2="100" stroke="#9ca3af" stroke-width="3"/>

            <!-- Bar -->
            <rect x="40" y="95" width="120" height="8" rx="4" fill="#6366f1"/>

            <!-- Seat -->
            <rect x="60" y="230" width="80" height="15" rx="3" fill="#374151"/>
            <rect x="75" y="245" width="15" height="35" fill="#4b5563"/>
            <rect x="110" y="245" width="15" height="35" fill="#4b5563"/>

            <!-- Seated figure - back view suggestion -->
            <!-- Torso -->
            <ellipse cx="100" cy="180" rx="35" ry="45" fill="url(#skinGradLat)"/>

            <!-- Lats highlighted (back muscles visible from front) -->
            <ellipse cx="70" cy="175" rx="12" ry="25" class="muscle-active" fill="url(#muscleActiveLat)">
                <animate attributeName="ry" values="25;30;25" dur="1.2s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="130" cy="175" rx="12" ry="25" class="muscle-active" fill="url(#muscleActiveLat)">
                <animate attributeName="ry" values="25;30;25" dur="1.2s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Head -->
            <circle cx="100" cy="120" r="20" fill="url(#skinGradLat)"/>
            <circle cx="94" cy="117" r="3" fill="#374151"/>
            <circle cx="106" cy="117" r="3" fill="#374151"/>

            <!-- Arms pulling down -->
            <g class="pulldown-arms">
                <rect x="50" y="100" width="25" height="10" rx="5" fill="url(#skinGradLat)" transform="rotate(45 62 105)"/>
                <rect x="125" y="100" width="25" height="10" rx="5" fill="url(#skinGradLat)" transform="rotate(-45 138 105)"/>
                <!-- Biceps highlight -->
                <ellipse cx="55" cy="115" rx="8" ry="6" fill="url(#muscleActiveLat)" opacity="0.6"/>
                <ellipse cx="145" cy="115" rx="8" ry="6" fill="url(#muscleActiveLat)" opacity="0.6"/>
            </g>

            <!-- Thighs -->
            <rect x="70" y="210" width="25" height="25" rx="8" fill="url(#skinGradLat)"/>
            <rect x="105" y="210" width="25" height="25" rx="8" fill="url(#skinGradLat)"/>
        </svg>
        `,
        animation: "lat-pulldown"
    },

    "Seated Cable Row": {
        muscles: ["latissimo", "romboides", "biceps", "trapezio"],
        primaryMuscle: "latissimo",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradRow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveRow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Machine/Cable origin -->
            <rect x="5" y="120" width="15" height="80" fill="#4b5563"/>
            <circle cx="12" cy="160" r="8" fill="#374151"/>

            <!-- Cable -->
            <line x1="20" y1="160" x2="80" y2="160" stroke="#9ca3af" stroke-width="3" class="row-cable"/>

            <!-- Seat/Platform -->
            <rect x="80" y="200" width="100" height="10" rx="3" fill="#374151"/>
            <rect x="85" y="210" width="15" height="30" fill="#4b5563"/>
            <rect x="160" y="210" width="15" height="30" fill="#4b5563"/>

            <!-- Seated figure - side view -->
            <!-- Torso -->
            <ellipse cx="130" cy="160" rx="28" ry="42" fill="url(#skinGradRow)"/>

            <!-- Back muscles highlighted -->
            <ellipse cx="115" cy="155" rx="10" ry="28" class="muscle-active" fill="url(#muscleActiveRow)">
                <animate attributeName="rx" values="10;14;10" dur="1s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Rhomboids -->
            <ellipse cx="120" cy="145" rx="8" ry="12" class="muscle-active" fill="url(#muscleActiveRow)" opacity="0.7"/>

            <!-- Head -->
            <circle cx="140" cy="105" r="18" fill="url(#skinGradRow)"/>
            <circle cx="145" cy="102" r="3" fill="#374151"/>

            <!-- Arms pulling -->
            <g class="row-arms">
                <rect x="75" y="155" width="30" height="10" rx="5" fill="url(#skinGradRow)"/>
                <!-- Handle -->
                <rect x="70" y="150" width="10" height="20" rx="3" fill="#6366f1"/>
                <!-- Bicep -->
                <ellipse cx="90" cy="155" rx="8" ry="6" fill="url(#muscleActiveRow)" opacity="0.5"/>
            </g>

            <!-- Legs extended -->
            <rect x="100" y="185" width="60" height="15" rx="5" fill="url(#skinGradRow)"/>
            <rect x="155" y="180" width="20" height="25" rx="8" fill="url(#skinGradRow)"/>
        </svg>
        `,
        animation: "seated-row"
    },

    "Barbell Row": {
        muscles: ["latissimo", "romboides", "trapezio", "biceps"],
        primaryMuscle: "latissimo",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradBRow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveBRow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Floor -->
            <rect x="0" y="270" width="200" height="5" fill="#374151"/>

            <!-- Bent over figure -->
            <!-- Legs -->
            <rect x="110" y="220" width="18" height="50" rx="6" fill="url(#skinGradBRow)" transform="rotate(10 119 245)"/>
            <rect x="130" y="220" width="18" height="50" rx="6" fill="url(#skinGradBRow)" transform="rotate(10 139 245)"/>

            <!-- Torso bent forward -->
            <ellipse cx="95" cy="175" rx="30" ry="45" fill="url(#skinGradBRow)" transform="rotate(50 95 175)"/>

            <!-- Back muscles -->
            <ellipse cx="75" cy="160" rx="12" ry="22" class="muscle-active" fill="url(#muscleActiveBRow)" transform="rotate(50 75 160)">
                <animate attributeName="ry" values="22;26;22" dur="1s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Trapezius -->
            <ellipse cx="65" cy="140" rx="10" ry="8" class="muscle-active" fill="url(#muscleActiveBRow)" opacity="0.7"/>

            <!-- Head -->
            <circle cx="55" cy="130" r="18" fill="url(#skinGradBRow)"/>
            <circle cx="50" cy="128" r="3" fill="#374151"/>

            <!-- Arms -->
            <g class="barbell-row-arms">
                <rect x="50" y="175" width="25" height="10" rx="5" fill="url(#skinGradBRow)" transform="rotate(-30 62 180)"/>
                <rect x="75" y="185" width="25" height="10" rx="5" fill="url(#skinGradBRow)" transform="rotate(-30 87 190)"/>
            </g>

            <!-- Barbell -->
            <g class="barbell">
                <rect x="20" y="205" width="130" height="6" rx="3" fill="#9ca3af"/>
                <rect x="15" y="198" width="18" height="20" rx="3" fill="#374151"/>
                <rect x="137" y="198" width="18" height="20" rx="3" fill="#374151"/>
            </g>
        </svg>
        `,
        animation: "barbell-row"
    },

    "Deadlift": {
        muscles: ["eretores-espinha", "gluteos", "isquiotibiais", "quadriceps", "trapezio"],
        primaryMuscle: "eretores-espinha",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradDL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveDL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Floor -->
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>

            <!-- Standing figure holding barbell -->
            <!-- Legs -->
            <rect x="75" y="200" width="20" height="75" rx="8" fill="url(#skinGradDL)"/>
            <rect x="105" y="200" width="20" height="75" rx="8" fill="url(#skinGradDL)"/>

            <!-- Glutes/Hamstrings highlighted -->
            <ellipse cx="90" cy="200" rx="18" ry="12" class="muscle-active" fill="url(#muscleActiveDL)">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="110" cy="200" rx="18" ry="12" class="muscle-active" fill="url(#muscleActiveDL)">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Torso -->
            <ellipse cx="100" cy="145" rx="32" ry="50" fill="url(#skinGradDL)"/>

            <!-- Erector spinae (back) -->
            <rect x="95" y="120" width="10" height="60" rx="3" class="muscle-active" fill="url(#muscleActiveDL)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite"/>
            </rect>

            <!-- Traps -->
            <ellipse cx="100" cy="100" rx="25" ry="10" class="muscle-active" fill="url(#muscleActiveDL)" opacity="0.6"/>

            <!-- Head -->
            <circle cx="100" cy="70" r="22" fill="url(#skinGradDL)"/>
            <circle cx="94" cy="67" r="3" fill="#374151"/>
            <circle cx="106" cy="67" r="3" fill="#374151"/>

            <!-- Arms hanging -->
            <rect x="55" y="120" width="12" height="45" rx="6" fill="url(#skinGradDL)"/>
            <rect x="133" y="120" width="12" height="45" rx="6" fill="url(#skinGradDL)"/>

            <!-- Barbell at hip level -->
            <rect x="20" y="165" width="160" height="6" rx="3" fill="#9ca3af"/>
            <rect x="10" y="155" width="22" height="26" rx="4" fill="#374151"/>
            <rect x="168" y="155" width="22" height="26" rx="4" fill="#374151"/>
        </svg>
        `,
        animation: "deadlift"
    },

    // ============================================
    // LEG EXERCISES
    // ============================================
    "Leg Press": {
        muscles: ["quadriceps", "gluteos", "isquiotibiais"],
        primaryMuscle: "quadriceps",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradLP" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveLP" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Machine frame -->
            <rect x="10" y="50" width="15" height="200" fill="#4b5563"/>
            <rect x="10" y="50" width="80" height="10" fill="#374151"/>

            <!-- Seat (reclined) -->
            <polygon points="30,250 150,250 170,180 50,180" fill="#374151"/>

            <!-- Platform -->
            <rect x="100" y="80" width="80" height="60" rx="5" fill="#6366f1" transform="rotate(30 140 110)"/>

            <!-- Reclined figure -->
            <!-- Torso -->
            <ellipse cx="90" cy="200" rx="28" ry="35" fill="url(#skinGradLP)" transform="rotate(-20 90 200)"/>

            <!-- Head -->
            <circle cx="65" cy="235" r="18" fill="url(#skinGradLP)"/>
            <circle cx="60" cy="233" r="3" fill="#374151"/>

            <!-- Legs pushing -->
            <g class="leg-press-legs">
                <!-- Thighs with quadriceps highlighted -->
                <rect x="100" y="170" width="50" height="22" rx="8" fill="url(#skinGradLP)" transform="rotate(-40 125 181)"/>
                <ellipse cx="115" cy="165" rx="18" ry="10" class="muscle-active" fill="url(#muscleActiveLP)" transform="rotate(-40 115 165)">
                    <animate attributeName="rx" values="18;22;18" dur="1s" repeatCount="indefinite"/>
                </ellipse>

                <!-- Lower legs -->
                <rect x="135" y="120" width="40" height="18" rx="6" fill="url(#skinGradLP)" transform="rotate(-20 155 129)"/>

                <!-- Feet on platform -->
                <ellipse cx="165" cy="115" rx="15" ry="10" fill="url(#skinGradLP)" transform="rotate(30 165 115)"/>
            </g>

            <!-- Glutes -->
            <ellipse cx="95" cy="185" rx="15" ry="10" class="muscle-active" fill="url(#muscleActiveLP)" opacity="0.6"/>
        </svg>
        `,
        animation: "leg-press"
    },

    "Barbell Squat": {
        muscles: ["quadriceps", "gluteos", "isquiotibiais", "eretores-espinha"],
        primaryMuscle: "quadriceps",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradSQ" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveSQ" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Floor -->
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>

            <!-- Squat rack -->
            <rect x="20" y="40" width="8" height="200" fill="#4b5563"/>
            <rect x="172" y="40" width="8" height="200" fill="#4b5563"/>

            <!-- Standing figure with barbell -->
            <!-- Feet -->
            <ellipse cx="80" cy="270" rx="15" ry="8" fill="url(#skinGradSQ)"/>
            <ellipse cx="120" cy="270" rx="15" ry="8" fill="url(#skinGradSQ)"/>

            <!-- Legs -->
            <rect x="70" y="195" width="22" height="75" rx="8" fill="url(#skinGradSQ)"/>
            <rect x="108" y="195" width="22" height="75" rx="8" fill="url(#skinGradSQ)"/>

            <!-- Quadriceps highlighted -->
            <ellipse cx="81" cy="220" rx="12" ry="25" class="muscle-active" fill="url(#muscleActiveSQ)">
                <animate attributeName="ry" values="25;28;25" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="119" cy="220" rx="12" ry="25" class="muscle-active" fill="url(#muscleActiveSQ)">
                <animate attributeName="ry" values="25;28;25" dur="1s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Glutes -->
            <ellipse cx="100" cy="195" rx="25" ry="15" class="muscle-active" fill="url(#muscleActiveSQ)" opacity="0.6"/>

            <!-- Torso -->
            <ellipse cx="100" cy="140" rx="30" ry="50" fill="url(#skinGradSQ)"/>

            <!-- Head -->
            <circle cx="100" cy="70" r="22" fill="url(#skinGradSQ)"/>
            <circle cx="94" cy="67" r="3" fill="#374151"/>
            <circle cx="106" cy="67" r="3" fill="#374151"/>

            <!-- Arms holding barbell -->
            <rect x="50" y="85" width="25" height="10" rx="5" fill="url(#skinGradSQ)"/>
            <rect x="125" y="85" width="25" height="10" rx="5" fill="url(#skinGradSQ)"/>

            <!-- Barbell on shoulders -->
            <rect x="30" y="78" width="140" height="6" rx="3" fill="#9ca3af"/>
            <rect x="20" y="70" width="20" height="22" rx="4" fill="#374151"/>
            <rect x="160" y="70" width="20" height="22" rx="4" fill="#374151"/>
        </svg>
        `,
        animation: "squat"
    },

    "Leg Extension": {
        muscles: ["quadriceps"],
        primaryMuscle: "quadriceps",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradLE" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveLE" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Machine seat -->
            <rect x="30" y="180" width="80" height="15" rx="3" fill="#374151"/>
            <rect x="25" y="195" width="15" height="60" fill="#4b5563"/>
            <rect x="100" y="195" width="15" height="60" fill="#4b5563"/>

            <!-- Backrest -->
            <rect x="20" y="100" width="15" height="85" rx="3" fill="#374151"/>

            <!-- Seated figure -->
            <!-- Torso -->
            <ellipse cx="70" cy="145" rx="28" ry="40" fill="url(#skinGradLE)"/>

            <!-- Head -->
            <circle cx="70" cy="85" r="20" fill="url(#skinGradLE)"/>
            <circle cx="75" cy="82" r="3" fill="#374151"/>

            <!-- Thighs with quadriceps highlighted -->
            <rect x="55" y="175" width="50" height="20" rx="8" fill="url(#skinGradLE)"/>
            <ellipse cx="80" cy="178" rx="22" ry="10" class="muscle-active" fill="url(#muscleActiveLE)">
                <animate attributeName="rx" values="22;26;22" dur="0.8s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Lower legs extending -->
            <g class="leg-extension">
                <rect x="100" y="175" width="55" height="16" rx="6" fill="url(#skinGradLE)" class="lower-leg"/>
                <!-- Ankle pad -->
                <rect x="150" y="170" width="25" height="25" rx="5" fill="#6366f1"/>
            </g>

            <!-- Machine arm -->
            <rect x="110" y="195" width="60" height="8" rx="3" fill="#4b5563"/>
        </svg>
        `,
        animation: "leg-extension"
    },

    "Leg Curl": {
        muscles: ["isquiotibiais"],
        primaryMuscle: "isquiotibiais",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradLC" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveLC" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Machine bench (lying) -->
            <rect x="20" y="160" width="160" height="20" rx="5" fill="#374151"/>
            <rect x="30" y="180" width="15" height="50" fill="#4b5563"/>
            <rect x="155" y="180" width="15" height="50" fill="#4b5563"/>

            <!-- Prone figure -->
            <!-- Torso -->
            <ellipse cx="70" cy="145" rx="30" ry="25" fill="url(#skinGradLC)"/>

            <!-- Head (face down) -->
            <circle cx="35" cy="140" r="18" fill="url(#skinGradLC)"/>

            <!-- Arms -->
            <rect x="15" y="150" width="10" height="30" rx="4" fill="url(#skinGradLC)"/>

            <!-- Thighs with hamstrings highlighted -->
            <rect x="95" y="135" width="55" height="22" rx="8" fill="url(#skinGradLC)"/>
            <ellipse cx="122" cy="140" rx="20" ry="10" class="muscle-active" fill="url(#muscleActiveLC)">
                <animate attributeName="ry" values="10;14;10" dur="0.8s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Lower legs curling up -->
            <g class="leg-curl">
                <rect x="140" y="110" width="40" height="16" rx="6" fill="url(#skinGradLC)" transform="rotate(60 160 118)"/>
                <!-- Ankle pad -->
                <rect x="155" y="85" width="20" height="20" rx="4" fill="#6366f1" transform="rotate(60 165 95)"/>
            </g>

            <!-- Machine lever -->
            <rect x="150" y="155" width="8" height="50" rx="3" fill="#4b5563" transform="rotate(-30 154 180)"/>
        </svg>
        `,
        animation: "leg-curl"
    },

    // ============================================
    // SHOULDER EXERCISES
    // ============================================
    "Shoulder Press Machine": {
        muscles: ["deltoides-anterior", "deltoides-lateral", "triceps"],
        primaryMuscle: "deltoides-anterior",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradSP" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveSP" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Machine frame -->
            <rect x="95" y="20" width="10" height="60" fill="#4b5563"/>
            <rect x="60" y="15" width="80" height="10" fill="#374151"/>

            <!-- Seat -->
            <rect x="60" y="220" width="80" height="15" rx="3" fill="#374151"/>
            <rect x="55" y="235" width="15" height="45" fill="#4b5563"/>
            <rect x="130" y="235" width="15" height="45" fill="#4b5563"/>

            <!-- Backrest -->
            <rect x="55" y="140" width="15" height="85" rx="3" fill="#374151"/>

            <!-- Seated figure -->
            <!-- Torso -->
            <ellipse cx="100" cy="175" rx="30" ry="45" fill="url(#skinGradSP)"/>

            <!-- Deltoids highlighted -->
            <ellipse cx="65" cy="140" rx="12" ry="10" class="muscle-active" fill="url(#muscleActiveSP)">
                <animate attributeName="ry" values="10;13;10" dur="0.8s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="135" cy="140" rx="12" ry="10" class="muscle-active" fill="url(#muscleActiveSP)">
                <animate attributeName="ry" values="10;13;10" dur="0.8s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Head -->
            <circle cx="100" cy="110" r="22" fill="url(#skinGradSP)"/>
            <circle cx="94" cy="107" r="3" fill="#374151"/>
            <circle cx="106" cy="107" r="3" fill="#374151"/>

            <!-- Arms pressing up -->
            <g class="shoulder-press-arms">
                <!-- Upper arms -->
                <rect x="55" y="130" width="12" height="35" rx="5" fill="url(#skinGradSP)" transform="rotate(-20 61 147)"/>
                <rect x="133" y="130" width="12" height="35" rx="5" fill="url(#skinGradSP)" transform="rotate(20 139 147)"/>

                <!-- Forearms -->
                <rect x="45" y="95" width="10" height="40" rx="4" fill="url(#skinGradSP)" transform="rotate(-10 50 115)"/>
                <rect x="145" y="95" width="10" height="40" rx="4" fill="url(#skinGradSP)" transform="rotate(10 150 115)"/>

                <!-- Triceps highlight -->
                <ellipse cx="58" cy="155" rx="6" ry="8" fill="url(#muscleActiveSP)" opacity="0.5"/>
                <ellipse cx="142" cy="155" rx="6" ry="8" fill="url(#muscleActiveSP)" opacity="0.5"/>
            </g>

            <!-- Machine handles -->
            <rect x="35" y="75" width="20" height="25" rx="5" fill="#6366f1"/>
            <rect x="145" y="75" width="20" height="25" rx="5" fill="#6366f1"/>

            <!-- Thighs -->
            <rect x="70" y="210" width="25" height="15" rx="6" fill="url(#skinGradSP)"/>
            <rect x="105" y="210" width="25" height="15" rx="6" fill="url(#skinGradSP)"/>
        </svg>
        `,
        animation: "shoulder-press"
    },

    "Lateral Raise": {
        muscles: ["deltoides-lateral"],
        primaryMuscle: "deltoides-lateral",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradLR" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveLR" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Floor -->
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>

            <!-- Standing figure -->
            <!-- Feet -->
            <ellipse cx="90" cy="270" rx="12" ry="6" fill="url(#skinGradLR)"/>
            <ellipse cx="110" cy="270" rx="12" ry="6" fill="url(#skinGradLR)"/>

            <!-- Legs -->
            <rect x="80" y="200" width="18" height="70" rx="6" fill="url(#skinGradLR)"/>
            <rect x="102" y="200" width="18" height="70" rx="6" fill="url(#skinGradLR)"/>

            <!-- Torso -->
            <ellipse cx="100" cy="155" rx="28" ry="45" fill="url(#skinGradLR)"/>

            <!-- Lateral deltoids highlighted -->
            <ellipse cx="65" cy="125" rx="10" ry="15" class="muscle-active" fill="url(#muscleActiveLR)">
                <animate attributeName="rx" values="10;14;10" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="135" cy="125" rx="10" ry="15" class="muscle-active" fill="url(#muscleActiveLR)">
                <animate attributeName="rx" values="10;14;10" dur="1s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Head -->
            <circle cx="100" cy="85" r="22" fill="url(#skinGradLR)"/>
            <circle cx="94" cy="82" r="3" fill="#374151"/>
            <circle cx="106" cy="82" r="3" fill="#374151"/>

            <!-- Arms raised to sides -->
            <g class="lateral-raise-arms">
                <rect x="25" y="118" width="45" height="12" rx="5" fill="url(#skinGradLR)"/>
                <rect x="130" y="118" width="45" height="12" rx="5" fill="url(#skinGradLR)"/>

                <!-- Dumbbells -->
                <rect x="15" y="112" width="15" height="22" rx="4" fill="#6366f1"/>
                <rect x="170" y="112" width="15" height="22" rx="4" fill="#6366f1"/>
            </g>
        </svg>
        `,
        animation: "lateral-raise"
    },

    // ============================================
    // ARM EXERCISES
    // ============================================
    "Barbell Curl": {
        muscles: ["biceps", "braquial"],
        primaryMuscle: "biceps",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradBC" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveBC" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Floor -->
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>

            <!-- Standing figure -->
            <!-- Feet -->
            <ellipse cx="90" cy="270" rx="12" ry="6" fill="url(#skinGradBC)"/>
            <ellipse cx="110" cy="270" rx="12" ry="6" fill="url(#skinGradBC)"/>

            <!-- Legs -->
            <rect x="80" y="200" width="18" height="70" rx="6" fill="url(#skinGradBC)"/>
            <rect x="102" y="200" width="18" height="70" rx="6" fill="url(#skinGradBC)"/>

            <!-- Torso -->
            <ellipse cx="100" cy="155" rx="28" ry="45" fill="url(#skinGradBC)"/>

            <!-- Head -->
            <circle cx="100" cy="85" r="22" fill="url(#skinGradBC)"/>
            <circle cx="94" cy="82" r="3" fill="#374151"/>
            <circle cx="106" cy="82" r="3" fill="#374151"/>

            <!-- Arms curling -->
            <g class="bicep-curl-arms">
                <!-- Upper arms (stationary) -->
                <rect x="62" y="125" width="12" height="40" rx="5" fill="url(#skinGradBC)"/>
                <rect x="126" y="125" width="12" height="40" rx="5" fill="url(#skinGradBC)"/>

                <!-- Biceps highlighted -->
                <ellipse cx="68" cy="140" rx="8" ry="12" class="muscle-active" fill="url(#muscleActiveBC)">
                    <animate attributeName="ry" values="12;16;12" dur="0.8s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="132" cy="140" rx="8" ry="12" class="muscle-active" fill="url(#muscleActiveBC)">
                    <animate attributeName="ry" values="12;16;12" dur="0.8s" repeatCount="indefinite"/>
                </ellipse>

                <!-- Forearms (curling) -->
                <rect x="58" y="160" width="10" height="35" rx="4" fill="url(#skinGradBC)" transform="rotate(-45 63 177)"/>
                <rect x="132" y="160" width="10" height="35" rx="4" fill="url(#skinGradBC)" transform="rotate(45 137 177)"/>
            </g>

            <!-- Barbell -->
            <rect x="40" y="185" width="120" height="6" rx="3" fill="#9ca3af"/>
            <rect x="30" y="178" width="18" height="20" rx="3" fill="#374151"/>
            <rect x="152" y="178" width="18" height="20" rx="3" fill="#374151"/>
        </svg>
        `,
        animation: "bicep-curl"
    },

    "Tricep Pushdown": {
        muscles: ["triceps"],
        primaryMuscle: "triceps",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradTP" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveTP" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Cable machine -->
            <rect x="95" y="20" width="10" height="60" fill="#4b5563"/>
            <circle cx="100" cy="85" r="8" fill="#374151"/>

            <!-- Cable -->
            <line x1="100" y1="93" x2="100" y2="150" stroke="#9ca3af" stroke-width="3"/>

            <!-- Floor -->
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>

            <!-- Standing figure -->
            <!-- Feet -->
            <ellipse cx="90" cy="270" rx="12" ry="6" fill="url(#skinGradTP)"/>
            <ellipse cx="110" cy="270" rx="12" ry="6" fill="url(#skinGradTP)"/>

            <!-- Legs -->
            <rect x="80" y="200" width="18" height="70" rx="6" fill="url(#skinGradTP)"/>
            <rect x="102" y="200" width="18" height="70" rx="6" fill="url(#skinGradTP)"/>

            <!-- Torso (slightly bent forward) -->
            <ellipse cx="100" cy="160" rx="28" ry="42" fill="url(#skinGradTP)" transform="rotate(5 100 160)"/>

            <!-- Head -->
            <circle cx="105" cy="100" r="20" fill="url(#skinGradTP)"/>
            <circle cx="110" cy="97" r="3" fill="#374151"/>

            <!-- Arms pushing down -->
            <g class="pushdown-arms">
                <!-- Upper arms (against body) -->
                <rect x="72" y="130" width="12" height="30" rx="5" fill="url(#skinGradTP)"/>
                <rect x="116" y="130" width="12" height="30" rx="5" fill="url(#skinGradTP)"/>

                <!-- Triceps highlighted -->
                <ellipse cx="78" cy="145" rx="7" ry="10" class="muscle-active" fill="url(#muscleActiveTP)">
                    <animate attributeName="ry" values="10;14;10" dur="0.7s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="122" cy="145" rx="7" ry="10" class="muscle-active" fill="url(#muscleActiveTP)">
                    <animate attributeName="ry" values="10;14;10" dur="0.7s" repeatCount="indefinite"/>
                </ellipse>

                <!-- Forearms (pushing down) -->
                <rect x="75" y="158" width="10" height="35" rx="4" fill="url(#skinGradTP)"/>
                <rect x="115" y="158" width="10" height="35" rx="4" fill="url(#skinGradTP)"/>
            </g>

            <!-- Rope handle -->
            <rect x="85" y="145" width="30" height="12" rx="4" fill="#6366f1"/>
            <line x1="90" y1="157" x2="85" y2="175" stroke="#9ca3af" stroke-width="4"/>
            <line x1="110" y1="157" x2="115" y2="175" stroke="#9ca3af" stroke-width="4"/>
        </svg>
        `,
        animation: "tricep-pushdown"
    },

    // ============================================
    // CARDIO / OTHER
    // ============================================
    "Treadmill Intervals": {
        muscles: ["quadriceps", "isquiotibiais", "gluteos", "panturrilha"],
        primaryMuscle: "quadriceps",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradTM" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveTM" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>

            <!-- Treadmill -->
            <rect x="30" y="240" width="140" height="10" rx="3" fill="#374151"/>
            <rect x="35" y="230" width="130" height="15" rx="2" fill="#4b5563"/>
            <rect x="25" y="250" width="15" height="30" fill="#374151"/>
            <rect x="160" y="250" width="15" height="30" fill="#374151"/>

            <!-- Console -->
            <rect x="145" y="100" width="25" height="40" rx="5" fill="#374151"/>
            <rect x="150" y="110" width="15" height="20" rx="2" fill="#10b981"/>

            <!-- Handrails -->
            <rect x="35" y="140" width="5" height="100" fill="#4b5563"/>
            <rect x="160" y="140" width="5" height="100" fill="#4b5563"/>

            <!-- Running figure -->
            <g class="running-person">
                <!-- Back leg -->
                <rect x="75" y="185" width="15" height="45" rx="5" fill="url(#skinGradTM)" transform="rotate(-20 82 207)"/>

                <!-- Front leg -->
                <rect x="110" y="175" width="15" height="50" rx="5" fill="url(#skinGradTM)" transform="rotate(25 117 200)"/>

                <!-- Leg muscles highlighted -->
                <ellipse cx="120" cy="190" rx="8" ry="15" class="muscle-active" fill="url(#muscleActiveTM)" transform="rotate(25 120 190)">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="0.4s" repeatCount="indefinite"/>
                </ellipse>

                <!-- Torso -->
                <ellipse cx="100" cy="145" rx="22" ry="35" fill="url(#skinGradTM)" transform="rotate(10 100 145)"/>

                <!-- Head -->
                <circle cx="105" cy="95" r="18" fill="url(#skinGradTM)"/>
                <circle cx="110" cy="92" r="3" fill="#374151"/>

                <!-- Arms swinging -->
                <rect x="75" y="125" width="8" height="30" rx="3" fill="url(#skinGradTM)" transform="rotate(30 79 140)"/>
                <rect x="117" y="135" width="8" height="30" rx="3" fill="url(#skinGradTM)" transform="rotate(-30 121 150)"/>
            </g>
        </svg>
        `,
        animation: "running"
    },

    // ============================================
    // ADDITIONAL EXERCISES
    // ============================================
    "Overhead Tricep Extension": {
        muscles: ["triceps"],
        primaryMuscle: "triceps",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradOTE" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveOTE" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>
            <ellipse cx="90" cy="270" rx="12" ry="6" fill="url(#skinGradOTE)"/>
            <ellipse cx="110" cy="270" rx="12" ry="6" fill="url(#skinGradOTE)"/>
            <rect x="80" y="200" width="18" height="70" rx="6" fill="url(#skinGradOTE)"/>
            <rect x="102" y="200" width="18" height="70" rx="6" fill="url(#skinGradOTE)"/>
            <ellipse cx="100" cy="155" rx="28" ry="45" fill="url(#skinGradOTE)"/>
            <circle cx="100" cy="85" r="22" fill="url(#skinGradOTE)"/>
            <circle cx="94" cy="82" r="3" fill="#374151"/>
            <circle cx="106" cy="82" r="3" fill="#374151"/>
            <!-- Arms overhead -->
            <rect x="92" y="50" width="16" height="45" rx="6" fill="url(#skinGradOTE)"/>
            <!-- Triceps highlighted -->
            <ellipse cx="100" cy="70" rx="10" ry="15" class="muscle-active" fill="url(#muscleActiveOTE)">
                <animate attributeName="ry" values="15;18;15" dur="0.8s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Dumbbell -->
            <rect x="85" y="35" width="30" height="18" rx="4" fill="#6366f1"/>
        </svg>
        `,
        animation: "overhead-extension"
    },

    "Single Arm Dumbbell Row": {
        muscles: ["latissimo", "romboides", "biceps"],
        primaryMuscle: "latissimo",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradSAR" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveSAR" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <!-- Bench -->
            <rect x="40" y="200" width="120" height="15" rx="3" fill="#374151"/>
            <!-- Supporting leg on bench -->
            <rect x="110" y="180" width="40" height="18" rx="6" fill="url(#skinGradSAR)"/>
            <!-- Standing leg -->
            <rect x="60" y="215" width="18" height="55" rx="6" fill="url(#skinGradSAR)"/>
            <!-- Torso bent -->
            <ellipse cx="100" cy="160" rx="30" ry="40" fill="url(#skinGradSAR)" transform="rotate(20 100 160)"/>
            <!-- Lat highlight -->
            <ellipse cx="85" cy="155" rx="12" ry="20" class="muscle-active" fill="url(#muscleActiveSAR)" transform="rotate(20 85 155)">
                <animate attributeName="rx" values="12;16;12" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Head -->
            <circle cx="120" cy="125" r="18" fill="url(#skinGradSAR)"/>
            <circle cx="125" cy="122" r="3" fill="#374151"/>
            <!-- Supporting arm -->
            <rect x="125" y="155" width="10" height="30" rx="4" fill="url(#skinGradSAR)"/>
            <!-- Working arm with dumbbell -->
            <rect x="55" y="150" width="10" height="35" rx="4" fill="url(#skinGradSAR)"/>
            <rect x="45" y="180" width="25" height="15" rx="4" fill="#6366f1"/>
        </svg>
        `,
        animation: "single-arm-row"
    },

    "Face Pull": {
        muscles: ["deltoides-posterior", "romboides", "trapezio"],
        primaryMuscle: "deltoides-posterior",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradFP" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveFP" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <!-- Cable machine -->
            <rect x="95" y="60" width="10" height="40" fill="#4b5563"/>
            <circle cx="100" cy="105" r="8" fill="#374151"/>
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>
            <!-- Standing figure -->
            <ellipse cx="90" cy="270" rx="12" ry="6" fill="url(#skinGradFP)"/>
            <ellipse cx="110" cy="270" rx="12" ry="6" fill="url(#skinGradFP)"/>
            <rect x="80" y="200" width="18" height="70" rx="6" fill="url(#skinGradFP)"/>
            <rect x="102" y="200" width="18" height="70" rx="6" fill="url(#skinGradFP)"/>
            <ellipse cx="100" cy="160" rx="28" ry="42" fill="url(#skinGradFP)"/>
            <!-- Rear delts highlighted -->
            <ellipse cx="70" cy="140" rx="10" ry="8" class="muscle-active" fill="url(#muscleActiveFP)">
                <animate attributeName="rx" values="10;14;10" dur="0.9s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="130" cy="140" rx="10" ry="8" class="muscle-active" fill="url(#muscleActiveFP)">
                <animate attributeName="rx" values="10;14;10" dur="0.9s" repeatCount="indefinite"/>
            </ellipse>
            <circle cx="100" cy="105" r="20" fill="url(#skinGradFP)"/>
            <circle cx="94" cy="102" r="3" fill="#374151"/>
            <circle cx="106" cy="102" r="3" fill="#374151"/>
            <!-- Arms pulling rope -->
            <rect x="50" y="115" width="30" height="10" rx="4" fill="url(#skinGradFP)"/>
            <rect x="120" y="115" width="30" height="10" rx="4" fill="url(#skinGradFP)"/>
            <!-- Rope handles -->
            <circle cx="55" cy="120" r="6" fill="#6366f1"/>
            <circle cx="145" cy="120" r="6" fill="#6366f1"/>
            <!-- Cable -->
            <line x1="100" y1="105" x2="80" y2="118" stroke="#9ca3af" stroke-width="3"/>
            <line x1="100" y1="105" x2="120" y2="118" stroke="#9ca3af" stroke-width="3"/>
        </svg>
        `,
        animation: "face-pull"
    },

    "Elliptical": {
        muscles: ["quadriceps", "gluteos", "isquiotibiais"],
        primaryMuscle: "quadriceps",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradEL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveEL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <!-- Machine base -->
            <ellipse cx="100" cy="260" rx="60" ry="15" fill="#374151"/>
            <rect x="95" y="100" width="10" height="160" fill="#4b5563"/>
            <!-- Console -->
            <rect x="80" y="85" width="40" height="30" rx="5" fill="#374151"/>
            <rect x="85" y="92" width="30" height="16" rx="2" fill="#10b981"/>
            <!-- Handles -->
            <rect x="55" y="100" width="5" height="80" fill="#4b5563"/>
            <rect x="140" y="100" width="5" height="80" fill="#4b5563"/>
            <!-- Person on elliptical -->
            <ellipse cx="100" cy="155" rx="25" ry="38" fill="url(#skinGradEL)"/>
            <!-- Legs on pedals -->
            <rect x="70" y="200" width="15" height="40" rx="5" fill="url(#skinGradEL)" transform="rotate(-15 77 220)"/>
            <rect x="115" y="195" width="15" height="45" rx="5" fill="url(#skinGradEL)" transform="rotate(15 122 217)"/>
            <!-- Quads highlighted -->
            <ellipse cx="80" cy="210" rx="8" ry="12" class="muscle-active" fill="url(#muscleActiveEL)" transform="rotate(-15 80 210)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="0.5s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Head -->
            <circle cx="100" cy="100" r="18" fill="url(#skinGradEL)"/>
            <circle cx="105" cy="97" r="3" fill="#374151"/>
            <!-- Arms on handles -->
            <rect x="55" y="125" width="20" height="8" rx="3" fill="url(#skinGradEL)"/>
            <rect x="125" y="125" width="20" height="8" rx="3" fill="url(#skinGradEL)"/>
        </svg>
        `,
        animation: "elliptical"
    },

    "Walking Lunges": {
        muscles: ["quadriceps", "gluteos", "isquiotibiais"],
        primaryMuscle: "gluteos",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradWL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveWL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>
            <!-- Back leg -->
            <rect x="130" y="200" width="15" height="55" rx="5" fill="url(#skinGradWL)" transform="rotate(-30 137 227)"/>
            <!-- Front leg (lunging) -->
            <rect x="55" y="185" width="18" height="60" rx="6" fill="url(#skinGradWL)" transform="rotate(20 64 215)"/>
            <!-- Glutes highlighted -->
            <ellipse cx="95" cy="180" rx="18" ry="12" class="muscle-active" fill="url(#muscleActiveWL)">
                <animate attributeName="ry" values="12;16;12" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Torso -->
            <ellipse cx="100" cy="145" rx="26" ry="40" fill="url(#skinGradWL)"/>
            <!-- Head -->
            <circle cx="100" cy="85" r="20" fill="url(#skinGradWL)"/>
            <circle cx="105" cy="82" r="3" fill="#374151"/>
            <!-- Arms -->
            <rect x="65" y="125" width="10" height="35" rx="4" fill="url(#skinGradWL)"/>
            <rect x="125" y="125" width="10" height="35" rx="4" fill="url(#skinGradWL)"/>
        </svg>
        `,
        animation: "lunges"
    },

    "Calf Raise": {
        muscles: ["panturrilha"],
        primaryMuscle: "panturrilha",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradCR" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveCR" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <!-- Platform/Step -->
            <rect x="60" y="250" width="80" height="15" rx="3" fill="#374151"/>
            <rect x="40" y="265" width="120" height="15" fill="#4b5563"/>
            <!-- Standing figure on toes -->
            <ellipse cx="90" cy="248" rx="10" ry="5" fill="url(#skinGradCR)"/>
            <ellipse cx="110" cy="248" rx="10" ry="5" fill="url(#skinGradCR)"/>
            <!-- Calves highlighted -->
            <rect x="80" y="210" width="16" height="40" rx="6" fill="url(#skinGradCR)"/>
            <rect x="104" y="210" width="16" height="40" rx="6" fill="url(#skinGradCR)"/>
            <ellipse cx="88" cy="230" rx="8" ry="12" class="muscle-active" fill="url(#muscleActiveCR)">
                <animate attributeName="ry" values="12;16;12" dur="0.6s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="112" cy="230" rx="8" ry="12" class="muscle-active" fill="url(#muscleActiveCR)">
                <animate attributeName="ry" values="12;16;12" dur="0.6s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Upper legs -->
            <rect x="78" y="165" width="18" height="50" rx="6" fill="url(#skinGradCR)"/>
            <rect x="104" y="165" width="18" height="50" rx="6" fill="url(#skinGradCR)"/>
            <!-- Torso -->
            <ellipse cx="100" cy="125" rx="28" ry="42" fill="url(#skinGradCR)"/>
            <!-- Head -->
            <circle cx="100" cy="65" r="20" fill="url(#skinGradCR)"/>
            <circle cx="94" cy="62" r="3" fill="#374151"/>
            <circle cx="106" cy="62" r="3" fill="#374151"/>
        </svg>
        `,
        animation: "calf-raise"
    },

    "Dumbbell Shoulder Press": {
        muscles: ["deltoides-anterior", "deltoides-lateral", "triceps"],
        primaryMuscle: "deltoides-anterior",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradDSP" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveDSP" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>
            <ellipse cx="90" cy="270" rx="12" ry="6" fill="url(#skinGradDSP)"/>
            <ellipse cx="110" cy="270" rx="12" ry="6" fill="url(#skinGradDSP)"/>
            <rect x="80" y="200" width="18" height="70" rx="6" fill="url(#skinGradDSP)"/>
            <rect x="102" y="200" width="18" height="70" rx="6" fill="url(#skinGradDSP)"/>
            <ellipse cx="100" cy="155" rx="28" ry="45" fill="url(#skinGradDSP)"/>
            <!-- Deltoids highlighted -->
            <ellipse cx="68" cy="125" rx="10" ry="12" class="muscle-active" fill="url(#muscleActiveDSP)">
                <animate attributeName="ry" values="12;15;12" dur="0.8s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="132" cy="125" rx="10" ry="12" class="muscle-active" fill="url(#muscleActiveDSP)">
                <animate attributeName="ry" values="12;15;12" dur="0.8s" repeatCount="indefinite"/>
            </ellipse>
            <circle cx="100" cy="85" r="22" fill="url(#skinGradDSP)"/>
            <circle cx="94" cy="82" r="3" fill="#374151"/>
            <circle cx="106" cy="82" r="3" fill="#374151"/>
            <!-- Arms pressing up -->
            <rect x="50" y="80" width="12" height="45" rx="5" fill="url(#skinGradDSP)" transform="rotate(-10 56 102)"/>
            <rect x="138" y="80" width="12" height="45" rx="5" fill="url(#skinGradDSP)" transform="rotate(10 144 102)"/>
            <!-- Dumbbells -->
            <rect x="40" y="65" width="25" height="18" rx="4" fill="#6366f1"/>
            <rect x="135" y="65" width="25" height="18" rx="4" fill="#6366f1"/>
        </svg>
        `,
        animation: "shoulder-press"
    },

    "Romanian Deadlift": {
        muscles: ["isquiotibiais", "gluteos", "eretores-espinha"],
        primaryMuscle: "isquiotibiais",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradRDL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveRDL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>
            <!-- Feet -->
            <ellipse cx="90" cy="270" rx="12" ry="6" fill="url(#skinGradRDL)"/>
            <ellipse cx="110" cy="270" rx="12" ry="6" fill="url(#skinGradRDL)"/>
            <!-- Legs (slightly bent) -->
            <rect x="80" y="210" width="18" height="60" rx="6" fill="url(#skinGradRDL)" transform="rotate(5 89 240)"/>
            <rect x="102" y="210" width="18" height="60" rx="6" fill="url(#skinGradRDL)" transform="rotate(-5 111 240)"/>
            <!-- Hamstrings highlighted -->
            <ellipse cx="89" cy="230" rx="10" ry="18" class="muscle-active" fill="url(#muscleActiveRDL)">
                <animate attributeName="ry" values="18;22;18" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="111" cy="230" rx="10" ry="18" class="muscle-active" fill="url(#muscleActiveRDL)">
                <animate attributeName="ry" values="18;22;18" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Torso bent forward -->
            <ellipse cx="100" cy="160" rx="28" ry="45" fill="url(#skinGradRDL)" transform="rotate(45 100 160)"/>
            <!-- Head -->
            <circle cx="60" cy="130" r="18" fill="url(#skinGradRDL)"/>
            <circle cx="55" cy="128" r="3" fill="#374151"/>
            <!-- Arms hanging with barbell -->
            <rect x="55" y="155" width="10" height="35" rx="4" fill="url(#skinGradRDL)" transform="rotate(45 60 172)"/>
            <rect x="80" y="175" width="10" height="35" rx="4" fill="url(#skinGradRDL)" transform="rotate(45 85 192)"/>
            <!-- Barbell -->
            <rect x="20" y="200" width="100" height="6" rx="3" fill="#9ca3af" transform="rotate(10 70 203)"/>
            <rect x="15" y="193" width="18" height="20" rx="3" fill="#374151" transform="rotate(10 24 203)"/>
            <rect x="107" y="208" width="18" height="20" rx="3" fill="#374151" transform="rotate(10 116 218)"/>
        </svg>
        `,
        animation: "rdl"
    },

    "Hip Thrust": {
        muscles: ["gluteos", "isquiotibiais"],
        primaryMuscle: "gluteos",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradHT" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveHT" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <!-- Bench -->
            <rect x="10" y="180" width="60" height="40" rx="5" fill="#374151"/>
            <!-- Floor -->
            <rect x="0" y="260" width="200" height="5" fill="#374151"/>
            <!-- Feet on floor -->
            <ellipse cx="130" cy="255" rx="12" ry="6" fill="url(#skinGradHT)"/>
            <ellipse cx="160" cy="255" rx="12" ry="6" fill="url(#skinGradHT)"/>
            <!-- Lower legs -->
            <rect x="120" y="220" width="15" height="35" rx="5" fill="url(#skinGradHT)"/>
            <rect x="150" y="220" width="15" height="35" rx="5" fill="url(#skinGradHT)"/>
            <!-- Thighs -->
            <rect x="85" y="175" width="50" height="18" rx="6" fill="url(#skinGradHT)"/>
            <!-- Glutes (thrust position) - highlighted -->
            <ellipse cx="80" cy="175" rx="20" ry="14" class="muscle-active" fill="url(#muscleActiveHT)">
                <animate attributeName="ry" values="14;18;14" dur="0.8s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Upper back on bench -->
            <ellipse cx="45" cy="175" rx="22" ry="18" fill="url(#skinGradHT)"/>
            <!-- Head -->
            <circle cx="25" cy="165" r="16" fill="url(#skinGradHT)"/>
            <circle cx="20" cy="163" r="3" fill="#374151"/>
            <!-- Barbell on hips -->
            <rect x="55" y="165" width="80" height="6" rx="3" fill="#9ca3af"/>
            <rect x="45" y="158" width="18" height="20" rx="3" fill="#374151"/>
            <rect x="127" y="158" width="18" height="20" rx="3" fill="#374151"/>
        </svg>
        `,
        animation: "hip-thrust"
    },

    "Dumbbell Fly": {
        muscles: ["peitoral"],
        primaryMuscle: "peitoral",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradDF" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveDF" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <!-- Bench -->
            <rect x="40" y="200" width="120" height="15" rx="3" fill="#374151"/>
            <rect x="30" y="215" width="10" height="60" fill="#4b5563"/>
            <rect x="160" y="215" width="10" height="60" fill="#4b5563"/>
            <!-- Torso lying -->
            <ellipse cx="100" cy="160" rx="35" ry="45" fill="url(#skinGradDF)"/>
            <!-- Pectorals highlighted -->
            <ellipse cx="85" cy="145" rx="18" ry="12" class="muscle-active" fill="url(#muscleActiveDF)">
                <animate attributeName="rx" values="18;22;18" dur="1.2s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="115" cy="145" rx="18" ry="12" class="muscle-active" fill="url(#muscleActiveDF)">
                <animate attributeName="rx" values="18;22;18" dur="1.2s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Head -->
            <circle cx="100" cy="95" r="22" fill="url(#skinGradDF)"/>
            <circle cx="93" cy="92" r="3" fill="#374151"/>
            <circle cx="107" cy="92" r="3" fill="#374151"/>
            <!-- Arms spread out -->
            <rect x="20" y="135" width="45" height="12" rx="5" fill="url(#skinGradDF)"/>
            <rect x="135" y="135" width="45" height="12" rx="5" fill="url(#skinGradDF)"/>
            <!-- Dumbbells -->
            <rect x="10" y="128" width="18" height="25" rx="4" fill="#6366f1"/>
            <rect x="172" y="128" width="18" height="25" rx="4" fill="#6366f1"/>
            <!-- Legs -->
            <rect x="75" y="205" width="15" height="45" rx="5" fill="url(#skinGradDF)"/>
            <rect x="110" y="205" width="15" height="45" rx="5" fill="url(#skinGradDF)"/>
        </svg>
        `,
        animation: "dumbbell-fly"
    },

    "Pull-up": {
        muscles: ["latissimo", "biceps", "romboides"],
        primaryMuscle: "latissimo",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradPU" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActivePU" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <!-- Pull-up bar -->
            <rect x="30" y="50" width="140" height="8" rx="4" fill="#4b5563"/>
            <rect x="25" y="50" width="8" height="40" fill="#374151"/>
            <rect x="167" y="50" width="8" height="40" fill="#374151"/>
            <!-- Hanging figure -->
            <!-- Arms gripping bar -->
            <rect x="55" y="58" width="12" height="40" rx="5" fill="url(#skinGradPU)" transform="rotate(-15 61 78)"/>
            <rect x="133" y="58" width="12" height="40" rx="5" fill="url(#skinGradPU)" transform="rotate(15 139 78)"/>
            <!-- Hands -->
            <ellipse cx="55" cy="54" rx="8" ry="6" fill="url(#skinGradPU)"/>
            <ellipse cx="145" cy="54" rx="8" ry="6" fill="url(#skinGradPU)"/>
            <!-- Torso -->
            <ellipse cx="100" cy="140" rx="30" ry="48" fill="url(#skinGradPU)"/>
            <!-- Lats highlighted -->
            <ellipse cx="70" cy="135" rx="12" ry="25" class="muscle-active" fill="url(#muscleActivePU)">
                <animate attributeName="rx" values="12;16;12" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="130" cy="135" rx="12" ry="25" class="muscle-active" fill="url(#muscleActivePU)">
                <animate attributeName="rx" values="12;16;12" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Head -->
            <circle cx="100" cy="80" r="20" fill="url(#skinGradPU)"/>
            <circle cx="94" cy="77" r="3" fill="#374151"/>
            <circle cx="106" cy="77" r="3" fill="#374151"/>
            <!-- Legs hanging -->
            <rect x="85" y="185" width="14" height="55" rx="5" fill="url(#skinGradPU)"/>
            <rect x="101" y="185" width="14" height="55" rx="5" fill="url(#skinGradPU)"/>
        </svg>
        `,
        animation: "pullup"
    },

    "Hammer Curl": {
        muscles: ["biceps", "braquial", "antebraco"],
        primaryMuscle: "braquial",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradHC" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveHC" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <rect x="0" y="275" width="200" height="5" fill="#374151"/>
            <ellipse cx="90" cy="270" rx="12" ry="6" fill="url(#skinGradHC)"/>
            <ellipse cx="110" cy="270" rx="12" ry="6" fill="url(#skinGradHC)"/>
            <rect x="80" y="200" width="18" height="70" rx="6" fill="url(#skinGradHC)"/>
            <rect x="102" y="200" width="18" height="70" rx="6" fill="url(#skinGradHC)"/>
            <ellipse cx="100" cy="155" rx="28" ry="45" fill="url(#skinGradHC)"/>
            <circle cx="100" cy="85" r="22" fill="url(#skinGradHC)"/>
            <circle cx="94" cy="82" r="3" fill="#374151"/>
            <circle cx="106" cy="82" r="3" fill="#374151"/>
            <!-- Arms curling with neutral grip -->
            <rect x="60" y="125" width="12" height="40" rx="5" fill="url(#skinGradHC)"/>
            <rect x="128" y="125" width="12" height="40" rx="5" fill="url(#skinGradHC)"/>
            <!-- Brachialis highlighted -->
            <ellipse cx="66" cy="140" rx="8" ry="12" class="muscle-active" fill="url(#muscleActiveHC)">
                <animate attributeName="ry" values="12;15;12" dur="0.7s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="134" cy="140" rx="8" ry="12" class="muscle-active" fill="url(#muscleActiveHC)">
                <animate attributeName="ry" values="12;15;12" dur="0.7s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Forearms curling -->
            <rect x="55" y="160" width="10" height="32" rx="4" fill="url(#skinGradHC)" transform="rotate(-50 60 176)"/>
            <rect x="135" y="160" width="10" height="32" rx="4" fill="url(#skinGradHC)" transform="rotate(50 140 176)"/>
            <!-- Dumbbells (vertical grip) -->
            <rect x="35" y="175" width="12" height="25" rx="3" fill="#6366f1"/>
            <rect x="153" y="175" width="12" height="25" rx="3" fill="#6366f1"/>
        </svg>
        `,
        animation: "hammer-curl"
    },

    "Skull Crusher": {
        muscles: ["triceps"],
        primaryMuscle: "triceps",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradSC" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActiveSC" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <!-- Bench -->
            <rect x="40" y="200" width="120" height="15" rx="3" fill="#374151"/>
            <rect x="30" y="215" width="10" height="60" fill="#4b5563"/>
            <rect x="160" y="215" width="10" height="60" fill="#4b5563"/>
            <!-- Lying torso -->
            <ellipse cx="100" cy="160" rx="35" ry="45" fill="url(#skinGradSC)"/>
            <!-- Head -->
            <circle cx="100" cy="95" r="22" fill="url(#skinGradSC)"/>
            <circle cx="93" cy="92" r="3" fill="#374151"/>
            <circle cx="107" cy="92" r="3" fill="#374151"/>
            <!-- Upper arms (vertical) -->
            <rect x="70" y="115" width="12" height="35" rx="5" fill="url(#skinGradSC)"/>
            <rect x="118" y="115" width="12" height="35" rx="5" fill="url(#skinGradSC)"/>
            <!-- Triceps highlighted -->
            <ellipse cx="76" cy="135" rx="8" ry="12" class="muscle-active" fill="url(#muscleActiveSC)">
                <animate attributeName="ry" values="12;16;12" dur="0.8s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="124" cy="135" rx="8" ry="12" class="muscle-active" fill="url(#muscleActiveSC)">
                <animate attributeName="ry" values="12;16;12" dur="0.8s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Forearms (going toward head) -->
            <rect x="75" y="85" width="10" height="35" rx="4" fill="url(#skinGradSC)" transform="rotate(-30 80 102)"/>
            <rect x="115" y="85" width="10" height="35" rx="4" fill="url(#skinGradSC)" transform="rotate(30 120 102)"/>
            <!-- EZ Bar near forehead -->
            <rect x="60" y="70" width="80" height="6" rx="3" fill="#9ca3af"/>
            <rect x="50" y="65" width="15" height="16" rx="3" fill="#374151"/>
            <rect x="135" y="65" width="15" height="16" rx="3" fill="#374151"/>
            <!-- Legs -->
            <rect x="75" y="205" width="15" height="45" rx="5" fill="url(#skinGradSC)"/>
            <rect x="110" y="205" width="15" height="45" rx="5" fill="url(#skinGradSC)"/>
        </svg>
        `,
        animation: "skull-crusher"
    },

    "Plank": {
        muscles: ["core", "deltoides-anterior", "quadriceps"],
        primaryMuscle: "core",
        svg: `
        <svg viewBox="0 0 200 300" class="exercise-svg">
            <defs>
                <linearGradient id="skinGradPL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f4c79a"/>
                    <stop offset="100%" style="stop-color:#e8b68a"/>
                </linearGradient>
                <linearGradient id="muscleActivePL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b"/>
                    <stop offset="100%" style="stop-color:#ee5a5a"/>
                </linearGradient>
            </defs>
            <!-- Floor -->
            <rect x="0" y="220" width="200" height="5" fill="#374151"/>
            <!-- Plank position - side view -->
            <!-- Feet -->
            <ellipse cx="170" cy="215" rx="10" ry="6" fill="url(#skinGradPL)"/>
            <!-- Legs -->
            <rect x="120" y="195" width="55" height="14" rx="5" fill="url(#skinGradPL)"/>
            <!-- Torso (straight) -->
            <rect x="50" y="175" width="80" height="20" rx="8" fill="url(#skinGradPL)"/>
            <!-- Core highlighted -->
            <ellipse cx="90" cy="185" rx="25" ry="10" class="muscle-active" fill="url(#muscleActivePL)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Arms (forearms on ground) -->
            <rect x="30" y="195" width="30" height="12" rx="5" fill="url(#skinGradPL)"/>
            <!-- Elbows -->
            <ellipse cx="55" cy="195" rx="8" ry="6" fill="url(#skinGradPL)"/>
            <!-- Head -->
            <circle cx="25" cy="175" r="16" fill="url(#skinGradPL)"/>
            <circle cx="20" cy="173" r="3" fill="#374151"/>
        </svg>
        `,
        animation: "plank"
    }
};

// Default SVG for exercises not in the library
const DEFAULT_EXERCISE_SVG = `
<svg viewBox="0 0 200 300" class="exercise-svg">
    <defs>
        <linearGradient id="skinGradDefault" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f4c79a"/>
            <stop offset="100%" style="stop-color:#e8b68a"/>
        </linearGradient>
        <linearGradient id="muscleActiveDefault" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ff6b6b"/>
            <stop offset="100%" style="stop-color:#ee5a5a"/>
        </linearGradient>
    </defs>

    <!-- Generic standing figure -->
    <rect x="0" y="275" width="200" height="5" fill="#374151"/>

    <ellipse cx="90" cy="270" rx="12" ry="6" fill="url(#skinGradDefault)"/>
    <ellipse cx="110" cy="270" rx="12" ry="6" fill="url(#skinGradDefault)"/>

    <rect x="80" y="195" width="18" height="75" rx="6" fill="url(#skinGradDefault)"/>
    <rect x="102" y="195" width="18" height="75" rx="6" fill="url(#skinGradDefault)"/>

    <ellipse cx="100" cy="150" rx="30" ry="48" fill="url(#skinGradDefault)"/>

    <!-- Generic muscle highlight -->
    <ellipse cx="100" cy="150" rx="20" ry="25" class="muscle-active" fill="url(#muscleActiveDefault)" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite"/>
    </ellipse>

    <circle cx="100" cy="80" r="22" fill="url(#skinGradDefault)"/>
    <circle cx="94" cy="77" r="3" fill="#374151"/>
    <circle cx="106" cy="77" r="3" fill="#374151"/>

    <rect x="58" y="115" width="12" height="50" rx="5" fill="url(#skinGradDefault)"/>
    <rect x="130" y="115" width="12" height="50" rx="5" fill="url(#skinGradDefault)"/>
</svg>
`;

// Muscle name translations for display
const MUSCLE_NAMES = {
    "peitoral": "Chest (Pectoralis)",
    "peitoral-superior": "Upper Chest",
    "triceps": "Triceps",
    "biceps": "Biceps",
    "deltoides-anterior": "Front Deltoid",
    "deltoides-lateral": "Side Deltoid",
    "deltoides-posterior": "Rear Deltoid",
    "latissimo": "Lats (Latissimus Dorsi)",
    "romboides": "Rhomboids",
    "trapezio": "Trapezius",
    "eretores-espinha": "Erector Spinae",
    "quadriceps": "Quadriceps",
    "isquiotibiais": "Hamstrings",
    "gluteos": "Glutes",
    "panturrilha": "Calves",
    "braquial": "Brachialis",
    "antebraco": "Forearms",
    "core": "Core (Abs & Obliques)",
    "corpo-todo": "Full Body"
};

// Function to get exercise SVG with muscles info
function getExerciseSVG(exerciseName) {
    // Try exact match first
    if (EXERCISE_ANIMATIONS[exerciseName]) {
        return EXERCISE_ANIMATIONS[exerciseName];
    }

    // Try partial match
    for (const key in EXERCISE_ANIMATIONS) {
        if (exerciseName.toLowerCase().includes(key.toLowerCase()) ||
            key.toLowerCase().includes(exerciseName.toLowerCase())) {
            return EXERCISE_ANIMATIONS[key];
        }
    }

    // Return default
    return {
        muscles: ["corpo-todo"],
        primaryMuscle: "corpo-todo",
        svg: DEFAULT_EXERCISE_SVG,
        animation: "default"
    };
}

// Function to get muscle display name
function getMuscleDisplayName(muscleId) {
    return MUSCLE_NAMES[muscleId] || muscleId.charAt(0).toUpperCase() + muscleId.slice(1).replace(/-/g, ' ');
}

console.log('Exercise animations library loaded! 💪');
