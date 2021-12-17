import { Text } from "@consta/uikit/Text";
import { MAX_CARDS_PER_LIST } from "../../../constants/constants";
import { numberFormat } from "../../../helpers/helpers";
import TradeCard from "../TradeCard";

import styles from "./TradeCardList.module.css";

const TradeCardList = ({ aTrades, type, renderBtn }) => {
  const cards = aTrades
    .slice(
      aTrades.length - MAX_CARDS_PER_LIST - 1 > 0
        ? aTrades.length - MAX_CARDS_PER_LIST - 1
        : 0
    )

    .map((item, index) => {
      return (
        <TradeCard
          key={index}
          tradeId={item?.trade_id}
          price={item?.price}
          changePrice={
            item?.price < (aTrades[index - 1]?.price || item?.price)
              ? "down"
              : item?.price > (aTrades[index - 1]?.price || item?.price)
              ? "up"
              : "same"
          }
          timeInSeconds={item?.date}
          amount={item?.amount}
          quantity={item?.quantity}
          type={item?.type}
          pair={[item?.cryptoCurrency, item?.realCurrency]}
          currency={item?.currency}
        />
      );
    })
    .reverse()
    .slice(0, 3);

  return (
    <div className={styles.trades_list}>
      <div className={styles.trades_list_header}>
        <Text className={styles.list_header_text}>{type.toUpperCase()}</Text>
        <Text
          className={styles.list_header_price}
          view={
            aTrades?.[0]?.price > aTrades?.[1]?.price
              ? "success"
              : aTrades?.[0]?.price < aTrades?.[1]?.price
              ? "alert"
              : "secondary"
          }
        >
          {aTrades?.[0]?.price ? numberFormat(aTrades?.[0]?.price) : ""}
        </Text>
      </div>
      {cards}
      {aTrades.length > 3 ? renderBtn : null}
    </div>
  );
};

export default TradeCardList;
