import Layout from 'src/components/Layout'
import { TPost } from '.'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }: any) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

type TPostProps = {
  postData: TPost
}

const Post = ({ postData }: TPostProps) => {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export default Post
