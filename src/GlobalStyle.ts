import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

      :root {
            --maxWidth: 1280px;
            --white: #fff;
            --lightGrey: #eee;
            --medGrey: #353535;
            --darkGrey: #1c1c1c;
            --red: #e50914;
            --logoFont: 'Bebas Neue', cursive;
      }

      * {
            box-sizing: border-box;
            font-family: 'Abel', sans-serif;
      }

      body {
            margin: 0;
            padding: 0;
            background: #1c1c1c;
      }
`;
