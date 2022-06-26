import { styled } from "@mui/material";


export const HomeContainer = styled("main")`

    background-color: #B5838D;
    padding: 0 3rem ;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 75%;

    section {
        display: flex;
        margin-top: 1rem;
        flex-direction: row;
        justify-content: space-between;

        div {
            width: 45%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @media (max-width: 800px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            div {
                margin: 1rem;
                width: 100%;
            }
        }
    }

    h3 {
        color: ${({ theme }) => theme.palette.text.secondary};
        font-weight: 400;
        font-size: 1.8rem;
        border-right: 1px solid #FFF;
        margin: 0;
        padding:0;

        span {
            font-weight: 600;
        }

        @media (max-width: 800px) {
            font-size: 1.9rem;
        }


    }

    @media (max-width: 800px) {
        min-height: 80vh;
    }


`
