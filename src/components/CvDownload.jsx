'use client'
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import typed from 'typed.js'
import { useEffect } from "react"

function CvDownload() {

  useEffect(()=> {
    const Typed = new typed('#typed', {
      strings:['Descarga mi CV desde aqui'],
      cursorChar:'|',
      loop:true,
      typeSpeed:70,
      backSpeed:30,
    })
    return () => {
      Typed.destroy()
    } 

  }, [])

  return (
    <div className='m-5'>
        <span id="typed" className="text-white"></span>
        <div className="space-x-3">
            <a href="/CV-Maximiliano_Rucci.pdf" download><button className="border-2 bg-green-500 hover:bg-green-600 rounded-md p-2 my-5 text-white"><FontAwesomeIcon icon={faDownload}/> descarga mi CV</button></a> 
        </div>
    </div>
  )
}

export default CvDownload