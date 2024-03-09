module.exports = {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'dark', 'cyberpunk'],
		darkTheme: 'dark'
	},
	theme: {
		extend: {
			height: {
				screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh']
			}
		}
	}
};
