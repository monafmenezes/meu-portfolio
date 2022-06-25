import {styled} from '@mui/material'

export const CardContainer = styled('ul')`
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;

    li{
        display: flex;
        width: 370px;
        flex-direction: column;
        padding: 12px;
        background-color: #FFF;
        margin: 4px;
        border-radius: 4px;
        margin-bottom: 1rem;
    }
`