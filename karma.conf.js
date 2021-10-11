/* eslint-disable */
const path = require('path');

module.exports = function karma(config) {
    config.set({
        frameworks: [
            'karma-typescript',
            'mocha',
            'chai'
        ],
        files: [
            { pattern: 'src/**/*.ts', include: true },
            { pattern: 'tests/**/*.ts', include: true }
        ],
        preprocessors: {
            '**/*.ts': 'karma-typescript',
            'src/**/*.ts': 'coverage'
        },
        plugins: [
            'karma-typescript',
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-coverage-istanbul-reporter',
            'karma-spec-reporter',
            'karma-coverage'
        ],
        reporters: [
            'spec',
            'coverage-istanbul',
            'karma-typescript',
            'coverage'
        ],
        coverageIstanbulReporter: {
            reports: ['text-summary', 'lcov'],
            dir: path.join(__dirname, 'coverage'),
        },
        karmaTypescriptConfig: {
            compilerOptions: {
                target: 'es6',
            },
            exclude: [
                'node_modules',
                'dist',
                '*spec.ts',
            ],
            coverageOptions: {
                exclude: [
                    /spec\.ts$/,
                ],
            },
        },
        browsers: [
            'ChromeHeadless'
            // 'mobile',
            // 'desktop'
        ],
        customLaunchers: {
            mobile: {
              base: "ChromeHeadless",
              flags: ["--window-size=500,1024"]
            },
            desktop: {
              base: "ChromeHeadless",
              flags: ["--window-size=2048,1536"]
            }
        },
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        singleRun: true,
        });
  };
