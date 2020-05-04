import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import img from '../Images/image-3.jpeg'
import Image from 'gatsby-image'

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "image-3.jpeg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "image-2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
    const data = useStaticQuery(getImages)
    
    return (
        <div>
            <section className="images">
<article className="single-image"><h3>Image basic</h3><img src={img} width="100%"></img></article>
<article className="single-image"><h3>Image fixe</h3>

<Image fixed={data.fixed.childImageSharp.fixed} />
</article>
<article className="single-image"><h3>Image fluid/svg</h3>


<Image fluid={data.fluid.childImageSharp.fluid}/>


</article>




            </section>
        </div>
    )
}

export default Images
