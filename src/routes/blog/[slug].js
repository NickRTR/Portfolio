import hygraph from "$lib/hygraph";
import { postQuery } from "$lib/queries";

export async function get({ params }) {
	const { post } = await hygraph.request(postQuery, { slug: params.slug });

	return {
		body: {
			post
		}
	};
}
