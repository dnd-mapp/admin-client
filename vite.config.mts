/// <reference types="vitest/config" />
import angular from '@analogjs/vite-plugin-angular';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [angular(), viteTsConfigPaths()],
    test: {
        browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: 'chromium' }],
            provider: playwright(),
        },
        coverage: {
            enabled: true,
            exclude: ['**/index.ts'],
            include: ['src/app/**/*.ts'],
            provider: 'v8',
            reporter: ['text-summary', 'html'],
            reportsDirectory: 'reports/unit-tests/coverage',
        },
        globals: true,
        include: ['src/**/*.spec.ts'],
        reporters: [
            'dot',
            ['html', { outputFile: 'reports/unit-tests/index.html' }],
            ...(process.env['GITHUB_ACTIONS'] ? ['github-actions'] : []),
        ],
        setupFiles: ['test/setup-test.ts'],
    },
});
