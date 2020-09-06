
import React from 'react'
import { graphql, Img } from 'gatsby'
import Layout from '../components/layout'
import {TextButton, Notification, Para, socialButton} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'
import SEO from "../components/seo"
import Header from "../components/header"
import { Link } from "gatsby"



export default class passwordRecovery extends React.Component {
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
              <div className="form-container full">
                <div className="form-content">
                  <div class="form-header">
                  <Link to="..">
                    <CosmoIcon icon="otla" />
                  </Link>
                  </div>
                  <div className="form">
                    <h1>Mot de passe oublié ?</h1>
                    <h2>Quel est l'adresse email associé à votre compte ?</h2>
                    <form class="large">
                    
                      <label>
                        <input
                          type="email"
                          placeholder="Quelle est votre adresse email ?"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleInputChange}
                        />
                        <div className="icon-cacher"><CosmoIcon icon="email" iconColor="var(--Grey-1)"/></div>

                      </label>
                      
                      <TextButton 
                      icon="email" 
                      cosmoIcon={true}
                      text="Verifier mon adresse"
                      background={true}
                      backgroundColor="var(--primary-color)"
                      textColor="#fff"
                      to="../verifyAccount"
                      type="large"
                      />
                    </form>
                  </div>
                  <p className="policy">En cliquant sur "Créer un compte", vous acceptez le <Link to="/">contrat de confidencialité</Link> et aux <Link>regles d'utilisations</Link> de notre plateforme. Nous vous enverrons un email avec les informations de votre compte</p>
                
                </div>
              </div>

              {/* <div className="form-slides">
  
              </div> */}
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

