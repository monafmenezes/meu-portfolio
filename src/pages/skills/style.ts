import { styled } from '@mui/material'

const ContainerSkills = styled('main')`
  height: 75%;
  background-color: #b5838d;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-top: 1rem;
  }

  span {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  ul {
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    li {
      max-width: 100px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 80px;
      margin-bottom: 0.5rem;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
`

export default ContainerSkills
