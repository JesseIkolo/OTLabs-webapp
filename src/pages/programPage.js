import React from 'react'
import { graphql, Img } from 'gatsby'
import Layout from '../components/layout'
import {TextButton, Notification, Para, socialButton, SquaredButton} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'
import SEO from "../components/seo"
import Header from "../components/header"
import Program from "../components/program"

const ProgramPage = ({ data }) => {
  
    return (
      <> 
        <Layout>
          <div className="whited">
            <Header siteTitle={'data.site.siteMetadata.title'} />
            <SEO title="Rejoignez notre centre" />
            <div className="cosmos-section whited eight-height alt">
              <div className="cosmos-section-inner graded">
                <div className="cosmos-grid-container home-slider program-slider end">
                  <h1 className="giga colored-text">
                    Program title Program title Program title
                </h1>
                  <h3>
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived.
                </h3>
                  <TextButton
                    type="large"
                    icon="ion-ios-arrow-right"
                    text="S'enregistrer à ce programme"
                    background={false}
                    textColor="var(--primary-color)"
                    to={"to"}
                  />
                </div>
              </div>
              <div className="program-clarify-container bkged">
                <ul className="program-clarify four">
                  <li>
                    <div className="program-subtitle">
                      <CosmoIcon
                        icon="calendar"
                        iconColor="var(--text-color)" />
                      <h2>Durée du programme</h2>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </li>
                  <li>
                    <div className="program-subtitle">
                      <CosmoIcon
                        icon="branching"
                        iconColor="var(--text-color)" />
                      <h2>Niveau requis</h2>
                    </div>
                  </li>
                  <li>
                    <div className="program-subtitle">
                      <CosmoIcon
                        icon="bill"
                        iconColor="var(--text-color)" />
                      <h2>Frais de formation</h2>
                    </div>
                  </li>
                  <li>
                    <div className="program-subtitle">
                      <CosmoIcon
                        icon="clock"
                        iconColor="var(--text-color)" />
                      <h2>Date de début</h2>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
           
            <div className="cosmos-section semi-height  padded-64">
            <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
              <h1 className="mega">
                Qu'allez-vous apprendre ?
              </h1>
              </div>
              <ul className="clarify four">
                <li>
                  <SquaredButton
                    size="x2"
                    cosmoIcon="true"
                    icon="teacher-presentation"
                    iconColor="var(--text-color)"
                    backgroundColor="var(--background-blured)"
                  />
                  <h2>
                    Vous apprendrez avec des creatifs et des passionnés.
                  </h2>
                  <p>
                    Pas besoin d'etre un designer pour etre faire des choses creatives,
                    que nous apprendrons ensemble, grace a des activités, ateliers et projets
                    qui jalonnerons votre evolutions.
                  </p>
                </li>
                <li>
                  <SquaredButton
                    size="x2"
                    cosmoIcon="true"
                    icon="teacher-presentation"
                    iconColor="var(--text-color)"
                    backgroundColor="var(--background-blured)"
                  />
                  <h2>
                    Vous pratiquerez dans votre domaine dès le jour 1.
                  </h2>
                  <p>
                    C'est dans la pratique que reside l'experience. Nous concevons nos cours
                    pour rapidement prendre en main votre futur metier, partant de zero, nous vous aiderons
                    à produire des resultat, rapidement, et de classe.                        </p>
                </li>
                <li>
                  <SquaredButton
                    size="x2"
                    cosmoIcon="true"
                    icon="teacher-presentation"
                    iconColor="var(--text-color)"
                    backgroundColor="var(--background-blured)"
                  />
                  <h2>
                    Vous evoluérez rapidement, <br />dans un cadre collaboratif.
                  </h2>
                  <p>
                    Toucher des le depart des exemples et apprenez tres vites a monter des projets de design et de codage de A-z.
                  </p>
                </li>
                <li>
                  <SquaredButton
                    size="x2"
                    cosmoIcon="true"
                    icon="teacher-presentation"
                    iconColor="var(--text-color)"
                    backgroundColor="var(--background-blured)"
                  />
                  <h2>
                    Vous serez a la pointe de la technologie.
                  </h2>
                  <p>
                    Toucher des le depart des exemples et apprenez tres vites a monter des projets de design et de codage de A-z.
                  </p>
                </li>
              </ul>
            </div>
          </div>

            <div className="cosmos-section semi-height  padded-64 alt">
              <div className="cosmos-grid-container home-slider ">
                <div className="home-slider-header">
                  <h1 className="mega">
                    Les questions qu'ont nous pose tres souvent
                </h1>
                  <h3>
                    Pas encore convaincu ? peut etre comme d'autre, des question trottent encore dans votre esprit ... voyons voir
                </h3>
                </div>
                <ul className="clarify one-large full">
                  <li>
                    <div className="clarify-group">

                      <h2>
                        Quelles compétences vais-je apprendre dans le programme pour débutants ?
                  </h2>
                      <p>
                        Pas besoin d'etre un designer pour etre faire des choses creatives,
                        que nous apprendrons ensemble, grace a des activités, ateliers et projets
                        qui jalonnerons votre evolutions.
                  </p>
                    </div>
                  </li>
                  <li>
                    <div className="clarify-group">
                      <h2>
                        Puis-je voir le programme de cours et des exemples des projets que je vais faire ?
                    </h2>
                      <p>
                        C'est dans la pratique que reside l'experience. Nous concevons nos cours
                        pour rapidement prendre en main votre futur metier, partant de zero, nous vous aiderons
                      à produire des resultat, rapidement, et de classe.</p>
                    </div>
                  </li>

                  <li>
                    <div className="clarify-group">
                      <h2>
                        Que puis-je faire pour avoir rabais sur des programme de formation ?
                    </h2>
                      <p>
                        C'est dans la pratique que reside l'experience. Nous concevons nos cours
                        pour rapidement prendre en main votre futur metier, partant de zero, nous vous aiderons
                      à produire des resultat, rapidement, et de classe.</p>
                    </div>
                  </li>
                  <li>
                    <div className="clarify-group">
                      <h2>
                        Qui enseigne et suit les ateliers ?
                    </h2>
                      <p>
                        C'est dans la pratique que reside l'experience. Nous concevons nos cours
                        pour rapidement prendre en main votre futur metier, partant de zero, nous vous aiderons
                      à produire des resultat, rapidement, et de classe.</p>
                    </div>
                  </li>
                  <li>
                    <div className="clarify-group">
                      <h2>
                        Y a-t-il une exigence relative à l’âge pour participer aux programmes ? ?
                    </h2>
                      <p>
                        C'est dans la pratique que reside l'experience. Nous concevons nos cours
                        pour rapidement prendre en main votre futur metier, partant de zero, nous vous aiderons
                      à produire des resultat, rapidement, et de classe.</p>
                    </div>
                  </li>


                </ul>
              </div>
            </div>
          

          </div>
        </Layout>
      </>
      )
  }

export default ProgramPage

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

