import PropTypes from "prop-types"
import React from "react"
import Section from "./section"

const Hero = () => {
  const vocation = (
    <span className="border-dashed border-b-2">Backend Developer</span>
  )

  const employer = (
    <a
      className="border-dashed hover:border-solid border-b-2 text-yellow-400"
      href="https://www.kwalee.com/"
      target="_blank" rel="noopener noreferrer"
    >
      Kwalee
    </a>
  )

  return (
    <Section className="container py-10 lg:py-40 text-2xl lg:text-4xl text-white">
      <h1>
        {vocation} working in the mobile hyper-casual industry from the rainy UK and serving millions of players
        worldwide. Currently wearing a {employer} shirt.
      </h1>
    </Section>
  )
}

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
