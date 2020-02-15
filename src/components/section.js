import React from "react"
import PropTypes from "prop-types"

const Section = ({ className, children }) => {
  return (
    <section className={`container px-5 lg:px-20 ${className}`}>
      {children}
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Section
