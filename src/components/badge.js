import React from "react"

import styled from "styled-components"
import PropTypes from "prop-types"

const BadgeSpan = styled.span`
  text-shadow: none;
  font-size: 12px;
  padding: 1px 15px;
  font-weight: normal;
  line-height: 15px;
  background-color: #ABBAC3!important;
`

const Badge = ({ children }) => {
  return (
    <BadgeSpan>{children}</BadgeSpan>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Badge
