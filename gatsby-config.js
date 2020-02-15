module.exports = {
  siteMetadata: {
    title: `Rui Caridade 👋`,
    description: `Backend Developer working in the mobile hyper-casual industry.`,
    author: `Rui Caridade`,
    lang: "en",
    linkedIn: "https://www.linkedin.com/in/ruidanielcaridade/",
    github: "https://github.com/ruicaridade",
    twitter: "https://twitter.com/ruidgc",
    email: "ruidanielcaridade@gmail.com",
  },
  plugins: [
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
        icon: `src/images/peanut.png`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
