import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/post'
import Layout, { siteTitle } from '../component/Layout.component'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData:allPostsData
    }
  }
}

function Home({ allPostsData }) {
  return (
    <Layout home> {/**home */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My Name Satyam</p>
        <p>
          This Bloging Web Site built on Next Js
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs List</h2>
        <ul className={utilStyles.list}>
          {
          allPostsData.map(({id,name}) => (
            <li className={utilStyles.listItem} key={id}>
              {name}
            </li>
          ))
          }
        </ul>
      </section>

    </Layout>
  )
}
export default Home;