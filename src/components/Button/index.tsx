import { ButtonStyle, Title } from "./styles";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button({ title, color = "#842DEA", onPress, ...rest }: Props) {
  return (
    <ButtonStyle {...rest} color={color} onClick={onPress}>
      <Title> {title}</Title>
    </ButtonStyle>
  );
}
