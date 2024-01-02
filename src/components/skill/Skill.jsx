import React from 'react'
import './skill.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const skills = {
  'Programming Languages': [
    'C',
    'C++',
    'CSS',
    'HTML',
    'Java',
    'JavaScript',
    'Python',
    'R',
    'SQL'
  ],
  'Frameworks and Libraries': [
    'Bootstrap',
    'Express JS',
    'Fast-API',
    'Material UI',
    'Mongo DB',
    'Node JS',
    'NumPy',
    'Pandas',
    'React JS',
    'Rest-API'
  ],
  'Cloud and Databases': [
    'AWS',
    'AWS EC2',
    'AWS ECS',
    'AWS ECR',
    'AWS RDS',
    'MongoDB',
    'MySQL'
  ],
  'Tools, Editors, and IDEs': [
    'Android Studio',
    'Ansible',
    'Docker',
    'Eclipse',
    'Git',
    'Github Actions',
    'Jupyter Notebook',
    'SonarQube',
    'Unity Engine',
    'VS Code'
  ],
  'Operating Systems': ['Android', 'Linux', 'Windows'],
  Coursework: [
    'Advance Data Structures',
    'Algorithm Design and Analysis',
    'Artificial Intelligence',
    'Cloud Computing',
    'Computer Networks',
    'Data Structures',
    'Database Management Systems',
    'Deep Learning',
    'Game Development',
    'Machine Learning',
    'Object-Oriented Programming',
    'Operating Systems',
    'Software Engineering',
    'Software Testing',
    'Soft Computing',
    'Web Development'
  ],
  'Soft Skills': [
    'Adaptability',
    'Communication',
    'Creativity',
    'Critical Thinking',
    'Leadership',
    'Problem Solving',
    'Teamwork',
    'Time Management'
  ],
  'Areas of Interest': [
    'Cloud Computing',
    'Data Science',
    'DevOps',
    'Full Stack Development',
    'Game Development',
    'Web Development'
  ]
}

function Skill() {
  return (
    <section id="skill">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container skill__container">
        {Object.keys(skills).map(skillCategory => (
          <div className="skill__card" key={skillCategory}>
            <h3 className="skill__title">{skillCategory}</h3>
            <div className="skill__list">
              {skills[skillCategory].sort().map(skillItem => (
                <div key={skillItem} className="skill__item">
                  <BsPatchCheckFill className="skill__icon" />
                  {skillItem}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill
