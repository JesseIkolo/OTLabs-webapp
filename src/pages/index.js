import React from 'react'
import { graphql, Img } from 'gatsby'
import Layout from '../components/layout'
import {TextButton, Notification, Para, socialButton} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'
import SEO from "../components/seo"
import Header from "../components/header"
import Program from "../components/program"

const IndexPage = ({ data }) => {
  
    return (
      <> 
        <Layout>
        <Header siteTitle={'data.site.siteMetadata.title'} />
          <SEO title="Rejoignez notre centre" />
          <div className="cosmos-section">
            <div className="cosmos-grid-container home-slider end">
                  <h1 className="giga">
                    Rejoignez notre centre <br/>
                    de développement <br/>
                    de compétence.
                  </h1>
                  <ul className="clarify">
                      <li>
                        <h2>
                        Pour devenir expert du numerique
                        </h2>
                        <p>
                        En apprenant un metier 2.0 rapidement grâce à des cours, atelier et projets axés sur l’innovation et la créativité.
                        </p>
                      </li>
                      <li>
                        <h2>
                        Pour pratiquez dès le jour zero.
                        </h2>
                        <p>
                        Toucher des le depart des exemples et apprenez tres vites a monter des projets de design et de codage de A-z.
                        </p>
                      </li>
                      {/* <TextButton 
                    icon="scrool-down" 
                    cosmoIcon="true"
                    text="Scrollez vers la bas pour decouvrir nos prochains programmes de formation"
                    background={false}
                    backgroundColor="transparent"
                    textColor="var(--text-color)"
                    /> */}
                    <h2 className="announcer">Decouvrez nos prochaines formations</h2>
                  </ul>
                  
            </div>
          </div>
          
          <div className="cosmos-grid-container programs">
              <Program 
                    title = "Developpement Web"
                    description = "Apprenez les contours du metier de Designer d’interface utilisateur grâce des cours, atelier et projet avec des designers professionels tout les."
                    program_duration = "4 semaines de cours + 2 semaines de projets."
                    program_dates="Candidature avant le  11 Juin 2020. Debut de cours le 19 Juin 2020"
                    theme_color="var(--secondary-color)"
                  />
                  <Program 
                    title = "User Interface Design"
                    description = "Apprenez les contours du metier de Designer d’interface utilisateur grâce des cours, atelier et projet avec des designers professionels tout les."
                    program_duration = "4 semaines de cours + 2 semaines de projets."
                    program_dates="Candidature avant le  11 Juin 2020. Debut de cours le 19 Juin 2020"
                    theme_color="var(--Green-5)"
                  />
                  <Program 
                    title = "User Interface Design"
                    description = "Apprenez les contours du metier de Designer d’interface utilisateur grâce des cours, atelier et projet avec des designers professionels tout les."
                    program_duration = "4 semaines de cours + 2 semaines de projets."
                    program_dates="Candidature avant le  11 Juin 2020. Debut de cours le 19 Juin 2020"
                    theme_color="var(--secondary-color)"
                  />
          </div>
          <div className="cosmos-section">
          <div className="cosmos-grid-container full">
            <div className="text-side presentation">
              <h1 className="mega">
              Pourquoi venir apprendre avec nous ?
              </h1>
            </div>
            <ul className="clarify">
                    <li>
                      <h2>
                      Vous apprendrez avec des creatifs
                      </h2>
                      <p>
                        Pas besoin d'etre un designer pour etre faire des choses creatives,
                        que nous apprendrons ensemble, grace a des activités, ateliers et projets
                        qui jalonnerons votre evolutions.
                      </p>
                    </li>
                    <li>
                      <h2>
                        Pour pratiquez dès le jour zero.
                      </h2>
                      <p>
                        C'est dans la pratique que reside l'experience. Nous concevons nos cours
                        pour rapidement prendre en main votre futur metier, partant de zero, nous vous aiderons
                        à produire des resultat, rapidement, et de classe.
                      </p>
                    </li>
                    <li>
                      <h2>
                      Pour pratiquez dès le jour zero.
                      </h2>
                      <p>
                      Toucher des le depart des exemples et apprenez tres vites a monter des projets de design et de codage de A-z.
                      </p>
                    </li>
                    <li>
                      <h2>
                      Pour pratiquez dès le jour zero.
                      </h2>
                      <p>
                      Toucher des le depart des exemples et apprenez tres vites a monter des projets de design et de codage de A-z.
                      </p>
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

