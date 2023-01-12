import React, { useState } from 'react'
import {ReactComponent as Logo} from '../assets/logo.svg'
import {ReactComponent as IconHamburger} from '../assets/icon-hamburger.svg'
import {ReactComponent as IconClose} from '../assets/icon-close.svg'

export const NavBar = () => {
    const [activo, setActivo] = useState(false);

  return (
    <div className={"navbar "+(activo && "navbar--toggle")}>
        <div className="navbar__flex contenedor">
            <div className="navbar__logo">
                <Logo />
            </div>
            <nav className={'navbar__navegacion '+(activo && "navbar__navegacion--toogle")}>
                <a href="/#" className='navbar__enlace'>About</a>
                <a href="/#" className='navbar__enlace'>Careers</a>
                <a href="/#" className='navbar__enlace'>Events</a>
                <a href="/#" className='navbar__enlace'>Products</a>
                <a href="/#" className='navbar__enlace'>Support</a>
            </nav>
            <div className="navbar__barra">
                {(
                    activo 
                    ? <IconClose onClick={() => setActivo(!activo)}/> 
                    : <IconHamburger onClick={() => setActivo(!activo)}/>
                )}
            </div>
        </div>
    </div>
  )
}
