import { useMemo } from "react";
import { Table, TableColumn } from "@consta/uikit/Table";
import { Text } from "@consta/uikit/Text";
import { columns } from "./tableColumns";
import styles from "./TradeHistoryTable.module.css";
import Icon from "../../Icon";
import Separator from "../../Separator";

import { dateTimeFormat } from "../../../helpers/helpers";
import { TIMEMS_1000 } from "../../../constants/constants";
import { MSG_NO_DATA } from "../../../constants/messages";
import {
  TTradeHistoryTableRow,
  TTradeHistoryTableProps,
} from "../../../types/types";

const TradeHistoryTable = ({ history }: TTradeHistoryTableProps) => {
  const rows = useMemo(
    () =>
      history.map((item, index) => ({
        id: (index + 1).toString(),
        pair: `${item.cryptoCurrency.label}/${item.realCurrency.label}`,
        price: (
          <Text size="s" style={{ whiteSpace: "nowrap" }}>
            {item.price}
            <Separator />
            {item.price > history?.[index - 1]?.price ? (
              <Icon name="upArrow" />
            ) : item.price < history?.[index - 1]?.price ? (
              <Icon name="downArrow" />
            ) : null}
          </Text>
        ),
        quantity: item.quantity,
        amount: item.amount,
        datetime: dateTimeFormat(item.date * TIMEMS_1000),
      })),
    [history]
  ) as TTradeHistoryTableRow[];

  return (
    <Table
      columns={columns as TableColumn<TTradeHistoryTableRow>[]}
      rows={rows}
      stickyHeader={true}
      zebraStriped="odd"
      className={styles.container}
      emptyRowsPlaceholder={<Text>{MSG_NO_DATA}</Text>}
    />
  );
};

export default TradeHistoryTable;
