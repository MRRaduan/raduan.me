import gql from 'graphql-tag'
import apolloClient from './apollo-client'

export async function getAllPosts() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetAllPosts {
        postCollection {
          items {
            title
            description
            sys {
              publishedAt
            }
            slug
            image {
              url
            }
            tagCollection {
              items {
                tagName
              }
            }
          }
        }
      }
    `,
  })
  return data.postCollection.items
}

export async function getPostBySlug(slug) {
  const { data } = await apolloClient.query({
    query: gql`
      query GetPostBySlug($slug: String!) {
        postCollection(limit: 5, where: { slug: $slug }) {
          items {
            title
            description
            sys {
              publishedAt
            }
            slug
            image {
              url
            }
            tagCollection {
              items {
                tagName
              }
            }
            content {
              json
              links {
                entries {
                  block {
                    sys {
                      id
                    }
                    __typename
                    ... on Iframe {
                      title
                      iframeCode
                    }
                  }
                }
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                    title
                    width
                    height
                    description
                    contentType
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      slug,
    },
  })
  return data.postCollection.items[0]
}

export default { getAllPosts, getPostBySlug }
