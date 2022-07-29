import hygraph from "$lib/hygraph";
import { postsQuery } from "$lib/queries";

export async function GET() {
	const { posts } = await hygraph.request(postsQuery);

	return {
		body: {
			posts
		}
	};
}
