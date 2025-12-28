import { config } from '@dotenvx/dotenvx';
import { defineConfig, devices, ReporterDescription } from '@playwright/test';

config({ path: '.env.local', strict: false, ignore: ['MISSING_ENV_FILE'] });

const isCI = Boolean(process.env['CI'] === 'true');

const baseUrl = isCI ? 'http://localhost:4200' : 'https://localhost.admin.dndmapp.dev:4200';

let reporters: ReporterDescription[] = [['html', { outputFolder: '../reports/e2e-tests' }], ['dot']];

if (isCI) {
    reporters = [...reporters, ['github']];
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './src',
    fullyParallel: true,
    forbidOnly: isCI,
    retries: isCI ? 0 : 2,
    reporter: [...reporters],
    outputDir: '../reports/e2e-tests',
    use: {
        baseURL: `${baseUrl}/`,
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
    // TODO: Adjust once a dedicated test environment has been set up
    webServer: {
        command: isCI ? 'pnpm run start:http' : 'pnpm start',
        ignoreHTTPSErrors: !isCI,
        reuseExistingServer: !isCI,
        url: baseUrl,
    },
});
