// import markdownToHtml from 'src/lib/markdownToHtml'

import { getAllPosts, getPostBySlug } from 'src/utils/contentful'
import BlogPost from 'src/templates/BlogPost'

const Post = (post) => {
  return <BlogPost post={post} />
}

export default Post

// export async function getStaticProps({ params }) {
//   const slug = params.slug
//   const post = getPostBySlug(slug)

//   // get prev/next posts
//   // const allPosts = getAllPosts()
//   // const currentPostIndex = allPosts.findIndex((p) => p.slug === slug)
//   // const nextPost = allPosts[currentPostIndex - 1] ?? null
//   // const prevPost = allPosts[currentPostIndex + 1] ?? null

//   return {
//     props: {
//       ...post,
//       // content,
//       // nextPost,
//       // prevPost,
//     },
//   }
// }

export async function getServerSideProps({ params, req, res }) {
  const { slug } = params
  const post = await getPostBySlug(slug)
  return {
    props: {
      ...post,
    },
  }
}
