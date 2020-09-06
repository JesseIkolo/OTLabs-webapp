
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

  swippeTo = (position, e) => {
    const activeSlide = document.querySelector(".slide.active");
    const activeControl = document.querySelector(".step.active")
    const clikedControl = e.target;
    const sliders = document.querySelectorAll(".slide");
    console.log(position,e.target.classList, activeSlide.classList);
    activeSlide.classList.remove("active");
    activeControl.classList.remove("active");
    clikedControl.classList.add("active")
    sliders[position].classList.add("active")
  }
  swippeNext = (e) => {
    const sliders = document.querySelectorAll(".slide");
    let activeSlide, position;
    for (let index = 0; index < sliders.length; index++) {
      const element = sliders[index];
      if(element.classList.contains("active")){
        activeSlide = element;
        position = index;
      }
    }
        const next = position + 1;
        const activeControl = document.querySelector(".step.active");
        const controlsStep = document.querySelectorAll(".step");
        activeSlide.classList.remove("active");

        activeControl.classList.remove("active");
        activeSlide.classList.remove("active");
        sliders[next].classList.add("active");
        controlsStep[next].classList.add("active");
        console.log("Ok", sliders[next].classList);
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
                  <div className="form align-left medium">
                    <div className="evo-sliders">
                      <div className="slide active">
                        <h1>Aidez-nous à nous ameliorer !</h1>
                        <h2>Nous voulons constement vous ameliorer OTL Learning. Repondez à ce petit questionnaire pour nous aider à vous proposer la meilleure experience.</h2>
                        <form class="large">
                          <div className="Q">
                            <div className="question">Oû avez-vous entendu parler de Otilearn ?</div>
                            <label className="select">
                              <select onChange={(e) => this.setState({ value1: e.target.value })}>
                                <option value="">-- Je prefere ne pas repondre --</option>
                                <option value="1">Sur facebook</option>
                                <option value="2">Grace au moteur de recherche Google</option>
                                <option value="3">Depuis Twitter</option>
                                <option value="3">Grace à une recommendationd'un ami</option>
                              </select>
                            </label>
                          </div>
                          <div className="Q">
                            <div className="question">Quelle est votre situation professionelle actuelle ?</div>
                            <label className="select">
                              <select onChange={(e) => this.setState({ value1: e.target.value })}>
                                <option value="">-- Je prefere ne pas repondre --</option>
                                <option value="1">Je suis etudiant</option>
                                <option value="2">J'ai un emploie</option>
                                <option value="3">Je suis au chomage</option>
                                <option value="3">Je veux changer de metier</option>
                              </select>
                            </label>
                          </div>
                          <div className="Q">
                            <div className="question">Oû avez-vous entendu parler de Otilearn ?</div>
                            <label className="select">
                              <select onChange={(e) => this.setState({ value1: e.target.value })}>
                                <option value="">-- Je prefere ne pas repondre --</option>
                                <option value="1">Sur facebook</option>
                                <option value="2">Grace a Google</option>
                                <option value="3">Depuis Twitter</option>
                                <option value="3">Grace à une recommendation</option>
                              </select>
                            </label>
                          </div>
                          <TextButton
                            icon="check"
                            cosmoIcon={true}
                            text="Continuer"
                            background={true}
                            backgroundColor="var(--primary-color)"
                            textColor="#fff"
                            to="../questionnaire"
                            type="large"
                          />
                          <h3 onClick={(e) => this.swippeNext()}>Ignorer</h3>
                        </form>

                      </div>
                      <div className="slide">
                        <h1>Que voulez vous apprendre ?</h1>
                        <h2>Quels sont vos centre d'interet parmi nos selection de cours ?</h2>
                          <div className="cards">
                            <div className="card">
                              <CosmoIcon icon="design" />
                              <div className="card-infos">
                                <h2>Interest Card Title</h2>
                                <div className="card-datas">
                                  <span>Data 1</span>
                                  <span>Data 1</span>
                                  <span>Data 1</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <TextButton
                            icon="check"
                            cosmoIcon={true}
                            text="Continuer"
                            background={true}
                            backgroundColor="var(--primary-color)"
                            textColor="#fff"
                            to="../questionnaire"
                            type="large"
                          />
                          <h3 onClick={(e) => this.swippeNext()}>Ignorer</h3>
                      </div>
                      <div className="slide">
                        <h1>Aidez-nous à nous ameliorer !</h1>
                        <h2>Nous voulons constement vous ameliorer OTL Learning. Repondez à ce petit questionnaire pour nous aider à vous proposer la meilleure experience.</h2>
                        <form class="large">
                          <div className="Q">
                            <div className="question">Oû avez-vous entendu parler de Otilearn ?</div>
                            <label className="select">
                              <select onChange={(e) => this.setState({ value1: e.target.value })}>
                                <option value="">-- Je prefere ne pas repondre --</option>
                                <option value="1">Sur facebook</option>
                                <option value="2">Grace au moteur de recherche Google</option>
                                <option value="3">Depuis Twitter</option>
                                <option value="3">Grace à une recommendationd'un ami</option>
                              </select>
                            </label>
                          </div>
                          <div className="Q">
                            <div className="question">Quelle est votre situation professionelle actuelle ?</div>
                            <label className="select">
                              <select onChange={(e) => this.setState({ value1: e.target.value })}>
                                <option value="">-- Je prefere ne pas repondre --</option>
                                <option value="1">Je suis etudiant</option>
                                <option value="2">J'ai un emploie</option>
                                <option value="3">Je suis au chomage</option>
                                <option value="3">Je veux changer de metier</option>
                              </select>
                            </label>
                          </div>
                          <div className="Q">
                            <div className="question">Oû avez-vous entendu parler de Otilearn ?</div>
                            <label className="select">
                              <select onChange={(e) => this.setState({ value1: e.target.value })}>
                                <option value="">-- Je prefere ne pas repondre --</option>
                                <option value="1">Sur facebook</option>
                                <option value="2">Grace a Google</option>
                                <option value="3">Depuis Twitter</option>
                                <option value="3">Grace à une recommendation</option>
                              </select>
                            </label>
                          </div>
                          <TextButton
                            icon="check"
                            cosmoIcon={true}
                            text="Continuer"
                            background={true}
                            backgroundColor="var(--primary-color)"
                            textColor="#fff"
                            to="../questionnaire"
                            type="large"
                          />
                          <h3 onClick={(e) => this.swippeNext()}>Ignorer</h3>
                        </form>

                      </div>
                      
                    </div>
                    <div className="control">
                    <div class="progression">
                      <div className="step active" onClick={(e) => this.swippeTo(0,e)}>
                      </div>
                      <div className="step" onClick={(e) => this.swippeTo(1,e)}>
                      </div>
                      <div className="step" onClick={(e) => this.swippeTo(2,e)}>
                      </div>
                    </div>
                    </div>
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

