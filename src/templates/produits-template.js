import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

const ComponentName = ({ data: 
{produit:{   
        titre, 
        prix, 
        image:{fixed},
        info:{info}
    }
} 
}) => {

    return (
        <Layout>
            <div style={{ textAlign: "center" }}>
                <Link to="/produits/">Retour aux produits</Link>
                <h1>Produit Simple </h1>
            </div>
    <section className="simple-produit">
    <article>
        <Image fixed={fixed} alt={titre} />
    </article>
    <article>
    <h1>{titre}</h1>
    <h3>{prix}€</h3>
    <p>{info}</p>
    <button>Ajouter au panier</button>

    </article>
    </section>

    </Layout>
    )
}
export const query = graphql`
query getSingleProduits ($slug: String) {
    produit: contentfulProduit(slug: {eq: $slug }) {
      titre
      prix
      image {
        fixed (width: 300){
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName

