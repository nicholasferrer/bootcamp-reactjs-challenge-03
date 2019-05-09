import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const globalStyle = createGlobalStyle`
* {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #f0f0f0;
    color: #1d2129;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialized !important;
    font-family: sans-serif;
  }

`;

export default globalStyle;
