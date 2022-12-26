import Layout from 'src/components/Layout'

import { getSortedPostsData } from 'src/lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export type TPost = {
  id: string
  date: string
  title: string
  description: string
  tag: string
}

type PostsProps = {
  allPostsData: TPost[]
}

const Posts = ({ allPostsData }: PostsProps) => {
  return (
    <Layout>
      <h2>Blog</h2>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Posts
