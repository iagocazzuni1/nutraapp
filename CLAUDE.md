# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NutriPlan is a personalized nutrition and workout planning web application. Users fill out a form with personal data, and the app generates customized meal plans (with recipes) and workout routines based on their goals. Includes a freemium model with premium content gating.

## Tech Stack

- Pure HTML, CSS, and JavaScript (no frameworks)
- Firebase Authentication (optional, with localStorage fallback)
- Stripe Checkout for payments (configurable)
- No build process required

## Running Locally

```bash
# Simple - open index.html directly in browser

# With local server (recommended for testing)
npx serve -l 8080
```

## Architecture

### Multi-Page Structure

| Page | Purpose |
|------|---------|
| `index.html` | Landing page with login/register modals |
| `planner.html` | Form page for creating personalized plans |
| `my-plan.html` | Results page for viewing saved plans |

**Navigation Flow:**
```
index.html → "Get Your Plan" → planner.html
planner.html → Submit (logged in) → my-plan.html
planner.html → Submit (not logged in) → login modal → my-plan.html
my-plan.html → "Start Over" → planner.html
```

### Key JavaScript Files

- **app.js** - Core logic: calculations, form handling, content generation. Detects current page via `currentPage` variable and calls appropriate init function (`initPlannerPage()`, `initMyPlanPage()`, `initLandingPage()`). Uses 500ms timeout on DOMContentLoaded to wait for Firebase.
- **auth.js** - Authentication system with Firebase/localStorage hybrid. Handles login, registration, premium status, plan persistence. Contains `onAuthStateChanged` listener that handles page-specific auth state updates.
- **data.js** - Static database: recipes, meal plans, workouts, tips, supplements.
- **exercises.js** - SVG anatomical templates with muscle highlighting for exercise demos.
- **exercise-gifs.js** - Maps exercise names to video demonstration URLs.

### Data Flow

1. User fills form in `planner.html`
2. If not logged in: data saved to `nutriplan_pending_form`, login modal shown
3. After auth (login/register/Google): pending data retrieved, plan generated
4. `app.js` calculates BMR → TDEE → adjusted calories → macros
5. Plan saved to localStorage (`nutriplan_user_plan_{userId}`), redirects to `my-plan.html`
6. `my-plan.html` calls `initMyPlanPage()` which checks for pending data first, then loads existing plan via `loadExistingPlan()`

### Meal Plan Selection Logic

`selectMeals(allMeals, numMeals)` prioritizes main meals over snacks:
- 3 meals → Breakfast, Lunch, Dinner
- 4 meals → Breakfast, Morning Snack, Lunch, Dinner
- 5+ meals → All meals including snacks

### Workout Plan Frequency Adaptation

`generateWorkoutPlan(experience, goal, gymFrequency)` adapts based on frequency:
- Frequency 0 → "No workout" message with activity tips
- Frequency 1-2 → 2 workout days
- Frequency 3-4 → 3 workout days
- Frequency 5-6+ → 4 workout days

### Plan Persistence

Plans are locked for a duration (30/60/90 days):
- `isPlanLocked()` / `getPlanDaysRemaining()` - Check status
- `saveUserPlan(plan)` / `loadUserPlan()` - Persistence
- Plan data includes: `userData`, `calculations`, `createdAt`, `expiresAt`

### Freemium Model

- **Free**: Nutritional calculations (BMR, TDEE, calories, macros), blurred exercise previews
- **Premium ($5/month)**: Recipe details with videos, workout details with exercise videos

Content gating via `isPremium()` check in `openRecipeModal()` and `openWorkoutModal()`.

### Portuguese Variable Names (Historical)

- Goals: `emagrecer` (weight loss), `manter` (maintenance), `ganharMassa` (muscle gain)
- Experience: `iniciante`/`intermediario`/`avancado`
- Sex: `masculino`/`feminino`

### localStorage Keys

- `nutriplan_users` - Array of registered users
- `nutriplan_current_user` - Currently logged in user
- `nutriplan_user_plan_{userId}` - User's saved plan
- `nutriplan_pending_form` - Temporary form data before account creation

### Authentication Flow (Critical)

The auth flow across pages requires careful timing due to Firebase async initialization:

1. **Login modal** exists on all 3 pages (index, planner, my-plan)
2. **onAuthStateChanged** in auth.js handles state changes per page:
   - `my-plan.html`: Calls `initMyPlanPage()` on login, shows "no plan" on logout
   - `planner.html`: Processes pending data or redirects to my-plan if user has active plan
3. **Pending form data** flow: Form submit → save to `nutriplan_pending_form` → show login modal → auth handler retrieves pending data → `generateAndDisplayResults()` → redirect to my-plan

### Key Functions Cross-Reference

| Function | File | Purpose |
|----------|------|---------|
| `generateAndDisplayResults(data)` | app.js | Calculates plan, saves it, redirects to my-plan |
| `initMyPlanPage()` | app.js | Checks pending data first, then loads existing plan |
| `loadExistingPlan()` | app.js | Loads saved plan and renders it |
| `saveUserPlan(plan)` | auth.js | Persists plan to localStorage |
| `getPendingFormData()` | auth.js | Retrieves temp form data |
| `onAuthStateChanged` | auth.js | Firebase listener, triggers page init |

## Testing

### Test Premium Features (browser console)

```javascript
let user = JSON.parse(localStorage.getItem('nutriplan_current_user'));
user.isPremium = true;
localStorage.setItem('nutriplan_current_user', JSON.stringify(user));
location.reload();
```

### Test Plan Expiration (browser console)

```javascript
let plan = loadUserPlan();
plan.expiresAt = new Date(Date.now() - 1000).toISOString();
localStorage.setItem('nutriplan_user_plan_' + getCurrentUser().id, JSON.stringify(plan));
location.reload();
```

### Clear All Data (browser console)

```javascript
localStorage.clear();
location.reload();
```

### Debug Auth State

```javascript
console.log('Logged in:', isLoggedIn());
console.log('Current user:', getCurrentUser());
console.log('Pending form:', getPendingFormData());
console.log('User plan:', loadUserPlan());
console.log('Plan locked:', isPlanLocked());
```

## Configuration

- **firebase-config.js** - Replace placeholder values with your Firebase project config
- **stripe-config.js** - Set `STRIPE_PAYMENT_LINK` to your Stripe payment link URL

## Common Issues

### "Plan not loading after login"
- Check that `onAuthStateChanged` is calling `initMyPlanPage()` on my-plan.html
- Verify 500ms timeout in app.js DOMContentLoaded allows Firebase to init
- Check browser console for pending form data with `getPendingFormData()`

### "Login redirects instead of opening modal"
- Ensure the page has the `#loginModal` element (all 3 pages should have it)
- Check `updateNavAuth()` in auth.js - it checks for modal existence

### "Plan generated but not saved"
- Verify `isLoggedIn()` returns true before `saveUserPlan()` is called
- Check `generateAndDisplayResults()` saves plan before redirecting

## Deployment

See `DEPLOY.md` for Netlify deployment, Firebase setup, and Stripe configuration.
