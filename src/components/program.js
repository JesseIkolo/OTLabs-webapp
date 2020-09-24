import React from "react";
import {CosmoIcon} from '../components/cosmoIcon'
import {TextButton} from '../components/molecule'

import "./cosmoMolecule";
import "./globals.css";

export default function Program(props) {
  return (
   <div className="program hide">
   <div class="program-summary">
     <div className="program-title" style={{backgroundColor: props.theme_color}}>
       <h2>{props.title}</h2>
     </div>
     <div className="illustration">
       
     </div>
     <div className="program-sumary-details">
       <p>
          {props.description}
       </p>
       
       <div className="subtitle">
         <CosmoIcon icon="calendar"/>
         <h3>Durée du programme</h3>
       </div>
       <p>
          {props.program_duration}
       </p>
       <div className="subtitle">
         <CosmoIcon icon="clock"/>
         <h3>Dates importantes</h3>
       </div>
       <p>
          {props.program_dates}
       </p>
       <div className="bottom-side">
         <TextButton
           type="large"
           icon="ion-ios-arrow-right" 
           text="Plus de details"
           background={true}
           backgroundColor="var(--primary-color)"
           textColor="var(--text-color)"
           to={props.to}
         />
       </div>
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
  );
}
