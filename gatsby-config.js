/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`,
})
module.exports = {
siteMetadata:{
title:"Tutoriel Gatsby",
description:"Quelques descriptions aléatoires",
author:"@ludovicdouhard",
data:["item 1", "item 2"],
person:{ name:"ludovic", age: 40},

  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mgxg8ezuwddu`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
