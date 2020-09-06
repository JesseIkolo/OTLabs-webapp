import PropTypes from "prop-types";
import React, { Children } from "react";
import { Link} from "gatsby";
// import Img from 'gatsby-image'
import {CosmoIcon} from './cosmoIcon';


const Container = ({ id }) => (
  <div className="cosmos-grid-container">
    
  </div>
)

Container.propTypes = {
  id: PropTypes.string,
}

Container.defaultProps = {
  id: ``,
}

const TextButton = ({ icon, text,type, to,background, backgroundColor, textColor,cosmoIcon}) => (
  <Link 
  className={background ? ("cosmo-text-button" + " " + type) :("cosmo-text-button no-back")}
  style={backgroundColor ? ({backgroundColor : backgroundColor}):null}
   to={to}>
    <span style={textColor ? ({color : textColor}):null}
    className="button-text">{text}</span>
    {
      icon ? (
        <div className={
          backgroundColor === "transparent" ?  (
            "icon-cacher transparent"
          ):("icon-cacher")
        }
        style={
          backgroundColor ? ({backgroundColor : textColor})
          :null
          }
        >
          {
            cosmoIcon ? (
              <CosmoIcon icon={icon} iconColor={background ? (backgroundColor):("var(--primary-color)")}/>
            ):(
              <span className={'icon ' + icon} style={background ? ({color : backgroundColor}):({color : "var(primary-color)"})}/>
            )
          }
          
        </div>
      ):null
    }
  </Link>
  
)

TextButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string
}

TextButton.defaultProps = {
  icon: ``,
  text: ``,
  to:``
}

const SquaredButton =({icon, color}) =>(
  <Link className="squared-button" style={{backgroundColor : color}}>
    <span className={'icon ' + icon}/>
  </Link>
)

SquaredButton.propTypes = {
  icon : PropTypes.string
}

SquaredButton.defaultProps ={
  icon : ``,
}


function Notification(props) {
  return (
    <div className={'notification ' + props.style}>
      <div className="image-side"></div>
      <div className="notification-content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        {props.readmore ? (
          <Link to={props.readmoreTo} className="readmore">
            Read More<span className="icon ion-ios-arrow-right"/>
          </Link>
        ) : null }
      </div>
      <div className="action-button"></div>
      <SquaredButton icon="ion-ios-close-empty" color="#EAEDFA"/>
    </div>
  );
}

function socialButton(props){
  return(
    <Link to={"https://www." + props.for + ".com/" + "jesseikolo" }>
       <CosmoIcon icon={props.for}/>
    </Link>
  )
}


function ContactInfo(props) {
  return (
    <div className="contact-info">
      <h4>{props.title}</h4>
      <p>{props.text} <br/>
        { props.subText ? (
            <span>{props.subText}</span>
        ): null }
      </p>
    </div>
  );
}

function BeautifulLink(props) {
  return (
   
      <div className="contact-info">
        <h4>
        {props.dash ? (<span className="dash-line">——</span>):null}
          <Link to={props.to}>
            {props.text}
          </Link>
        </h4>
      </div>
  );
}

function Tag(props){
  return (
    <div className={props.background ? ("cosmo-text-tag"):("cosmo-text-tag no-back")}>
      {props.for}
    </div>
  )
}

function Project(props){
  return(
    <div className="wk">
            <div className="project-content">
              <div class="project-thumb">
              <img alt="projectThumb" src={props.projectThumb}/>
              </div>
              <h5 class="project-client-name">
                { props.clientName }
              </h5>
              <h4 class="project-subtitle">
              { props.projectSubDescription }
              </h4>
              <TextButton 
                icon="ion-ios-arrow-right" 
                text="Discover the case study"
                background={false}/>
              
            </div>
    </div>
  )
}

const Para = ({children}) => {
  return(
    <>
      <p>
        {children}
      </p>
    </>
  )
}

Para.propTypes = {
  children: PropTypes.node.isRequired,
}


// const Notification =({}) => (


// )

// Notification.propTypes ={
//   style : PropTypes.string,
//   Title : PropTypes.string,
//   content : PropTypes.string,
//   readmore : PropTypes.bool,
//   readmoreTo : PropTypes.string
// }

// Notification.defaultProps = {
//   style : ``,
//   Title : ``,
//   content : ``,
//   readmore : false,
//   readmoreTo :``
// }

// export default Container
export { Container, TextButton, Notification, ContactInfo, BeautifulLink, Tag, Project, Para, socialButton}

