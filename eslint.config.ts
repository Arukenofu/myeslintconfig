import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';

// To allow more languages other than ts in .vue files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
	{
		name: 'app/files-to-lint',
		files: ['**/*.{vue,ts,mts,tsx}'],
	},

	{
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
	},

	...pluginVue.configs['flat/essential'],
	vueTsConfigs.recommended,

	skipFormatting,

	{
		plugins: {
			'import': importPlugin,
			'@stylistic': stylistic,
		},
		rules: {
			'semi': ['error', 'always'],
			'comma-dangle': ['error', 'always-multiline'],
			'object-curly-spacing': ['error', 'always'],
			'indent': [
				'error',
				'tab',
				{
					SwitchCase: 1,
					flatTernaryExpressions: false,
				},
			],

			'vue/mustache-interpolation-spacing': ['error', 'always'],
			'vue/html-indent': ['error', 'tab'],
			'vue/no-v-html': 'error',
			'vue/require-v-for-key': 'error',
			'vue/no-mutating-props': 'error',
			'vue/no-use-v-if-with-v-for': 'error',
			'vue/no-template-shadow': 'error',
			'vue/no-side-effects-in-computed-properties': 'error',
			'vue/require-prop-types': 'error',
			'vue/attributes-order': [
				'error',
				{
					order: [
						'DEFINITION',
						'LIST_RENDERING',
						'CONDITIONALS',
						'RENDER_MODIFIERS',
						'GLOBAL',
						'UNIQUE',
						'TWO_WAY_BINDING',
						'OTHER_DIRECTIVES',
						'OTHER_ATTR',
						'EVENTS',
						'CONTENT',
					],
				},
			],
			'vue/html-closing-bracket-newline': [
				'error',
				{
					singleline: 'never',
					multiline: 'always',
				},
			],
			'vue/no-multiple-template-root': 'error',
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: 3,
					multiline: 1,
				},
			],
			'vue/component-name-in-template-casing': ['error', 'PascalCase', {
				registeredComponentsOnly: true,
				ignores: [],
			}],
			'vue/block-order': ['error', {
				order: ['script', 'template', 'style'],
			}],

			'@stylistic/member-delimiter-style': [
				'error',
				{
					multiline: {
						delimiter: 'semi',
						requireLast: true,
					},
					singleline: {
						delimiter: 'semi',
						requireLast: false,
					},
				},
			],

			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'interface',
					format: ['PascalCase'],
					prefix: ['I'],
				},
			],
			'@typescript-eslint/no-empty-object-type': 'off',

			'no-restricted-syntax': [
				'error',
				{
					selector: 'TSEnumDeclaration',
					message: 'Enums запрещены. Используй union types или const objects.',
				},
			],

			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					"args": "all",
					"argsIgnorePattern": "^_",
					"caughtErrors": "all",
					"caughtErrorsIgnorePattern": "^_",
					"destructuredArrayIgnorePattern": "^_",
					"varsIgnorePattern": "^_",
					"ignoreRestSiblings": true,
				},
			],

			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					groups: [
						'builtin',
						'external',
						['internal', 'unknown', 'parent', 'sibling', 'index', 'object'],
					],
					pathGroups: [
						{
							group: 'unknown',
							position: 'after',
							pattern: '*.vue',
							patternOptions: {
								dot: true,
								nocomment: true,
								matchBase: true,
							},
						},
					],
				},
			],
		},
	},
);
