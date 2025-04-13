/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		browser: {
			enabled: true,
			headless: true,
			name: 'chromium', // browser name is required
			provider: 'playwright', // or 'webdriverio'
			screenshotFailures: false,
			viewport: {
				height: 1000,
				width: 1000,
			},
		},
		coverage: {
			exclude: [
				'packages/**/src/**/*test.ts',
				'packages/**/src/index.ts',
			],
			include: ['packages/**/src/**/*.ts'],
			reporter: ['lcovonly'],
		},
	},
});
