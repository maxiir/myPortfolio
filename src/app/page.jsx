import React from 'react'
import Nav from '../components/Nav'
import Presentacion from '@/components/Presentacion'
import Skills from '@/components/Skills'
import Proyects from '@/components/Proyects'
import CvDownload from '@/components/CvDownload'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

// import {  } from '@fortawesome/free-brands-svg-icons'

function home() {
  return (
    <div>
      <Nav/>
      <div className='text-center mx-5 py-24'>
        <div id='about'>
          <Presentacion/>
        </div>
        <div id='skills'>
          <Skills />
        </div>
        <div id='proyects'>
          <Proyects/>              
        </div>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
      <CvDownload/>
      <Footer/>
    </div>
  )
}

export default home