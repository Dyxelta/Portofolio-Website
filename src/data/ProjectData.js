import Eduverse from '../assets/projects/Eduverse.webp'
import FINEance from '../assets/projects/FINEance.webp'
import KpopZtation from '../assets/projects/KpopZtasion.webp'
import Sunbic from '../assets/projects/Sunbic.webp'
import Finest from '../assets/projects/Finest.webp'
import Advisa from '../assets/projects/Advisa.webp'
import Typecaster from '../assets/projects/TypeCaster.webp'

const projectData = [
  {
    projectName: 'Eduverse',
    projectImg: Eduverse,
    projectDesc: "A front-end long-page website design about a course selling app where user can gain information about the course. I'm developing this to practice react and do some workaround with it.",
    projectType: 'Personal project | Individual',
    projectTag: ['React', 'Tailwind'],
    projectSource: 'https://github.com/Dyxelta/eduverse',
    projectRepo: 'Repository',
    projectRepoIcon: 'github',
    categories: ['Web'],
  },
  {
    projectName: 'FINEance',
    projectImg: FINEance,
    projectDesc: "A Full-stack website design about financial management system where user can track their income/expense and set budget. This project is developed with team of 5 to fulfill Software Engineering course final project in 4th-semester. In this project I mostly contribute in front-end while also working a little bit back-end to fetch data from database",
    projectType: 'Course final project | Team',
    projectTag: ['Laravel', 'Bootstrap', 'Tailwind', 'MySQL'],
    projectSource: 'https://github.com/RifianFernando/FINance-BE',
    projectRepo: 'Repository',
    projectRepoIcon: 'github',
    categories: ['Web'],
  },
  {
    projectName: 'KpopZtation',
    projectImg: KpopZtation,
    projectDesc: "A simple website design page that only focuses on back-end about a K-pop album store where user can see album details and buy album while admin can 'CRUD' album and artist. This project is developed with team of 4 to fulfill Pattern Software Design course final project in 4th-Semester. In this project I contribute in almost everything but mostly contribute in fetching data from database and workaround on how to show it for user",
    projectType: 'Course final project | Team',
    projectTag: ['ASP.NET', 'C#', 'SQLServer'],
    projectSource: 'https://github.com/RifianFernando/PSD-Project-LAB',
    projectRepo: 'Repository',
    projectRepoIcon: 'github',
    categories: ['Web'],
  },
  {
    projectName: 'Sunbic',
    projectImg: Sunbic,
    projectDesc: 'A simple pure html and css website design about online university where user can gain information and register. This project is developed to fulfill Human and Computer Interaction course assignment in 2nd-Semester. In this project i learn a lot of things about html and css especially pseudo-element',
    projectType: 'Course final project | Individual',
    projectTag: ['HTML', 'CSS'],
    projectSource: 'https://github.com/Dyxelta/Sunbic',
    projectRepo: 'Repository',
    projectRepoIcon: 'github',
    categories: ['Web'],
  },
  {
    projectName: 'Finest',
    projectImg: Finest,
    projectDesc: 'A Full-stack website for personal financial management system where user can track their cashflow, set budget, set recurring transaction, have multiple wallets, see their montlhy report, and see their monthly expense analysis. This project is developed as a Thesis project for final project at Binus University. In this project i mostly contribute in back-end by making business logic and managing database',
    projectType: "Thesis project | Team",
    projectTag: ['Laravel', 'React', 'Tailwind', 'MySQL'],
    projectSource: 'https://github.com/Dyxelta/finest',
    projectRepo: 'Repository',
    projectRepoIcon: 'github',
    categories: ['Web'],
  },
  {
    projectName: 'Advisa',
    projectImg: Advisa,
    projectDesc: 'An iOS application designed to streamline the visa application process by helping users prepare necessary documents and requirements efficiently. Advisa aims to minimize human error and improve preparation accuracy by presenting a checklist-driven experience and personalized requirements based on user input. I mostly focusing on data flow management and UI development. I implemented key interface components and ensured seamless navigation across the app, aligning design with functionality using SwiftUI and MVVM architecture.',
    projectType: "Apple Developer Academy | Team",
    projectTag: ['SwiftUI', 'UIKit', 'VisionKit', 'PDFKit'],
    projectSource: 'https://github.com/Dyxelta/adVisa',
    projectRepo: 'Repository',
    projectRepoIcon: 'github',
    categories: ['Mobile'],
  },
  {
    projectName: 'TypeCaster',
    projectImg: Typecaster,
    projectDesc: 'A 2.5D action RPG that utilize typing mechanic as its core and delivers a unique skill-testing experience for players who seek a blend of fast-paced combat and challenging gameplay. The game features type-to-cast mechanics, where players must type equipped spells with precision and speed to attack enemies. In this project i mostly worked on state persistence using ScriptableObjects, implemented mob logic (attack, movement, etc.), and managed scene transitions and map organization.',
    projectType: "Game project | Team",
    projectTag: ['Unity', 'C#'],
    projectSource: 'https://tba-studio.itch.io/typecaster',
    projectRepo: 'Game page',
    projectRepoIcon: 'itch',
    categories: ['Game'],
  }
]

export default projectData.slice().reverse()