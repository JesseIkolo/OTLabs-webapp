
import React from 'react'
import { graphql, Img } from 'gatsby'
import Layout from '../components/layout'
import {TextButton, Notification, Para, socialButton} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'
import SEO from "../components/seo"
import Header from "../components/header"
import { Link } from "gatsby"



export default class signInAuth extends React.Component {
  state={
    login : "",
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
            <SEO title="Connectez-vous à votre espace" />
            <div className="cosmos-fixed-container  form-slider end">
              <div className="form-container">
                <div className="form-content">
                  <div class="form-header">
                  <Link to="..">
                    <CosmoIcon icon="otla" />
                  </Link>
                  </div>
                  <div className="form">
                    <h1>Connectez-vous !</h1>
                    <h2>Quels sont vos parametres de connexion.</h2>
                    <form class="large">
                    <label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Entrez votre email ou login."
                          value={this.state.firstName}
                          onChange={this.handleInputChange}
                        />
                        <div className="icon-cacher"><CosmoIcon icon="user-warn" iconColor="var(--Grey-1)"/></div>
                      </label>
                      <label>
                        <input
                          type="password"
                          placeholder="Entrez votre mot de passe."
                          name="password"
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          
                        />
                      <div className="icon-cacher"><CosmoIcon icon="user-password" iconColor="var(--Grey-1)"/></div>
                      </label>
                      <Link className="recovery" to="../passwordRecovery">
                        Vous avez oublié votre mot de passe ?
                        </Link>
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
                      <TextButton  icon="user-ok"  cosmoIcon={true} text="Connectez-vous" background={true} backgroundColor="var(--Grey-1)" textColor="#fff" to="../signUp" type="large" />

                    </form>
                  </div>
                  <p className="policy">S'il vous plait, prenez le temps de lire notre <Link to="/">contrat de confidentialité</Link> et les <Link>règles d'utilisations</Link> de notre plateforme. En cas de probleme, veillez nous notifiez d'un désagrément ici</p>
                
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

