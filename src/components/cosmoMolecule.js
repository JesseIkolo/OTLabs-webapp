
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import Footer from "./footer"
// import {Container} from "./molecule"
import "./conversation.css"
import "./globals.css"
import "../assets/fonts/fonts.css"
import "../assets/fonts/ionicons.css"

const Conversationheader = ({ type, url, title, subtitle})=> {
   return(
      <div className="cc-header">
         <Profilpicture url={url} to=""/>
         <div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
         </div>
      </div>
   )
}

Conversationheader.propTypes = {
   type:PropTypes.string,
   url:PropTypes.string,
   title:PropTypes.string,
   subtitle:PropTypes.string
}

Conversationheader.default = {
   type : ``,
   url : ``,
   title : ``,
   subtitle : ``,
}

const Profilpicture = ({ url, to }) => {
   return(
      <>
      {
         url ? (
            <div className="profil-picture">
               {/* <Img
                  fixed={data.file.childImageSharp.fixed}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt=""/> */}
            </div>
         ):(
            <div className="profil-picture no-pic"></div>
         )
      }
      </>
   )
}


export  { Conversationheader, Profilpicture}
