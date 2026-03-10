<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	let emblaOptions = {
		align: 'start',
		containScroll: 'trimSnaps',
		slidesToScroll: 1
	};
</script>

<div
	use:emblaCarouselSvelte={emblaOptions}
	class="embla overflow-hidden hidden w-[calc(100vw-2rem)] relative bg-[var(--grey-100)]
         py-[1.5rem] max-[768px]:block max-[768px]:px-8"
>
	<div class="embla__container flex w-full gap-[1.5rem]">
		<slot />
	</div>
</div>

<style>
	.embla::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 3rem;
		top: 0;
		left: 0;
		background: linear-gradient(to right, var(--background-color-200), transparent);
	}

	.embla::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 3rem;
		top: 0;
		right: -1px;
		background: linear-gradient(to right, transparent, var(--background-color-200));
		z-index: 1;
	}
</style>
