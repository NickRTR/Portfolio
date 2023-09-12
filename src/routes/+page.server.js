import hygraph from "$lib/hygraph";
import { aboutPreviewQuery } from "$lib/queries";

export async function load() {
	const aboutPreview = await hygraph.request(aboutPreviewQuery);

	return {
		aboutPreview
	};
}
