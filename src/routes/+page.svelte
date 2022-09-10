<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import themeStore from '$lib/stores/theme';
	import { themeChange } from 'theme-change';
	import Briefcase from 'icons/Briefcase.svelte';
	import Github from 'icons/Github.svelte';
	import Globe from 'icons/Globe.svelte';
	import Instagram from 'icons/Instagram.svelte';
	import LinkedIn from 'icons/LinkedIn.svelte';
	import Telegram from 'icons/Telegram.svelte';
	import { getNextTheme, getThemeIcon, isTheme } from '$lib/utils/theme';
	import { browser } from '$app/environment';
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

<div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
	<!--Main Col-->
	<div
		id="profile"
		class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0"
	>
		<div class="p-4 text-center lg:text-left">
			<!-- Image for mobile view -->
			<div
				class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
				style="background-image: url('/images/feel-fancy.webp')"
			/>

			<h1 class="text-3xl font-bold pt-8 lg:pt-0">Danyal Lakzian (aka D4)</h1>
			<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
			<p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
				<Briefcase />
				<span>Software Engineer</span>
			</p>
			<p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
				<Globe />
				<span>Melbourne, Australia</span>
			</p>

			<p class="pt-8 text-sm">Why beer??!! Cuz I can't drink Bacon!</p>

			<div class="pt-12 pb-8">
				<a href="http://linkedin.lakzian.com" target="_blank" class="btn btn-active btn-accent btn-sm">My Resume</a>
			</div>

			<!-- Social links -->
			<div class="flex flex-wrap gap-5 items-center justify-center pb-16">
				<a
					class="link tooltip"
					href="https://github.com/setTimeoutInfinity"
					data-tip="https://github.com/setTimeoutInfinity"
				>
					<Github />
				</a>

				<a class="link tooltip" href="https://t.me/talouchy" data-tip="https://t.me/talouchy">
					<Telegram />
				</a>
				<a
					class="link tooltip"
					href="https://www.instagram.com/talouchy_art/"
					data-tip="https://www.instagram.com/talouchy_art/"
				>
					<Instagram />
				</a>
				<a
					class="link tooltip"
					href="https://www.linkedin.com/in/danyallakzian"
					data-tip="https://www.linkedin.com/in/danyallakzian"
				>
					<LinkedIn />
				</a>
			</div>
		</div>
	</div>

	<!--Img Col-->
	<div class="w-full lg:w-2/5">
		<!-- Big profile image for side bar (desktop) -->
		<img
			src="/images/feel-fancy.webp"
			class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
			alt="Danyal Lakzian"
		/>
	</div>

	<!-- Pin to top right corner -->
	<div class="absolute top-0 right-0 h-12 w-18 p-4">
		<button
			class="tooltip tooltip-left"
			data-set-theme={nextTheme}
			data-act-class="ACTIVECLASS"
			data-tip={capitalizeWord($themeStore)}>{themeIcon}</button
		>
	</div>
</div>
