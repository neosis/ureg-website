
import {createGlobalStyle} from "styled-components";
import {colors} from "../utils/Typography";

const GlobalStyle = createGlobalStyle`
 *, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 html {
 font-size: 62.5%;
 }

 body {
 font-size: 1.7rem;
 font-family: "Source Sans Pro", sans-serif;
 background: ${colors.surfaceColor};
 color: rgba(0,0,0,0.85);
 }
`;

export default GlobalStyle;
