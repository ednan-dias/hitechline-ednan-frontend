import { Button } from "../../components/Button";
import { DrinkItem } from "../../components/DrinkItem";
import { Header } from "../../components/Header";
import { useDrink } from "../../hooks/drink";
import { ModalRegister } from "../ModalRegister";

import { Container, Content, Info } from "./styles";

export function Home() {
  const { drinks, OpenModal } = useDrink();

  return (
    <>
      <Container>
        <Header title="Listagem de Bebidas" />
        <Content>
          <Button title="Cadastrar nova Bebida" onPress={OpenModal} />

          {drinks.length === 0 && (
            <Info> Ainda não há bebidas cadastradas!</Info>
          )}

          {drinks.map((drink) => {
            return <DrinkItem key={drink.name} drink={drink} />;
          })}
        </Content>
        <ModalRegister />
      </Container>
    </>
  );
}
