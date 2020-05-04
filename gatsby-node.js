const path = require("path")

//créer des pages dynamiquement
exports.createPages = async ({ graphql, actions }) =>{
const { createPage } = actions;
const result = await graphql(`
query GetProducts {
    produits: allContentfulProduit {
      nodes {
        slug
      }
    }
  }
  `)
result.data.produits.nodes.forEach((produit)=>{
createPage({
path: `/produits/${produit.slug}`,
component: path.resolve(`src/templates/produits-template.js`),
context: {
  slug: produit.slug,
},

})

  })

}
