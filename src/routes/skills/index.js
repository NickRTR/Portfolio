import hygraph from "$lib/hygraph";
import { skillSectionsQuery } from "$lib/queries";

export async function GET() {
	const { skillSections } = await hygraph.request(skillSectionsQuery);

	return {
		body: {
			skillSections
		}
	};
}
