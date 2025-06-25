<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { posts } = data;
</script>

<h1>Blog!</h1>

<ul>
	{#each posts as post (post.path)}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
