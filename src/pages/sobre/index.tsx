import { ContainerSobre } from "./styles";


const Sobre = () => {
  return (
    <ContainerSobre>
      <div>
        <img src="../../images/mona.jpeg" alt="Monalisa Menezes" />
      </div>

      <article>
          <h1>
            {"<Sobre"} <span>/</span>
            {">"} 👩‍💻
          </h1>
          <p>
            Me chamo Monalisa, meu primeiro contato com a tecnologia foi na
            adolescência, quando ganhei meu primeiro computador e com este
            aprendi diversas habilidades. Acabei cursando psicologia e
            ingressando na área da saúde, mas o desejo de estudar tecnologia
            sempre existiu. Então decidi escutar essa vontade e comecei a
            estudar programação e cada dia que me dedico a área me encontro
            mais, cada tecnologia nova que conheço me sinto desafiada e isto me
            traz uma satisfação que não consigo descrever. E o meu objetivo é me
            dedicar cada dia mais na área para alcançar a transição de carreira,
            crescimento e desenvolvimento profissional.
          </p>
        
      </article>
    </ContainerSobre>
  );
};

export default Sobre;
