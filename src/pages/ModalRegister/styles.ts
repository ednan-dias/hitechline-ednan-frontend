import styled from "@emotion/styled";
import { Styles } from "react-modal";

export const Form = styled.form`
  width: 100%;
  height: auto;
  padding: 10px;
`;

export const FormGroup = styled.article`
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: black;
  font-size: 16px;
  margin-left: 2px;
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  padding: 12px;
  border: 0;
  border-radius: 5px;
  background-color: #f0f0f0;
  font-size: 16px;
`;

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
    height: "70%",
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
    padding: "0",
  },
};
