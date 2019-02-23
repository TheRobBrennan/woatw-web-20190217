import React from 'react'
import Helmet from 'react-helmet'

// Images
import posterForUpcomingShow from '../../../images/woatw/20190223-wyatt-olney-and-the-wreckage-tony-vs-everett-wa.jpg'

export const renderLayout = (data, content) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'og:description', content: data.site.siteMetadata.og.description},
        { name: 'og:image', content: posterForUpcomingShow},
      ]}
    >
      <html lang="en" />
    </Helmet>
    {content}
  </>
)
