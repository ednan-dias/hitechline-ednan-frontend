import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

export const GlobalStyle = styled(Global)``;

export const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "Roboto";
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  button {
    cursor: pointer;
  }

  button:hover {
    filter: brightness(1.2);
    transition: filter 1s;
  }
`;
