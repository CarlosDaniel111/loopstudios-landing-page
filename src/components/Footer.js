import React from 'react'
import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as FacebookLogo} from '../assets/icon-facebook.svg'
import {ReactComponent as TwitterLogo} from '../assets/icon-twitter.svg'
import {ReactComponent as PinterestLogo} from '../assets/icon-pinterest.svg'
import {ReactComponent as InstagramLogo} from '../assets/icon-instagram.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="contenedor">

        <div className="footer__grid">
          <div className="footer__left">
            <Logo className='footer__logo' />
            <nav className="footer__navegacion">
              <a href="/#" className='footer__enlace'>About</a>
              <a href="/#" className='footer__enlace'>Careers</a>
              <a href="/#" className='footer__enlace'>Events</a>
              <a href="/#" className='footer__enlace'>Products</a>
              <a href="/#" className='footer__enlace'>Support</a>
            </nav>
          </div>
          <div className="footer__right">
            <nav className="footer__redes">
              <a href='/#' className="footer__red">
                <FacebookLogo />
              </a>
              <a href='/#' className="footer__red">
                <TwitterLogo />
              </a>
              <a href='/#' className="footer__red">
                <PinterestLogo />
              </a>
              <a href='/#' className="footer__red">
                <InstagramLogo />
              </a>
            </nav>
            <p className="footer__copyright">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
