/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-color': '#1d232a',
				'alt-text': '#A5C9CA'
			}
		},
		screens: {
			'lg': '840px'
		}
	},
	plugins: [],
	darkMode: 'class'
}
