import hygraph from "$lib/hygraph";
import { commentQuery } from "$lib/queries";

export async function post({ request }) {
	const { commentAuthor, commentBody, id } = await request.json();
	try {
		if (commentAuthor.length === 0 || commentBody.length === 0) throw new Error("Please enter your name and comment.");
		await hygraph.request(commentQuery, { author: commentAuthor, body: commentBody, id });
		return {
			status: 200,
			body: {
				message: `Thanks for posting, ${commentAuthor}. Your comment will appear as soon as it's approved.`
			}
		};
	} catch (error) {
		let errorMessage = error.message.split(":");
		return {
			status: 400,
			body: {
				error: errorMessage[0]
			}
		};
	}
}
