<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let { title, date, Content } = data;
</script>

<article>
	<h1>{title}</h1>

	<p>Published: {date}</p>

	<Content />
</article>
