import { Button } from "@consta/uikit/Button";
import { IconList } from "@consta/uikit/IconList";
import { LABEL_BTN_TRADE_HISTORY } from "../../../constants/labels";

const TradeButton = ({ counter, onClick }) => {
  return (
    <Button
      label={`${LABEL_BTN_TRADE_HISTORY} - ${counter}`}
      view="secondary"
      size="s"
      iconLeft={IconList}
      iconSize="m"
      onClick={onClick}
    />
  );
};

export default TradeButton;
