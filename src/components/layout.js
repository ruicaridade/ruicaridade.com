import React from "react"
import PropTypes from "prop-types"

import "../css/tailwind.css"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main>
        {children}
      </main>
      {/*<div>*/}
      {/*  <main>{children}</main>*/}
      {/*  <footer>*/}
      {/*    © {new Date().getFullYear()}, Built with*/}
      {/*    {` `}*/}
      {/*    <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
      {/*  </footer>*/}
      {/*</div>*/}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
