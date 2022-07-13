import hygraph from "$lib/hygraph";
import { usesSectionsQuery } from "$lib/queries";

export async function get() {
    const { usesSections } = await hygraph.request(usesSectionsQuery);

    return {
        body: {
            usesSections
        }
    }
}
