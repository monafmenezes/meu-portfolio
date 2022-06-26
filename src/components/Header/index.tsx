import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Menu from '../Menu'
import { HeaderContainer, MenuNav, Overlay } from './style'

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false)
  return (
    <HeaderContainer>
      <Link href='/'>
        <button>
          {'<Monalisa Menezes'} <span>/</span>
          {'>'}💻
        </button>
      </Link>

      <MenuNav>
        <Link href='/sobre'>Sobre</Link>
        <Link href='/projetos'>Projetos</Link>
        <Link href='/skills'>Skills</Link>
        <Link href='/contato'>Contato</Link>
      </MenuNav>

      <FaBars size={30} color='#FFCDB2' onClick={() => setMenu(!menu)} />

      {menu && <Menu menu={menu} />}
      {menu && <Overlay onClick={() => setMenu(!menu)} />}
    </HeaderContainer>
  )
}

export default Header
