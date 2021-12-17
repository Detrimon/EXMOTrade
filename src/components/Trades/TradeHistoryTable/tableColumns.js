export const columns = [
  {
    title: "№",
    accessor: "id",
    align: "left",
    width: 90,
    sortable: true,
    sortFn: (a, b) => a - b,
    order: "DESC",
  },
  {
    title: "Пара",
    accessor: "pair",
    align: "center",
  },
  {
    title: "Курс",
    accessor: "price",
    align: "left",
  },
  {
    title: "Количество",
    accessor: "quantity",
    sortable: true,
    sortFn: (a, b) => a - b,
    align: "right",
  },
  {
    title: "на сумму",
    accessor: "amount",
    sortable: true,
    sortFn: (a, b) => a - b,
    align: "right",
  },
  {
    title: "Дата / время",
    accessor: "datetime",
    align: "right",
    width: 190,
  },
];
