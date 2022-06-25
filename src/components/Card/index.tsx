import { CardContainer } from "./styles";
import { projects } from "../../db/projects";
import Image from "next/image";


const Card = () => {
  return (
    <CardContainer>
      {projects.map((project) => (
        <li key={project.title}>
          <h3>{project.title}</h3>
          <span>{project.type}</span>
          <Image src={project.image} alt={project.title} width={350} height={200} />
          <a href={project.git} >Git</a>
          <a href={project.link}>Link</a>
        </li>
      ))}
    </CardContainer>
  );
};

export default Card;
