import Modal from "react-modal";

import { stylesModal } from "./styles";

interface Props {
  isVisible: boolean;
}

export function ModalRegister({ isVisible }: Props) {
  return (
    <Modal isOpen={isVisible} style={stylesModal}>
      <h1>Olá</h1>
    </Modal>
  );
}
