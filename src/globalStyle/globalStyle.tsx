import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import "./sb-admin-2.min.css"

const GlobalStyle = createGlobalStyle`
  // Reset CSS
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
`;

export default GlobalStyle;
