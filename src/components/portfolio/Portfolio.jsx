import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projects_images/project-1.png'
import IMG2 from '../../assets/projects_images/project-2.png'
import IMG3 from '../../assets/projects_images/project-3.png'
import IMG5 from '../../assets/projects_images/project-5.png'
import IMG6 from '../../assets/projects_images/project-6.png'
import IMG7 from '../../assets/projects_images/project-7.png'
import IMG8 from '../../assets/projects_images/project-8.png'
import IMG9 from '../../assets/projects_images/project-9.png'
import IMG10 from '../../assets/projects_images/project-10.png'
import IMG11 from '../../assets/projects_images/project-11.png'
import IMG12 from '../../assets/projects_images/project-12.png'
import IMG13 from '../../assets/projects_images/project-13.jpg'

import PortFolioItem from './portfolioitem'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio-React',
    description:
      'This is my portfolio website which is made using ReactJS. It shows my skills, projects, and other details.',
    tools_tech: ['React', 'React-Routers', 'React-Icons', 'CSS', 'JavaScript'],
    features: [
      'Responsive',
      'Single Page Application For Mobile View',
      'Multi Page Application For Desktop View',
      ' Awesome UI Pages',
      'Smooth Scrolling'
    ],
    github: 'https://github.com/Sagargupta16/portfolio-react',
    live: 'https://sagargupta.me/portfolio-react/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Contact-Manager',
    description:
      'This is a contact manager web app which is made using ReactJS. It is used to store contacts and their details.',
    tools_tech: [
      'React',
      'React-Routers',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'CSS',
      'JavaScript'
    ],
    features: [
      'Responsive',
      'Multi Page Application',
      'CRUD Operations',
      'Routing with 0 refresh rate',
      'Dark-Mode',
      'Search Feature'
    ],
    github: 'https://github.com/Sagargupta16/Contact-Manager-Mern',
    live: 'https://sagargupta.me/contact-manager/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio',
    description:
      'This is my portfolio website which is made using HTML, CSS, and JavaScript. It shows my skills, projects, and other details.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive',
      'Deifferent Themes',
      'Dark-Mode',
      'Smooth-transition',
      'Awesome UI Pages',
      'Smooth Scrolling',
      'Email contact form'
    ],
    github: 'https://github.com/Sagargupta16/PortFolio',
    live: 'https://sagargupta.me/PortFolio/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Snake-Game',
    description:
      'This is a Classic Snake Game which is made using Unity Game Engine.',
    tools_tech: ['Unity', 'C#'],
    features: [
      'Snake Speed control',
      'Food generation Speed Control',
      'Score',
      'Game Over Screen',
      'Main Menu Screen'
    ],
    github: 'https://github.com/Sagargupta16/Snake-Game__UnityEngine',
    live: '#'
  },
  {
    id: 6,
    image: IMG6,
    title: 'MineSweeper-Game',
    description:
      'This is a MineSweeper Game which is made using Unity Game Engine.',
    tools_tech: ['Unity', 'C#'],
    features: [
      'Difficulty Easy, Medium or Hard',
      'Score',
      'Game Over Screen',
      'Main Menu Screen'
    ],
    github: 'https://github.com/Sagargupta16/Minesweeper-Game__UnityEngine',
    live: '#'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Flappy-Bird-Game',
    description:
      'This is a Flappy Bird Game which is made using Unity Game Engine.',
    tools_tech: ['Unity', 'C#'],
    features: ['Smooth Gameplay', 'End Bar'],
    github: 'https://github.com/Sagargupta16/FlappyBird-Game__UnityEngine',
    live: '#'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Tic-Tac-Toe',
    description:
      'This is a Tic-Tac-Toe game which is made using HTML, CSS, and JavaScript.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Difficulty Beginner or Advanced', 'Vs Computer'],
    github: 'https://github.com/Sagargupta16/Tic-Tac-Toe',
    live: 'https://sagargupta.me/Tic-Tac-Toe/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'PacMan-Game',
    description: 'This is a PacMan Game which is made using Unity Game Engine.',
    tools_tech: ['Unity', 'C#'],
    features: [
      'Smooth Gameplay',
      'Score',
      'Game Over Screen',
      'Main Menu Screen'
    ],
    github: 'https://github.com/Sagargupta16/PacMan-Game__UnityEngine',
    live: '#'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Music-Player',
    description:
      'This is a music player web app which is made using HTML, CSS, and JavaScript. It is used to play music.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Cool UI',
      'Randomize Songs',
      'Play/Pause Songs',
      'Next/Previous Songs'
    ],
    github: 'https://github.com/Sagargupta16/Music-Web-App',
    live: 'https://sagargupta.me/Music-Web-App/'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Guess-The-Number-Game',
    description:
      'This is a Guess The Number Game where you have to guess the number between 1 to 1000. It is made using HTML, CSS, and JavaScript.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Randomize Number', 'Restart', 'Check Score'],
    github: 'https://github.com/Sagargupta16/Guess-The-Number-Game',
    live: 'https://sagargupta.me/Guess-The-Number-Game/'
  }
]

const data2 = [
  {
    id: 1,
    image: IMG12,
    title: 'Study-Hub',
    description:
      'This is a Study Hub web app which is made using HTML , CSS & JavaScript. It is an prototype of a website which is used to study online.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive', 'Multi Page Application', 'Smooth UI'],
    github: 'https://github.com/sayani13-glitch/noobathon_ON-11_1',
    live: 'https://sayani13-glitch.github.io/noobathon_ON-11_1/'
  },
  {
    id: 2,
    image: IMG13,
    title: 'Tour-vibes',
    description:
      'This is an Full Stack web app which is made using React , NodeJS , ExpressJS , MongoDB. It is an prototype of a website which is used to See blogs of Tourist Places.',
    tools_tech: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    features: [
      'Responsive',
      'Multi Page Application',
      'Smooth UI',
      'Authentication',
      'CRUD Operations'
    ],
    github: 'https://github.com/Sagargupta16/tour-vibes',
    live: '#'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <h3 className="portfolio__heading"> My Personal Projects</h3>
      <div className="container portfolio__container">
        {data.map(data => {
          return <PortFolioItem key={data.id} data={data} />
        })}
      </div>
      <h3 className="portfolio__heading">Collaborative Projects</h3>
      <div className="container portfolio__container">
        {data2.map(data => {
          return <PortFolioItem key={data.id} data={data} />
        })}
      </div>
    </section>
  )
}

export default Portfolio
