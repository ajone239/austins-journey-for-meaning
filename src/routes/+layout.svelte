<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/styles.scss';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<Header />

<main>
	{@render children()}
</main>
