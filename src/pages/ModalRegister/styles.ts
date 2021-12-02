import styled from "@emotion/styled";
import { Styles } from "react-modal";

export const Header = styled.div``;

export const stylesModal: Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    width: "50%",
    height: "75%",
    margin: "auto",
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "15px",
    outline: "none",
    padding: "20px",
  },
};
