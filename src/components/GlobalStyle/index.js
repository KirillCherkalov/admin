import { createGlobalStyle } from 'styled-components';
import * as normalizeCss from 'normalize.css';

const GlobalStyle = createGlobalStyle`
  ${normalizeCss}

  html,
  body {
    background: #e5e5e5;
    margin: 0;
    padding: 0;
    height: 100%;
    font-display: swap;
  }

  body {
    display: flex;
    flex: 1;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  div {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;

export default GlobalStyle;
