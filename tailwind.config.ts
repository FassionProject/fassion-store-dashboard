import type { Config } from 'tailwindcss';
import { content, plugin } from 'flowbite-react/tailwind';

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		// Include Flowbite content:
		content(),
	],
	theme: {
		colors: {
			primary: {
				900: '#102a43',
				800: '#243b53',
				700: '#334e68',
				600: '#486581',
				500: '#627d98',
				400: '#829ab1',
				300: '#9fb3c8',
				200: '#bcccdc',
				100: '#d9e2ec',
				50: '#f0f4f8',
			},
			secondary: {
				900: '#704911',
				800: '#925f13',
				700: '#b77c19',
				600: '#d89e27',
				500: '#e1c076',
				400: '#e7cd91',
				300: '#edd9ad',
				200: '#f3e6c8',
				100: '#f9f2e4',
				50: '#fff9eb',
			},
			mainTextColor: '#090918',
			secondaryTextColor: '#7b7f8a',
			BlueButton: '#2c87f2',
			RedButton: '#f24c4c',
			YellowButton: '#e1c63d',
			GreenButton: '#28a745',
			GrayButton: '#cccccc',
			BlackButton: '#3a3a3a',
			YellowStar: '#ffc400',
		},
		fontSize: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.5rem', xl: '2rem' },
	},
	plugins: [plugin()],
};
export default config;
