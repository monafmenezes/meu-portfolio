/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { skills } from '../../db/api'
import ContainerSkills from './style'

const Skills = () => {
  return (
    <>
      <Head>
        <title>{'<Skills /> 💻'}</title>
      </Head>
      <ContainerSkills>
        <h1>
          {'<Skills'} <span>/</span>
          {'>'} 💻
        </h1>
        <ul>
          {skills.map(skill => (
            <li key={skill.name}>
              <img src={skill.image} alt={skill.name} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </ContainerSkills>
    </>
  )
}

export default Skills
