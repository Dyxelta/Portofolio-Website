import React, {useState} from 'react'
import {FaGithub, FaFigma} from 'react-icons/fa'
import Eduverse from '../assets/Eduverse.webp'
import MTGraphy from '../assets/MTGraphy.webp'
import FINEance from '../assets/FINEance.webp'
import KpopZtation from '../assets/KpopZtasion.webp'
import Sunbic from '../assets/Sunbic.webp'
import Medicheck from '../assets/Medicheck.webp'
import { motion } from 'framer-motion'

const Projects = () => {

  const [index, setIndex] = useState()

  const projectData = [
    {
      indexNo: '0',
      projectName: 'Eduverse',
      projectImg: Eduverse,
      projectDesc: 'A front-end long-page website design about a course selling app created using react-vite and tailwind css',
      projectType: 'Personal project | Individual',
      projectTag: 'React Tailwind',
      projectSource: 'https://github.com/Dyxelta/eduverse',
      projectRepo: 'Repository',
      projectRepoIcon: <FaGithub/>,
    },
    {
      indexNo: '1',
      projectName: 'FINEance',
      projectImg: FINEance,
      projectDesc: 'A Full-stack website design about financial management system for Software Engineering course final project in 4th-semester created using laravel bootsrap tailwind and mysql',
      projectType: 'Course final project | Team',
      projectTag: 'Laravel Bootstrap Tailwind MySQL',
      projectSource: 'https://github.com/RifianFernando/FINance-BE',
      projectRepo: 'Repository',
      projectRepoIcon: <FaGithub/>,
    },
    {
      indexNo: '2',
      projectName: 'KpopZtation',
      projectImg: KpopZtation,
      projectDesc: 'A simple website design page that only focuses on back-end about a K-pop album e-commerce for Pattern Software Design course final project in 4th-Semester created using ASP.NET C#',
      projectType: 'Course final project | Team',
      projectTag: 'ASP.NET C# SQLServer',
      projectSource: 'https://github.com/RifianFernando/PSD-Project-LAB',
      projectRepo: 'Repository',
      projectRepoIcon: <FaGithub/>,
    },
    {
      indexNo: '3',
      projectName: 'MTgraphy',
      projectImg: MTGraphy,
      projectDesc: 'A simple html and css website design about photography business for Human and Computer Interaction course final project in 2nd-Semester',
      projectType: 'Course final project | Team',
      projectTag: 'HTML CSS JS',
      projectSource: 'https://github.com/Dyxelta/Project-HCI',
      projectRepo: 'Repository',
      projectRepoIcon: <FaGithub/>,
    },
    {
      indexNo: '4',
      projectName: 'Sunbic',
      projectImg: Sunbic,
      projectDesc: 'A front-end long-page website design about a course selling app created using react-vite and tailwind css',
      projectType: 'Course final project | Individual',
      projectTag: 'HTML CSS',
      projectSource: 'https://github.com/Dyxelta/Sunbic',
      projectRepo: 'Repository',
      projectRepoIcon: <FaGithub/>,
    },
    {
      indexNo: '5',
      projectName: 'Medicheck',
      projectImg: Medicheck,
      projectDesc: 'A high-fidelity prototype for mobile application about application to check disease from the symptomps that users experience using AI for Artificial Intelligence course final project created using Figma',
      projectType: 'Course final project | Team',
      projectTag: 'React Tailwind',
      projectSource: 'https://www.figma.com/file/XvcjXOQNfNYZuHlodZuJM2/Medicheck?type=design&node-id=0%3A1&mode=design&t=9OSkoFUYdwNXS9o3-1',
      projectRepo: 'Figma',
      projectRepoIcon: <FaFigma/>,
    },
  ]

  return (
    <div name='projects' className='w-full h-auto py-8 text-offwhite bg-bggray font-roboto'>
        <div className='flex flex-col justify-center max-w-[1080px] w-full h-full mx-auto p-4'>
          <motion.div className='pb-4'
          initial='hidden'
          whileInView='visible'
          transition={{duration:1}}
          viewport={{once:true}}
          variants={{ hidden: {opacity:0, y:-24},
                      visible: {opacity:1, y:0} }}
          >
            <h1 className='inline text-4xl font-bold border-b-4 border-primary text-offwhite'>Projects</h1>
            <p className='py-6 text-offwhite-dark'>// Some of projects that I've done //</p>
          </motion.div>

          {/* container */}
          <motion.div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-4'
          initial='hidden'
          whileInView='visible'
          transition={{duration:1}}
          viewport={{once:true}}
          variants={{ hidden: {opacity:0, y:24},
                      visible: {opacity:1, y:0} }}
          >

            {/* Grid Items */}
            {projectData.map((data, index) => (
              <div className="flex flex-col shadow-md shadow-primary container rounded-md mx-auto content-div bg-bgblack">
                <div>
                  <img className='w-full h-auto rounded-t' src={data.projectImg} alt="" />
                </div>
                <div className='p-4 flex flex-col justify-between h-full'>
                  <div>
                    <h1 className='text-2xl font-semibold text-offwhite'>{data.projectName}</h1>
                    <h2 className='text-lg font-semibold text-offwhite-dark'>{data.projectType}</h2>
                    <p className='text-offwhite py-4'>{data.projectDesc}</p>
                  </div>
                  <a className='flex items-center justify-start gap-3 w-[35%] md:w-[50%] border-2 text-offwhite font-semibold border-primary px-4 py-2 my-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer' href={data.projectSource}>
                    {data.projectRepoIcon} {data.projectRepo}
                  </a>
                </div>
              </div>
              ))}

          </motion.div>
        </div>
    </div>
  )
}

export default Projects