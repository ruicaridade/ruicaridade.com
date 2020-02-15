import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import Hero from "./hero"
import Navbar from "./navbar"

const Container = styled.div`
  margin-top: 150px !important;
`

const
  Layout = ({ children }) => {
    return (
      <>
        <Navbar/>
        <Hero/>
        <Container className="container">
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Container>
      </>
    )
  }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
