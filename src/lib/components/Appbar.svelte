<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { IconBrandGithubFilled, IconHome, IconMenu2 } from '@tabler/icons-svelte';
	import { menuItems } from '$lib/utils/';

	export let toggleSidebar = false;
</script>

<AppBar shadow="shadow-2xl" slotTrail="!space-x-2">
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<button
				class="btn-icon btn-icon-sm md:!hidden"
				on:click={() => (toggleSidebar = !toggleSidebar)}
			>
				<IconMenu2 />
			</button>
			<!-- Logo -->
			<a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
				<IconHome />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#each menuItems as item}
			<div class="relative hidden lg:block">
				<button class="btn hover:variant-soft-primary">
					<span>{item.name}</span>
				</button>
			</div>
		{/each}

		<LightSwitch />

		<section class="hidden px-5 space-x-1 sm:inline-flex">
			<a
				class="btn-icon hover:variant-soft-primary"
				href="https://github.com/Samoa-Stack-Overflow"
				target="_blank"
				rel="noreferrer"
			>
				<IconBrandGithubFilled />
				<i class="text-lg fa-brands fa-github" />
			</a>
		</section>
	</svelte:fragment>
</AppBar>
