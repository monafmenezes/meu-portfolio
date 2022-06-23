import Link from "next/link";
import { HeaderContainer, MenuNav } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>
        {" "}
        {"<Monalisa Menezes"} <span>/</span>
        {">"}{" "}
      </h1>

      <MenuNav>
        <Link href="/">Sobre</Link>
        <Link href="/">Projetos</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Contato</Link>
      </MenuNav>
    </HeaderContainer>
  );
};

export default Header;
