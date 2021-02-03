import React from "react";
import MaterialTable, { Column } from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

interface IPerson {
  firstName: string;
  lastName: string;
  birthYear: number;
  availability: boolean;
}

export default function App() {
  const lookup = { true: "Available", false: "Unavailable" };

  const columns: Array<Column<IPerson>> = [
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    { title: "Availablity", field: "availability", lookup },
  ];

  const data: Array<IPerson> = [
    {
      firstName: "Tod",
      lastName: "Miles",
      birthYear: 1987,
      availability: true,
    },
    {
      firstName: "Jess",
      lastName: "Smith",
      birthYear: 2000,
      availability: false,
    },
  ];

  return (
    <MaterialTable
      columns={columns}
      data={data}
      options={{
        exportMenu: [
          {
            label: "Export PDF",
            exportFunc: (cols, datas) =>
              ExportPdf(cols, datas, "myPdfFileName"),
          },
          {
            label: "Export CSV",
            exportFunc: (cols, datas) =>
              ExportCsv(cols, datas, "myCsvFileName"),
          },
        ],
      }}
    />
  );
}
