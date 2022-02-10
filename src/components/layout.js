import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

import Render from "./render.jpg"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const data = useStaticQuery(graphql`{
  desktopLogo: file(absolutePath: {regex: "/FfT_Logo_Desktop.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 100
        placeholder: TRACED_SVG
        formats: [AUTO, WEBP, AVIF]
        layout: FULL_WIDTH
      )
    }
  }
  mobileLogo: file(absolutePath: {regex: "/FfT_Logo_Mobile.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 300
        quality: 100
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
}
`)

const logos = withArtDirection(getImage(data.mobileLogo), [
  {
    media: "(min-width: 765px)",
    image: getImage(data.desktopLogo),
  },
])

  if (location.pathname === rootPath) {
    header = (
      <div class="px-4 mb-6 md:ml-20">
        <GatsbyImage 
          image={logos} 
          alt="logo"
          objectFit='scale-down'
        />
      </div>
    )
  } else {
    header = (
      <div class="px-4 mb-6 md:ml-20">
        <Link to={`/`}>
          <GatsbyImage 
            image={logos} 
            alt="logo"
            objectFit='scale-down' 
          />
        </Link>
      </div>
        
    )
  }
  return (
    <div class="flex flex-col">
        <header class="pr-2">{header}</header>  
          <div class="hidden md:block w-2/3 mx-auto">
          <p><span role="img" aria-label="bipoc pointing finger">&#128070;</span>Improperly displayed logo</p>
      </div>
      
      <hr />
      <p>How the logo should look...<span role="img" aria-label="bipoc pointing finger">&#128071;</span></p>
      <img src={Render} alt="live home screen" />
      <p>If you open up dev tools and switch from mobile to desktop logo you can see that the mobile logo renders in mobile but when switching back to desktop the desktop logo renders in the same size/dimensions as the mobile logo...</p>
      <p>Logos can be found at content -> assets</p>
      <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
