import React from "react";
import {
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import "../styles/order.css";

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "discount",
    accessor: "discount",
  },
  {
    Header: "amount",
    accessor: "amount",
  },
  {
    Header: "status",
    accessor: "status",
  },
  {
    Header: "action",
    accessor: "action",
  },
];
/*
 const data =[{
  id: "123",
  amount: 5,
  quantity: 10,
  discount: 50,
  status: "process",
  action: "view"
 }
]*/

const data = [
  {
    id: 1,
    gender: "Male",
    salary: 400000,
  },

  {
    id: 2,
    gender: "Male",
    salary: 500000,
  },

  {
    id: 3,
    gender: "Male",
    salary: 600000,
  },

  {
    id: 4,
    gender: "Male",
    salary: 700000,
  },
  {
    id: 1,
    gender: "Male",
    salary: 400000,
  },
  {
    id: 1,
    gender: "Male",
    salary: 400000,
  },
  {
    id: 1,
    gender: "Male",
    salary: 400000,
  },
  {
    id: 1,
    gender: "Male",
    salary: 400000,
  },
];

const Order = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 },
    },
    useSortBy,
    usePagination
  );
  return (
    <div className="container">
      <h1>My Orders</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps}>
              {hg.headers.map((header) => (
                <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                  {header.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="btn-container">
        <button disabled={!canPreviousPage} onClick={previousPage}>
          ⬅
        </button>
        <span>
          {pageIndex + 1} of {pageCount}
        </span>
        <button onClick={nextPage} disabled={!canNextPage}>
          ➡
        </button>
      </div>
    </div>
  );
};

export default Order;
