<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a
			title="Dive into the code"
			class="btn btn-sm variant-ghost-surface"
			href="https://github.com/Samoa-Stack-Overflow"
			target="_blank"
		>
			GitHub
		</a>
		&nbsp;&nbsp;
		<a
			title="Join us on Discord"
			class="btn btn-sm variant-ghost-surface"
			href="https://forms.gle/aoTeV9jF5h7wnqAG6"
			target="_blank"
		>
			Discord
		</a>
		&nbsp;&nbsp;
		<a
			title="Get the latest on Facebook"
			class="btn btn-sm variant-ghost-surface"
			href="https://www.facebook.com/groups/948415479224570"
			target="_blank"
		>
			Facebook
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		Copyright © {new Date().getFullYear()} Samoa Stack Overflow. All Rights Reserved.
	</svelte:fragment>
</AppBar>
