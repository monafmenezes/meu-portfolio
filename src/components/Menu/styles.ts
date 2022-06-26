import { styled } from '@mui/system'

export const MenuContainer = styled('div')`
  width: 300px;
  height: 100vh;
  position: absolute;
  z-index: 2;
  margin: 0;
  background: #6d6875;
  left: 0;
  top: 0;
  opacity: 1;
  transition: opacity 0.5s;

  nav {
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin: 4px;
    margin-top: 12px;

    button {
      margin: 1rem;
      font-size: 1.2rem;
      color: #FFCDB2;
      border-bottom: 1px solid #FFCDB2;
      padding-bottom: 2px;
    }
  }

  > * {
    transition: opacity 0.5s;
  }

  &.hide {
    opacity: 0;
    width: 0;
    .menu {
      width: 0;
      > * {
        opacity: 0;
      }
    }
  }
`
