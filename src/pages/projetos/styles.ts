import { styled } from "@mui/material";

const ContainerProjetos = styled("main")`
  height: 75%;
  background-color: #b5838d;
  padding: 0 3rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  span {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  @media (max-width: 800px) {
        min-height: 80vh;
    }
  
`;

export default ContainerProjetos

