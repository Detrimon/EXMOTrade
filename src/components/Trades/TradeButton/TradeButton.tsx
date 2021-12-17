import { Button } from "@consta/uikit/Button";
import { IconList } from "@consta/uikit/IconList";
import { LABEL_BTN_TRADE_HISTORY } from "../../../constants/labels";

type TTradeButton = {
  counter: number;
  onClick: () => void;
};

const TradeButton = ({ counter, onClick }: TTradeButton) => {
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
