import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Resume from "../components/resume"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Resume className="lg:my-10" title="Experience"/>
    <Footer/>
  </Layout>
)

export default IndexPage
