import React from 'react'
import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import ReactIcon from '../assets/react.png'
import MySQL from '../assets/mysql.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-bgblack text-offwhite font-roboto'>

        {/* Container */}
        <div className='flex flex-col justify-center max-w-[1080px] w-full h-full mx-auto p-4'>
            <div>
                <h1 className='inline text-4xl font-bold border-b-4 border-primary'>Skills</h1>
                <p className='py-4 text-offwhite-dark'>// These are the technologies I've worked with //</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 py-8 text-center'>
                <div className='shadow-md shadow-primary hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto mt-4' src={HTML} alt="html" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-primary hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto mt-4' src={CSS} alt="css" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-primary hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto mt-4' src={ReactIcon} alt="react" />
                    <p className='my-4'>React JS</p>
                </div>
                <div className='shadow-md shadow-primary hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto mt-4' src={Tailwind} alt="tailwind" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-primary hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto mt-4' src={GitHub} alt="github" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-primary hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto mt-4' src={MySQL} alt="mysql" />
                    <p className='my-4'>MySQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills