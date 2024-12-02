/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gradient-a': 'var(--gradient-color-a)',
				'gradient-b': 'var(--gradient-color-b)',
				
				'font-a': 'var(--font-color-a)',
				'font-b': 'var(--font-color-b)',

				'background-a': 'var(--bg-color-a)',
				'background-b': 'var(--bg-color-b)',
			}
		},
	},
	plugins: [],
}
