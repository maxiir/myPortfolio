'use client'
import Nav from '../components/Nav'
import Presentacion from '@/components/Presentacion'
import Skills from '@/components/Skills'
import Proyects from '@/components/Proyects'
import CvDownload from '@/components/CvDownload'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'


// import {  } from '@fortawesome/free-brands-svg-icons'

function home() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '80px',
      duration: 1200,
      origin: 'left',
      reset: false
    })
  }, [])

  return (
    <div>
      <Nav/>
      <div className='text-center mx-5 py-24'>
        <div id='about' className='reveal'>
          <Presentacion/>
        </div>
        <div id='skills' className='reveal'>
          <Skills />
        </div>
        <div id='proyects' className='reveal'>
          <Proyects/>              
        </div>
      </div>
      <div id='contact' className='reveal'>
        <Contact/>
      </div>
      <CvDownload/>
      <Footer/>
    </div>
  )
}

export default home