<script>
	import { onMount } from 'svelte';

	export let measurementId;

	onMount(() => {
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', measurementId);
	});
</script>
