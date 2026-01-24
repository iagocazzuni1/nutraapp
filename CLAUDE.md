# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NutriPlan is a personalized nutrition and workout planning web application targeting American users. Users fill out a form with personal data, and the app generates customized meal plans (with recipes) and workout routines based on their goals. Includes a freemium model with premium content gating.

## Tech Stack

- Pure HTML, CSS, and JavaScript (no frameworks)
- Firebase Authentication (optional, with localStorage fallback)
- Stripe Checkout for payments (configurable)
- No build process required - open `index.html` directly in a browser

## Architecture

### File Structure

- **index.html** - Main page with form, results section, and modals (login, premium, recipe, workout)
- **styles.css** - All styling with CSS custom properties for theming
- **data.js** - Static database containing recipes, meal plans, workouts, and tips
- **exercises.js** - SVG animations for each exercise with muscle highlighting
- **exercise-gifs.js** - Video URLs (MP4) from MuscleWiki for exercise demos
- **app.js** - Core application logic: calculations, form handling, content generation
- **auth.js** - Authentication system: Firebase or localStorage, premium status, Stripe integration
- **firebase-config.js** - Firebase project configuration (replace with your own)
- **stripe-config.js** - Stripe payment link configuration
- **netlify.toml** - Netlify deployment configuration

### Data Flow

1. User fills form in `index.html`
2. `app.js` collects form data and calculates:
   - BMR (Basal Metabolic Rate) using Mifflin-St Jeor formula
   - TDEE (Total Daily Energy Expenditure) based on activity level + gym frequency
   - Adjusted calories: -20% for weight loss, +15% for muscle gain
   - Macros (protein, carbs, fat) based on goal and body weight
3. Content generators pull from `data.js` to create personalized meal/workout plans
4. Results displayed with expandable dropdowns and modal popups for details
5. Premium content (recipes, workouts) requires authentication via `auth.js`

### Key Data Structures

**data.js:**
- `RECIPES` - Organized by goal (`emagrecer`/`manter`/`ganharMassa`) and meal type, each with `youtubeId` for video tutorials
- `MEAL_PLANS` - Calorie distribution templates per goal
- `WORKOUTS` - 9 combinations: 3 experience levels × 3 goals
- `TIPS` - Goal-specific advice arrays
- `SUPPLEMENTS` - Goal-specific supplement recommendations with benefits and timing

**exercises.js:**
- `BODY_TEMPLATES` - Front and back anatomical SVG templates with all muscle groups
- `EXERCISE_ANIMATIONS` - Object with exercise names as keys, containing `muscles[]`, `primaryMuscle`, `view` (front/back), and dynamic `svg` getter
- `generateAnatomicalSVG(view, activeMuscles, primaryMuscle)` - Generates SVG with highlighted muscles in red
- `getMuscleDisplayName(muscle)` - Translates internal muscle names to English display names
- `getExerciseSVG(exerciseName)` - Returns exercise data with SVG (backwards compatible)

**exercise-gifs.js:**
- `EXERCISE_GIFS` - Object with exercise names as keys, containing `gifUrl` (MP4 video URL from MuscleWiki)

### Calculation Formulas (app.js)

- **BMR Male**: `(10 × weight_kg) + (6.25 × height_cm) - (5 × age) + 5`
- **BMR Female**: `(10 × weight_kg) + (6.25 × height_cm) - (5 × age) - 161`
- **Protein**: `0.8-1.0g per lb body weight` (varies by goal)
- Units: Form uses lbs/inches, converted internally to metric for calculations

### Modal System

Four modals: login, premium upgrade, recipe details, workout details. All share:
- `.modal.active` class to show
- `openModal(id)` / `closeModal(id)` functions in app.js
- Click outside or Escape key to close

### Authentication System (auth.js)

Hybrid system supporting Firebase Auth with localStorage fallback:
- `isLoggedIn()` / `isPremium()` - Status checks
- `loginUser(email, password)` / `registerUser(name, email, password)` - Async functions
- `upgradeToPremium()` - Redirects to Stripe or demo upgrade
- `handlePaymentSuccess()` - Processes Stripe return URL

localStorage keys:
- `nutriplan_users` - Array of registered users
- `nutriplan_current_user` - Currently logged in user object
- `nutriplan_user_plan_{userId}` - User's saved plan with expiration

### Plan Persistence System (auth.js + app.js)

Users can save their plan for a set duration (30/60/90 days). During this period:
- Plan is locked and cannot be regenerated
- Plan loads automatically on login or page refresh
- Status banner shows days remaining

Key functions in `auth.js`:
- `saveUserPlan(plan)` / `loadUserPlan()` - Save/load plan from localStorage
- `isPlanLocked()` / `getPlanDaysRemaining()` - Check plan status
- `getPlanStatus()` - Returns full status object for UI
- `updatePlanStatusUI()` - Updates banner and button states

Plan data structure:
```javascript
{
  userData: { name, age, sex, height, weight, goal, experience, planDuration, ... },
  calculations: { bmr, tdee, calories, macros },
  createdAt: "ISO date",
  expiresAt: "ISO date"
}
```

### Freemium Model

- **Free**: Nutritional calculations (BMR, TDEE, calories, macros), blurred exercise previews
- **Premium ($5/month)**: Recipe details with videos, workout details with exercise videos

Content gating: `openRecipeModal()` and `openWorkoutModal()` check `isPremium()`.
Blur effect: `.workout-preview-locked` class applied when `!isPremium()` in `generateWorkoutPlan()`.

### Supplements Section

`generateSupplementsSection(goal)` in app.js creates goal-specific supplement recommendations:
- Weight Loss: Thermogenic, CLA, L-Carnitine
- Maintenance: Multivitamin, Omega-3, Vitamin D3
- Muscle Gain: Whey Protein, Creatine, Mass Gainer, BCAAs

Each supplement card shows: icon, name, description, benefits list, timing, and purchase link placeholder.

### Portuguese Variable Names

Internal code uses Portuguese naming (historical):
- `emagrecer` = weight loss, `manter` = maintenance, `ganharMassa` = muscle gain
- `iniciante`/`intermediario`/`avancado` = beginner/intermediate/advanced
- `sexo`: `masculino`/`feminino` = male/female

## Deployment

**Netlify (recommended):**
1. Drag folder to app.netlify.com, or
2. Connect GitHub repo and deploy automatically

See `DEPLOY.md` for full Firebase and Stripe configuration instructions.

## Running Locally

Simply open `index.html` in a browser. No server required for basic functionality.
Firebase and Stripe features require configuration in their respective config files.

For local development with a server:
```bash
npx serve -l 8080
```

### Testing Premium Features

To test premium features without payment, run in browser console:
```javascript
let user = JSON.parse(localStorage.getItem('nutriplan_current_user'));
user.isPremium = true;
localStorage.setItem('nutriplan_current_user', JSON.stringify(user));
location.reload();
```

### Testing Plan Expiration

To force plan expiration for testing:
```javascript
let plan = loadUserPlan();
plan.expiresAt = new Date(Date.now() - 1000).toISOString();
localStorage.setItem('nutriplan_user_plan_' + getCurrentUser().id, JSON.stringify(plan));
location.reload();
```
