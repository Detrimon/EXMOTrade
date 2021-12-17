import { useMemo } from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import styles from "./TradeCard.module.css";
import Icon from "../../Icon";
import Separator from "../../Separator";
import { dateTimeFormat, numberFormat } from "../../../helpers/helpers";
import { TIMEMS_1000 } from "../../../constants/constants";
import { TIP_TRADE_ID } from "../../../constants/tooltips";
import { LABEL_TXT_AMOUNT } from "../../../constants/labels";

const TradeCard = ({
  type,
  tradeId,
  pair,
  changePrice = "same",
  price,
  quantity,
  amount,
  timeInSeconds,
}) => {
  const [cryptoCurrency, realCurrency] = pair;

  const tradeType = useMemo(
    () =>
      ({
        sell: "продано",
        buy: "куплено",
      }[type]),
    [type]
  );

  return (
    <Card
      verticalSpace="s"
      horizontalSpace="s"
      form="round"
      className={styles.container}
    >
      <div className={styles.card_header_container}>
        <div className={styles.card_header_price}>
          <Icon name={cryptoCurrency.label} />
          <Separator />
          <Text
            as="span"
            className={styles.card_header_colon}
            size="s"
          >{`:`}</Text>
          <Separator />
          <Icon name={realCurrency.label} />
          <Separator size="s" />
          <Text as="span" id="idPrice" className={styles.card_header_pricetext}>
            {`${numberFormat(price)}`}
          </Text>
          <Separator />

          {changePrice === "up" ? (
            <Icon name="upArrow" />
          ) : changePrice === "down" ? (
            <Icon name="downArrow" />
          ) : null}
        </div>
        <Text
          size="s"
          view="secondary"
          data-tooltip={TIP_TRADE_ID}
        >{`${tradeId}`}</Text>
      </div>

      <div className={styles.quantity_amount_container}>
        <div className={styles.quantity_amount_item}>
          <Text
            as="p"
            size="s"
            weight="normal"
            className={styles.quantity_amount_header}
          >
            {tradeType}
          </Text>
          <Text
            as="p"
            weight="semibold"
            className={styles.quantity_amount_text}
          >
            <Icon name={cryptoCurrency.label} />
            <Separator /> {quantity}
          </Text>
        </div>
        <div className={styles.quantity_amount_item}>
          <Text as="p" size="s" className={styles.quantity_amount_header}>
            {LABEL_TXT_AMOUNT}
          </Text>
          <Text
            as="p"
            weight="semibold"
            view="success"
            className={styles.quantity_amount_text}
          >
            <Icon name={realCurrency.label} />
            <Separator />
            {amount}
          </Text>
        </div>
      </div>

      <div className={styles.datetime_container}>
        <Text as="span" id="idTradeDate" view="ghost" size="s">
          {`${dateTimeFormat(timeInSeconds * TIMEMS_1000)}`}
        </Text>
      </div>
    </Card>
  );
};

export default TradeCard;
