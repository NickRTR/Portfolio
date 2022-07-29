import hygraph from "$lib/hygraph";
import { usesSectionsQuery } from "$lib/queries";

export async function GET() {
	const { usesSections } = await hygraph.request(usesSectionsQuery);

	return {
		body: {
			usesSections
		}
	};
}
