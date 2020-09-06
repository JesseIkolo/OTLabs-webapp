
import React from 'react'
import { graphql, Img } from 'gatsby'
import Layout from '../components/layout'
import {TextButton, Notification, Para, socialButton} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'
import SEO from "../components/seo"
import Header from "../components/header"
import { Link } from "gatsby"



export default class verifyAccount extends React.Component {
  state={
    firstName : "",
    lastName : "",
    email : "",
    password:"",
    numberOne : "",
numberTwo : "",
numberThree : "",
numberFour : "",
numberFive : "",

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
                    <h1>Verification de votre compte</h1>
                    <h2>Entrez le code que vous avez reçu<br/>via votre adresse mail</h2>
                    <form class="large">
                    <h3 className="no-margin">Renvoyer le code dans 5 minutes</h3>
                      <label className="verifyCode">
                      <input
                          type="text"
                          maxlength="1"
                          placeholder=""
                          name="numberOne"
                          value={this.state.numberOne}
                          onChange={this.handleInputChange}
                        />
                        <input
                          type="text"
                          maxlength="1"
                          placeholder=""
                          name="numberTwo"
                          value={this.state.numberTwo}
                          onChange={this.handleInputChange}
                        />
                        <input
                          type="text"
                          maxlength="1"
                          placeholder=""
                          name="numberThree"
                          value={this.state.numberThree}
                          onChange={this.handleInputChange}
                        />
                        <input
                          type="text"
                          maxlength="1"
                          placeholder=""
                          name="numberFour"
                          value={this.state.numberFour}
                          onChange={this.handleInputChange}
                        />
                        <input
                          type="text"
                          maxlength="1"
                          placeholder=""
                          name="numberFive"
                          value={this.state.numberFive}
                          onChange={this.handleInputChange}
                        />
                        

                      </label>
                      
                      <TextButton 
                      icon="dial" 
                      cosmoIcon={true}
                      text="Verifier le code"
                      background={true}
                      backgroundColor="var(--primary-color)"
                      textColor="#fff"
                      to="../questionnaire"
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

