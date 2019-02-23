module.exports = {
  siteMetadata: {
    title: "Wyatt Olney & The Wreckage",
    description: "Seattle WA",
    author: "Rob Brennan",
    siteUrl: "https://www.woatw.com",
    type: "website",
    locale: "en",
    twitter: {
      card: "summary",
      site: "@woatw_band",
      creator: "@therobbrennan",
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'woatw-web-20190217',
        short_name: 'WOATW',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/woatw/artistic-moth.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-68343119-5",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://woatw.us11.list-manage.com/subscribe/post?u=6ebf45cada6d638457bc51a30&amp;id=64b10a0a10', // Find the POST URL for signing up to your list with an embedded form
      },
    },
  ],
}
