import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const SWEEP = (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Page1-sweep.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)