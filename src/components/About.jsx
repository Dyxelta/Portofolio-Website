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
                    I'm a final-year Computer Science student at BINUS University, maintaining a GPA of 3.95 with a focus on Software Engineering and Web Programming. Along the way, I've expanded my skills through diving into personal projects, team collaborations, and tech seminars. Beyond software development, I have a deep passion for game development — where I blend creativity and technical skill to build interactive experiences. Whether it's developing apps or crafting games, I'm driven by a constant desire to learn, grow, and contribute to the ever-evolving world of technology.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About