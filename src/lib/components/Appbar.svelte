<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import {
		IconBrandDiscordFilled,
		IconBrandGithubFilled,
		IconHome,
		IconMenu2
	} from '@tabler/icons-svelte';
</script>

<AppBar shadow="shadow-2xl" slotTrail="!space-x-2">
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<button class="btn-icon btn-icon-sm lg:!hidden">
				<IconMenu2 />
			</button>
			<!-- Logo -->
			<a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
				<IconHome />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="relative hidden lg:block">
			<button class="btn hover:variant-soft-primary">
				<span>Menu Item 1</span>
			</button>
		</div>

		<div class="relative hidden lg:block">
			<button class="btn hover:variant-soft-primary">
				<span>Menu Item 2</span>
			</button>
		</div>

		<div class="relative hidden lg:block">
			<button class="btn hover:variant-soft-primary">
				<span>Menu Item 3</span>
			</button>
		</div>

		<div class="relative hidden lg:block">
			<LightSwitch />
		</div>

		<section class="hidden sm:inline-flex space-x-1 px-5">
			<a
				class="btn-icon hover:variant-soft-primary"
				href="https://github.com/Samoa-Stack-Overflow"
				target="_blank"
				rel="noreferrer"
			>
				<IconBrandGithubFilled />
				<i class="fa-brands fa-github text-lg" />
			</a>
			<a
				class="btn-icon hover:variant-soft-primary"
				href="https://discord.gg/Cq7JVQtT"
				target="_blank"
				rel="noreferrer"
			>
				<IconBrandDiscordFilled />
			</a>
		</section>
	</svelte:fragment>
</AppBar>
