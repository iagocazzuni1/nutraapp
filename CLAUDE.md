# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FluxFit is a personalized nutrition and workout planning web application. Users fill out a form with personal data, and the app generates customized meal plans (with recipes) and workout routines based on their goals. Includes a freemium model with premium content gating.

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
- **auth.js** - Authentication system with Firebase/localStorage hybrid. Handles login, registration, premium status, plan persistence. Contains `onAuthStateChanged` listener that handles page-specific auth state updates. Login always falls back to localStorage if Firebase fails. Premium status is checked in both `nutriplan_current_user` and `nutriplan_users` array to persist across logout.
- **data.js** - Static database: recipes, meal plans, workouts, tips, supplements.
- **exercises.js** - SVG anatomical templates with muscle highlighting for exercise demos. Uses `generateAnatomicalSVG()` which generates unique IDs per SVG instance to avoid gradient/filter ID conflicts when multiple exercises are rendered.
- **exercise-gifs.js** - Maps exercise names to video demonstration URLs.
- **affiliate-links.js** - Amazon affiliate link generator. Uses `getAmazonLink(ingredient)` to create search URLs with affiliate tag (`nutraapp-20`). Strips quantities and measurements from ingredient text for cleaner search terms.
- **security-utils.js** - Security utility functions including password hashing (PBKDF2), HTML escaping for XSS prevention, and form data validation.

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

### Nutritional Calculations (app.js)

- **BMR**: Mifflin-St Jeor formula (different for male/female)
- **TDEE**: BMR × activity factor + gym adjustment
- **Goal adjustment**: Weight loss = TDEE × 0.80, Muscle gain = TDEE × 1.15
- **Macros**: Protein based on body weight (0.8-1.0g/lb), remaining split between carbs/fat

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

### Firestore Sync (Cross-Device)

Uses cache-first pattern: localStorage = cache, Firestore = source of truth.

**Firestore Structure:**
```
users/{userId}
  ├── name, email, isPremium, premiumSince, createdAt
  └── plans/current/ (userData, calculations, createdAt, expiresAt)
```

**Key Sync Functions (auth.js):**
- `syncUserFromFirestore(userId)` - Pulls user data from Firestore to localStorage
- `syncPlanFromFirestore(userId)` - Pulls plan from Firestore to localStorage
- `migratePlanToFirestoreIfNeeded(userId)` - Uploads local plan to Firestore if not already there (handles pre-sync plans)
- `createUserInFirestore(userData)` - Creates user doc on registration
- `updatePremiumInFirestore(userId, isPremium, premiumSince)` - Syncs premium status
- `syncPlanToFirestore(userId, plan)` - Pushes plan to Firestore

**Sync Triggers:**
- Login/Google Sign-In: migrates local plan if needed, then syncs user + plan FROM Firestore
- Registration: creates user IN Firestore
- Save Plan: syncs plan TO Firestore
- Upgrade Premium: syncs premium TO Firestore

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
// Set premium for testing (requires premiumValidated or stripeSessionId)
let user = JSON.parse(localStorage.getItem('nutriplan_current_user'));
user.isPremium = true;
user.premiumValidated = true;  // Required for premium to work
// OR use: user.stripeSessionId = 'test_session_123';
localStorage.setItem('nutriplan_current_user', JSON.stringify(user));

let users = JSON.parse(localStorage.getItem('nutriplan_users') || '[]');
let idx = users.findIndex(u => u.email === user.email);
if (idx !== -1) {
    users[idx].isPremium = true;
    users[idx].premiumValidated = true;
    localStorage.setItem('nutriplan_users', JSON.stringify(users));
}
location.reload();
```

**Note:** Simply setting `isPremium = true` without `premiumValidated` or `stripeSessionId` will NOT grant premium access (security feature).

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

### Debug Firestore Sync

```javascript
// Test Firestore sync (requires Firebase Auth login)
async function testFirestoreSync() {
    const user = getCurrentUser();
    if (!user) { console.log('Not logged in'); return; }
    console.log('Local user:', user);
    const fsUser = await syncUserFromFirestore(user.id);
    console.log('Firestore user:', fsUser);
    const fsPlan = await syncPlanFromFirestore(user.id);
    console.log('Firestore plan:', fsPlan);
}
testFirestoreSync();
```

## Configuration

- **firebase-config.js** - Replace placeholder values with your Firebase project config
- **stripe-config.js** - Set `STRIPE_PAYMENT_LINK` to your Stripe payment link URL

### Affiliate Configuration

Amazon affiliate tag is hardcoded in `affiliate-links.js` as `nutraapp-20`. To change, update the `AFFILIATE_TAG` constant.

## Cache Busting

All scripts use query string versioning (`?v=N`) to force browser cache refresh after deployments. When making changes to JS files, increment the version in all HTML files:

```html
<script src="auth.js?v=8"></script>
```

Files with versioning: `styles.css`, `firebase-config.js`, `stripe-config.js`, `data.js`, `exercises.js`, `exercise-gifs.js`, `affiliate-links.js`, `security-utils.js`, `auth.js`, `app.js`

## Security

### Password Storage

Passwords are hashed using PBKDF2 with SHA-256 (100,000 iterations) via the Web Crypto API. Each user has a unique salt stored alongside their password hash. Legacy plain-text passwords are automatically migrated to hashed format on successful login.

**User object structure:**
```javascript
{
    id: "...",
    email: "...",
    passwordHash: "base64-encoded-hash",  // Replaces plain 'password'
    salt: "base64-encoded-salt",
    // ...
}
```

### Premium Validation

Premium status requires server-side validation to prevent localStorage manipulation:
- `premiumValidated: true` - Set when premium is confirmed from Firestore
- `stripeSessionId` - Required for localStorage-only premium (Stripe payment proof)
- The `isPremium()` function checks both flags before granting access

### XSS Prevention

All user-provided data is escaped before rendering in HTML:
- `escapeHtml(str)` - Escapes HTML special characters
- `sanitizeAttribute(str)` - Escapes strings for use in HTML attributes
- `validateFormData(data)` - Validates and sanitizes form input

### Form Validation

Form data is validated before processing:
- Type checking (strings, numbers, valid enum values)
- Range validation (age 13-120, weight 50-700 lbs, etc.)
- Sanitization of string inputs (max lengths, trimming)

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

### "Premium not persisting after logout"
- Premium must be saved in BOTH `nutriplan_current_user` AND `nutriplan_users` array
- Use the full premium test command that updates both locations
- Firebase login checks both locations for premium status

### "Old code running after deploy"
- Browser may cache old JS files - increment version numbers in HTML (`?v=N`)
- Hard refresh (Ctrl+Shift+R) to force reload

### "Accounts not appearing in Firestore"
- Accounts created before Firestore sync only exist in localStorage
- User must login again to trigger sync and create Firestore document

### "Premium not syncing across devices"
- Check Firestore rules allow read/write for authenticated user
- Verify `updatePremiumInFirestore()` is being called
- Use Debug Firestore Sync code to check sync status

### "Plan not appearing on other devices"
- Plans created before Firestore sync only exist in localStorage on the original device
- User must login on the original device first to trigger `migratePlanToFirestoreIfNeeded()`
- After migration, logout/login on other devices will sync the plan

## Deployment

See `DEPLOY.md` for Netlify deployment, Firebase setup, and Stripe configuration.
