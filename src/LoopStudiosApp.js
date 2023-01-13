import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { OurCreations } from './components/OurCreations'
import { Principal } from './components/Principal'

export const LoopStudiosApp = () => {
    return (
        <>
            <Header />

            <main className='contenedor'>
                <Principal />
                <OurCreations />
            </main>

            <Footer />
        </>
    )
}
