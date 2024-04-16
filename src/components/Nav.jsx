'use client';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Nav() {
    const [showToggle, setShowToggle] = useState(false);

    const handleClick = () => {
        setShowToggle(!showToggle);
    };

    return (
        <nav className='relative justify-between bg-gray-800 w-full h-16 lg:flex lg:fixed' style={{zIndex:'1'}}>
            <div className='flex justify-between py-5'>
                <div className='absolute mx-5 space-x-5 lg:relative w-full'>
                    <Link href='https://github.com/maxiir'>
                        <FontAwesomeIcon className='text-white text-2xl hover:text-yellow-500' icon={faGithub}/>
                    </Link>
                    <Link href='https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEYfzvo0mRv3QAAAY7F9aFo9eVX1ZS55rlzRKvjouaAWMiaYzaJN-oYjH6jnhBnFzfqT8m6caLJBjMpPpEvbsW7HR6vk1cKOg_1eusL9daRBBj0yXaJO3n0g2y7Xhm1e9hhyqo=&original_referer=https://my-portafolio-beryl.vercel.app/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmaximiliano-rucci-b757901b0%2F'>
                        <FontAwesomeIcon className='text-white text-2xl hover:text-yellow-500' icon={faLinkedin}/>
                    </Link>
                </div>
                <span className='absolute flex text-white text-2xl right-5 lg:hidden cursor-pointer' onClick={handleClick}>
                    <FontAwesomeIcon className='hover:text-yellow-500' icon={faBars}/>
                </span>
            </div>
            

            <ul className={`block p-5 mx-0 text-white ${showToggle ? 'block m-5 bg-black lg:m-0' : 'hidden'} lg:flex lg:bg-inherit`}>
                <li className="mx-3 hover:text-blue-400 my-1">
                    <Link href='#about'>
                        Sobre mi
                    </Link>
                </li>
                <li className="mx-3 hover:text-blue-400 my-1">
                    <Link href='#skills'>
                        Habilidades
                    </Link>
                </li>
                <li className="mx-3 hover:text-blue-400 my-1">
                    <Link href='#proyects'>
                        Proyectos
                    </Link>
                </li>
                <li className="mx-3 hover:text-blue-400 my-1">
                    <Link href='#contact'>
                        Contacto
                    </Link>
                </li>
            </ul>
           
        </nav>
    );
}

export default Nav;
