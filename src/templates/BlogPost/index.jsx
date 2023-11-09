import Layout from 'src/components/Layout'
import PostHero from 'src/components/PostHero'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import * as S from './styled'

const BlogPost = ({ post }) => {
  return (
    <Layout>
      <PostHero {...post} />
      <S.PostContent>
        <S.PostContentWrapper
          className="postFormat"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(post.content.json),
          }}
        />
      </S.PostContent>
    </Layout>
  )
}

export default BlogPost
