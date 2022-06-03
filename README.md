![Publish NPM](https://github.com/martinrossil/fuix/workflows/Publish%20NPM/badge.svg)
![npm](https://img.shields.io/npm/v/fuix)
![NPM](https://img.shields.io/npm/l/enta)
[![Coverage Status](https://coveralls.io/repos/github/martinrossil/fuix/badge.svg?branch=main)](https://coveralls.io/github/martinrossil/fuix?branch=main)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability-percentage/martinrossil/fuix)
![Code Climate issues](https://img.shields.io/codeclimate/issues/martinrossil/fuix)
![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/martinrossil/fuix)

# fuix
Typescript web component framework for building high performant web applications.

## pre commit hook
in package.json
"pre-commit": [ "precommit-msg", "lint", "test" ],
in scripts: "precommit-msg": "echo 'Pre-commit checks...' && exit 0"

devDependencies: "pre-commit": "^1.2.2",..