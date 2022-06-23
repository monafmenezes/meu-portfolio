import { styled } from "@mui/material";


export const HomeContainer = styled("main")`
    background-color: #B5838D;
    padding: 0 3rem ;
    display: flex;
    justify-content: center;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;

        div {
            width: 50%;
        }
    }
    
   

    h3 {
        color: ${({ theme }) => theme.palette.text.secondary};
        font-weight: 400;
        font-size: 2rem;
        border-right: 1px solid #6D6875;
        margin: 0;
        padding:0;

        span {
            font-weight: 600;
        }
    }


`
