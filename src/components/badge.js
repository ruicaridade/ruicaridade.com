import React from "react"

import PropTypes from "prop-types"

const Badge = ({ children }) => {
  return (
    <span>{children}</span>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Badge
