import { styled } from '@mui/material'

const ContatoContainer = styled('main')`
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

  form {
    max-width: 350px;
  }

  @media (max-width: 800px) {
    min-height: 80vh;
  }
`

export default ContatoContainer
