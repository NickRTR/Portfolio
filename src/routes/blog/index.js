import graphcms from "$lib/graphcms";
import { postsQuery } from "$lib/queries";

export async function get() {
    const { posts } = await graphcms.request(postsQuery);

    return {
        body: {
            posts
        }
    }
}
