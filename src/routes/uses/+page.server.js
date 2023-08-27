import hygraph from "$lib/hygraph";
import { usesSectionsQuery } from "$lib/queries";

export async function load() {
	const { usesSections } = await hygraph.request(usesSectionsQuery);

	return {
		usesSections
	};
}
