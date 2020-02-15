import React from "react"
import PropTypes from "prop-types"

const Pill = ({ children, className, textColor, bgColor }) => {
  return (
    <div
      className={`bg-${bgColor || "gray-800"} text-${textColor || "gray-500"} rounded-full py-1 px-3 ${className}`}>{children}</div>
  )
}

Pill.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
}

export default Pill
