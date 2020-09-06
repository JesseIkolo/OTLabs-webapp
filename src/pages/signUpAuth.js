
import React from 'react'
import { graphql, Img } from 'gatsby'
import Layout from '../components/layout'
import {TextButton, Notification, Para, socialButton} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'
import SEO from "../components/seo"
import Header from "../components/header"
import { Link } from "gatsby"



export default class SignUp extends React.Component {
  state={
    firstName : "",
    lastName : "",
    email : "",
    password:"",

  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
    render(){
      return (
        <>
         {/* <Header siteTitle={'data.site.siteMetadata.title'} /> */}
            <SEO title="Creer votre compte" />
            <div className="cosmos-fixed-container  form-slider end">
              <div className="form-container">
                <div className="form-content">
                  <div class="form-header">
                  <Link to="..">
                    <CosmoIcon icon="otla" />
                  </Link>
                  </div>
                  <div className="form">
                    <h1>Créez un nouveau compte ?</h1>
                    <h2>Configurons ensemble votre nouveau compte</h2>
                    <form class="large">
                    <label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Choisissez nom de connexion ou login."
                          value={this.state.firstName}
                          onChange={this.handleInputChange}
                        />
                        <div className="icon-cacher"><CosmoIcon icon="user-warn" iconColor="var(--Grey-1)"/></div>
                      </label>
                      <label>
                        <input
                          type="email"
                          placeholder="Quel est votre adresse email ?"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleInputChange}
                        />
                        <div className="icon-cacher"><CosmoIcon icon="email" iconColor="var(--Grey-1)"/></div>

                      </label>
                      <label>
                        <input
                          type="password"
                          placeholder="Choisissez un mot de passe."
                          name="password"
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          
                        />
                        <div className="icon-cacher"><CosmoIcon icon="user-password" iconColor="var(--Grey-1)"/></div>

                      </label>
                      <TextButton 
                      icon="user-add" 
                      cosmoIcon={true}
                      text="Créez votre compte"
                      background={true}
                      backgroundColor="var(--primary-color)"
                      textColor="#fff"
                      to="signUp"
                      type="large"
                      />
                      <h3>Vous avez deja un compte ?</h3>
                      <TextButton  icon="user-ok"  cosmoIcon={true} text="Connectez-vous" background={true} backgroundColor="var(--Grey-1)" textColor="#fff" to="../signIn" type="large" />

                    </form>
                  </div>
                  <p className="policy">En cliquant sur "Créer un compte", vous acceptez le <Link to="/">contrat de confidencialité</Link> et aux <Link>regles d'utilisations</Link> de notre plateforme. Nous vous enverrons un email avec les informations de votre compte</p>
                
                </div>
              </div>

              <div className="form-slides">
  
              </div>
            </div>
        </>
        )
    }
  }



// export const pageQuery = graphql`
//   query IndexQuery {
//     allStrapiProject {
//       edges {
//         node {
//           id
//           ProjectTitle
//           ProjectDescription
//         }
//       }
//     }
//   }
// `

