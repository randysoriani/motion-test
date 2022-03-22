import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --gray-400: #9c9c9c;
        --gray-600: #555;
        --gray-900: #1a1a1a;
        --box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.15);
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
  
        @media (max-width: 780px){
            font-size: 87.5%; //14px
        }
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      
    }
    
    body{
        background: var(--gray-900);
        color: var(--gray-400);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Roboto', sans-serif;
        font-family: sans-serif;
    }

    button {
        cursor: pointer;
    }
  
    [disabled]{
        opacity: 0.8;
        cursor: not-allowed;
    }
`