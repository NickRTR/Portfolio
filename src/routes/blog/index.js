export async function get() {
    const res = await fetch("https://api.github.com/repos/nickrtr/portfolio/issues?labels=post");
    const posts = await res.json();

    return {
        body: {
            posts
        }
    }
}