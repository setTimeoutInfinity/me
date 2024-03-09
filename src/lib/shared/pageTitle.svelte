<script lang="ts">
	import { page } from '$app/stores';
	import { NAVIGATION_ITEMS, hasChildren } from '$lib/constants/navigation';

	$: currentPath = $page.url.pathname;
	$: title = NAVIGATION_ITEMS.flatMap((item) => (hasChildren(item) ? item.children : [item])).find(
		(item) => item.path === currentPath
	)?.title;
</script>

<svelte:head>
	{#if title}
		<title>{title} - Danyal Lakzian</title>
	{:else}
		<title>Danyal Lakzian</title>
	{/if}
</svelte:head>
