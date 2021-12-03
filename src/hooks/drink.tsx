import { useState, createContext, ReactNode, useContext } from "react";
import { Drink } from "../dtos/drink";

interface IDrinkContextData {
  drinks: Drink[];
  addNewDrink: (drink: Drink) => void;
  isVisible: boolean;
  OpenModal: () => void;
  CloseModal: () => void;
}

const DrinkContext = createContext({} as IDrinkContextData);

interface DrinkContextProps {
  children: ReactNode;
}

function DrinkProvider({ children }: DrinkContextProps): JSX.Element {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  function OpenModal() {
    setIsVisible(true);
  }

  function CloseModal() {
    setIsVisible(false);
  }

  function addNewDrink(drink: Drink) {
    setDrinks([...drinks, drink]);
  }

  return (
    <DrinkContext.Provider
      value={{ drinks, addNewDrink, isVisible, OpenModal, CloseModal }}
    >
      {children}
    </DrinkContext.Provider>
  );
}

function useDrink() {
  const context = useContext(DrinkContext);

  return context;
}

export { DrinkProvider, useDrink };
