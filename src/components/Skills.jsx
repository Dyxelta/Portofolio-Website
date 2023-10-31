import React from 'react'
import CSS from '../assets/icon/css.png'
import HTML from '../assets/icon/html.png'
import GitHub from '../assets/icon/github.png'
import Tailwind from '../assets/icon/tailwind.png'
import ReactIcon from '../assets/icon/react.png'
import MySQL from '../assets/icon/mysql.png'
import Laravel from '../assets/icon/laravel.png'
import PHP from '../assets/icon/php.png'
import { motion } from 'framer-motion'

const Skills = () => {

    const skillData = [
        {
            Techstack: "HTML",
            img: HTML,
        },
        {
            Techstack: "CSS",
            img: CSS,
        },
        {
            Techstack: "React JS",
            img: ReactIcon,
        },
        {
            Techstack: "Tailwind CSS",
            img: Tailwind,
        },
        {
            Techstack: "PHP",
            img: PHP,
        },
        {
            Techstack: "Laravel",
            img: Laravel,
        },
        {
            Techstack: "GitHub",
            img: GitHub,
        },
        {
            Techstack: "MySQL",
            img: MySQL,
        },
    ]

  return (
    <div name='skills' className='w-full md:h-screen py-4 bg-bgblack text-offwhite font-roboto'>

        {/* Container */}
        <div className='flex flex-col justify-center max-w-[1080px] w-full h-full mx-auto p-4'>
            <motion.div
            initial='hidden'
            whileInView='visible'
            transition={{duration:1}}
            viewport={{once:true}}
            variants={{ hidden: {opacity:0, y:-24},
                        visible: {opacity:1, y:0} }}
            >
                <h1 className='inline text-4xl font-bold border-b-4 border-primary'>Skills</h1>
                <p className='py-4 text-offwhite-dark'>// These are the technologies I've worked with //</p>
            </motion.div>

            <motion.div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 py-8 text-center'
            initial='hidden'
            whileInView='visible'
            transition={{duration:1}}
            viewport={{once:true}}
            variants={{ hidden: {opacity:0, y:24},
                        visible: {opacity:1, y:0} }}
            >
                {skillData.map((data, index) => 
                    <div className='shadow-md shadow-primary hover:scale-110 duration-500'>
                        <img className='w-[80px] mx-auto mt-4' src={data.img} alt={data.Techstack} />
                        <p className='my-4'>{data.Techstack}</p>
                    </div>
                )}
            </motion.div>
        </div>
    </div>
  )
}

export default Skills