<script>
	export let measurementId;

	import { onMount } from 'svelte';

	onMount(() => {
		let script1 = document.createElement('script');
		script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
		script1.async = true;
		document.head.appendChild(script1);

		let script2 = document.createElement('script');
		script2.innerHTML = `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${measurementId}');
			`;
		document.head.appendChild(script2);
	});
</script>
