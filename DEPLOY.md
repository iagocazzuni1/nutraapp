# NutriPlan - Deploy Guide

## Quick Deploy to Netlify

### Option 1: Drag & Drop (Fastest)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up or login
3. Drag the entire `Projeto APP nutri` folder to the browser
4. Your site will be live at `https://random-name.netlify.app`
5. Click "Site settings" > "Change site name" to customize URL

### Option 2: GitHub + Netlify (Recommended for updates)

1. Create a GitHub account at [github.com](https://github.com)
2. Install [GitHub Desktop](https://desktop.github.com) or use command line
3. Create a new repository and push this code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/nutriplan.git
   git push -u origin main
   ```
4. Go to [app.netlify.com](https://app.netlify.com)
5. Click "Add new site" > "Import an existing project"
6. Connect GitHub and select your repository
7. Deploy settings are auto-configured via `netlify.toml`

---

## Configure Firebase (Optional - for production auth)

### Step 1: Create Firebase Project
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click "Add project"
3. Name it "nutriplan" (or any name)
4. Disable Google Analytics (optional)
5. Click "Create project"

### Step 2: Enable Authentication
1. In Firebase console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password"

### Step 3: Get Configuration
1. Go to Project Settings (gear icon)
2. Under "Your apps", click web icon (</>)
3. Register app with nickname "nutriplan-web"
4. Copy the config object

### Step 4: Update firebase-config.js
Replace the placeholder values with your actual config:
```javascript
const firebaseConfig = {
    apiKey: "AIza...",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

---

## Configure Stripe (For real payments)

### Step 1: Create Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Sign up for an account
3. Complete business verification (requires bank account)

### Step 2: Create Product
1. Go to Stripe Dashboard > Products
2. Click "Add product"
3. Name: "NutriPlan Premium"
4. Price: $5.00 USD, Recurring monthly

### Step 3: Create Payment Link
1. Go to Stripe Dashboard > Payment Links
2. Click "Create payment link"
3. Select your "NutriPlan Premium" product
4. In "After payment", set:
   - Confirmation page: "Don't show"
   - Redirect: `https://YOUR-SITE.netlify.app?success=true`
5. Copy the payment link URL

### Step 4: Update stripe-config.js
```javascript
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/your_link_here";
```

---

## Environment Variables (Netlify)

For extra security, you can store API keys in Netlify environment variables:

1. Go to Netlify Dashboard > Site settings > Environment variables
2. Add variables:
   - `FIREBASE_API_KEY`
   - `STRIPE_PAYMENT_LINK`

Then update your config files to use `process.env` or inject via build script.

---

## Checklist Before Going Live

- [ ] Test registration/login flow
- [ ] Test premium upgrade flow
- [ ] Verify recipe videos load
- [ ] Verify exercise animations work
- [ ] Test on mobile devices
- [ ] Configure custom domain (optional)
- [ ] Set up Stripe webhooks for subscription management (advanced)

---

## Costs Summary

| Service | Free Tier | Notes |
|---------|-----------|-------|
| Netlify | 100GB bandwidth/month | Plenty for starting |
| Firebase Auth | 10K MAU | Free for most apps |
| Stripe | No monthly fee | 2.9% + $0.30 per transaction |

**Total startup cost: $0**
**Per transaction: ~$0.45 on $5 subscription**

---

## Support

For issues or questions, check:
- [Netlify Docs](https://docs.netlify.com)
- [Firebase Docs](https://firebase.google.com/docs)
- [Stripe Docs](https://stripe.com/docs)
