import { Modal } from "@consta/uikit/Modal";
import styles from "./TradeModal.module.css";

const TradeModal = ({ children, isOpen, onEsc }) => {
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
