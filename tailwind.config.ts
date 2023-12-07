import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			title: ['var(--fontTitle)'],
			base: ['var(--fontBase)'],
		},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		colors: {
			light: '#F2F2F2',

			gray: '#737373',
			'gray-soft': '#BFBFBF',

			'dark-soft': '#404040',
			dark: '#262626',

			primary: '#5E17A6',
			'primary-dark': '#7A579D',

			secondary: '#F0F235',
			'secondary-dark': '#B1B354',
		},
	},
	plugins: [],
};
export default config;
