<script>
	import { getToastStore } from '@skeletonlabs/skeleton';

	export let text = '';
	export let classes = '';

	const toast = getToastStore();

	function triggerToast(message, type = 'success') {
		toast.trigger({
			message,
			background: type === 'error' ? 'bg-red-600 text-white' : 'bg-green-600 text-white',
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
