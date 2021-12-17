import { TableRow } from "@consta/uikit/Table";

type UChangePriceDirection = "down" | "up" | "same";
type UEXMOEvents = "subscribed" | "unsubscribed" | "update" | "info" | "error";

export type UTradeTypes = "sell" | "buy";
export type TCurrency = { label: string; id: number };

export interface IEXMOWebsocket {
  ts: number;
  event: UEXMOEvents;
  topic?: string;
  id?: number;
  message?: string;
  code?: number;
  data?: TEXMOSpotTradesItem[];
}

type TEXMOSpotTradesItem = {
  amount: string;
  date: number;
  price: string;
  quantity: string;
  trade_id: number;
  type: UTradeTypes;
};

export type TSpotTradesItem = {
  amount: string;
  date: number;
  price: number;
  quantity: string;
  trade_id: number;
  type: UTradeTypes;
  cryptoCurrency: TCurrency;
  realCurrency: TCurrency;
};

export type TTradeHistoryTableRow = TableRow & {
  pair: string;
  price: JSX.Element;
  quantity: string;
  amount: string;
  datetime: string;
};

// Typing PROPS of components

export type TTradeCardProps = {
  type: UTradeTypes;
  tradeId: number;
  pair: [TCurrency, TCurrency];
  changePrice: UChangePriceDirection;
  price: number;
  quantity: string;
  amount: string;
  timeInSeconds: number;
};

export type TTradeModalProps = {
  children: JSX.Element;
  isOpen: boolean;
  onEsc: () => void;
};

export type TTradeHistoryTableProps = {
  history: TSpotTradesItem[];
};

export type TTradeButtonProps = {
  counter: number;
  onClick: () => void;
};

export type TTradeCardListProps = {
  aTrades: TSpotTradesItem[];
  type: UTradeTypes;
  renderBtn: JSX.Element;
};
