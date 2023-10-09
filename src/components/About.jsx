import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div name='about' className='w-full md:h-screen bg-bggray text-offwhite font-roboto py-4'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1080px] w-full grid grid-cols-2 gap-8'>
                <motion.div className='sm:text-right pb-8 pl-4'
                initial='hidden'
                whileInView='visible'
                transition={{duration:1}}
                viewport={{once:true}}
                variants={{ hidden: {opacity:0, y:-24},
                            visible: {opacity:1, y:0} }}
                >
                    <h1 className='inline font-bold text-4xl border-b-4 border-primary'>About</h1>
                </motion.div>
                <div></div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <motion.div className='sm:text-right font-bold text-4xl'
                initial='hidden'
                whileInView='visible'
                transition={{duration:1}}
                viewport={{once:true}}
                variants={{ hidden: {opacity:0, x:-24},
                            visible: {opacity:1, x:0} }}
                >
                    <p>Hi, I'm <span className='text-primary'>Dixon Willow</span>, nice to meet you</p>
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                transition={{duration:1}}
                viewport={{once:true}}
                variants={{ hidden: {opacity:0, x:24},
                            visible: {opacity:1, x:0} }}
                >
                    <p className='text-offwhite'>
                    I'm now a 5th-Semester Computer Science major student at BINUS University with a GPA of 3.94. I've decided to specialize in Software Engineering, and as part of that path, I'm taking Web Programming as an elective course. My interest in software development and coding extends beyond the classroom, as I am a committed learner who actively participates in personal projects, collaborates with peers on coding projects, and attends tech-related workshops and seminars to stay current on industry trends and technologies. I'm excited about my future in the area and determined to making a significant contribution to the ever-changing world of software development.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About