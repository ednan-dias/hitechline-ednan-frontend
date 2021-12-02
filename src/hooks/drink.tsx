import { useState, createContext, ReactNode, useContext } from "react";

interface Drink {
  name: string;
  brand: "Brasil" | "França" | "Japão" | "Venezuela";
  price: string;
  url: string;
}

interface IDrinkContextData {
  drinks: Drink[];
}

const DrinkContext = createContext({} as IDrinkContextData);

interface DrinkContextProps {
  children: ReactNode;
}

function DrinkProvider({ children }: DrinkContextProps): JSX.Element {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  return (
    <DrinkContext.Provider value={{ drinks }}>{children}</DrinkContext.Provider>
  );
}

function useDrink() {
  const context = useContext(DrinkContext);

  return context;
}

export { DrinkProvider, useDrink };
