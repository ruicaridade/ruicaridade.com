import React from "react"

import "../css/tailwind.css"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import Head from "./head"

const Layout = ({ children }) => {
  return (
    <>
      <Head/>
      <Navbar/>
      <main>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
