import Layout from 'src/components/Layout'
import PostHero from 'src/components/PostHero'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import * as S from './styled'

function renderOptions(links) {
  const assetMap = new Map()
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset)
  }

  const entryMap = new Map()
  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry)
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        const asset = assetMap.get(node.data.target.sys.id)
        switch (asset.contentType) {
          case 'image/jpeg':
          case 'image/png':
            return (
              <img
                src={asset.url}
                height={asset.height}
                width={asset.width}
                alt={asset.description}
              />
            )
          default:
            return 'Nothing to see here...'
        }
      },
      [INLINES.HYPERLINK]: (node) => {
        if (node.data.uri.indexOf('embed') !== -1) {
          return (
            <iframe
              width="100%"
              height="315"
              src={node.data.uri}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )
        }
        return (
          <a href={node.data.uri} target="_blank" rel="noreferrer">
            {node.content[0].value}
          </a>
        )
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const entry = entryMap.get(node.data.target.sys.id)
        if (entry.__typename === 'Iframe') {
          return <div dangerouslySetInnerHTML={{ __html: entry.iframeCode }} />
        }
      },
    },
  }
}

const BlogPost = ({ post }) => {
  return (
    <Layout>
      <PostHero {...post} />
      <S.PostContent>
        <S.PostContentWrapper className="postFormat" suppressHydrationWarning>
          {post.content.json &&
            documentToReactComponents(
              post.content.json,
              renderOptions(post.content.links)
            )}
        </S.PostContentWrapper>
      </S.PostContent>
    </Layout>
  )
}

export default BlogPost
