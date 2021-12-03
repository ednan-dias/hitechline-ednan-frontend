import { ButtonStyle, Title } from "./styles";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<Props> {
  title: string;
  color?: string;
  onPress?: () => void;
}

export function Button({ title, color = "#842DEA", onPress }: Props) {
  return (
    <ButtonStyle color={color} onClick={onPress}>
      <Title>{title}</Title>
    </ButtonStyle>
  );
}
