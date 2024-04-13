<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { IconBrandGithubFilled, IconHome, IconMenu2 } from '@tabler/icons-svelte';
	import { menuItems } from '$lib/utils/';

	export let toggleSidebar = false;

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
		const rect = el.getBoundingClientRect();

		// Check if the element's top is within the visible viewport
		if (rect.top < window.innerHeight) {
			el.scrollIntoView({
				behavior: 'smooth'
			});
		}
	}
</script>

<AppBar shadow="shadow-2xl" slotTrail="!space-x-2">
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<button
				class="btn-icon btn-icon-sm lg:hidden"
				on:click={() => (toggleSidebar = !toggleSidebar)}
			>
				<IconMenu2 />
			</button>
			<!-- Logo -->
			<a
				class="lg:!ml-0 w-[32px] hidden lg:block lg:w-auto overflow-hidden"
				href="/"
				title="Go to Homepage"
			>
				<IconHome />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#each menuItems as item}
			<nav class="relative hidden lg:block">
				<a
					href={item.ref}
					class="btn hover:variant-soft-primary"
					on:click|preventDefault={scrollIntoView}
				>
					{item.name}
				</a>
			</nav>
		{/each}

		<div class="relative hidden lg:block">
			<LightSwitch />
		</div>

		<section class="hidden lg:block px-5 space-x-1 sm:inline-flex">
			<a
				class="btn-icon hover:variant-soft-primary"
				href="https://github.com/Samoa-Code-Hub"
				target="_blank"
				rel="noreferrer"
			>
				<IconBrandGithubFilled />
				<i class="text-lg fa-brands fa-github" />
			</a>
		</section>
	</svelte:fragment>
</AppBar>
