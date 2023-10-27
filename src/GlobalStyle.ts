import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before{
    box-sizing: border-box;
  }

  h1{
    margin: 0;
  }

  button{
    background-color: transparent;
    border: 0 transparent;
  }

  body{
    font-family: ${({ theme }) => theme.typografy.type};
  }
`;

export default GlobalStyle;
