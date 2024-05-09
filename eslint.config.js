import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	{
		rules: {
			// override/add rules settings here, such as:
			// 'svelte/rule-name': 'error'
		},
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				myCustomGlobal: 'readonly'
			}
		},
		ignores: [
			'.DS_Store',
			'/node_modules',
			'/build',
			'/.svelte-kit',
			'/package',
			'.env',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
			'.vscode/settings.json',
			'jsconfig.json',
			'package.json'
		]
	}
];
