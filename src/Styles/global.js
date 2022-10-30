import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

    body {
        background-color: #c4c4cc;
        color: #010030;
        font-family: 'Montserrat', sans-serif;
    }

    input, textarea, button {
        cursor: pointer;
        border: 0;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.7;
    }
`