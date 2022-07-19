import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';
import { defaultReporter, summaryReporter } from '@web/test-runner';

export default {
    files: ['tests/**/*.test.ts'],
    plugins: [esbuildPlugin({ ts: true })],
    browsers: [
        playwrightLauncher({ product: 'chromium' }),
    ],
    reporters: [
        summaryReporter(),
        defaultReporter({
            reportTestResults: true,
            reportTestProgress: true,
        }),
    ],
    coverageConfig: {
        report: true,
        reportDir: 'coverage',
        threshold: {
            statements: 1,
            branches: 1,
            functions: 1,
            lines: 1,
        },
    },
};
