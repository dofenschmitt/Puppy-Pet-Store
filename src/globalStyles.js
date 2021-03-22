import { createGlobalStyle } from 'styled-components'

const GlobalStyle  = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        
    }
    html, body {
        overflow-x: hidden;
        background-color: rgba(241,241,241,0.5); 
    }
`;

export default GlobalStyle;