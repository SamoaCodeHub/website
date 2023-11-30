<script>
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores } from '@skeletonlabs/skeleton';
	import Appbar from '$lib/components/Appbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let toggleSidebar;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<Appbar bind:toggleSidebar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar {toggleSidebar} />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
