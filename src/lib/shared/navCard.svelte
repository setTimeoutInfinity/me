<script lang="ts">
	import { page } from '$app/stores';
	import { NAVIGATION_ITEMS, hasChildren } from '$lib/constants/navigation';

	$: currentPath = $page.url.pathname;
	$: navOptions = NAVIGATION_ITEMS.map((item) => {
		if (hasChildren(item)) {
			return {
				...item,
				children: item.children.map((child) => ({
					...child,
					active: currentPath === child.path
				}))
			};
		}

		return {
			...item,
			active: currentPath === item.path
		};
	});
</script>

<nav class="card shadow-xl bg-base-200">
	<!-- mobile nav bar -->
	<div class="dropdown dropdown-end block sm:hidden">
		<button tabindex="0" class="btn w-full">Menu</button>
		<ul tabindex="0" role="menu" class="dropdown-content z-[1] menu shadow-xl rounded-xl bg-base-200">
			{#each navOptions as item}
				{#if hasChildren(item)}
					<li>
						<span>{item.label}</span>
						<ul>
							{#each item.children as childItem}
								<li><a href={childItem.path} class:active={childItem.active}>{childItem.label}</a></li>
							{/each}
						</ul>
					</li>
				{:else}
					<li>
						<a href={item.path} class:active={item.active}>{item.label}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>

	<!-- tablet and above nav bar -->
	<ul class="menu menu-horizontal bg-base-200 rounded-box sm:block hidden">
		{#each navOptions as item}
			{#if hasChildren(item)}
				<li>
					<span>{item.label}</span>
					<ul>
						{#each item.children as childItem}
							<li><a href={childItem.path} class:active={childItem.active}>{childItem.label}</a></li>
						{/each}
					</ul>
				</li>
			{:else}
				<li>
					<a href={item.path} class:active={item.active}>{item.label}</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>
