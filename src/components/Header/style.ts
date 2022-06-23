import { styled } from "@mui/material";

export const HeaderContainer = styled("header")`
  width: 100%;
  height: 90px;
  background: #6d6875;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  border-bottom: 2px solid #FFCDB2;

  h1 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 500;
  }

  span {
    color: #b5838d;
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


`;
