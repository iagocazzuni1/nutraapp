/**
 * Amazon Affiliate Links Module
 * Generates Amazon search links with affiliate tag for ingredients
 */

const AMAZON_TAG = 'nutraapp-20';

/**
 * Generates an Amazon search link for an ingredient
 * Removes quantities and measurements to create clean search terms
 * @param {string} ingredient - The ingredient text (e.g., "2 cups diced chicken breast")
 * @returns {string} - Amazon search URL with affiliate tag
 */
function getAmazonLink(ingredient) {
    // Remove quantities and common measurements
    const searchTerm = ingredient
        .replace(/^\d+\/?\d*\s*/g, '') // Remove leading numbers like "2", "1/2"
        .replace(/\b(cup|cups|tbsp|tsp|tablespoon|tablespoons|teaspoon|teaspoons|oz|ounce|ounces|lb|lbs|pound|pounds|g|grams|ml|milliliters|l|liters|bunch|bunches|clove|cloves|slice|slices|piece|pieces|medium|large|small|whole|fresh|ripe|diced|sliced|minced|chopped|shredded|grated|crushed|peeled|trimmed|boneless|skinless|cooked|raw|frozen|canned|dried|to taste|optional|or more|as needed)\b\s*/gi, '')
        .replace(/\s+/g, ' ')
        .trim();

    const encoded = encodeURIComponent(searchTerm);
    return `https://www.amazon.com/s?k=${encoded}&tag=${AMAZON_TAG}`;
}
