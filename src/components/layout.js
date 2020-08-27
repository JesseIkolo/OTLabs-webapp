/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import {Container} from "./molecule"
import "./layout.css"
import "./globals.css"
import "../assets/fonts/font-styles.css"
import "../assets/fonts/ionicons.css"

// console.log('---Header', Header);
// console.log('---Footer', Footer);
// console.log('---Container', Container);



class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
render(){
  return (
    <>
      <Header siteTitle={'data.site.siteMetadata.title'} />
      <div className="cosmos-content">
         <main className="">{this.props.children}</main>
      {/* <Footer/> */}
      </div>
    </>
  )
}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
