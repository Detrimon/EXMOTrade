export type UChangePriceDirection = "down" | "up" | "same"; // TODO: Когда все будет перенесено сюда, убрать export
export type UTradeTypes = "sell" | "buy"; // TODO: Когда все будет перенесено сюда, убрать export

export type TTradeCardProps = {
  type: UTradeTypes;
  tradeId: number;
  pair: [{ label: string; id: number }, { label: string; id: number }]; // [{label: 'BTC', id: 0} , {label: 'USD', id: 0}] - импортировать оттуда, где определяется..
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
