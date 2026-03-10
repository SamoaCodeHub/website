<script>
	import { menuItems } from '$lib/utils';
	import { goToSection } from '$lib/utils/navigation';
	import { clickOutside } from '$lib/utils/clickOutside';
	import { toggleSidebar, toggleSidebarState, closeSidebar } from '$lib/utils/sidebarLogic';
	import { IconMenuDeep } from '@tabler/icons-svelte';
	import { sidebarEnhance } from '$lib/utils/sidebarEnhance';
	import { joinUs, socialItems } from '$lib/utils/socialLinks';

	async function handleNavClick(ref) {
		closeSidebar();
		await goToSection(ref.replace('#', ''));
	}

	// size for social-media buttons
	let iconSize = 16;
</script>

{#if $toggleSidebar}
	<button
		class="fixed inset-0 top-[var(--navbar-height)] bg-black/40 backdrop-blur-[2px] z-10"
		on:click={closeSidebar}
		aria-label="Close sidebar"
	></button>
{/if}

<div
	use:clickOutside
	on:outclick={closeSidebar}
	use:sidebarEnhance
	role="dialog"
	aria-modal="true"
	class={`lg:hidden fixed top-[var(--navbar-height)] bottom-0 w-[80%] max-w-[300px] right-0
          bg-[var(--background-color-100)] backdrop-blur-[3rem] px-[1.25rem] overflow-hidden transform transition 
          duration-300 ease-in-out ${$toggleSidebar ? 'translate-x-0' : 'translate-x-full'} z-20`}
>
	<!-- First nav block -->
	<div class="w-full py-[2.25rem] text-right border-b-2 border-[var(--border-color-100)]">
		<ul class="flex flex-col gap-4 mb-4">
			{#each menuItems as item}
				<li>
					<a
						href="/"
						class="inline-flex justify-center items-center gap-[0.65rem]"
						on:click|preventDefault={() => handleNavClick(item.ref)}
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
		<a
			href={joinUs.link}
			class="inline-flex justify-center items-center gap-[0.65rem]"
			on:click={closeSidebar}
			target="_blank"
		>
			{joinUs.name}
			<svelte:component this={joinUs.icon} size={iconSize} />
		</a>
	</div>

	<!-- Second nav block -->
	<div class="w-full py-[2.25rem] text-right">
		<p class="mb-[1.55rem] font-medium">Quick Contact</p>
		<ul class="flex flex-col gap-4">
			{#each socialItems as item}
				<li>
					<a
						href={item.link}
						class="inline-flex justify-center items-center gap-[0.65rem]"
						on:click={closeSidebar}
						target="_blank"
					>
						{item.name}
						<svelte:component this={item.icon} size={iconSize} />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
