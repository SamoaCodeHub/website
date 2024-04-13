<script>
	import { menuItems } from '$lib/utils';
	import { goto } from '$app/navigation';

	export let toggleSidebar = false;
</script>

<div
	class:-translate-x-full={!toggleSidebar}
	class="w-full lg:hidden focus:shadow-outline z-20 variant-filled-surface
  space-y-6 mt-16 pt-5 px-2 absolute overflow-hidden
	inset-y-0 left-0 transform transition delay-200 duration-700 ease-in-out"
>
	<!-- nav -->
	<div class="btn-group-vertical w-full">
		{#each menuItems as item}
			<button
				on:click={() => {
					goto(item.ref);
					toggleSidebar = false;
				}}
				type="button"
				class="btn flex w-full rounded transition duration-200"
			>
				<div class="w-full py-2 flex justify-start">
					<div class="flex items-center h-6">
						<svelte:component this={item.icon} name={item.icon} size={20} />
					</div>
					<span class="pl-2 whitespace-nowrap overflow-hidden">{item.name}</span>
				</div>
			</button>
		{/each}
	</div>
</div>
