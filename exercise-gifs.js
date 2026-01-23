// ============================================
// EXERCISE GIF URLs
// GIFs from MuscleWiki and other free sources
// ============================================

const EXERCISE_GIFS = {
    // CHEST EXERCISES
    "Chest Press Machine": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-chestpress-side.mp4",
        fallbackImage: null
    },
    "Barbell Bench Press": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-benchpress-side.mp4",
        fallbackImage: null
    },
    "Bench Press Machine": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-chestpress-side.mp4",
        fallbackImage: null
    },
    "Incline Dumbbell Press": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-benchpress-side.mp4",
        fallbackImage: null
    },
    "Cable Fly": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-standing-chest-fly-front.mp4",
        fallbackImage: null
    },
    "Cable Crossover": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-standing-chest-fly-front.mp4",
        fallbackImage: null
    },
    "Pec Deck Fly": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-pecdeck-front.mp4",
        fallbackImage: null
    },
    "Dumbbell Fly": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-fly-side.mp4",
        fallbackImage: null
    },
    "Decline Press": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-decline-benchpress-side.mp4",
        fallbackImage: null
    },
    "Dips (assisted)": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dip-side.mp4",
        fallbackImage: null
    },
    "Dips (weighted)": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dip-side.mp4",
        fallbackImage: null
    },
    "Push-Ups": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pushup-side.mp4",
        fallbackImage: null
    },

    // BACK EXERCISES
    "Lat Pulldown": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-widegrip-lat-pulldown-front.mp4",
        fallbackImage: null
    },
    "Wide Grip Lat Pulldown": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-widegrip-lat-pulldown-front.mp4",
        fallbackImage: null
    },
    "Seated Cable Row": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-seated-row-side.mp4",
        fallbackImage: null
    },
    "Seated Row": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-seated-row-side.mp4",
        fallbackImage: null
    },
    "Cable Row": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-seated-row-side.mp4",
        fallbackImage: null
    },
    "Single Arm Dumbbell Row": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-bent-over-row-side.mp4",
        fallbackImage: null
    },
    "Dumbbell Row": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-bent-over-row-side.mp4",
        fallbackImage: null
    },
    "Single Arm Row": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-bent-over-row-side.mp4",
        fallbackImage: null
    },
    "Barbell Row": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-bent-over-row-side.mp4",
        fallbackImage: null
    },
    "Bent Over Barbell Row": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-bent-over-row-side.mp4",
        fallbackImage: null
    },
    "T-Bar Row": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-lever-t-bar-row-side.mp4",
        fallbackImage: null
    },
    "Deadlift": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-deadlift-side.mp4",
        fallbackImage: null
    },
    "Pull-Ups (or Assisted)": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4",
        fallbackImage: null
    },
    "Weighted Pull-Ups": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4",
        fallbackImage: null
    },
    "Straight Arm Pulldown": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-straight-arm-pulldown-side.mp4",
        fallbackImage: null
    },
    "Face Pull": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-face-pull-side.mp4",
        fallbackImage: null
    },
    "Hyperextension": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-back-extension-side.mp4",
        fallbackImage: null
    },

    // LEG EXERCISES
    "Leg Press": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-leg-press-side.mp4",
        fallbackImage: null
    },
    "Leg Extension": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-leg-extension-side.mp4",
        fallbackImage: null
    },
    "Leg Curl": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-lying-leg-curl-side.mp4",
        fallbackImage: null
    },
    "Lying Leg Curl": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-lying-leg-curl-side.mp4",
        fallbackImage: null
    },
    "Seated Leg Curl": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-seated-leg-curl-side.mp4",
        fallbackImage: null
    },
    "Barbell Squat": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-squat-side.mp4",
        fallbackImage: null
    },
    "Smith Machine Squat": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-smith-squat-side.mp4",
        fallbackImage: null
    },
    "Hack Squat": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-hack-squat-side.mp4",
        fallbackImage: null
    },
    "Front Squat": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-front-squat-side.mp4",
        fallbackImage: null
    },
    "Goblet Squat": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-goblet-squat-front.mp4",
        fallbackImage: null
    },
    "Walking Lunges": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-lunges-side.mp4",
        fallbackImage: null
    },
    "Bulgarian Split Squat": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-bulgarian-split-squat-side.mp4",
        fallbackImage: null
    },
    "Romanian Deadlift": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-romanian-deadlift-side.mp4",
        fallbackImage: null
    },
    "Romanian Deadlift (dumbbell)": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-romanian-deadlift-side.mp4",
        fallbackImage: null
    },
    "Hip Thrust Machine": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-hip-thrust-side.mp4",
        fallbackImage: null
    },
    "Hip Abductor": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-hip-abductor-front.mp4",
        fallbackImage: null
    },
    "Standing Calf Raise": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-standing-calf-raise-side.mp4",
        fallbackImage: null
    },
    "Seated Calf Raise": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-seated-calf-raise-side.mp4",
        fallbackImage: null
    },
    "Calf Raise": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-standing-calf-raise-side.mp4",
        fallbackImage: null
    },

    // SHOULDER EXERCISES
    "Shoulder Press Machine": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-shoulder-press-side.mp4",
        fallbackImage: null
    },
    "Dumbbell Shoulder Press": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-shoulder-press-side.mp4",
        fallbackImage: null
    },
    "Overhead Press": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-side.mp4",
        fallbackImage: null
    },
    "Military Press": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-side.mp4",
        fallbackImage: null
    },
    "Arnold Press": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-arnold-press-front.mp4",
        fallbackImage: null
    },
    "Lateral Raise": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-lateral-raise-front.mp4",
        fallbackImage: null
    },
    "Front Raise": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-front-raise-side.mp4",
        fallbackImage: null
    },
    "Cable Front Raise": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-front-raise-side.mp4",
        fallbackImage: null
    },
    "Reverse Fly Machine": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-reverse-fly-side.mp4",
        fallbackImage: null
    },
    "Reverse Fly": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-reverse-fly-side.mp4",
        fallbackImage: null
    },
    "Rear Delt Fly": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-reverse-fly-side.mp4",
        fallbackImage: null
    },
    "Upright Row": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-upright-row-front.mp4",
        fallbackImage: null
    },
    "Shrugs": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-shrug-front.mp4",
        fallbackImage: null
    },

    // BICEPS EXERCISES
    "Barbell Curl": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-curl-side.mp4",
        fallbackImage: null
    },
    "EZ Bar Curl": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-curl-side.mp4",
        fallbackImage: null
    },
    "Hammer Curl": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-hammer-curl-side.mp4",
        fallbackImage: null
    },
    "Incline Dumbbell Curl": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-curl-side.mp4",
        fallbackImage: null
    },
    "Preacher Curl": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-preacher-curl-side.mp4",
        fallbackImage: null
    },
    "Concentration Curl": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-concentration-curl-side.mp4",
        fallbackImage: null
    },

    // TRICEPS EXERCISES
    "Tricep Pushdown": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-pushdown-side.mp4",
        fallbackImage: null
    },
    "Rope Pushdown": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-rope-pushdown-side.mp4",
        fallbackImage: null
    },
    "Tricep Pushdown (rope)": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-rope-pushdown-side.mp4",
        fallbackImage: null
    },
    "Overhead Tricep Extension": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-overhead-extension-side.mp4",
        fallbackImage: null
    },
    "Overhead Extension": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-dumbbell-overhead-extension-side.mp4",
        fallbackImage: null
    },
    "Skull Crushers": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-skull-crusher-side.mp4",
        fallbackImage: null
    },
    "Close Grip Bench Press": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-close-grip-benchpress-side.mp4",
        fallbackImage: null
    },
    "Close Grip Bench": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-barbell-close-grip-benchpress-side.mp4",
        fallbackImage: null
    },
    "Tricep Dips": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dip-side.mp4",
        fallbackImage: null
    },
    "Parallel Dips": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dip-side.mp4",
        fallbackImage: null
    },
    "Weighted Dips": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dip-side.mp4",
        fallbackImage: null
    },
    "Diamond Push-Ups": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-diamond-pushup-side.mp4",
        fallbackImage: null
    },

    // ABS/CORE EXERCISES
    "Cable Crunch": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-cable-crunch-side.mp4",
        fallbackImage: null
    },
    "Ab Machine": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-machine-crunch-side.mp4",
        fallbackImage: null
    },
    "Plank": {
        gifUrl: "https://www.musclewiki.com/media/uploads/videos/branded/male-bodyweight-plank-side.mp4",
        fallbackImage: null
    },

    // CARDIO (these typically don't have muscle videos, using placeholders)
    "Treadmill Intervals": {
        gifUrl: null,
        fallbackImage: null
    },
    "Elliptical": {
        gifUrl: null,
        fallbackImage: null
    },
    "Stair Climber": {
        gifUrl: null,
        fallbackImage: null
    },
    "Rowing Machine": {
        gifUrl: null,
        fallbackImage: null
    }
};

/**
 * Get GIF URL for an exercise
 * @param {string} exerciseName - Name of the exercise
 * @returns {string|null} - GIF URL or null if not found
 */
function getExerciseGif(exerciseName) {
    const exerciseData = EXERCISE_GIFS[exerciseName];
    if (exerciseData && exerciseData.gifUrl) {
        return exerciseData.gifUrl;
    }
    return null;
}

console.log('Exercise GIFs library loaded successfully!');
