import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { HeaderContainer, MenuNav } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <button>
          {"<Monalisa Menezes"} <span>/</span>
          {">"}💻
        </button>
      </Link>

      <MenuNav>
        <Link href="/sobre">Sobre</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/contato">Contato</Link>
      </MenuNav>

      <FaBars size={30} color="#FFCDB2"/>
      
    </HeaderContainer>
  );
};

export default Header;
