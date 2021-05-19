import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white-70: #fafafc;
    --white-100: #FFFFFF;
    
    --green-100: #bae159;
    --purple-20: #aab1cf;

    --violet-100: #200e4d;
    --gray-30: #bcbdcc;
    --gray-50: #bcbddd;
    --blue-20: #95aed8;
    --gosth: #c1cbdc;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  a {
  color: inherit;
  text-decoration: none;
}


  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
