# Google Analytics
For information on working with Google Analytics and Gatsby, please refer to the guide [here](https://www.gatsbyjs.org/docs/adding-analytics/).

Full documentation for the Google Analytics plug-in can be found at [https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)

## Cheat sheet
After you have created - or have been supplied with - the Google Tracking ID for your property, you will want to make sure you:

```sh
// Install the Google Analytics plug-in
$ npm install --save gatsby-plugin-google-analytics

// Modify gatsby-config.js by adding this section
{
  resolve: `gatsby-plugin-google-analytics`,
  options: {
  // replace "UA-XXXXXXXXX-X" with your own Tracking ID
    trackingId: "UA-XXXXXXXXX-X",
  },
},
```

That's it.