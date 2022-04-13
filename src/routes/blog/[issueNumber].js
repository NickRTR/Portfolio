import { GH_HEADER } from "$lib/api";

export async function get({ params }) {   
    const res = await fetch(
        `https://api.github.com/repos/nickrtr/portfolio/issues/${params.issueNumber}`,
        {
            headers: GH_HEADER
        }
    );

    const post = await res.json();

    return {
        body: {
            post
        }
    }
}