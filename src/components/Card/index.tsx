import { CardContainer, NavLinks } from './styles'
import { projects } from '../../db/projects'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'
import { responsive } from '../../services/utils'
import { FaGithub, FaLink } from 'react-icons/fa'

const Card = () => {
  return (
    <CardContainer>
      <Carousel responsive={responsive} itemClass='carousel-item-padding-40-px'>
        {projects.map(project => (
          <div key={project.title}>
            <h3>{project.title}</h3>
            <Image
              src={project.image}
              alt={project.title}
              width={350}
              height={200}
            />
            <NavLinks>
              <a href={project.git}><FaGithub size={20} color=" #B5838D"/></a>
              <a href={project.link}><FaLink size={20} color=" #B5838D" /></a>
            </NavLinks>
          </div>
        ))}
      </Carousel>
    </CardContainer>
  )
}

export default Card
