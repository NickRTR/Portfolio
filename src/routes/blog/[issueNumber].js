import { GH_HEADER } from "$lib/api";

export async function get({ params }) {   
    const postRes = await fetch(
        `https://api.github.com/repos/nickrtr/portfolio/issues/${params.issueNumber}`,
        {
            headers: GH_HEADER
        }
    );

    
    const commentsRes = await fetch(
        `https://api.github.com/repos/nickrtr/portfolio/issues/${params.issueNumber}/comments`,
        {
            headers: GH_HEADER
        }
    );
        
    const post = await postRes.json();
    const comments = await commentsRes.json();

    return {
        body: {
            post,
            comments
        }
    }
}