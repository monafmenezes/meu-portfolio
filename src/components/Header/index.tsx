import Link from "next/link";
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
    </HeaderContainer>
  );
};

export default Header;
