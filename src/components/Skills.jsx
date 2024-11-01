'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faNodeJs, faReact, faGitAlt, faPython} from '@fortawesome/free-brands-svg-icons'
import { TbBrandAstro } from "react-icons/tb";
// import { TbBrandTypescript } from "react-icons/tb";

function Skills() {
  return (
    <div className='mt-5 p-5'>
        <h1 className=' p-5 text-white text-4xl m-20'>Habilidades</h1>
        <div className='bg-gradient-to-br from-blue-500 to-purple-600 h-full p-1 rounded-md'>
        <div className='bg-black rounded-md'>
          <div className='grid grid-cols-3'>
            <i className='text-gray-300 hover:text-yellow-300 text-5xl p-10 transition-all transform hover:scale-125 '><FontAwesomeIcon icon={faJs}/></i>
            <i className='text-gray-300 hover:text-green-500 text-5xl p-10 transition-all transform hover:scale-125'><FontAwesomeIcon icon={faNodeJs}/></i>
            <i className='text-gray-300 hover:text-orange-400 text-5xl p-10 transition-all transform hover:scale-125'><TbBrandAstro className=""/></i>
            <i className='text-gray-300 hover:text-blue-500 text-5xl p-10 transition-all transform hover:scale-125'><FontAwesomeIcon icon={faReact}/></i>
            <i className='text-gray-300 hover:text-orange-500 text-5xl p-10 transition-all transform hover:scale-125'><FontAwesomeIcon icon={faGitAlt}/></i>
            <i className='text-gray-300 hover:text-blue-300 text-5xl p-10 transition-all transform hover:scale-125'><FontAwesomeIcon icon={faPython}/></i>             
          </div>
        </div>
        </div>
    </div>
  )
}

export default Skills