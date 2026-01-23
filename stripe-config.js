// ============================================
// STRIPE CONFIGURATION
// Replace with your Stripe Payment Link or Checkout URL
// ============================================

// INSTRUCTIONS TO SET UP STRIPE:
// 1. Go to https://dashboard.stripe.com
// 2. Create an account and verify your business
// 3. Go to Products > Add Product
//    - Name: "NutriPlan Premium"
//    - Pricing: $5/month (recurring)
// 4. Go to Payment Links > Create Payment Link
// 5. Copy the payment link URL and paste it below
// 6. In the payment link settings, set:
//    - Success URL: https://yoursite.netlify.app?success=true&session_id={CHECKOUT_SESSION_ID}
//    - Cancel URL: https://yoursite.netlify.app

// Stripe Payment Link (replace with your own)
// Example: "https://buy.stripe.com/your_payment_link"
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/9B6aEZfEc7Nw0V45XwaEE00";

// Stripe Publishable Key (for advanced integration)
const STRIPE_PUBLISHABLE_KEY = "pk_test_your_publishable_key";

// Product ID (for advanced Stripe integration)
const STRIPE_PRODUCT_ID = "price_your_price_id";

/**
 * Initialize Stripe (for advanced checkout integration)
 * This is optional - Payment Links work without this
 */
function initStripe() {
    if (typeof Stripe !== 'undefined' && STRIPE_PUBLISHABLE_KEY !== "pk_test_your_publishable_key") {
        return Stripe(STRIPE_PUBLISHABLE_KEY);
    }
    return null;
}

/**
 * Redirect to Stripe Checkout (advanced method)
 * Use this if you want more control than Payment Links
 */
async function redirectToCheckout() {
    const stripe = initStripe();
    if (!stripe) {
        console.warn('Stripe not configured. Using demo mode.');
        return false;
    }

    try {
        const result = await stripe.redirectToCheckout({
            lineItems: [{ price: STRIPE_PRODUCT_ID, quantity: 1 }],
            mode: 'subscription',
            successUrl: window.location.origin + '?success=true&session_id={CHECKOUT_SESSION_ID}',
            cancelUrl: window.location.origin + '?canceled=true',
        });

        if (result.error) {
            console.error('Stripe error:', result.error.message);
            return false;
        }
    } catch (error) {
        console.error('Checkout error:', error);
        return false;
    }

    return true;
}

console.log('Stripe config loaded. Payment Link:', STRIPE_PAYMENT_LINK ? 'Configured' : 'Demo Mode');
