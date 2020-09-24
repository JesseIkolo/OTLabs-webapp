import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {CosmoIcon} from "./cosmoIcon"
import {TextButton, Notification, Para} from '../components/molecule'

const Header = ({ siteTitle }) =>(
    <>
  <header className="top-bar">
      <div className="container top-nav">
          <div className="nav-logo">
          <Link to="..">
              <CosmoIcon icon="otla"/>
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="..">
                  E-Learning
                </Link>
              </li>
              <li>
                <Link to="..">
                  Business
                </Link>
              </li>
            </ul>
            
          </div>
          <ul className="nav-links">
          <li>
              <Link to="../labs">OneTouch Labs</Link>
            </li>
            <li>
              <Link to="../programs">Programmes </Link>
            </li>
            <li>
              <Link to="../contact">Alumni Projects<span className="soon">Bientot</span></Link>
            </li>
            <li>
              <Link to="../newsEvents">News & Events<span className="soon">Bientot</span></Link>
            </li>
            <li>
              <Link to="../partenaires">Partenaires</Link>
            </li>
            {/* <li>
              <Link to="../FAQs">FAQs</Link>
            </li> */}
            <li>
              <TextButton 
                  icon="user-ok" 
                  cosmoIcon={true}
                  text="Demarrer"
                  background={true}
                  backgroundColor="#fff"
                  textColor="var(--primary-color)"
                  to="signUp"
                  />
            </li>
          </ul>
          <div className="navigation-show"></div>
      </div>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
  </>
  )


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
