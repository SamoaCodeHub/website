<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import { IconMenuDeep, IconX } from '@tabler/icons-svelte';
	import { menuItems, Section } from '$lib/utils/';
	import { goToSection } from '$lib/utils/navigation';
	import { toggleSidebarState, toggleSidebar } from '$lib/utils/sidebarLogic';
	import logo from '../assets/sch-logo/SAMOACode_1.png';
</script>

<nav
	class="fixed left-0 top-0 w-full h-[var(--navbar-height)] bg-[var(--background-color-100)]
            backdrop-blur-[2rem] flex justify-between items-center px-8 z-[1000]"
>
	<a href="/" on:click|preventDefault={() => goToSection(Section.Hero)}>
		<Avatar class="block w-8 h-8" src={logo} rounded="rounded" />
	</a>
	<ul class="mx-auto flex max-[768px]:hidden">
		<li>
			{#each menuItems as item}
				<a
					href="/"
					on:click|preventDefault={() => goToSection(item.ref.replace('#', ''))}
					class="py-[0.65rem] px-8 rounded-[var(--border-radius-100)] hover:bg-[var(--grey-200)]"
				>
					{item.name}
				</a>
			{/each}
		</li>
	</ul>
	<button class="md:hidden" on:click={toggleSidebarState} data-sidebar-toggle data-no-close>
		{#if $toggleSidebar}
			<IconX />
		{:else}
			<IconMenuDeep />
		{/if}
	</button>
</nav>
