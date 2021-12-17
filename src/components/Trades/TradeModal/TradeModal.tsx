import { Modal } from "@consta/uikit/Modal";
import { TTradeModalProps } from "../../../types/types";

import styles from "./TradeModal.module.css";

const TradeModal = ({ children, isOpen, onEsc }: TTradeModalProps) => {
  return (
    <Modal
      className={styles.container}
      hasOverlay={true}
      isOpen={isOpen}
      onEsc={onEsc}
      onClickOutside={onEsc}
    >
      {children}
    </Modal>
  );
};

export default TradeModal;
