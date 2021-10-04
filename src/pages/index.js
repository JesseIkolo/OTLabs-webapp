import React from 'react'
import { graphql, Img } from 'gatsby'
import Layout from '../components/layout'
import {TextButton, Notification, Para, socialButton, SquaredButton} from '../components/molecule'
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
              <h1 className="tera colored-text">
                 Rejoins OneTouch Labs Academy ...
              </h1>
              <h2 className="home-intro">Pour apprendre un nouveau metier 3.0 <br/> et devenir acteur du digital africain.</h2>
                  
              <ul className="clarify two">
                <li>
                  <h2>
                    En accedant a un large socle <br/> de competences pro...
                  </h2>
                  <p>
                   Axés sur l’innovation et la créativité, afin de faire de toi un future <b>Digital Change Maker</b> en Afrique.
                  </p>
                </li>
                <li>
                  <h2>
                    En pratiquant dès le jour zero, <br/>avec des pros.
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
              title="Developpement Web"
              description="Apprenez les contours du metier de Designer d’interface utilisateur grâce des cours, atelier et projet avec des designers professionels tout les."
              program_duration="4 semaines de cours + 2 semaines de projets."
              program_dates="Candidature avant le  11 Juin 2020. Debut de cours le 19 Juin 2020"
              theme_color="var(--secondary-color)"
              to="../programPage"
            />
            <Program
              title="User Interface Design"
              description="Apprenez les contours du metier de Designer d’interface utilisateur grâce des cours, atelier et projet avec des designers professionels tout les."
              program_duration="4 semaines de cours + 2 semaines de projets."
              program_dates="Candidature avant le  11 Juin 2020. Debut de cours le 19 Juin 2020"
              theme_color="var(--Green-5)"
            />
            <Program
              title="User Interface Design"
              description="Apprenez les contours du metier de Designer d’interface utilisateur grâce des cours, atelier et projet avec des designers professionels tout les."
              program_duration="4 semaines de cours + 2 semaines de projets."
              program_dates="Candidature avant le  11 Juin 2020. Debut de cours le 19 Juin 2020"
              theme_color="var(--secondary-color)"
            />
          </div>

          <div className="cosmos-section semi-height  padded-64">
            <div className="cosmos-grid-container home-slider left">
              <div className="home-slider-header">
              <h1 className="supra colored-text">
                Deviens expert dans un metier du numerique, taille ta vision professionelle.
              </h1>
              <h2 className="home-intro">Parce que notre ambition est calée sur la tienne, nous mettons tout en œuvre pour rassembler les ressources nécessaires à ton déploiement dans le monde du digital.</h2>
              </div>
              <ul className="clarify three">
                <li>
                  <SquaredButton
                    size="x2"
                    cosmoIcon="true"
                    icon="teacher-presentation"
                    iconColor="var(--text-color)"
                    backgroundColor="var(--background-blured)"
                  />
                  <h2>
                    Apprendre avec le « savoir par le faire » et ameliorer le « savoir etre »
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
                
              </ul>
            </div>
          </div>

          <div className="cosmos-section semi-height  padded-64">
            <div className="cosmos-grid-container home-slider left">
              <div className="home-slider-header">
              <h1 className="supra colored-text">
                Obtiens un brevet de formation, a l'issue d'un projet de stage.
              </h1>
              <h2 className="home-intro">
                Notre pédagogie basée sur des projets réels portés par des problématiques reelles et variées, est sanctionné un brevet obtenu a la fin de ta formation, apres une presentation devant un jury d'experts.
              </h2>
              </div>
              <ul className="clarify three">
                <li>
                  <SquaredButton
                    size="x2"
                    cosmoIcon="true"
                    icon="teacher-presentation"
                    iconColor="var(--text-color)"
                    backgroundColor="var(--background-blured)"
                  />
                  <h2>
                    Apprendre avec le « savoir par le faire » et ameliorer le « savoir etre »
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
                
              </ul>
            </div>
          </div>

          <div className="cosmos-section semi-height  padded-64">
            <div className="cosmos-grid-container home-slider center">
            <div className="home-slider-header">
              <h1 className="supra colored-text">
                Un cursus personalisé, repondant au attente du marché.
              </h1>
              <h2 className="home-intro">
                    Nous ne te donnons pas seulement des competences techniques, mais egalement nous te preparons aux monde de l'emploi grâce à de competence transversalles, au choix.
              </h2>
              </div>
              <ul className="clarify three">
                <li>
                  <SquaredButton
                    size="x2"
                    cosmoIcon="true"
                    icon="teacher-presentation"
                    iconColor="var(--text-color)"
                    backgroundColor="var(--background-blured)"
                  />
                  <h2>
                    L'anglais pratique, pour elargir le champs de possibilité.
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
                    Le design thinking, pour s'incruster dans une dynamique de changement.
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
                    La conduite automobile, pour prevoir de nouvelle responsabilité.
                  </h2>
                  <p>
                    Toucher des le depart des exemples et apprenez tres vites a monter des projets de design et de codage de A-z.
                        </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="cosmos-section semi-height  ">
            <div className="cosmos-grid-container home-card whited large">
                <div className ="card-group">
                  <h1 className="mega">
                    Sessions d'Octobre 2020 <br/>sont ouvertes.
                  </h1>
                  <h3>
                    Inscrivez-vous aux prochains programmes de formation pour les sessions d'octobre.
                  </h3>
                  <TextButton
                    icon="ion-ios-arrow-right" 
                    text="Envoyez votre candidature"
                    background={true}
                    backgroundColor="var(--primary-color)"
                    textColor="var(--text-color)"
                  />
                </div>
            </div>
          </div>
          
           <div className="cosmos-section semi-height  padded-64">
            <div className="cosmos-grid-container home-slider ">
            <div className="home-slider-header">
              <h1 className="supra colored-text">
                Nous repondons a quelques de tes preaucupations
              </h1>
              <h2 className="home-intro">
                Vous avez une question ? Peut être nous avons deja la reponse ici.
              </h2>
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
          <div className="cosmos-section semi-height  ">
            <div className="cosmos-grid-container home-card whited large">
                <div className ="card-group">
                  <h1 className="mega">
                    Laissez-nous une de vos contacts pour etre le premier a connaitre notre actualité
                  </h1>
                  <h3>
                    Inscrivez-vous aux prochains programmes de formation pour les sessions d'octobre.
                  </h3>
                  <TextButton
                    icon="ion-ios-arrow-right" 
                    text="Envoyez votre candidature"
                    background={true}
                    backgroundColor="var(--primary-color)"
                    textColor="var(--text-color)"
                  />
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

