import hygraph from "$lib/hygraph";
import { projectQuery } from "$lib/queries";

export async function load({ params }) {
	const { project } = await hygraph.request(projectQuery, { slug: params.slug });

	return {
		project
	};
}
