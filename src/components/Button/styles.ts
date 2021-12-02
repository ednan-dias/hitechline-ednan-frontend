import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<ButtonProps> {
  color: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
  width: auto;
  height: 50px;
  background-color: ${({ color }) => color};
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  padding: 15px;
`;

export const Title = styled.p`
  font-size: 16px;
  color: white;
  text-shadow: 1px 1px 1px black;
`;
