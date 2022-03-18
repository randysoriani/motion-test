import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --gray-400: #9c9c9c;
        --gray-600: #555;
        --gray-900: #1a1a1a;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      
        font-family: sans-serif;
    }

    body{
        background: var(--gray-900);
        color: var(--gray-400);
    }
`