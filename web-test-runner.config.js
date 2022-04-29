import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
    files: ['src/**/*.test.ts'],
    plugins: [esbuildPlugin({ ts: true })],
    browsers: [
        playwrightLauncher({ product: 'chromium' }),
        playwrightLauncher({ product: 'firefox' })
    ],
    coverageConfig: {
        report: true,
        reportDir: 'coverage',
        threshold: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
        }
    }
};
