import React from 'react'
import Helmet from 'react-helmet'

export const renderLayout = (data, content) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    {content}
  </>
)
