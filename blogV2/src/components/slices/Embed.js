import React from 'react'
import { graphql } from 'gatsby'

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null
  const document = doc.node

  return (
    <div dangerouslySetInnerHTML={{ __html: document.video.html }} />
  )
}

export const query = graphql`
query {
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          video
        }
      }
    }
  }
}
`

export default Page