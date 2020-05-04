import React from 'react'
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"
const examples = ({data}) => {

    const {
    site:{
        info:{author},
        },
    } = data
 
    return (
           <Layout>
            <p>Bonjour depuis la page d'example</p>
            <Header />
            <HeaderStatic />

    <h5>auteur : {author}</h5>
  
            </Layout>
    )
}
export const data = graphql`
query MyQuery {
    site {
      info :siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
  



`
export default examples
