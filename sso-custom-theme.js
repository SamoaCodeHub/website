export const ssoCustomTheme = {
	name: 'sso-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #6499E9
		'--color-primary-50': '232 240 252', // #e8f0fc
		'--color-primary-100': '224 235 251', // #e0ebfb
		'--color-primary-200': '216 230 250', // #d8e6fa
		'--color-primary-300': '193 214 246', // #c1d6f6
		'--color-primary-400': '147 184 240', // #93b8f0
		'--color-primary-500': '100 153 233', // #6499E9
		'--color-primary-600': '90 138 210', // #5a8ad2
		'--color-primary-700': '75 115 175', // #4b73af
		'--color-primary-800': '60 92 140', // #3c5c8c
		'--color-primary-900': '49 75 114', // #314b72
		// secondary | #4F46E5
		'--color-secondary-50': '229 227 251', // #e5e3fb
		'--color-secondary-100': '220 218 250', // #dcdafa
		'--color-secondary-200': '211 209 249', // #d3d1f9
		'--color-secondary-300': '185 181 245', // #b9b5f5
		'--color-secondary-400': '132 126 237', // #847eed
		'--color-secondary-500': '79 70 229', // #4F46E5
		'--color-secondary-600': '71 63 206', // #473fce
		'--color-secondary-700': '59 53 172', // #3b35ac
		'--color-secondary-800': '47 42 137', // #2f2a89
		'--color-secondary-900': '39 34 112', // #272270
		// tertiary | #0EA5E9
		'--color-tertiary-50': '219 242 252', // #dbf2fc
		'--color-tertiary-100': '207 237 251', // #cfedfb
		'--color-tertiary-200': '195 233 250', // #c3e9fa
		'--color-tertiary-300': '159 219 246', // #9fdbf6
		'--color-tertiary-400': '86 192 240', // #56c0f0
		'--color-tertiary-500': '14 165 233', // #0EA5E9
		'--color-tertiary-600': '13 149 210', // #0d95d2
		'--color-tertiary-700': '11 124 175', // #0b7caf
		'--color-tertiary-800': '8 99 140', // #08638c
		'--color-tertiary-900': '7 81 114', // #075172
		// success | #16A249
		'--color-success-50': '220 241 228', // #dcf1e4
		'--color-success-100': '208 236 219', // #d0ecdb
		'--color-success-200': '197 232 210', // #c5e8d2
		'--color-success-300': '162 218 182', // #a2dab6
		'--color-success-400': '92 190 128', // #5cbe80
		'--color-success-500': '22 162 73', // #16A249
		'--color-success-600': '20 146 66', // #149242
		'--color-success-700': '17 122 55', // #117a37
		'--color-success-800': '13 97 44', // #0d612c
		'--color-success-900': '11 79 36', // #0b4f24
		// warning | #F0990A
		'--color-warning-50': '253 240 218', // #fdf0da
		'--color-warning-100': '252 235 206', // #fcebce
		'--color-warning-200': '251 230 194', // #fbe6c2
		'--color-warning-300': '249 214 157', // #f9d69d
		'--color-warning-400': '245 184 84', // #f5b854
		'--color-warning-500': '240 153 10', // #F0990A
		'--color-warning-600': '216 138 9', // #d88a09
		'--color-warning-700': '180 115 8', // #b47308
		'--color-warning-800': '144 92 6', // #905c06
		'--color-warning-900': '118 75 5', // #764b05
		// error | #dc2828
		'--color-error-50': '250 223 223', // #fadfdf
		'--color-error-100': '248 212 212', // #f8d4d4
		'--color-error-200': '246 201 201', // #f6c9c9
		'--color-error-300': '241 169 169', // #f1a9a9
		'--color-error-400': '231 105 105', // #e76969
		'--color-error-500': '220 40 40', // #dc2828
		'--color-error-600': '198 36 36', // #c62424
		'--color-error-700': '165 30 30', // #a51e1e
		'--color-error-800': '132 24 24', // #841818
		'--color-error-900': '108 20 20', // #6c1414
		// surface | #3085c3
		'--color-surface-50': '224 237 246', // #e0edf6
		'--color-surface-100': '214 231 243', // #d6e7f3
		'--color-surface-200': '203 225 240', // #cbe1f0
		'--color-surface-300': '172 206 231', // #accee7
		'--color-surface-400': '110 170 213', // #6eaad5
		'--color-surface-500': '48 133 195', // #3085c3
		'--color-surface-600': '43 120 176', // #2b78b0
		'--color-surface-700': '36 100 146', // #246492
		'--color-surface-800': '29 80 117', // #1d5075
		'--color-surface-900': '24 65 96' // #184160
	}
};
