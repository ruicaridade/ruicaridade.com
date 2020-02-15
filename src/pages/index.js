import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Badge from "../components/badge"

const Section = styled.section`
  margin-bottom: 200px;
`

const Article = styled.article`
  margin-bottom: 75px;
`

const JobTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-weight: bold;
`

const JobDate = styled.p`
  
`

const IndexPage = () => (
  <Layout>
    <SEO/>
    <Section>
      <Article>
        <JobTitle>
          Junior Games Server Programmer
        </JobTitle>
        <h5><a href="https://www.kwalee.com/">Kwalee</a></h5>
        <ul>
          <li>
            Built a BI tool from the ground up allowing the business to scale from thousands to 20M+ MAU
          </li>
          <li>
            Developed and maintained the infrastructure serving over 2M concurrent players worldwide
          </li>
          <li>
            Shipped over 10 games both on Android and iOS
          </li>
        </ul>
        <p>
          <Badge>Python</Badge>
          <Badge>Flask</Badge>
          <Badge>ElasticSearch</Badge>
          <Badge>Couchbase</Badge>
          <Badge>AWS</Badge>
        </p>
        <JobDate>February 2018 - Present</JobDate>
      </Article>
    </Section>
  </Layout>
)

export default IndexPage
