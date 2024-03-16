

// import React from "react";
// import TopNav from "../Navibar/TopNav";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

// // type Props = {};

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 90, disableColumnMenu: true },
//   {
//     field: "firstName",
//     headerName: "First name",
//     width: 150,
//     disableColumnMenu: true,
//     flex: 1, // Add flex property to distribute space evenly
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     width: 150,
//     disableColumnMenu: true,
//     flex: 1, // Add flex property to distribute space evenly
//   },
//   {
//     field: "username",
//     headerName: "Username",
//     width: 150,
//     disableColumnMenu: true,
//     flex: 1, // Add flex property to distribute space evenly
//   },
//   {
//     field: "position",
//     headerName: "Position",
//     width: 160,
//     disableColumnMenu: true,
//     flex: 1, // Add flex property to distribute space evenly
//     // valueGetter: (params: GridValueGetterParams) =>
//     //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
//   // {
//   //   field: "action",
//   //   headerName: "Action",
//   //   width: 160,
//   //   disableColumnMenu: true,
//   //   flex: 1, // Add flex property to distribute space evenly
//   //   // valueGetter: (params: GridValueGetterParams) =>
//   //   //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   // },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", username: "sjon", position: "TRA"},
//   { id: 2, lastName: "Lannister", firstName: "Cersei",username: "lcersei", position: "DEI"},
//   { id: 3, lastName: "Lannister", firstName: "Jaime", username: "ljaime", position: "DEII" },
//   { id: 4, lastName: "Stark", firstName: "Arya", username: "sarya",position: "TRA" },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", username: null, position: "TRA" },
//   { id: 6, lastName: "Melisandre", firstName: null, username: "m", position: "DEII"},
//   { id: 7, lastName: "Clifford", firstName: "Ferrara",username: "cferrera", position: "DEI" },
//   { id: 8, lastName: "Frances", firstName: "Rossini", username: "frossini", position: "DEI" },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", username: "rharvey", position: "DEII"},
// ];

// const Masterlist: React.FC = () => {
//   return (
//     <>
//       <TopNav />
//       <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
//         <div style={{ flex: 0, width: "100%" }}>
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSizeOptions={[5, 10]}
//             checkboxSelection
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Masterlist;


import TopNav from "../Navibar/TopNav";

const Masterlist: React.FC = () => {
  return (
    <>
      <TopNav />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>Crimson</td>
              <th>
                <button className="btn btn-ghost btn-xs">edi</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>Indigo</td>
              <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            {/* <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr> */}
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Masterlist;