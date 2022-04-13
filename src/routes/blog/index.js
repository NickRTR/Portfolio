import { GH_HEADER } from "$lib/api";

export async function get() {   
    const res = await fetch(
        "https://api.github.com/repos/nickrtr/portfolio/issues?labels=post", 
        {
            headers: GH_HEADER
        }
    );

    const posts = await res.json();

    return {
        body: {
            posts
        }
    }
}