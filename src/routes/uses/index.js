import graphcms from "$lib/graphcms";
import { usesSectionsQuery } from "$lib/queries";

export async function get() {
    const { usesSections } = await graphcms.request(usesSectionsQuery);

    return {
        body: {
            usesSections
        }
    }
}
