import Link from "next/link"
import UserList from "./Users";
function Home({ allPostsData }) {
  return (
    <div>
      <Link href="/Users">
        <a>User List  </a>
      </Link>
      {/* {<UserList/> } */}
      <Link href="/posts">
        <a>Post List  </a>
      </Link>
      

    </div>
  )
}
export default Home;