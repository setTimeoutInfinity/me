<script lang="ts">
	import '../app.css';
	import '../styles/app.scss';

	import { onDestroy, onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import themeStore from '$lib/stores/theme';
	import { getNextTheme, getThemeIcon, isTheme } from '$lib/utils/theme';
	import { capitalizeWord } from '$lib/utils/typography';
	import PageTitle from '$lib/shared/pageTitle.svelte';
	import { NAVIGATION_ITEMS } from '$lib/constants/navigation';

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
	$: navOptions = NAVIGATION_ITEMS.map((item) => {
		return {
			...item,
			active: $page.url.pathname === item.path
		};
	});
	$: activeNavItemLabel = navOptions.find((item) => item.active)?.label || 'Menu';
</script>

<PageTitle />

<div>
	<div class="navbar bg-base-100 sticky top-0">
		<div class="navbar-start">
			<button
				class="btn btn-square tooltip tooltip-right"
				data-set-theme={nextTheme}
				data-act-class="ACTIVECLASS"
				data-tip={capitalizeWord($themeStore)}
			>
				<span class="text-lg">{themeIcon}</span>
			</button>
		</div>
		<div class="navbar-center"></div>
		<div class="navbar-end">
			<div class="dropdown dropdown-end">
				<button tabindex="0" class="btn btn-ghost rounded-btn">{activeNavItemLabel}</button>
				<ul tabindex="0" role="menu" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
					{#each navOptions as item}
						<li>
							<a href={item.path} class:active={item.active}>{item.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<slot />
</div>
