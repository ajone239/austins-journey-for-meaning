import type { RequestHandler } from './$types';
import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';


export const GET: RequestHandler = async () => {
    const all_posts = await fetchMarkdownPosts();

    const sorted_posts = all_posts.sort((a, b) => {
        return Date(a.meta.date) - Date(b.meta.date)
    });

    return json(sorted_posts);
}
