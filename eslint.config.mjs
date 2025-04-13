import antfu from '@antfu/eslint-config';

export default antfu({
	rules: {
		'perfectionist/sort-array-includes': 'error',
		'perfectionist/sort-classes': 'error',
		'perfectionist/sort-exports': 'error',
		'perfectionist/sort-imports': 'error',
		'perfectionist/sort-interfaces': 'error',
		'perfectionist/sort-intersection-types': 'error',
		'perfectionist/sort-maps': 'error',
		'perfectionist/sort-modules': 'error',
		'perfectionist/sort-named-exports': 'error',
		'perfectionist/sort-named-imports': 'error',
		'perfectionist/sort-object-types': 'error',
		'perfectionist/sort-objects': 'error',
		'perfectionist/sort-sets': 'error',
		'perfectionist/sort-switch-case': 'error',
		'perfectionist/sort-union-types': 'error',
		'perfectionist/sort-variable-declarations': 'error',
		'ts/restrict-template-expressions': 'off',
	},
	stylistic: {
		indent: 'tab',
		semi: true,
	},
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
});
