import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

const NotFoundPage = () => (
  <Layout>
    <Section className="mt-20 text-center">
      <h1 className="text-3xl text-white">There's nothing here.</h1>
      <p className="text-6xl text-white">🤷</p>
    </Section>
  </Layout>
)

export default NotFoundPage
