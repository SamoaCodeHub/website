<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import { IconBrandDiscord, IconBrandFacebook, IconBrandGithub } from '@tabler/icons-svelte';
</script>

<AppBar
	gridColumns="grid grid-cols-1 sm:grid-cols-3"
	slotLead="sm:place-self-start place-self-center"
	shadow="shadow-2xl"
	slotTrail="sm:place-self-end place-self-center !space-x-2 flex text-sm md:text-base"
>
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<a
				title="Dive into the code"
				class="hidden btn btn-sm variant-ghost-surface sm:block"
				href="https://github.com/SamoaCodeHub"
				target="_blank"
			>
				GitHub
			</a>

			<a
				target="_blank"
				href="https://github.com/SamoaCodeHub"
				class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden block sm:hidden"
			>
				<IconBrandGithub />
			</a>
			&nbsp;&nbsp;
			<a
				title="Join us on Discord"
				class="hidden btn btn-sm variant-ghost-surface sm:block"
				href="https://forms.gle/aoTeV9jF5h7wnqAG6"
				target="_blank"
			>
				Discord
			</a>

			<a
				target="_blank"
				href="https://forms.gle/aoTeV9jF5h7wnqAG6"
				class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden block sm:hidden"
			>
				<IconBrandDiscord />
			</a>
			&nbsp;&nbsp;
			<a
				title="Get the latest on Facebook"
				class="hidden btn btn-sm variant-ghost-surface sm:block"
				href="https://www.facebook.com/groups/948415479224570"
				target="_blank"
			>
				Facebook
			</a>

			<a
				target="_blank"
				href="https://www.facebook.com/groups/948415479224570"
				class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden block sm:hidden"
			>
				<IconBrandFacebook />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		Copyright © {new Date().getFullYear()} Samoa Code Hub. All Rights Reserved.
	</svelte:fragment>
</AppBar>
