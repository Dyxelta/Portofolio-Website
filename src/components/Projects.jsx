import React from 'react'
import {FaGithub, FaFigma} from 'react-icons/fa'
import Eduverse from '../assets/Eduverse.png'
import MTGraphy from '../assets/MTGraphy.png'
import FINEance from '../assets/FINEance.png'
import KpopZtasion from '../assets/KpopZtasion.png'
import Sunbic from '../assets/Sunbic.png'
import Medicheck from '../assets/Medicheck.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-[190vh] text-offwhite bg-bggray font-roboto'>
        <div className='flex flex-col justify-center max-w-[1080px] w-full h-full mx-auto p-4'>
          <div className='pb-8'>
            <h1 className='inline text-4xl font-bold border-b-4 border-primary text-offwhite'>Projects</h1>
            <p className='py-6 text-offwhite-dark'>// Some of projects that I've done //</p>
          </div>

          {/* container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* grid item 1 */}
            <div className="flex flex-col shadow-md shadow-primary container rounded-md mx-auto content-div bg-bgblack">
              <div>
                <img className='w-full h-auto rounded-t' src={Eduverse} alt="" />
              </div>
              <div className='p-4 flex flex-col justify-between h-full'>
                <div>
                  <h1 className='text-2xl font-semibold text-offwhite'>Eduverse</h1>
                  <h2 className='text-xl font-semibold text-offwhite-dark'>Personal project</h2>
                  <p className='text-offwhite py-4'>A front-end long-page website design about a course selling app created using react-vite and tailwind css</p>
                </div>
                <a className='flex items-center justify-evenly w-[30%] md:w-[50%] border-2 text-offwhite font-semibold border-primary px-4 py-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer' href='https://github.com/Dyxelta/eduverse'>
                  <FaGithub></FaGithub> Repository
                </a>
              </div>
            </div>
            
            {/* grid item 2 */}
            <div className="flex flex-col shadow-md shadow-primary container rounded-md mx-auto content-div bg-bgblack">
              <div>
                <img className='w-full h-auto rounded-t' src={FINEance} alt="" />
              </div>
              <div className='p-4 flex flex-col justify-between h-full'>
                <div>
                  <h1 className='text-2xl font-semibold text-offwhite'>FINEance</h1>
                  <h2 className='text-xl font-semibold text-offwhite-dark'>Course final project</h2>
                  <p className='text-offwhite py-4'>A Full-stack website design about financial management system for Software Engineering course final project in 4th-semester created using laravel bootsrap tailwind and mysql</p>
                </div>
                <a className=' flex items-center justify-evenly w-[30%] md:w-[50%] border-2 text-offwhite font-semibold border-primary px-4 py-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer' href='https://github.com/RifianFernando/FINance-BE'>
                  <FaGithub></FaGithub> Repository
                </a>
              </div>
            </div>

            {/* grid item 3 */}
            <div className="flex flex-col shadow-md shadow-primary container rounded-md mx-auto content-div bg-bgblack">
              <div>
                <img className='w-full h-auto rounded-t' src={KpopZtasion} alt="" />
              </div>
              <div className='p-4 flex flex-col justify-between h-full'>
                <div>
                  <h1 className='text-2xl font-semibold text-offwhite'>KpopZtasion</h1>
                  <h2 className='text-xl font-semibold text-offwhite-dark'>Course final project</h2>
                  <p className='text-offwhite py-4'>A simple website design page that only focuses on back-end about a K-pop album e-commerce for Pattern Software Design course final project in 4th-Semester created using ASP.NET C#</p>
                </div>
                <a className='flex items-center justify-evenly w-[30%] md:w-[50%] border-2 text-offwhite font-semibold border-primary px-4 py-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer' href='https://github.com/RifianFernando/PSD-Project-LAB'>
                  <FaGithub></FaGithub> Repository
                </a>
              </div>
            </div>

            {/* grid item 4 */}
            <div className="flex flex-col shadow-md shadow-primary container rounded-md mx-auto content-div bg-bgblack">
              <div>
                <img className='w-full h-auto rounded-t' src={MTGraphy} alt="" />
              </div>
              <div className='p-4 flex flex-col justify-between h-full'>
                <div>
                  <h1 className='text-2xl font-semibold text-offwhite'>MTgraphy</h1>
                  <h2 className='text-xl font-semibold text-offwhite-dark'>Course final project</h2>
                  <p className='text-offwhite py-4'>A simple html and css website design about photography business for Human and Computer Interaction course final project in 2nd-Semester</p>
                </div>
                <a className='flex items-center justify-evenly w-[30%] md:w-[50%] border-2 text-offwhite font-semibold border-primary px-4 py-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer' href='https://github.com/Dyxelta/Project-HCI'>
                  <FaGithub></FaGithub> Repository
                </a>
              </div>
            </div>



            {/* grid item 5 */}
            <div className="flex flex-col shadow-md shadow-primary container rounded-md mx-auto content-div bg-bgblack">
              <div>
                <img className='w-full h-auto rounded-t' src={Sunbic} alt="" />
              </div>
              <div className='p-4 flex flex-col justify-between h-full'>
                <div>
                  <h1 className='text-2xl font-semibold text-offwhite'>Sunbic</h1>
                  <h2 className='text-xl font-semibold text-offwhite-dark'>Course final project</h2>
                  <p className='text-offwhite py-4'>A simple html and css only website design about online university for Human and Computer Interaction course project in 2nd-Semester</p>
                </div>
                <a className=' flex items-center justify-evenly w-[30%] md:w-[50%] border-2 text-offwhite font-semibold border-primary px-4 py-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer' href='https://github.com/Dyxelta/Sunbic'>
                  <FaGithub></FaGithub> Repository
                </a>
              </div>
            </div>

            {/* grid item 6 */}
            <div className="flex flex-col shadow-md shadow-primary container rounded-md mx-auto content-div bg-bgblack">
              <div>
                <img className='w-full h-auto rounded-t' src={Medicheck} alt="" />
              </div>
              <div className='p-4 flex flex-col justify-between h-full'>
                <div>
                  <h1 className='text-2xl font-semibold text-offwhite'>Medicheck</h1>
                  <h2 className='text-xl font-semibold text-offwhite-dark'>Personal project</h2>
                  <p className='text-offwhite py-4'>A mobile application high-fidelity prototype about application to check disease from the symptomps that users experience using AI for Artificial Intelligence course final project created using Figma</p>
                </div>
                <a className='flex items-center justify-evenly w-[30%] md:w-[50%] border-2 text-offwhite font-semibold border-primary px-4 py-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer' href='https://www.figma.com/file/XvcjXOQNfNYZuHlodZuJM2/Medicheck?type=design&node-id=0%3A1&mode=design&t=9OSkoFUYdwNXS9o3-1'>
                  <FaFigma></FaFigma> Prototype
                </a>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Projects