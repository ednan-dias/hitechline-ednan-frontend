import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Header } from "../../components/Header";
import Select from "react-select";

import { Form, FormGroup, Label, Input, stylesModal } from "./styles";
import { Button } from "../../components/Button";
import { useDrink } from "../../hooks/drink";
import { Drink } from "../../dtos/drink";

export interface Option {
  value: string;
  label: string;
}

export function ModalRegister() {
  const options: Option[] = [
    { value: "brasil", label: "Brasil" },
    { value: "franca", label: "França" },
    { value: "japao", label: "Japão" },
    { value: "venezuela", label: "Venezuela" },
  ];

  const { addNewDrink, isVisible, CloseModal } = useDrink();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState({
    value: "brasil",
    label: "Brasil",
  } as Option);

  function handleConfirm(e: FormEvent) {
    e.preventDefault();

    if (name === "") {
      return;
    }

    const data: Drink = {
      name,
      brand,
    };

    addNewDrink(data);
    CloseModal();
  }

  function clearInputs() {
    setName("");
    setBrand({
      value: "brasil",
      label: "Brasil",
    });
  }

  return (
    <Modal
      isOpen={isVisible}
      style={stylesModal}
      onRequestClose={CloseModal}
      onAfterClose={clearInputs}
    >
      <Header title="Cadastrar Bebida" />

      <Form onSubmit={handleConfirm}>
        <FormGroup>
          <Label>Nome</Label>
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Marca</Label>
          <Select
            name="brand"
            defaultValue={brand}
            isSearchable
            options={options}
            onChange={(option) => setBrand(option!)}
            placeholder=""
            styles={{
              control: (provided, state) => {
                return {
                  ...provided,
                  width: "100%",
                  height: "auto",
                  padding: "3px",
                  backgroundColor: "#f0f0f0",
                  border: "0",
                };
              },
            }}
          />
        </FormGroup>

        <Button title="Adicionar" type="submit" />
      </Form>
    </Modal>
  );
}
