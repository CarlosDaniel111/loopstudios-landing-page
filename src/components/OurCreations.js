import React from 'react'
import { Creation } from './Creation'

export const OurCreations = () => {
  return (
    <section className='creations'>

      <div className="creations__header">
        <h2 className="creations__heading">
          Our creations
        </h2>
        <a href='/#' className="creations__boton1">
          See all
        </a>
      </div>

      <div className="creations__grid">
        <Creation idx={1} title={"Deep earth"} />
        <Creation idx={2} title={"Night arcade"} />
        <Creation idx={3} title={"Soccer team VR"} />
        <Creation idx={4} title={"The grid"} />
        <Creation idx={5} title={"From up above VR"} />
        <Creation idx={6} title={"Pocket borealis"} />
        <Creation idx={7} title={"The curiosity"} />
        <Creation idx={8} title={"Make it fisheye"} />
      </div>
      <div className='creations__boton-mobile'>
        <a href='/#' className="creations__boton2">
          See all
        </a>
      </div>
    </section>
  )
}
