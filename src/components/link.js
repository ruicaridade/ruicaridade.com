import React from "react"
import PropTypes from "prop-types"

const Link = ({ to, children, openNewTab }) => {
  return (
    <a className="text-gray-500 hover:text-gray-300" href={to} target={openNewTab ? "_blank" : ""}
       rel={openNewTab ? "noopener noreferrer" : ""}>
      {children}
    </a>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  openNewTab: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Link
