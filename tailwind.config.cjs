module.exports = {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'dark', 'cyberpunk'],
		darkTheme: 'dark'
	}
};
