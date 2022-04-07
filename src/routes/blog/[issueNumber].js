export async function get({ params }) {
    const res = await fetch(`https://api.github.com/repos/nickrtr/portfolio/issues/${params.issueNumber}`);
    const post = await res.json();

    return {
        body: {
            post
        }
    }
}