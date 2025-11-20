<script>
	import { Section } from '$lib/utils';
	import { joinUs } from '$lib/utils/socialLinks';
	import { goToSection } from '$lib/utils/navigation';
	import { IconHexagons } from '@tabler/icons-svelte';
</script>

<section
	id={Section.Hero}
	class="h-[100vh] flex flex-col justify-center items-center border-b-2 border-[var(--border-color-100)] pt-9"
>
	<h1
		class="text-[clamp(3.25rem,6vw,6rem)] font-semibold text-center leading-[0.9278]
             max-w-[90%] mb-8 text-[var(--font-color-200)] tracking-[-0.01em] max-[768px]:max-w-full"
	>
		The developer network built for progress
	</h1>
	<h4
		class="text-center w-[45%] my-4 mb-9 max-[768px]:w-[75%] max-[768px]:px-4 max-[450px]:w-full max-[450px]:px-4"
	>
		A thriving community where over twenty developers build and innovate together.
	</h4>
	<div class="flex gap-4 max-[360px]:flex-col">
		<a
			href="/"
			class="link link-color"
			title="Browse our latest projects!"
			on:click|preventDefault={() => goToSection(Section.Projects)}
		>
			Our Projects <IconHexagons size="24" />
		</a>
		<a href={joinUs.link} target="_blank" class="link link-plain" title={joinUs.title}>
			{joinUs.name}
		</a>
	</div>
</section>
