<script>
	import { SOCIAL_LINKS } from '$lib/constants/socialLinks';
</script>

<footer class="bg-base-300 mt-auto">
	<div class="px-4 py-3 text-base-content mx-auto">
		<h1 class="text-2xl hidden sm:block mb-2">lakzian.com</h1>
		<div class="flex">
			<div class="flex gap-3">
				{#each SOCIAL_LINKS as link}
					<a class="link text-xs tracking-wider" href={link.link}>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
		<div class="text-right text-xs py-2">
			<a href="/">&copy;2024 lakzian.com</a>
		</div>
	</div>
</footer>
