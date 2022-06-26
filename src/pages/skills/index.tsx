/* eslint-disable @next/next/no-img-element */
import { skills } from "../../db/api"
import  ContainerSkills  from "./style"
import ListSkills from './style'

const Skills = () => {
    return(
        <ContainerSkills>
            <h1>{'<Skills'} <span>/</span>{'>'} 💻</h1>
            <ListSkills>

                {skills.map(skill => (
                    <li key={skill.name}>
                        <img src={skill.image} alt={skill.name} />
                        <span>{skill.name}</span>
                    </li>
                ))}
            </ListSkills>

        </ContainerSkills>
    )
}

export default Skills