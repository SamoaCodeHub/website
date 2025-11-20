<script>
	import '../app.postcss';
	import { AppShell, Toast } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores } from '@skeletonlabs/skeleton';
	import Appbar from '$lib/components/Appbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Analytics from '$lib/components/Analytics.svelte';

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let visible = false;
	let gaMesurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
	function scrollHandler(event) {
		visible = event.currentTarget.scrollTop > 150;
	}
</script>

<svelte:head>
	<title>Samoa Code Hub</title>
</svelte:head>
{#if gaMesurementId}
	<Analytics measurementId={gaMesurementId} />
{/if}
<!-- App Shell -->
<AppShell on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<Appbar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
		<Toast />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
