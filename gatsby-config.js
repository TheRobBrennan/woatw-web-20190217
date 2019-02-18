module.exports = {
  siteMetadata: {
    title: "[PREVIEW] Wyatt Olney & The Wreckage | Seattle WA",
    author: "Rob Brennan",
    description: "A concept site for one of Seattle's hard rock bands."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/woatw/artistic-moth.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
