const { defineConfig } = require('@playwright/test');

const isHeadless = process.env.HEADLESS === 'true';
const browserName = process.env.BROWSER || 'chromium'; // Default to chromium if not specified

module.exports = defineConfig({
    use: {
        headless: isHeadless, // Use headless mode based on environment variable
        browserName: browserName, // Use specified browser or default to chromium
    },
    reporter: 'html',
    timeout: 30000,
    retries: 1,
    workers: parseInt(process.env.WORKERS) || 4,
});