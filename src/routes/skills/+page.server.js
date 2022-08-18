import hygraph from "$lib/hygraph";
import { skillSectionsQuery } from "$lib/queries";

export async function load() {
	const { skillSections } = await hygraph.request(skillSectionsQuery);

	return {
		skillSections
	};
}
