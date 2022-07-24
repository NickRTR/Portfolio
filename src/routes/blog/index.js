import hygraph from "$lib/hygraph";
import { postsQuery } from "$lib/queries";

export async function get() {
	const { posts } = await hygraph.request(postsQuery);

	return {
		body: {
			posts
		}
	};
}
