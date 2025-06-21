<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/styles.scss';
</script>

<Header />

<main>
	<slot />
</main>

<footer>Hello, I'm the footer.</footer>
