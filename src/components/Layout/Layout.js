import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { renderLayout } from './lib/renderLayout'

import '../../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;
  const siteTitleQuery = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteUrl
          title
          description
          type
          locale
        }
      }
    }
  `

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={siteTitleQuery}
      render={data => renderLayout(data, content)}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
