import graphcms from "$lib/graphcms";
import { projectQuery } from "$lib/queries";

export async function get({ params }) {
    const { project } = await graphcms.request(projectQuery, {slug: params.slug});

    return {
        body: {
            project,
        }
    }
}