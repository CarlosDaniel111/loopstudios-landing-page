import React from 'react'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className='header'>
        <NavBar />
        <div className="contenedor">
          <div className="header__title">
            <h1 className="header__heading">
              Immersive experiences that deliver
            </h1>
          </div>
        </div>
    </header>
  )
}
