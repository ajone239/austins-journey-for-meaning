import type { RequestHandler } from './$types';
import { type PostEntry } from '$lib/types/PostEntry';
import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';


export const GET: RequestHandler = async () => {
    const all_posts = await fetchMarkdownPosts();

    const sorted_posts = all_posts.sort((a: PostEntry, b: PostEntry) => {
        return Date(a.meta.date) - Date(b.meta.date)
    });

    return json(sorted_posts);
}
