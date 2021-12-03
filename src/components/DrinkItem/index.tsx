import { Drink } from "../../dtos/drink";
import { Container, Title, SubTitle } from "./styles";

interface Props {
  drink: Drink;
}

export function DrinkItem({ drink }: Props) {
  return (
    <Container color={drink.color}>
      <Title>{drink.name}</Title>
      <SubTitle>Marca: {drink.brand.label}</SubTitle>
    </Container>
  );
}
