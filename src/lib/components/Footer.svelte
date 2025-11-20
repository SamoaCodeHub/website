<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import { socialItems } from '$lib/utils/socialLinks';
</script>

<AppBar
	gridColumns="grid grid-cols-1 sm:grid-cols-1"
	slotLead="sm:place-self-center place-self-center"
	slotTrail="sm:place-self-center place-self-center !space-x-2 flex text-sm md:text-base"
	background="bg-[var(--grey-200)]"
	padding="py-20"
>
	<svelte:fragment slot="lead">
		<ul class="flex items-center gap-10 mt-4">
			{#each socialItems as item}
				<li>
					<a href={item.link} target="_blank" title={item.title}>
						<span class="hidden sm:block">
							{item.name}
						</span>
						<span class="block sm:hidden w-[32px] overflow-hidden underline">
							<svelte:component this={item.icon} />
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<span style="font-size:12px; color: rgba(0, 0, 0, 0.65); text-align:center">
			Copyright © {new Date().getFullYear()} Samoa Code Hub. All Rights Reserved.
		</span>
	</svelte:fragment>
</AppBar>
