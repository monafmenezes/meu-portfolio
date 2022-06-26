import { styled } from "@mui/material";

const ContainerSobre = styled("main")`
  height: 75%;
  background-color: #b5838d;
  padding: 0 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  img {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    margin-top: 1rem;
    border: 2px solid #6D6875;
  }

  div {
    width: 50%;
    display: flex;
    justify-content: center;

    h1 {
      display: none;
    }
  }
  article {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  span {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  p {
    text-align: justify;
    margin-top: 2rem;
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 300;
    background-color:  #6D6875;
    padding: 1rem;
    border-radius: 4px;
    width: 70%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 1rem;

    div {
      width: 100%;
      padding: 1rem 0;
      flex-direction: column;
      align-items: center;
      
      h1 {
        display: block;
        margin-bottom: 2rem;
      }
    }

    article {
      width: 100%;
      padding: 1rem 0;

      h1 {
        display: none;
      }
    }
    
  }
`;

export default ContainerSobre