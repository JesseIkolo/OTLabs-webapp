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
                    <TextButton 
                  icon="ion-ios-arrow-right" 
                  text="Decouvrez nos programmes"
                  background={false}
                  backgroundColor="transparent"
                  textColor="var(--text-color)"
                  />
                </ul>
                
          </div>
          <div className="cosmos-container next-program">
            <div class="program-summary">
              <h2>Ui Design weekends S01</h2>
              <p>Apprenez les contours du metier de Designer d’interface utilisateur grâce des cours, atelier et projet avec des designers professionels tout les.</p>
              <div className="subtitle">
                <CosmoIcon icon="calendar"/>
                <span>Durée du programme</span>
              </div>
              <p><b>4 semaines de cours + 2 semaines de projets.</b></p>
              <div className="subtitle">
                <CosmoIcon icon="clock"/>
                <span>Dates importantes</span>
              </div>
              <p>Candidature avant le  11 Juin 2020
                  Debut de cours le 19 Juin 2020
              </p>
              <div className="bottom-side">
                <TextButton
                  icon="ion-ios-arrow-right" 
                  text="Participer"
                  background={true}
                  backgroundColor="var(--primary-color)"
                  textColor="var(--text-color)"
                />
              </div>
            </div>
            <div className="program-detail">
              <div className="subtitle">
                  <CosmoIcon icon="calendar"/>
                  <span>Durée du programme</span>
              </div>
              <div className="full">
                <div className="modules-column">
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Fondementaux sur le design graphique</span>
                  </div>
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Atelier 1 : Logiciel d’UI design et conception d’interface basique</span>
                </div>
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Interface et equipements web et mobile</span>
                </div>
                  <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  
                  <span className="module-text">Interface et equipements web et mobile</span>
                </div>
                </div>
               <div className="modules-column">
               <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  <span className="module-text">Principes de conception d’UI</span>
                </div>
                <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  <span className="module-text">Atelier 2 : Typographie, Colorimetrie et photographie</span>
                </div>
                <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span> 
                  <span className="module-text">Manipulation des UI specifications</span>
                </div>
                <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  <span className="module-text">Conception d’un Design System</span>
                </div>
               </div>
               </div>
               <div className="semi">
                    <div className="subtitle">
                        <CosmoIcon icon="calendar"/>
                          <span>Profil de l'apprenant</span>
                      </div>
                      <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">
                        Exprit creatif
                      </span>
                  </div>
                  <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">Manupulation basique des logiciels de graphisme</span>
                  </div>
                  <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">Connaissance basique en developpemement</span>
                  </div>
               </div>
               <div className="semi">
                    <div className="subtitle">
                        <CosmoIcon icon="calendar"/>
                          <span>Frais de formation</span>
                      </div>
                    <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">Frais de formation 80.000 Fcfa + Certificat de formation chez OTL Academy</span>
                  </div>
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Première tranche de 50.000 Fcfa au demarrage de la formation, Deuxieme tranche de 30.000 Fcfa à la semaine 4.</span>
                  </div>
                  
               </div>
            </div>
          </div>
          <div className="cosmos-container next-program">
            <div class="program-summary">
              <h2>Ui Design weekends S01</h2>
              <p>Apprenez les contours du metier de Designer d’interface utilisateur grâce des cours, atelier et projet avec des designers professionels tout les.</p>
              <div className="subtitle">
                <CosmoIcon icon="calendar"/>
                <span>Durée du programme</span>
              </div>
              <p><b>4 semaines de cours + 2 semaines de projets.</b></p>
              <div className="subtitle">
                <CosmoIcon icon="clock"/>
                <span>Dates importantes</span>
              </div>
              <p>Candidature avant le  11 Juin 2020
                  Debut de cours le 19 Juin 2020
              </p>
              <div className="bottom-side">
                <TextButton
                  icon="ion-ios-arrow-right" 
                  text="Participer"
                  background={true}
                  backgroundColor="var(--primary-color)"
                  textColor="var(--text-color)"
                />
              </div>
            </div>
            <div className="program-detail">
              <div className="subtitle">
                  <CosmoIcon icon="calendar"/>
                  <span>Durée du programme</span>
              </div>
              <div className="full">
                <div className="modules-column">
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Fondementaux sur le design graphique</span>
                  </div>
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Atelier 1 : Logiciel d’UI design et conception d’interface basique</span>
                </div>
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Interface et equipements web et mobile</span>
                </div>
                  <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  
                  <span className="module-text">Interface et equipements web et mobile</span>
                </div>
                </div>
               <div className="modules-column">
               <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  <span className="module-text">Principes de conception d’UI</span>
                </div>
                <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  <span className="module-text">Atelier 2 : Typographie, Colorimetrie et photographie</span>
                </div>
                <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span> 
                  <span className="module-text">Manipulation des UI specifications</span>
                </div>
                <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  <span className="module-text">Conception d’un Design System</span>
                </div>
               </div>
               </div>
               <div className="semi">
                    <div className="subtitle">
                        <CosmoIcon icon="calendar"/>
                          <span>Profil de l'apprenant</span>
                      </div>
                      <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">
                        Exprit creatif
                      </span>
                  </div>
                  <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">Manupulation basique des logiciels de graphisme</span>
                  </div>
                  <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">Connaissance basique en developpemement</span>
                  </div>
               </div>
               <div className="semi">
                    <div className="subtitle">
                        <CosmoIcon icon="calendar"/>
                          <span>Frais de formation</span>
                      </div>
                    <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">Frais de formation 80.000 Fcfa + Certificat de formation chez OTL Academy</span>
                  </div>
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Première tranche de 50.000 Fcfa au demarrage de la formation, Deuxieme tranche de 30.000 Fcfa à la semaine 4.</span>
                  </div>
                  
               </div>
            </div>
          </div>
          <div className="cosmos-container next-program">
            <div class="program-summary">
              <h2>Ui Design weekends S01</h2>
              <p>Apprenez les contours du metier de Designer d’interface utilisateur grâce des cours, atelier et projet avec des designers professionels tout les.</p>
              <div className="subtitle">
                <CosmoIcon icon="calendar"/>
                <span>Durée du programme</span>
              </div>
              <p><b>4 semaines de cours + 2 semaines de projets.</b></p>
              <div className="subtitle">
                <CosmoIcon icon="clock"/>
                <span>Dates importantes</span>
              </div>
              <p>Candidature avant le  11 Juin 2020
                  Debut de cours le 19 Juin 2020
              </p>
              <div className="bottom-side">
                <TextButton
                  icon="ion-ios-arrow-right" 
                  text="Participer"
                  background={true}
                  backgroundColor="var(--primary-color)"
                  textColor="var(--text-color)"
                />
              </div>
            </div>
            <div className="program-detail">
              <div className="subtitle">
                  <CosmoIcon icon="calendar"/>
                  <span>Durée du programme</span>
              </div>
              <div className="full">
                <div className="modules-column">
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Fondementaux sur le design graphique</span>
                  </div>
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Atelier 1 : Logiciel d’UI design et conception d’interface basique</span>
                </div>
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Interface et equipements web et mobile</span>
                </div>
                  <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  
                  <span className="module-text">Interface et equipements web et mobile</span>
                </div>
                </div>
               <div className="modules-column">
               <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  <span className="module-text">Principes de conception d’UI</span>
                </div>
                <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  <span className="module-text">Atelier 2 : Typographie, Colorimetrie et photographie</span>
                </div>
                <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span> 
                  <span className="module-text">Manipulation des UI specifications</span>
                </div>
                <div className="module">
                  <span className="icon-spacer">
                  <span className="icon ion-ios-arrow-right"/>
                  </span>
                  <span className="module-text">Conception d’un Design System</span>
                </div>
               </div>
               </div>
               <div className="semi">
                    <div className="subtitle">
                        <CosmoIcon icon="calendar"/>
                          <span>Profil de l'apprenant</span>
                      </div>
                      <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">
                        Exprit creatif
                      </span>
                  </div>
                  <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">Manupulation basique des logiciels de graphisme</span>
                  </div>
                  <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">Connaissance basique en developpemement</span>
                  </div>
               </div>
               <div className="semi">
                    <div className="subtitle">
                        <CosmoIcon icon="calendar"/>
                          <span>Frais de formation</span>
                      </div>
                    <div className="module">
                      <span className="icon-spacer">
                      <span className="icon ion-ios-arrow-right"/>
                      </span>
                      <span className="module-text">Frais de formation 80.000 Fcfa + Certificat de formation chez OTL Academy</span>
                  </div>
                  <div className="module">
                    <span className="icon-spacer">
                    <span className="icon ion-ios-arrow-right"/>
                    </span>
                    <span className="module-text">Première tranche de 50.000 Fcfa au demarrage de la formation, Deuxieme tranche de 30.000 Fcfa à la semaine 4.</span>
                  </div>
                  
               </div>
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

