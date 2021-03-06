import {useRouter} from "next/router"
function Post({ post }) {
    // const router =useRouter()
    // if(router.isFallback){
    //     return <h1>Loading ...</h1>
    // }
    return (
        <>
            <h2> {post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}
export default Post
export async function getStaticProps(context) {
    console.log("Generated page for => "+ context.params.postid)
    const { params } = context
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postid}`
    )
    const data = await res.json();
    return {
        props: { post: data },revalidate:10 //after 10 sec again check for Update 
        /**if any update is occure then Json is also updated But Hard Reload Page is Require */
    }
}

/** Only Three Pages are Generted*/

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { postid: '1' } },
//             { params: { postid: '2' } },
//             { params: { postid: '3' } }
//         ],fallback:false
//     }
// }

/*  Generate N Pages on build time not in run time */

// export async function getStaticPaths() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const datas = await res.json();
//     const paths=datas.map(data=>{
//         return {
//             params:{postid:`${data.id}`}
//         }
//     })
//     //paths is array type so can't return paths:[paths]
//     return {
//         paths: paths,fallback:false
//     }
// }

/**fallback:'blocking There is no loading Screen on load content
 * So we Don't need router.isFallback for check is it loading or not
 */
export async function getStaticPaths() {
    return {
        paths: [
            { params: { postid: '1' } },
            { params: { postid: '2' } },
            { params: { postid: '3' } }
        ],fallback:"blocking"
    }
}