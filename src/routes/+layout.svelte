<script lang="ts">
	import '../app.css';
	import '../styles/app.scss';

	import { onDestroy, onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { browser } from '$app/environment';
	import themeStore from '$lib/stores/theme';
	import { getNextTheme, getThemeIcon, isTheme } from '$lib/utils/theme';
	import { capitalizeWord } from '$lib/utils/typography';

	let themeObserver: MutationObserver;

	onMount(() => {
		themeChange(false);
		if (browser) {
			themeObserver = new MutationObserver(function () {
				if (isTheme(document?.documentElement?.dataset?.theme)) {
					themeStore.set(document.documentElement.dataset.theme);
				}
			});
			themeObserver.observe(document.documentElement, { attributes: true });
		}
	});
	onDestroy(() => (themeObserver ? themeObserver.disconnect() : null));

	$: themeIcon = getThemeIcon($themeStore);
	$: nextTheme = getNextTheme($themeStore);
</script>

<div>
	<!-- Pin to top right corner -->
	<div class="absolute top-0 right-0 h-12 w-18 p-4">
		<button class="tooltip tooltip-left" data-set-theme={nextTheme} data-act-class="ACTIVECLASS" data-tip={capitalizeWord($themeStore)}
			>{themeIcon}</button
		>
	</div>
	<slot />
</div>
