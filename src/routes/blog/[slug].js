import graphcms from "$lib/graphcms";
import { postQuery } from "$lib/queries";

export async function get({ params }) {
    const { post } = await graphcms.request(postQuery, {slug: params.slug});

    return {
        body: {
            post,
        }
    }
}
