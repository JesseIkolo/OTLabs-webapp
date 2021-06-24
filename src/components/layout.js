/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect }from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import {Container} from "./molecule"
import {CosmoIcon} from "./cosmoIcon"
import {TextButton,  Notification, Para, SocialButton, SquaredButton} from '../components/molecule'
import CustomerChat from '../components/customChat'
import "./layout.css"
import "./globals.css"
import "../assets/fonts/fonts.css"
import "../assets/fonts/ionicons.css"
import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm

// console.log('---Header', Header);
// console.log('---Footer', Footer);
// console.log('---Container', Container);

function Layout(props) {
  
  return(
    <>
      <div className="cosmos-section fixed maintain full-height">
          <div className="modal">
          <CosmoIcon icon="otla"/>
            <h1 className="kilo">
              Bonjour à toi futur expert !
            </h1>
            <p>
              Notre site est actuellement en maintenance, nous te prions de nous ecrire à l'adresse <a href="mailto:academy@onetouchlabs.xyz">academy@onetouchlabs.xyz</a>
              <br/>ou de nous suivre via : 
            </p>
            <div className="socials">
              <SquaredButton 
                  size="x2"
                  cosmoIcon={true}
                  icon="twitter"
                  iconColor="#fff"
                  to="https://www.twitter.com/onetouchlabs"/>
              <SquaredButton 
                  size="x2"
                  cosmoIcon={true}
                  icon="facebook"
                  iconColor="#fff"
                  to="https://www.facebook.com/onetouchlabs"/>
              <SquaredButton 
                  size="x2"
                  cosmoIcon={true}
                  icon="instagram"
                  iconColor="#fff"
                  to="https://www.instagram.com/onetouchlabs"/>
              <SquaredButton 
                  size="x2"
                  cosmoIcon={true}
                  icon="linkedin"
                  iconColor="#fff"
                  to="https://www.linkedin.com/compagny/one-touch-labs"/>
            </div>
            <p>Merci, <br />L'equipe OneTouch Labs.</p>
          </div>
      </div>
      <div className="cosmos-content">
         <main className="">{props.children}</main>
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
      <CustomerChat />
    </>
  
  )
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
