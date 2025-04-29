import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div name='hero' className='w-full md:h-screen bg-bgblack font-roboto py-24 md:py-0'>

        {/* Container */}
        <motion.div className='flex flex-col justify-center max-w-[1080px] h-full mx-auto px-8'
        initial='hidden'
        whileInView='visible'
        transition={{duration:1}}
        viewport={{once:true}}
        variants={{ hidden: {opacity:0, x:-24},
                    visible: {opacity:1, x:0} }}
        >
            <h3 className='text-2xl sm:text-5xl font-bold text-primary'>// <Typewriter typeSpeed={100} backSpeed={30} cursor={false} words={['Hi ','Halo ','Привет ', '你好 ', 'こんにちは ', '안녕하세요 ','مرحبًا ']} loop/></h3>
            <h1 className='text-4xl sm:text-7xl font-bold text-offwhite'>I'm Dixon Willow</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-offwhite-dark'>a Computer Science Student</h2>
            <p className='max-w-[700px] py-4 text-offwhite-dark'>A year-end computer science undergraduate pursuing a bachelor's degree at Binus University. A tech enthusiast with a passion for coding and continuous learning to attain greater proficiency and competency. I am dedicated to leveraging my problem-solving skills and expanding my expertise to make a meaningful impact in the tech industry</p>
            <div>
                <Link to='projects' smooth={true} duration={500}>
                    <button className='group flex items-center border-2 text-offwhite border-primary px-6 py-3 my-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300'>
                        View Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 hover:'/>
                        </span>
                    </button>
                </Link>
            </div>
        </motion.div>
    </div>
  )
}

export default Hero