<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.css';
	import '../styles/app.scss';

	import { browser } from '$app/environment';
	import themeStore from '$lib/stores/theme';
	import { isTheme } from '$lib/utils/theme';
	import { capitalizeWord } from '$lib/utils/typography';

	import PageTitle from '$lib/shared/pageTitle.svelte';
	import NavCard from '$lib/shared/navCard.svelte';
	import Footer from '$lib/shared/footer.svelte';
	import { THEME_ICONS } from '$lib/constants/theme';

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
</script>

<PageTitle />

<div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
	<div class="flex flex-col gap-3 sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4 z-[1]">
		<div class="sticky top-0 w-full">
			<select class="select select-bordered w-full" data-choose-theme>
				{#each Object.entries(THEME_ICONS) as [theme, themeEmoji]}
					<option value={theme} selected={theme === $themeStore}>{themeEmoji} {capitalizeWord(theme)}</option>
				{/each}
			</select>
		</div>

		<div class="w-full">
			<NavCard />
		</div>
	</div>

	<main class="w-full h-full flex-grow p-3 overflow-auto">
		<slot />
	</main>
</div>

<Footer />
