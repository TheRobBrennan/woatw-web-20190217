import React from 'react'
import Helmet from 'react-helmet'

// Images
import posterForUpcomingShow from '../../../images/woatw/20190223-wyatt-olney-and-the-wreckage-tony-vs-everett-wa.jpg'

export const renderLayout = (data, content) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: '' },
        { property: 'og:title', content: data.site.siteMetadata.title},
        { property: 'og:site_name', content: data.site.siteMetadata.title},
        { property: 'og:url', content: data.site.siteMetadata.siteUrl},
        { property: 'og:type', content: data.site.siteMetadata.type},
        { property: 'og:description', content: data.site.siteMetadata.description},
        { property: 'og:image', content: `${data.site.siteMetadata.siteUrl}${posterForUpcomingShow}`},
        { property: 'og:locale', content: data.site.siteMetadata.locale},
      ]}
    >
      <html lang="en" />
    </Helmet>
    {content}
  </>
)
