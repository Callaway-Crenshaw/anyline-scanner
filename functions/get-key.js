// This script runs securely on the Netlify server, not in the browser.
// It securely retrieves the license key from an environment variable.

exports.handler = async function(event, context) {
    // NOTE: Replace 'ANYLINE_LICENSE_KEY' with the actual name of your key in Netlify settings.
    const ANYLINE_LICENSE_KEY = process.env.ANYLINE_LICENSE_KEY;

    // Check if the key is available
    if (!ANYLINE_LICENSE_KEY) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "License key not configured." })
        };
    }

    // Return the key as JSON
    return {
        statusCode: 200,
        headers: {
            // Allows the front-end (web2.html) to access this function
            "Access-Control-Allow-Origin": "*", 
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: ANYLINE_LICENSE_KEY })
    };
};
