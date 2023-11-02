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
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://samoa-stack-overflow.atlassian.net/browse/WEB"
            target="_blank"
        >
            Jira
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
        Copyright © 2023 Samoa Stack Overflow. All Rights Reserved.
    </svelte:fragment>
</AppBar>