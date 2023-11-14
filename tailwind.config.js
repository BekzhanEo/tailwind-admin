const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')

module.exports = {
	content: ['index.html', 'src/**/*.tsx'],
	darkMode: 'class',
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			secondaryBlack: '#5C5C5C',
			blackOpacity: 'rgba(0, 0, 0, 0.16)',
			gray: '#969696',
			gray98: '#FAFAFA',
			lightGray: '#F5F5F5',
			secondaryGray: '#E6E6E6',
			error: '#EF5656',
			success: '#22BF32',
			brand: '#32C076',
			brandSecondary: '#E4ECF7',
			neutral: '#F5F5F5',
			infoToasterBg: '#F7EFD6',
			infoToasterText: '#EBC445'
		},
		fontFamily: {
			sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
			montserrat: ['Montserrat', ...defaultConfig.theme.fontFamily.sans]
		},
		extend: {
			spacing: {
				4.5: '1.125rem',
				5.5: '1.375rem',
				29: '7.25rem',
				34: '8.5rem'
			},
			fontSize: {
				'2.5xl': ['28px', '40px']
			},
			height: {
				mainSectionHeight: '100vh'
			},
			backgroundImage: {
				greenGradient: 'linear-gradient(90deg, #1D976C 0%, #93F9B9 100%)'
			},
			gridTemplateRows: {
				mainTable: 'auto 1fr auto',
				secondTable: '1fr auto',
				menu: '68px 1fr',
				userAdd: '1fr 1fr 1fr 1fr',
				propertyInUse: '48px 1fr'
			},
			gridTemplateColumns: {
				userAdd: '1fr 1fr',
				userView: '1fr auto 1fr'
			},
			boxShadow: {
				sm: '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
				default:
					'0px 0px 1px rgba(12, 26, 75, 0.1), 0px 4px 20px -2px rgba(50, 50, 71, 0.08)'
			}
		}
	},
	safelist: [
		'bg-brand',
		'bg-success',
		'bg-gray',
		'bg-error',
		'border-brand',
		'border-success',
		'border-gray',
		'border-error',
		'text-brand',
		'text-success',
		'text-gray',
		'text-error',
		'button-xxl',
		'button-lg',
		'button-md',
		'button-sm',
		'border-l-success',
		'border-l-error'
	],
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
