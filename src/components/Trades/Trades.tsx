import { useState, useEffect, useMemo, useCallback } from "react";
import useWebSocket from "react-use-websocket";
import { Text } from "@consta/uikit/Text";
import { Select } from "@consta/uikit/Select";
import TradeCardList from "./TradeCardList";
import styles from "./Trades.module.css";
import { CRYPTO_CURRENCY, REAL_CURRENCIES } from "../../constants/currencies";
import _ from "lodash";

import { EXMO_WS_PUBLIC_URL } from "../../constants/env";
import { MSG_NO_TRADES_YET } from "../../constants/messages";
import TradeModal from "./TradeModal";
import TradeHistoryTable from "./TradeHistoryTable";
import TradeButton from "./TradeButton";
import Icon from "../Icon";
import {
  IEXMOWebsocket,
  TSpotTradesItem,
  UTradeTypes,
  TCurrency,
} from "../../types/types";

type TInitialTrades = {
  buy: TSpotTradesItem[] | [];
  sell: TSpotTradesItem[] | [];
};

const initialTrades: TInitialTrades = {
  buy: [],
  sell: [],
};

let prevCryptoCurrency = CRYPTO_CURRENCY[0];
let prevRealCurrency = REAL_CURRENCIES[0];

const Trades = () => {
  const [socketUrl] = useState<string>(EXMO_WS_PUBLIC_URL || "");
  const [oTrades, setTrades] = useState(initialTrades);
  const [chosenCryptoCurrency, setChosenCryptoCurrency] =
    useState<TCurrency>(prevCryptoCurrency);
  const [chosenRealCurrency, setChosenRealCurrency] =
    useState<TCurrency>(prevRealCurrency);
  const [error, setError] = useState<IEXMOWebsocket | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenHistory, setChosenHistory] = useState<UTradeTypes>("buy");

  const handleTradeButtonClick = useCallback(
    (type) => {
      setChosenHistory(type);
      setIsModalOpen(true);
    },
    [setChosenHistory, setIsModalOpen]
  );

  const handleWSError = useCallback(
    (error) => {
      setError(error);
      setIsModalOpen(true);
    },
    [setError, setIsModalOpen]
  );

  const { sendMessage, lastMessage } = useWebSocket(socketUrl, {
    onError: (e) => {
      const oError = {
        event: "connectionError",
        code: -1,
        message: `Connection to WebSocket '${EXMO_WS_PUBLIC_URL}' failed.`,
      };
      handleWSError(oError);
    },
  });

  const oLastMessage = useMemo(
    () => lastMessage?.data && JSON.parse(lastMessage?.data),
    [lastMessage]
  ) as IEXMOWebsocket;

  const aLastMessageData = useMemo(() => {
    if (oLastMessage && oLastMessage.event === "update") {
      return oLastMessage.data || [];
    }
    if (oLastMessage?.event === "error") {
      setError(oLastMessage);
    }
    return [];
  }, [oLastMessage]);

  useEffect(() => {
    const MSG_SUBSCRIBE = `{"id":2,"method":"subscribe","topics":["spot/trades:${chosenCryptoCurrency.label}_${chosenRealCurrency.label}"]}`;
    const MSG_UNSUBSCRIBE = `{"id":2,"method":"unsubscribe","topics":["spot/trades:${prevCryptoCurrency.label}_${prevRealCurrency.label}"]}`;

    if (chosenCryptoCurrency !== prevCryptoCurrency) {
      setTrades(initialTrades);
      sendMessage(MSG_UNSUBSCRIBE);
      prevCryptoCurrency = chosenCryptoCurrency;
    }
    if (chosenRealCurrency !== prevRealCurrency) {
      setTrades(initialTrades);
      sendMessage(MSG_UNSUBSCRIBE);
      prevRealCurrency = chosenRealCurrency;
    }
    sendMessage(MSG_SUBSCRIBE);
  }, [sendMessage, chosenCryptoCurrency, chosenRealCurrency]);

  useEffect(() => {
    const oTradesTemp = _.cloneDeep(oTrades);

    aLastMessageData.forEach((item) => {
      const tempItem: TSpotTradesItem = {
        ..._.cloneDeep(item),
        cryptoCurrency: chosenCryptoCurrency,
        realCurrency: chosenRealCurrency,
        price: parseFloat(item.price),
      };

      oTradesTemp[item.type] = [...oTradesTemp[item.type], tempItem];
    });

    setTrades(oTradesTemp);
  }, [aLastMessageData]);

  return (
    <>
      {isModalOpen ? (
        <TradeModal isOpen={isModalOpen} onEsc={() => setIsModalOpen(false)}>
          {error ? (
            <Text>{`${error.event} ( ${error.code} ). ${error.message}`}</Text>
          ) : (
            <TradeHistoryTable history={oTrades[chosenHistory]} />
          )}
        </TradeModal>
      ) : null}

      <div>
        <div className={styles.select_currency_container}>
          <Select
            items={CRYPTO_CURRENCY}
            value={chosenCryptoCurrency}
            className={styles.select_currency_item}
            onChange={({ value }) =>
              setChosenCryptoCurrency(value || prevCryptoCurrency)
            }
          />
          <Icon name="exchange" />
          <Select
            items={REAL_CURRENCIES}
            value={chosenRealCurrency}
            className={styles.select_currency_item}
            onChange={({ value }) =>
              setChosenRealCurrency(value || prevRealCurrency)
            }
          />
        </div>

        <div className={styles.container}>
          {!oTrades.buy.length && !oTrades.sell.length ? (
            <Text view="warning" fontStyle="italic">
              {MSG_NO_TRADES_YET}
            </Text>
          ) : (
            <>
              <TradeCardList
                aTrades={oTrades.buy}
                type="buy"
                renderBtn={
                  <TradeButton
                    counter={oTrades.buy.length}
                    onClick={() => handleTradeButtonClick("buy")}
                  />
                }
              />

              <TradeCardList
                aTrades={oTrades.sell}
                type="sell"
                renderBtn={
                  <TradeButton
                    counter={oTrades.sell.length}
                    onClick={() => handleTradeButtonClick("sell")}
                  />
                }
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Trades;
