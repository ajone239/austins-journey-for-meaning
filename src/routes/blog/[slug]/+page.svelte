<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let { title, date, excerpt, Content } = data;
</script>

<svelte:head>
	<title>Austin's Journey for Meaning - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<p class="date">Published: {date}</p>
	<h1>{title}</h1>

	{#if excerpt}
		<p>
			<b>TL;DR</b>:
			{excerpt}
		</p>
	{/if}

	<Content />
</article>

<style>
	.date {
		opacity: 0.5;
	}
</style>
