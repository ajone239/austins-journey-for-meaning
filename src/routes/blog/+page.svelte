<script lang="ts">
	import type { PostEntry } from '$lib/types/PostEntry';
	import Page from '../+page.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { posts }: { posts: PostEntry[] } = data;
</script>

<h1>Blog!</h1>

<ul>
	{#each posts as post (post.path)}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title ? post.meta.title : post.path}
				</a>
			</h2>
			{#if post.meta.date}
				<p>
					<b>
						Published: {post.meta.date}
					</b>
				</p>
			{/if}
			{#if post.meta.excerpt}
				<p>{post.meta.excerpt}</p>
			{/if}
		</li>
	{/each}
</ul>
