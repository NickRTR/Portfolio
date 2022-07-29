import hygraph from "$lib/hygraph";
import { projectsQuery } from "$lib/queries";

export async function GET() {
	const { projects } = await hygraph.request(projectsQuery);

	return {
		body: {
			projects
		}
	};
}
