/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'soft-red': 'hsl(10, 79%, 65%)',
				'cyan': 'hsl(186, 34%, 60%)',
				'dark-brown': 'hsl(25, 47%, 15%)',
				'medium-brown': 'hsl(28, 10%, 53%)',
				'light-brown': 'hsl(27, 66%, 92%)',
				'pale-orange': 'hsl(33, 100%, 98%)'			
			}
		},
	},
	plugins: [],
}
