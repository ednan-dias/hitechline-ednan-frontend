import { Home } from "../src/pages/Home";
import { DrinkProvider } from "./hooks/drink";
import Modal from "react-modal";
import { GlobalStyle, stylesGlobal } from "./styles/global";

Modal.setAppElement("#root");

export const App = (): JSX.Element => (
  <>
    <DrinkProvider>
      <GlobalStyle styles={stylesGlobal} />
      <Home />
    </DrinkProvider>
  </>
);
