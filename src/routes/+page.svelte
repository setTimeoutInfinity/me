<script lang="ts">
	import Briefcase from 'icons/Briefcase.svelte';
	import Github from 'icons/Github.svelte';
	import Globe from 'icons/Globe.svelte';
	import Instagram from 'icons/Instagram.svelte';
	import LinkedIn from 'icons/LinkedIn.svelte';
	import Telegram from 'icons/Telegram.svelte';

	const socialLinks = [
		{ link: 'https://github.com/setTimeoutInfinity', icon: Github },
		{ link: 'https://t.me/talouchy', icon: Telegram },
		{ link: 'https://www.instagram.com/talouchy_art/', icon: Instagram },
		{ link: 'https://www.linkedin.com/in/danyallakzian', icon: LinkedIn }
	];
</script>

<div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
	<!--Main Col-->
	<div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0">
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
				{#each socialLinks as socialLink}
					<a class="link tooltip" href={socialLink.link} data-tip={socialLink.link}>
						<svelte:component this={socialLink.icon} />
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!--Img Col-->
	<div class="w-full lg:w-2/5">
		<!-- Big profile image for side bar (desktop) -->
		<img src="/images/feel-fancy.webp" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt="Danyal Lakzian" />
	</div>
</div>
