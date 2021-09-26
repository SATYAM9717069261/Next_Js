import Link from 'next/link'
export default function PostList({ posts }) {
    return (
        <>
            <h1> Posts </h1>
            {
                posts.map(post => {
                    return (
                        <Link key={post.id} href={`posts/${post.id}`} >
                            <a> <p> Title : {post.title}</p></a>
                        </Link>
                    )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return {
        props: { posts: data}
    }
}