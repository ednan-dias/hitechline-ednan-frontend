import { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useDrink } from "../../hooks/drink";
import { ModalRegister } from "../ModalRegister";

import { Container, Content } from "./styles";

export function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const { drinks } = useDrink();

  useEffect(() => {
    console.log(drinks);
  }, [drinks]);

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Button
            title="Cadastrar nova Bebida"
            onPress={() => setIsVisible(true)}
          />
        </Content>
        <ModalRegister isVisible={isVisible} />
      </Container>
    </>
  );
}
