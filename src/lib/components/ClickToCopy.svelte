<script>
	import { getToastStore } from '@skeletonlabs/skeleton';

	export let text = '';
	export let classes = '';

	const toast = getToastStore();

	function triggerToast(message, type = 'success') {
		toast.trigger({
			message,
			background: type === 'error' ? 'variant-filled-error' : 'variant-filled-success',
			timeout: 2500
		});
	}

	async function copy() {
		try {
			await navigator.clipboard.writeText(text);
			triggerToast('Copied to clipboard!');
		} catch (err) {
			triggerToast('Could not copy text', 'error');
		}
	}
</script>

<button class={classes} on:click={copy}>
	<slot />
</button>
