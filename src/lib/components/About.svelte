<script>
	import { Section } from '$lib/utils';
	import { Contributors } from '$lib/utils/contributors';
	import { IconUsers } from '@tabler/icons-svelte';

	// contributors array for the images
	const team = [Contributors[0], Contributors[5], Contributors[9]];

	// offsets for left calc; adjust px values to taste
	const offsets = ['- 80px', '', '+ 80px'];
</script>

<div
	id={Section.About}
	class="py-[clamp(3.125rem,8.3vw,7.5rem)] border-y-2 border-[var(--border-color-100)] w-full"
>
	<h2>About Us</h2>
	<div class="flex max-[768px]:flex-col">
		<!-- LEFT BOX -->
		<div class="w-1/2 max-[768px]:w-full">
			<p class="about-p max-[450px]:text-justify">
				Samoa Code Hub started in 2022 with a simple idea — bring Samoan developers together to
				learn, build, and grow. We’re a community-driven space where creativity meets collaboration.
				From open-source projects to mentorship and local meetups, we connect developers and help to
				grow Samoa’s tech scene — if you’re curious who’s behind it all, meet the team making it
				happen.
			</p>
			<a href="/contributors" class="link link-color mt-[2.25rem]">
				Meet the team <IconUsers size="20" />
			</a>
		</div>

		<!-- RIGHT BOX -->
		<div class="w-1/2 max-[768px]:w-full relative h-[150px] max-[768px]:mt-[4.25rem]">
			{#each team as { avatar, name }, i}
				<img
					src={avatar}
					alt={name}
					title={name}
					class="absolute top-0 left-1/2 -translate-x-1/2 h-full aspect-square
          rounded-full object-cover border-[7px] border-[var(--background-color-200)] grayscale"
					style={`left: calc(50% ${offsets[i] || ''}); z-index: ${team.length - i};`}
				/>
			{/each}
		</div>
	</div>
</div>
