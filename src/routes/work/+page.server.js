import hygraph from "$lib/hygraph";
import { projectsQuery } from "$lib/queries";

export async function load() {
	const { projects } = await hygraph.request(projectsQuery);

	return {
		projects
	};
}
