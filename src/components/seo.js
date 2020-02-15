import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

function SEO () {
  const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    lang
                }
            }
        }
    `,
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.lang,
      }}
      title={site.siteMetadata.title}
      meta={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
      ]}
    >
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"/>
    </Helmet>
  )
}

export default SEO
