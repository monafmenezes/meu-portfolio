import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Menu from '../Menu'
import { HeaderContainer, MenuNav, Overlay } from './style'

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false)

  const handleMenu = () => {
    setMenu(!menu)
  }
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

      <FaBars size={30} color='#FFCDB2' onClick={handleMenu} />

      {menu && <Menu menu={menu} setMenu={handleMenu} />}
      {menu && <Overlay onClick={handleMenu} />}
    </HeaderContainer>
  )
}

export default Header
