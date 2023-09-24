import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const[open, setOpen] = useState(false)
    const handler = () => setOpen(!open)

  return (
    <div className='fixed flex justify-between items-center w-full h-[80px] px-4 bg-bgblack text-offwhite font-roboto'>
        
        <div>
            <img className='w-[100px] h-auto' src={Logo} alt="Logo" />
        </div>
        
        {/* menu */}
        <ul className='hidden md:flex cursor-pointer'>
            <li className='text-lg mx-4 pb-1 hover:text-primary'>
                <Link to='hero' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='text-lg mx-4 pb-1 hover:text-primary'>
                <Link to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='text-lg mx-4 pb-1 hover:text-primary'>
                <Link to='skills' smooth={true} duration={500}>Skill</Link>
            </li>
            <li className='text-lg mx-4 pb-1 hover:text-primary'>
                <Link to='projects' smooth={true} duration={500}>Project</Link>
            </li>
            <li className='text-lg mx-4 pb-1 hover:text-primary'>
                <Link to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* hamburger */}
        <div className='md:hidden z-10' onClick={handler}>
            {!open ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile */}
        <ul className={!open ? 'hidden' : 'absolute flex flex-col justify-center items-center top-0 left-0 w-full h-screen bg-bgblack cursor-pointer'}>
            <li className='my-4 py-2 text-3xl hover:text-primary'>
                <Link onClick={handler} to='hero' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='my-4 py-1 text-3xl hover:text-primary'>
                <Link onClick={handler} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='my-4 py-1 text-3xl hover:text-primary'>
                <Link onClick={handler} to='skills' smooth={true} duration={500}>Skill</Link>
            </li>
            <li className='my-4 py-1 text-3xl hover:text-primary'>
                <Link onClick={handler} to='projects' smooth={true} duration={500}>Project</Link>
            </li>
            <li className='my-4 py-1 text-3xl hover:text-primary'>
                <Link onClick={handler} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* social */}
        <div className='fixed hidden lg:flex flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center px-4 -ml-[100px] hover:-ml-[10px] duration-300 bg-[#0072b1]'>
                    <a className='flex justify-between items-center w-full text-offwhite' href="https://linkedin.com/in/dixon-willow">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center px-4 -ml-[100px] hover:-ml-[10px] duration-300 bg-[#171515]'>
                    <a className='flex justify-between items-center w-full text-offwhite' href="https://github.com/Dyxelta">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center px-4 -ml-[100px] hover:-ml-[10px] duration-300 bg-[#0072c6]'>
                    <a className='flex justify-between items-center w-full text-offwhite' href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar