/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import {Container} from "./molecule"
import {TextButton, Notification, Para, socialButton, SquaredButton} from '../components/molecule'

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
      <div className="cosmos-content">
         <main className="">{this.props.children}</main>
      {/* <Footer/> */}
      <div className="cosmos-section fixed hidden">
            <div className="cosmos-grid-container notification_bar whited large">
                  <div class="notification-text">
                    
                    <p>Pour ameliorer votre experience sur notre site, nous utilisons des elements de navigation, test et les cookoies.
                      En navigant ici, permettez nous de 
                    </p>
                  </div>
                  <div className="notification-action">
                    <TextButton 
                    icon="cog" 
                    cosmoIcon={true}
                    text="Configurer"
                    background={true}
                    backgroundColor="var(--primary-color)"
                    textColor="var(--text-color)"
                    to=""
                    />

                    <TextButton 
                    icon="check" 
                    cosmoIcon={true}
                    text="Autoriser"
                    background={true}
                    backgroundColor="var(--primary-color)"
                    textColor="var(--text-color)"
                    to=""
                    />
                  </div>
            </div>
          </div>
      </div>
    </>
  )
}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
