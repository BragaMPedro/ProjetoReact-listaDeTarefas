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
    
    input, textarea{
        cursor: text;
        border: 0;
        font-family: 'Montserrat', sans-serif;
        
        ::placeholder{
            opacity: 0.3;
        }
    }
    
    button {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        cursor: pointer;
        border: 0;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.7;
    }
`