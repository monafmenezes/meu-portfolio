import { ContainerProjetos } from "./styles"

import Image from "next/image";
import Card from "../../components/Card";

const Projetos = () => {

  
    return(
        <ContainerProjetos>
            <h1>{'<Projetos'} <span>/</span>{'>'} 💻</h1>

            <Card/>
        </ContainerProjetos>
    )
}

export default Projetos