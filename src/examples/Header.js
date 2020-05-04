import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
const getData = graphql`
{
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

const Header = () => {
    const {
        site:{
            info:{
                title,
                person:{name},
            },
        },
    } = useStaticQuery(getData);
    
    return (
        <div>
            <h1>Ceci est mon En-tête</h1>
{/*<h1>Titre:{data.site.siteMetadata.title}</h1>*/}
{/*<h1>Nom du créateur:{data.site.siteMetadata.person.name}</h1>*/}

    <h1>Titre:{title}</h1>
    <h1>Nom:{name}</h1>
        </div>
    )
}

export default Header
