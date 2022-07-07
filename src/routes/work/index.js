import graphcms from "$lib/graphcms";
import { projectsQuery } from "$lib/queries";

export async function get() {
    const { projects } = await graphcms.request(projectsQuery);

    return {
        body: {
            projects
        }
    }
}
