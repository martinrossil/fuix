/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		browser: {
			enabled: true,
			headless: true,
			instances: [{ browser: 'chromium' }],
			provider: 'playwright',
			screenshotFailures: false,
			viewport: {
				height: 1000,
				width: 1000,
			},
		},
		coverage: {
			exclude: ['src/index.ts'],
			include: ['src/**/*.ts'],
			reporter: ['lcovonly'],
		},
	},
});
