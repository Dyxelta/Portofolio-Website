import React, {useState} from 'react'
import {FaGithub, FaFigma} from 'react-icons/fa'
import Eduverse from '../assets/projects/Eduverse.webp'
import MTGraphy from '../assets/projects/MTGraphy.webp'
import FINEance from '../assets/projects/FINEance.webp'
import KpopZtation from '../assets/projects/KpopZtasion.webp'
import Sunbic from '../assets/projects/Sunbic.webp'
import Medicheck from '../assets/projects/Medicheck.webp'
import { motion } from 'framer-motion'

const Projects = () => {

  const [index, setIndex] = useState(-1)

  const projectData = [
    {
      indexNo: 0,
      projectName: 'Eduverse',
      projectImg: Eduverse,
      projectDesc: "A front-end long-page website design about a course selling app where user can gain information about the course. I'm developing this to practice react and do some workaround with it.",
      projectType: 'Personal project | Individual',
      projectTag: ['React', 'Tailwind'],
      projectSource: 'https://github.com/Dyxelta/eduverse',
      projectRepo: 'Repository',
      projectRepoIcon: <FaGithub/>,
    },
    {
      indexNo: 1,
      projectName: 'FINEance',
      projectImg: FINEance,
      projectDesc: "A Full-stack website design about financial management system where user can track their income/expense and set budget. This project is developed with team of 5 to fulfill Software Engineering course final project in 4th-semester. In this project I mostly contribute in front-end while also working a little bit back-end to fetch data from database",
      projectType: 'Course final project | Team',
      projectTag: ['Laravel', 'Bootstrap', 'Tailwind', 'MySQL'],
      projectSource: 'https://github.com/RifianFernando/FINance-BE',
      projectRepo: 'Repository',
      projectRepoIcon: <FaGithub/>,
    },
    {
      indexNo: 2,
      projectName: 'KpopZtation',
      projectImg: KpopZtation,
      projectDesc: "A simple website design page that only focuses on back-end about a K-pop album store where user can see album details and buy album while admin can 'CRUD' album and artist. This project is developed with team of 4 to fulfill Pattern Software Design course final project in 4th-Semester. In this project I contribute in almost everything but mostly contribute in fetching data from database and workaround on how to show it for user",
      projectType: 'Course final project | Team',
      projectTag: ['ASP.NET', 'C#', 'SQLServer'],
      projectSource: 'https://github.com/RifianFernando/PSD-Project-LAB',
      projectRepo: 'Repository',
      projectRepoIcon: <FaGithub/>,
    },
    {
      indexNo: 3,
      projectName: 'MTgraphy',
      projectImg: MTGraphy,
      projectDesc: "A simple html and css website design about photography business where user can gain information, see portfolio, and contact owner to book photography session. This project is developed with team of 2 to fulfill Human and Computer Interaction course final project in 2nd-Semester. In this project I contribute mostly in developing front-end while my teamate in designing the UI/UX",
      projectType: 'Course final project | Team',
      projectTag: ['HTML', 'CSS', 'JavaScript'],
      projectSource: 'https://github.com/Dyxelta/Project-HCI',
      projectRepo: 'Repository',
      projectRepoIcon: <FaGithub/>,
    },
    {
      indexNo: 4,
      projectName: 'Sunbic',
      projectImg: Sunbic,
      projectDesc: 'A simple pure html and css website design about online university where user can gain information and register. This project is developed to fulfill Human and Computer Interaction course assignment in 2nd-Semester. In this project i learn a lot of things about html and css especially pseudo-element',
      projectType: 'Course final project | Individual',
      projectTag: ['HTML', 'CSS'],
      projectSource: 'https://github.com/Dyxelta/Sunbic',
      projectRepo: 'Repository',
      projectRepoIcon: <FaGithub/>,
    },
    {
      indexNo: 5,
      projectName: 'Medicheck',
      projectImg: Medicheck,
      projectDesc: 'A high-fidelity prototype for mobile application about application to check disease from the symptomps that users experience using AI. This project are designed to fulfill Artificial Intelligence course final project created using Figma.',
      projectType: 'Course final project | Team',
      projectTag: ['Figma'],
      projectSource: 'https://www.figma.com/file/XvcjXOQNfNYZuHlodZuJM2/Medicheck?type=design&node-id=0%3A1&mode=design&t=9OSkoFUYdwNXS9o3-1',
      projectRepo: 'Figma',
      projectRepoIcon: <FaFigma/>,
    },
  ]

  return (
    <div name='projects' className='relative w-full h-auto py-8 text-offwhite bg-bggray font-roboto'>
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
                </div>
                <div className='flex flex-wrap gap-2 py-4'>
                  {data.projectTag.map((tag, tagIndex) => (
                    <div className='flex items-center justify-center border border-primary rounded px-2 py-[2px] font-medium'>{tag}</div>
                  ))}
                </div>
                <div className='flex items-center justify-start gap-3'>
                  <button className='inline-flex items-center justify-center w-auto border-2 text-bgblack font-semibold border-primary bg-primary px-4 py-2 my-2 hover:bg-primary-dark hover:scale-105 hover:border-primary-dark duration-300 rounded cursor-pointer' onClick={()=>setIndex(index)}>
                    Details
                  </button>
                  <a className='inline-flex items-center justify-start gap-2 w-auto border-2 text-offwhite font-semibold border-primary px-4 py-2 my-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer' href={data.projectSource}>
                    {data.projectRepoIcon} {data.projectRepo}
                  </a>
                </div>
              </div>
            </div>
            ))}
        </motion.div>
      </div>

      {
        index >= 0 ?

        <div className='fixed top-0 left-0 w-screen h-full flex items-center justify-center bg-black/[0.7] z-20 overflow-x-hidden p-4'>
          <div onClick={()=>setIndex(-1)} className='absolute w-full h-full z-30'></div>
          <div className='flex flex-col container rounded-md mx-auto content-div max-w-[600px] bg-bgblack z-40'>
            <div className='flex items-center justify-center'>
              <img className='w-[80%] h-auto shadow-md shadow-primary rounded mt-4' src={projectData[index].projectImg} alt="" />
            </div>
            <div className='p-4 flex flex-col justify-between h-full'>
              <div>
                <h1 className='text-2xl font-semibold text-offwhite'>{projectData[index].projectName}</h1>
                <h2 className='text-lg font-semibold text-offwhite-dark'>{projectData[index].projectType}</h2>
                <p className='text-offwhite py-2'>{projectData[index].projectDesc}</p>
              </div>
              <div className='flex flex-wrap gap-2 py-2'>
                {projectData[index].projectTag.map((tag, tagIndex) => (
                  <div className='flex items-center justify-center border border-primary rounded px-2 py-[2px] font-medium'>{tag}</div>
                ))}
              </div>
              <div className='flex items-center justify-start gap-3'>
                <button className='inline-flex items-center justify-center w-auto border-2 text-bgblack font-semibold border-primary bg-primary px-4 py-2 my-2 hover:bg-primary-dark hover:scale-105 hover:border-primary-dark duration-300 rounded cursor-pointer' onClick={()=>setIndex(-1)}>
                  Close
                </button>
                <a className='inline-flex items-center justify-start gap-2 w-auto border-2 text-offwhite font-semibold border-primary px-4 py-2 my-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer' href={projectData[index].projectSource}>
                  {projectData[index].projectRepoIcon} {projectData[index].projectRepo}
                </a>
              </div>
            </div>
          </div>
        </div>

        :

        null

      }

    </div>
  )
}

export default Projects