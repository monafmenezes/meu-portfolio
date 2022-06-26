import Link from 'next/link'
import { MenuContainer } from './styles'

interface IMenu {
  menu: boolean
}

const Menu = ({ menu }: IMenu) => {
  return (
    <MenuContainer className={menu ? '' : 'hide'}>
      <nav>
        <Link href='/sobre'>Sobre</Link>
        <Link href='/projetos'>Projetos</Link>
        <Link href='/skills'>Skills</Link>
        <Link href='contato'>Contato</Link>
      </nav>
    </MenuContainer>
  )
}

export default Menu
