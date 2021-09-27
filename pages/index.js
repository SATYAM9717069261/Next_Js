import Link from "next/link"
import UserList from "./Users";
function Home({ allPostsData }) {
  return (
    <div>
      <h2> Bloging Site</h2>
      <div><Link href="/Users">
        <a> User List  </a>
      </Link></div>
      {/* {<UserList/> } */}
     <div> <Link href="/posts">
        <a>Post List  </a>
      </Link></div>
      

    </div>
  )
}
export default Home;