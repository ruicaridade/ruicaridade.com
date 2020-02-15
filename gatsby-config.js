module.exports = {
  siteMetadata: {
    title: `Rui Caridade`,
    description: ``,
    author: `Rui Caridade`,
    lang: "en",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ruicaridade.com`,
        short_name: `ruicaridade`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/peanut.jpg`,
      },
    },
  ],
}
