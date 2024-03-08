<script lang="ts">
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;
</script>

<svelte:head>
	{#if currentPath === '/'}
		<title>Home - Danyal Lakzian</title>
	{:else if currentPath === '/my-playlist'}
		<title>My Playlist - Danyal Lakzian</title>
	{:else}
		<title>Danyal Lakzian</title>
	{/if}
</svelte:head>
