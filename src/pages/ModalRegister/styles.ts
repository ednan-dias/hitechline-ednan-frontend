import styled from "@emotion/styled";
import { Styles } from "react-modal";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  background-color: #08945b;
  padding: 5px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: white;
  text-shadow: 1px 1px 1px black;
`;

export const CloseButton = styled.button`
  width: auto;
  height: auto;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  margin: 10px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.7s;
  }
`;

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
