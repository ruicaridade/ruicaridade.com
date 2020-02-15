import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  author
              }
          }
      }
  `)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <h1 className="subtitle">{data.site.siteMetadata.author}</h1>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start"/>
          <div className="navbar-end">
            <a className="navbar-item">
              Email
            </a>
            <a className="navbar-item">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
