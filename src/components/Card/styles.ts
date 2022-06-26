import {styled} from '@mui/material'

export const CardContainer = styled('section')`
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;

    div{
        display: flex;
        flex-direction: column;
        padding: 12px;
        margin: 4px;
        margin-bottom: 1rem;
        background: #6d6875;
        border-radius: 4px;

        h3 {
            color:#B5838D;
            margin-bottom: 1rem;
        }

        img {
            border-radius: 4px;
        }
        
    }


`

export const NavLinks = styled('nav')`
    display: flex;
    justify-content: center;

    a {
        margin: 4px;
    }

`