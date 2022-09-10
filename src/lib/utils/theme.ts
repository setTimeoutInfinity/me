import type { Themes } from '$lib/types/theme';
import { THEME_ICONS } from '$lib/constants/theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTheme(theme: any): theme is Themes {
	return typeof theme === 'string' && ['light', 'dark', 'cyberpunk'].includes(theme);
}

function getNextTheme(theme: Themes): Themes {
	if (!isTheme(theme)) return 'light';
	const themes = Object.keys(THEME_ICONS) as Themes[];
	const currThemeIndex = themes.findIndex((t) => t === theme);

	if (currThemeIndex < 0) return 'dark';

	if (currThemeIndex === themes.length - 1) {
		return themes[0];
	}
	return themes[currThemeIndex + 1];
}

function getThemeIcon(theme: Themes): string {
	if (!isTheme(theme)) return THEME_ICONS['light'];

	return THEME_ICONS[theme];
}

export { isTheme, getNextTheme, getThemeIcon };
