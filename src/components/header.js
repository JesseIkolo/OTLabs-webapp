import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {CosmoIcon} from "./cosmoIcon"
import {TextButton, Notification, Para} from '../components/molecule'

const Header = ({ siteTitle }) =>{
  // determined if page has scrolled and if the view is on mobile
  const [state, setState] = useState({
    scrolled: false,
    visible: false,
    hided : false, //for the header
    lastScrollPosition : 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;

      if (isScrolled !== state.scrolled) {
        
        if(window.scrollY > state.lastScrollPosition && window.scrollY > document.querySelector("header").clientHeight){
          document.querySelector("header").classList.add("nav-up")
          
        }else if(window.scrollY  + window.clientHeight < document.clientHeight) {
          document.querySelector("header").classList.remove("nav-up")
          // !!!!!!!!!!!!!!!!!!!!!
        }

        setState({
          ...state,
          scrolled: !state.scrolled,
          lastScrollPosition : window.scrollY
        });
      }
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [state.scrolled]);
  // toggle dropdown visibility
  const toggleVisibility = () => {
    setState({
      ...state,
      visible: !state.visible,
    });
  };

  return(
  
    <>
  <header className="top-bar" data-active={state.scrolled}>
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
              <li id="primary_nav_wrap">
              <ul>
                <li><a href="#">Pays</a>
                  <ul>
                    <li><a href="#">Douala</a></li>
                    <li><a href="#">Libreville</a></li>
                    <li><a href="#">Kinshasa</a></li>
                    <li><a href="#">Brazaville</a>
                      <ul>
                        <li><a href="#">Deep Menu 1</a>
                          <ul>
                            <li><a href="#">Sub Deep 1</a></li>
                            <li><a href="#">Sub Deep 2</a></li>
                            <li><a href="#">Sub Deep 3</a></li>
                              <li><a href="#">Sub Deep 4</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Deep Menu 2</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Sub Menu 5</a></li>
                  </ul>
                </li>
              </ul>
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
            {/* <li>
              <Link to="../partenaires">Partenaires</Link>
            </li> */}
            {/* <li>
              <Link to="../FAQs">FAQs</Link>
            </li> */}
            <li className="button">
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
            <li className="navigation-show">
              <CosmoIcon icon="menu"/>
            </li>
          </ul>
          
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
  )}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
