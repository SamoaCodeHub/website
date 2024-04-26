<script>
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores } from '@skeletonlabs/skeleton';
	import Appbar from '$lib/components/Appbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Analytics from '$lib/components/Analytics.svelte';

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let visible = false;
	let gaMesurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
	function scrollHandler(event) {
		visible = event.currentTarget.scrollTop > 150;
	}

	let toggleSidebar;
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
		<Appbar bind:toggleSidebar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar bind:toggleSidebar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
{#if visible}
	<BackToTop />
{/if}
