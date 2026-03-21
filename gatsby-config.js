/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title:'My Gatsby Site version 01'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
  {
    resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
  },
   "gatsby-plugin-mdx",
  ],
}
