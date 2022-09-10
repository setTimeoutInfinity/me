import { browser } from '$app/environment';
import type { Themes } from '$lib/types/theme';
import { isTheme } from '$lib/utils/theme';
import { writable } from 'svelte/store';

const localStorageTheme = browser ? localStorage?.getItem('theme') : 'light';
const storedTheme: Themes = isTheme(localStorageTheme) ? localStorageTheme : 'light';
const theme = writable<Themes>(storedTheme);

export { theme as default };
