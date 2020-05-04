import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/produits.module.css"
import Image from "gatsby-image" 
import { Link } from "gatsby"
const ComponentName = ({ data }) => {
  const {allContentfulProduit:{nodes:produits}}= data
return (

<Layout>

<section className={styles.page}>
  {produits.map((produits)=>{

  return <article key={produits.id}>
  <Image fluid={produits.image.fluid} alt={produits.titre}></Image>
  <h3>{produits.titre} <span>{produits.prix}€</span></h3>

<Link to={`/produits/${produits.slug}`}>Plus d'infos</Link>


  </article>


  })}
</section>

</Layout>
)
}

export const query = graphql`
  {
    allContentfulProduit {
      nodes {
        id
        titre
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        prix
      }
    }
  }
`

export default ComponentName

