import Trades from "../Trades";
import styles from "./App.module.css";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
function App() {
  return (
    <Theme preset={presetGpnDefault}>
      <div className={styles.container}>
        <Trades />
      </div>
    </Theme>
  );
}

export default App;
