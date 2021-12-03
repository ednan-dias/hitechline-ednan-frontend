import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useDrink } from "../../hooks/drink";
import { ModalRegister } from "../ModalRegister";

import { Container, Content } from "./styles";

export function Home() {
  const { drinks, OpenModal } = useDrink();

  useEffect(() => {
    console.log(drinks);
  }, [drinks]);

  return (
    <>
      <Container>
        <Header title="Listagem de Bebidas" />
        <Content>
          <Button title="Cadastrar nova Bebida" onPress={OpenModal} />
        </Content>
        <ModalRegister />
      </Container>
    </>
  );
}
