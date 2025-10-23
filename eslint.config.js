import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
			globals: {
				// Browser environment
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				console: 'readonly',
				// ES2021
				Atomics: 'readonly',
				SharedArrayBuffer: 'readonly',
			},
		},
		rules: {
			'indent': ['error', 'tab', { SwitchCase: 1 }],
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'linebreak-style': ['error', 'unix'],
			'eol-last': 'error',
			'curly': 'error',
			'quotes': ['error', 'single', { avoidEscape: true }],
			'semi': ['error', 'always'],
			'max-len': ['warn', { code: 120 }],
			'eqeqeq': 'error',
			'space-before-function-paren': [
				'error',
				{
					named: 'never',
					anonymous: 'always',
					asyncArrow: 'always',
				},
			],
			'consistent-return': 'error',
			'no-unused-vars': 'warn',
			'no-else-return': 'warn',
		},
	},
];
