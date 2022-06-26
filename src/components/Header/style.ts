import { styled } from "@mui/material";

export const HeaderContainer = styled("header")`
  width: 100%;
  background: #6d6875;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  border-bottom: 2px solid #FFCDB2;
  height: 15%;

  
  button {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 500;
    background: transparent;
    border: 0;
    height: 40px;
    font-size: 1.8rem;
  }
  
  span {
    color: #b5838d;
  }

  svg {
    display: none;
  }
  
  @media (max-width: 800px) {
    height: 90px;

    svg {
      display: block;
    }
  }
  
`;

export const MenuNav = styled("nav")`
  a {
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 0 2rem;

    &:hover {
        filter: brightness(0.8);
    }
  }


  @media (max-width: 800px) {
    a {
      display: none;
    }
  }


`;
