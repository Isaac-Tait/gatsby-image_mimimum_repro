import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const data = useStaticQuery(graphql`{
  desktopLogo: file(absolutePath: {regex: "/FfT_Logo_Desktop.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 50
        placeholder: TRACED_SVG
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
  mobileLogo: file(absolutePath: {regex: "/FfT_Logo_Mobile.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 250
        quality: 100
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
}
`)

const logos = [
  data.mobileLogo.childImageSharp.gatsbyImageData,
  {
    ...data.desktopLogo.childImageSharp.gatsbyImageData,
    media: `(min-width: 768px)`
  }
]

  if (location.pathname === rootPath) {
    header = (
      <div>
        <GatsbyImage image={logos} alt="Fallfish Tenkara" />
      </div>
    )
  } else {
    header = (
      <div>
        <Link to={`/`}>
          <GatsbyImage image={logos} alt="Fallfish Tenkara" />
        </Link>
      </div>
        
    )
  }
  return (
    <div>
      <header className="">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
