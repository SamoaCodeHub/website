<script>
	import { scrollToTop } from '$lib/utils/helpers';
</script>

<button
	class="!fixed bottom-5 right-5 rounded-full bg-sky-600 dark:bg-sky-300 p-3 text-xs font-medium uppercase leading-tight dark:text-sky-950 text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-950 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg"
	on:click={scrollToTop}
	id="bacToTop"
>
	<svg
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		class="h-4 w-4"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
	>
		<path
			fill="currentColor"
			d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
		/>
	</svg>
</button>
