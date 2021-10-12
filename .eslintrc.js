module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module'
    },
    ignorePatterns: ['public/', 'development/'],
    env: {
        browser: true // makes HTMLElement and customElements NOT no-undef
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'standard'
    ],
    rules: {
        indent: 'off',
        semi: 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'prefer-spread': 'off',
        'no-useless-call': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
    }
}
