import Link from 'next/link'
import { MenuContainer } from './styles'

interface IMenu {
  menu: boolean
  setMenu: () => void
}

const Menu = ({ menu, setMenu }: IMenu) => {
  return (
    <MenuContainer className={menu ? '' : 'hide'}>
      <nav>
        <Link href='/sobre'>
          <button onClick={setMenu} type='button'>
            Sobre
          </button>
        </Link>
        <Link href='/projetos'>
          <button onClick={setMenu} type='button'>
            Projetos
          </button>
        </Link>
        <Link href='/skills'>
          <button onClick={setMenu} type='button'>
            Skills
          </button>
        </Link>
        <Link  href='contato'>
          <button onClick={setMenu} type='button'>
            Contato
          </button>
        </Link>
      </nav>
    </MenuContainer>
  )
}

export default Menu
