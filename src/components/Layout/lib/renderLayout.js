import React from 'react'
import Helmet from 'react-helmet'

// Images
// import artisticMoth from '../../../images/woatw/artistic-moth.jpg'
import nextShow from '../../../images/woatw/20191121-KISW-99.9-FM-Live-Day-Snoqualmie-Casino.jpg'

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
        { property: 'og:image', content: `${data.site.siteMetadata.siteUrl}${nextShow}`},
        { property: 'og:locale', content: data.site.siteMetadata.locale},
        { name: 'twitter:card', content: data.site.siteMetadata.twitter.card},
        { name: 'twitter:image:alt', content: `${data.site.siteMetadata.title} | ${data.site.siteMetadata.description}`},
        { name: 'twitter:site', content: data.site.siteMetadata.twitter.site},
        { name: 'twitter:creator', content: data.site.siteMetadata.twitter.creator},
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/jpg', href: `${nextShow}` }
      ]}
    >
      <html lang="en" />
    </Helmet>
    {content}
  </>
)
