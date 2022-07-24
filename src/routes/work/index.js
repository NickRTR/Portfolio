import hygraph from "$lib/hygraph";
import { projectsQuery } from "$lib/queries";

export async function get() {
	const { projects } = await hygraph.request(projectsQuery);

	return {
		body: {
			projects
		}
	};
}
