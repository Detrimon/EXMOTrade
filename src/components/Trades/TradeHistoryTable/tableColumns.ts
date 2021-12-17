const sort = (a: number, b: number): number => a - b;

export const columns = [
  {
    title: "№",
    accessor: "id",
    align: "left",
    width: 90,
    sortable: true,
    sortFn: sort,
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
    sortFn: sort,
    align: "right",
  },
  {
    title: "на сумму",
    accessor: "amount",
    sortable: true,
    sortFn: sort,
    align: "right",
  },
  {
    title: "Дата / время",
    accessor: "datetime",
    align: "right",
    width: 190,
  },
];
