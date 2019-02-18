import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'
import { siteTitleQuery } from '../../graphql/queries/siteTitleQuery'
import { renderLayout } from './lib/renderLayout'

import '../../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

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
