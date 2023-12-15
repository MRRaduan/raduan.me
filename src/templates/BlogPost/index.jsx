import Layout from 'src/components/Layout'
import PostHero from 'src/components/PostHero'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import * as S from './styled'
import { NextSeo } from 'next-seo'

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
              <Image
                height={asset.height}
                width={asset.width}
                src={asset.url}
                layout="responsive"
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
            <div className="video-container">
              <iframe
                width="680"
                height="382"
                src={node.data.uri}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
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
  console.log(post)
  return (
    <>
      <NextSeo
        title={`${post.title} - Matheus Raduan`}
        description={post.description}
        openGraph={{
          url: `https://raduan.me/blog/${post.slug}`,
          title: `${post.title} - Matheus Raduan`,
          description: post.description,
          images: [
            {
              url: post.image.url,
              alt: post.title,
            },
          ],
        }}
      />
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
    </>
  )
}

export default BlogPost
