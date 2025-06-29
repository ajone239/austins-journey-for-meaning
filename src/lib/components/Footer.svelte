<script>
	import { SiteDescription, SiteTitle } from '$lib/info';
</script>

<footer>
	<span>
		<p>{SiteTitle}</p>
		<p><em>by: Austin Jones</em></p>
	</span>

	<p>{SiteDescription}</p>
</footer>

<style>
	footer {
		padding: 1rem;
		background: lightskyblue;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
