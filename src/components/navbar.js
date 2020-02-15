import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Link from "./link"

const Navbar = () => {
  const { site, file } = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  author
                  linkedIn
                  github
                  twitter
                  email
              }
          }
          file(relativePath: { eq: "peanut.png" }) {
              childImageSharp {
                  fixed(width: 75, height: 75) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `)

  const buttons = [
    {
      label: "Github",
      href: site.siteMetadata.github,
    },
    {
      label: "LinkedIn",
      href: site.siteMetadata.linkedIn,
    },
    {
      label: "Twitter",
      href: site.siteMetadata.twitter,
    },
    {
      label: "Email",
      href: `mailto:${site.siteMetadata.email}`,
    },
  ]

  return (
    <nav className="container flex flex-col lg:flex-row mt-10 px-5 lg:px-20">
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        <Img className="rounded-full h-16 w-16 bg-white mr-4" fixed={file.childImageSharp.fixed}/>
        <div className="leading-tight text-center lg:text-left">
          <h1 className="text-2xl text-white font-semibold">{site.siteMetadata.author}</h1>
          <h2 className="text-gray-600">Portuguese. Living in the UK.</h2>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0 lg:justify-end">
        <ul>
          {buttons.map((btn, index) => {
            return (
              <li key={index} className="inline mx-5 text-lg">
                <Link to={btn.href} openNewTab={true}>
                  {btn.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
