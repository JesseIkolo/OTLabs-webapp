import React from 'react'
import { graphql, Img } from 'gatsby'
import Layout from '../components/layout'
import {TextButton, Notification, Para, socialButton} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  
    return (
      <>
        <Layout>
          <SEO title="Rejoignez notre centre" />
          <div className="cosmos-grid-container home-slider end">
                <h1 className="giga larger">
                  Un Laboratoire pour préparer les batisseurs
                  de la future generation.
                </h1>
                <ul className="clarify three">
                    <li>
                      <h2>
                        Le Labs, axée sur les idées, les recherches, l'accompagement et l'innovation.
                      </h2>
                      <p>
                        Poser des problèmes, mener des reflexions, trouver des solutions, penser le future,
                        au travers d'activités collaboratives guider par la creativité des tous
                      </p>
                    </li>
                    <li>
                      <h2>
                      Le centre de developpement de competence, pour former une armée de batisseurs
                      </h2>
                      <p>
                        Grace a des cours en presentiel, pour prendre en main rapidement un metier du web et repondre aux enjeux.
                      </p>
                    </li>
                    <li>
                      <h2>
                      Le e-Learning, pour internationaliser nos methodes créatives et revolutionner l'apprentissage.
                      </h2>
                      <p>
                      Toucher des le depart des exemples et apprenez tres vites a monter des projets de design et de codage de A-z.
                      </p>
                    </li>
                </ul>
                
          </div>
          <div className="cosmos-grid-container full">
            <div className="illustration">

            </div>
            <div className="text-side presentation">
              <h1 className="mega">
              Nous construisons une communauté 
              de pionniers pour une transformation 
              digitale effective en Afrique.
              </h1>
              <p>
              OneTouch Labs Academy est un pôle de développement de compétences basé à Douala, au Cameroun, qui vise à apporter des formations professionnelles, rapides et de qualités, pour créer une forte communauté d’experts dans les nouveaux métiers du numérique, pour de bâtir une Afrique forte et prête à répondre aux exigences de cette nouvelle ère qui s’ouvre à nous.
              </p>
            </div>
            <div className="text-side left">
                <h2>
                Notre object, stimuler l’innovation grâce au partage d’experience et au développement de commpétence.
                </h2>
                <p>
                Conçu sur le modèle des laboratoires, OneTouch Labs ne vise pas seulement un volet de campus digital, mais un ecosysteme voué à impacter le futur de l’Afrique par la reflexion, l’innovation, le partage, tout en placant l’Humain au centre de la preocupation.
                </p>
            </div>
            <div className="illustration full">

            </div>
          </div>
          <div className="cosmos-grid-container full">
              <div className="text-side pole">
                <h1 className="mega">
                  3 poles majeures de formation pour une communauté   diversifiée aux objectifs communs
                </h1>
                <ul>
                  <li>
                    <h2>
                      Design graphique, d’interface
                      ou d’experience utilisateur
                    </h2>
                    <p>
                    Base de toutes interactions entre l’homme et la machine, de la forme à l’image, des interfaces visuelles au design d’expérience, du langage à l’identité, le challenge ici est de maitriser les aspects de conception en fonction des supports concernés
                    </p>
                    <TextButton 
                  icon="ion-ios-arrow-right" 
                  text="Decouvrez nos programmes"
                  background={false}
                  backgroundColor="transparent"
                  textColor="var(--text-color)"
                  />
                  </li>
                  <li>
                    <h2>
                    Developpement d’application
                    web et mobile
                    </h2>
                    <p>
                    Base de toutes interactions entre l’homme et la machine, de la forme à l’image, des interfaces visuelles au design d’expérience, du langage à l’identité, le challenge ici est de maitriser les aspects de conception en fonction des supports concernés
                    </p>
                    <TextButton 
                  icon="ion-ios-arrow-right" 
                  text="Decouvrez nos programmes"
                  background={false}
                  backgroundColor="transparent"
                  textColor="var(--text-color)"
                  />
                  </li>
                  <li>
                    <h2>
                    Web Marketing et Web <br/>Management
                    </h2>
                    <p>
                    Base de toutes interactions entre l’homme et la machine, de la forme à l’image, des interfaces visuelles au design d’expérience, du langage à l’identité, le challenge ici est de maitriser les aspects de conception en fonction des supports concernés
                    </p>
                    <TextButton 
                  icon="ion-ios-arrow-right" 
                  text="Decouvrez nos programmes"
                  background={false}
                  backgroundColor="transparent"
                  textColor="var(--text-color)"
                  />
                  </li>
                </ul>
              </div>
          </div>
          <div className="cosmos-grid-container full">
            <div className="text-side">
              <h1 className="mega">
              Et une equipe de formateurs experiementés pour vous aider à demarrer une carriere
              </h1>
              <p>
              Nous savons que vous avez plusieurs options en matière d'apprentissage des metier du 2.0, mais oneTouchLabs Academy se donne pour mission de vous offrir une formation de qualité appuyer par une equipe de formateur composé d’enseignants et de professionels experimentés, soucieux des valeurs et des challenges que nous voulons transmettre, acteur de l’innovation dans leur environemment respectif. Demmarer un discussion avec l’un d’eux serait une bonne idée.
              </p>
              <ul className="cards">
                <li>
                  <div className="profil-pic"></div>
                  <h5>Jesse Ikolo B.</h5>
                  <h6>Fondanteur OneTouchLabs et Programactor, UI/UX Designer, Web Dev, Enseigant d’Université</h6>
                  <div className="socials">
                    <socialButton
                      for="twitter"
                      link="jesseikolo"
                      />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          </Layout>
      </>
      )
  }

export default IndexPage

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
