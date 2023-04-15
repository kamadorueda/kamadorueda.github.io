import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    background-color: transparent;
    box-sizing: border-box;
    border: 0;
    color: transparent;
    display: block;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: unset;
    margin: 0;margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    overflow: auto;
    outline: none;
    padding: 0;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
  button:hover {
    cursor: pointer;
  }
  head {
    display: none
  }
`;
