import PropTypes from "prop-types"
import React from "react"

const Hero = () => {
  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Backend Developer working in the mobile hyper-casual industry serving millions of players worldwide.
          </h1>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
