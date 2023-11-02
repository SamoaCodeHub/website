<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
    <svelte:fragment slot="lead">
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://github.com/Samoa-Stack-Overflow"
            target="_blank"
        >
            GitHub
        </a>
        &nbsp;&nbsp;
            <!--
                #TODO: Replace link below with Discord invite link, and update title to match.
            -->
        <a
            title="Get latest SSO internal news (Coming Soon!)"
            class="btn btn-sm variant-ghost-surface"
            href="https://github.com/Samoa-Stack-Overflow"
            target="_blank"
        >
            Discord
        </a>
        &nbsp;&nbsp;
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://www.facebook.com/groups/948415479224570"
            target="_blank"
        >
            facebook
        </a>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        Copyright © {new Date().getFullYear()} Samoa Stack Overflow. All Rights Reserved.
    </svelte:fragment>
</AppBar>