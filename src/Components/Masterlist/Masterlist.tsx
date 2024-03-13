import React from "react";
import TopNav from "../Navibar/TopNav";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

// type Props = {};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, disableColumnMenu: true },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    disableColumnMenu: true,
    flex: 1, // Add flex property to distribute space evenly
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    disableColumnMenu: true,
    flex: 1, // Add flex property to distribute space evenly
  },
  {
    field: "username",
    headerName: "Username",
    width: 150,
    disableColumnMenu: true,
    flex: 1, // Add flex property to distribute space evenly
  },
  {
    field: "position",
    headerName: "Position",
    width: 160,
    disableColumnMenu: true,
    flex: 1, // Add flex property to distribute space evenly
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", username: "sjon", position: "TRA"},
  { id: 2, lastName: "Lannister", firstName: "Cersei",username: "lcersei", position: "DEI"},
  { id: 3, lastName: "Lannister", firstName: "Jaime", username: "ljaime", position: "DEII" },
  { id: 4, lastName: "Stark", firstName: "Arya", username: "sarya",position: "TRA" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", username: null, position: "TRA" },
  { id: 6, lastName: "Melisandre", firstName: null, username: "m", position: "DEII"},
  { id: 7, lastName: "Clifford", firstName: "Ferrara",username: "cferrera", position: "DEI" },
  { id: 8, lastName: "Frances", firstName: "Rossini", username: "frossini", position: "DEI" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", username: "rharvey", position: "DEII"},
];

const Masterlist: React.FC = () => {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ flex: 0, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
};

export default Masterlist;
