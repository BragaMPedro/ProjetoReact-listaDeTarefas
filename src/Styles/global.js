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
    }

    input, textarea, button {
        cursor: pointer;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.7;
    }
`