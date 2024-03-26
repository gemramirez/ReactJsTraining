

import React from "react";
import TopNav from "../Navibar/TopNav";
import { DataGrid, GridColDef, GridRowsProp, GridValueGetterParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/Store";
import { useNavigate } from "react-router-dom";
import { getUsersFetch } from "../../Redux/State/userState";

// type Props = {};
export interface RowData {
  emp_id: number;
  username: string;
  fname: string;
  lname: string;
  position_sh_name: string;
  email: string;
  section_name: string;
  dept_name: string;
  reg_date: Date;
}

interface UserTableProps {
  data: RowData[];
}


const columns: GridColDef[] = [
  {
    field: "fname",
    headerName: "First Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "lname",
    headerName: "Last Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "position_sh_name",
    headerName: "Position",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "dept_name",
    headerName: "Business Unit",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "section_name",
    headerName: "Department",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "reg_date",
    headerName: "Created",
    flex: 1,
    headerAlign: "center",
    align: "center",
    valueFormatter(params) {
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date(params.value));
    },
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    headerAlign: "center",
    width: 160,
    disableColumnMenu: true,    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

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

const Masterlist: React.FC <UserTableProps> = (props) => {
  const data = useSelector((state: RootState) => state.userReducer.users);
  const saved = useSelector((state: RootState) => state.userReducer.saved);

  const get = useSelector((state:RootState) => state.userReducer.users)
  const errorMessage = useSelector(
    (state: RootState) => state.userReducer.error
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [rows, setRows] = React.useState<GridRowsProp>(data);
  
  React.useEffect(() => { 
    dispatch(getUsersFetch());
  }, [dispatch]);
 
  
console.log(get)
  return (
    <>
      <div className=" flex flex-col h-[100vh] w-[1200px] bg-white" >
        <div>
          <DataGrid
            rows={data}
            getRowId={(row) => row.emp_id}
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




// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import {
//   GridRowsProp,
//   GridRowModesModel,
//   GridRowModes,
//   DataGrid,
//   GridColDef,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridEventListener,
//   GridRowId,
//   GridRowModel,
//   GridRowEditStopReasons,
// } from '@mui/x-data-grid';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomId,
//   randomArrayItem,
// } from '@mui/x-data-grid-generator';
// import TopNav from '../Navibar/TopNav';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../Redux/Store/Store';


// export interface RowData {
//   emp_id: number;
//   username: string;
//   fname: string;
//   lname: string;
//   position_sh_name: string;
//   email: string;
//   section_name: string;
//   dept_name: string;
//   reg_date: Date;
// }

// interface UserTableProps {
//   data: RowData[];
// }

// // const roles = ['Market', 'Finance', 'Development'];
// // const randomRole = () => {
// //   return randomArrayItem(roles);
// // };

// // const initialRows: GridRowsProp = [
// //   {
// //     id: randomId(),
// //     fname: randomTraderName(),
// //     lname: randomTraderName(),
// //     position_sh_name: randomRole(),
// //     email: 'example1@example.com',
// //     dept_name: 'Finance',
// //     section_name: 'Accounting',
// //     reg_date: randomCreatedDate(),
// //   },
// //   {
// //     id: randomId(),
// //     fname: randomTraderName(),
// //     lname: randomTraderName(),
// //     position_sh_name: randomRole(),
// //     email: 'example2@example.com',
// //     dept_name: 'Marketing',
// //     section_name: 'Advertising',
// //     reg_date: randomCreatedDate(),
// //   },
// //   {
// //     id: randomId(),
// //     fname: randomTraderName(),
// //     lname: randomTraderName(),
// //     position_sh_name: randomRole(),
// //     email: 'example3@example.com',
// //     dept_name: 'Development',
// //     section_name: 'Engineering',
// //     reg_date: randomCreatedDate(),
// //   },
// // ];

// interface EditToolbarProps {
//   setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
//   setRowModesModel: (
//     newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
//   ) => void;
// }

// function EditToolbar(props: EditToolbarProps) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = randomId();
//     setRows((oldRows) => [...oldRows, { id, fname: '', lname: '', position_sh_name: '', email: '', dept_name: '', section_name: '', reg_date: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'fname' },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// const Masterlist: React.FC <UserTableProps> =(props) => {

//   const data = useSelector((state: RootState) => state.userReducer.users);
//   const saved = useSelector((state: RootState) => state.userReducer.saved);
//   const errorMessage = useSelector(
//     (state: RootState) => state.userReducer.error
//   );
//   const [rows, setRows] = React.useState<GridRowsProp>(data);
//   const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

//   const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const handleEditClick = (id: GridRowId) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id: GridRowId) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = (id: GridRowId) => () => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id: GridRowId) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow!.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow: GridRowModel) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };

//   const columns: GridColDef[] = [
//     {
//       field: "username",
//       headerName: "Username",
//       flex: 0.5,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: 'name',
//       headerName: 'Name',
//       flex: 1,
//       headerAlign: 'center',
//       align: 'center',
//       valueGetter: (params) => `${params.row.fname} ${params.row.lname}`,
//     },
//     {
//       field: 'position',
//       headerName: 'Position',
//       flex: 0.5,
//       headerAlign: 'center',
//       align: 'center',
//       valueGetter: (params) => params.row.position_sh_name,
//     },
//     {
//       field: 'email',
//       headerName: 'Email',
//       flex: 1,
//       headerAlign: 'center',
//       align: 'center',
//       valueGetter: (params) => params.row.email,
//     },
//     {
//       field: 'businessUnit',
//       headerName: 'Business Unit',
//       flex: 1,
//       headerAlign: 'center',
//       align: 'center',
//       valueGetter: (params) => params.row.dept_name,
//     },
//     {
//       field: 'department',
//       headerName: 'Department',
//       flex: 1,
//       headerAlign: 'center',
//       align: 'center',
//       valueGetter: (params) => params.row.section_name,
//     },
//     {
//       field: 'created',
//       headerName: 'Created',
//       flex: 1,
//       headerAlign: 'center',
//       align: 'center',
//       valueGetter: (params) => new Date(params.row.reg_date).toLocaleString(),
//     },
//     {
//       field: 'actions',
//       type: 'actions',
//       headerName: 'Actions',
//       width: 100,
//       cellClassName: 'actions',
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               sx={{
//                 color: 'primary.main',
//               }}
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [        <GridActionsCellItem
//           icon={<EditIcon />}
//           label="Edit"
//           className="textPrimary"
//           onClick={handleEditClick(id)}
//           color="inherit"
//         />,
//         <GridActionsCellItem
//           icon={<DeleteIcon />}
//           label="Delete"
//           onClick={handleDeleteClick(id)}
//           color="inherit"
//         />,
//       ];
//     },
//   },
// ];

// console.log(data)

// return (
//   <>
//     <TopNav/>
//     <Box
//       sx={{
//         height: 500,
//         width: '100%',
//         '& .actions': {
//           color: 'text.secondary',
//         },
//         '& .textPrimary': {
//           color: 'text.primary',
//         },
//       }}
//     >
//       <DataGrid
     
//     //  disableRowSelectionOnClick
//     //  initialState={{
//     //    pagination: {
//     //      paginationModel: { page: 0, pageSize: 10 },
//     //    },
//       //  sorting: {
//       //    sortModel: [{ field: "reg_id", sort: "desc" }],
//       //  },
//     //  }}
//     rows={rows}
//     columns={columns}
//     editMode="row"
//     getRowId={(row) => row.emp_id}
//     rowModesModel={rowModesModel}
//     onRowModesModelChange={handleRowModesModelChange}
//     onRowEditStop={handleRowEditStop}
//     processRowUpdate={processRowUpdate}
//     slots={{
//       toolbar: EditToolbar,
//     }}
//     slotProps={{
//       toolbar: { setRows, setRowModesModel },
//     }}
//   />
  
//     </Box>
//   </>
// );
//       }
//       export default Masterlist




// // import TopNav from "../Navibar/TopNav";

// // const Masterlist: React.FC = () => {
// //   return (
// //     <>
// //       {/* <TopNav />

// //       <div className="overflow-x-auto">
// //         <table className="table">
// //           {head }
// //           <thead>
// //             <tr>
// //               <th>
// //                 <label>
// //                   <input type="checkbox" className="checkbox" />
// //                 </label>
// //               </th>
// //               <th>Name</th>
// //               <th>Job</th>
// //               <th>Favorite Color</th>
// //               <th></th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             row 1
// //             <tr>
// //               <th>
// //                 <label>
// //                   <input type="checkbox" className="checkbox" />
// //                 </label>
// //               </th>
// //               <td>
// //                 <div className="flex items-center gap-3">
// //                   <div className="avatar">
// //                     <div className="mask mask-squircle w-12 h-12">
// //                       <img
// //                         src="/tailwind-css-component-profile-2@56w.png"
// //                         alt="Avatar Tailwind CSS Component"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <div className="font-bold">Hart Hagerty</div>
// //                     <div className="text-sm opacity-50">United States</div>
// //                   </div>
// //                 </div>
// //               </td>
// //               <td>
// //                 Zemlak, Daniel and Leannon
// //                 <br />
// //                 <span className="badge badge-ghost badge-sm">
// //                   Desktop Support Technician
// //                 </span>
// //               </td>
// //               <td>Purple</td>
// //               <th>
// //                 <button className="btn btn-ghost btn-xs">details</button>
// //               </th>
// //             </tr>
// //             row 2
// //             <tr>
// //               <th>
// //                 <label>
// //                   <input type="checkbox" className="checkbox" />
// //                 </label>
// //               </th>
// //               <td>
// //                 <div className="flex items-center gap-3">
// //                   <div className="avatar">
// //                     <div className="mask mask-squircle w-12 h-12">
// //                       <img
// //                         src="/tailwind-css-component-profile-3@56w.png"
// //                         alt="Avatar Tailwind CSS Component"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <div className="font-bold">Brice Swyre</div>
// //                     <div className="text-sm opacity-50">China</div>
// //                   </div>
// //                 </div>
// //               </td>
// //               <td>
// //                 Carroll Group
// //                 <br />
// //                 <span className="badge badge-ghost badge-sm">
// //                   Tax Accountant
// //                 </span>
// //               </td>
// //               <td>Red</td>
// //               <th>
// //                 <button className="btn btn-ghost btn-xs">details</button>
// //               </th>
// //             </tr>
// //             row 3
// //             <tr>
// //               <th>
// //                 <label>
// //                   <input type="checkbox" className="checkbox" />
// //                 </label>
// //               </th>
// //               <td>
// //                 <div className="flex items-center gap-3">
// //                   <div className="avatar">
// //                     <div className="mask mask-squircle w-12 h-12">
// //                       <img
// //                         src="/tailwind-css-component-profile-4@56w.png"
// //                         alt="Avatar Tailwind CSS Component"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <div className="font-bold">Marjy Ferencz</div>
// //                     <div className="text-sm opacity-50">Russia</div>
// //                   </div>
// //                 </div>
// //               </td>
// //               <td>
// //                 Rowe-Schoen
// //                 <br />
// //                 <span className="badge badge-ghost badge-sm">
// //                   Office Assistant I
// //                 </span>
// //               </td>
// //               <td>Crimson</td>
// //               <th>
// //                 <button className="btn btn-ghost btn-xs">edi</button>
// //               </th>
// //             </tr>
// //             // {/* row 4 
// //             <tr>
// //               <th>
// //                 <label>
// //                   <input type="checkbox" className="checkbox" />
// //                 </label>
// //               </th>
// //               <td>
// //                 <div className="flex items-center gap-3">
// //                   <div className="avatar">
// //                     <div className="mask mask-squircle w-12 h-12">
// //                       <img
// //                         src="/tailwind-css-component-profile-5@56w.png"
// //                         alt="Avatar Tailwind CSS Component"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <div className="font-bold">Yancy Tear</div>
// //                     <div className="text-sm opacity-50">Brazil</div>
// //                   </div>
// //                 </div>
// //               </td>
// //               <td>
// //                 Wyman-Ledner
// //                 <br />
// //                 <span className="badge badge-ghost badge-sm">
// //                   Community Outreach Specialist
// //                 </span>
// //               </td>
// //               <td>Indigo</td>
// //               <th>
// //                 <button className="btn btn-ghost btn-xs">Edit</button>
// //               </th>
// //             </tr>
// //           </tbody>
// //           {/* foot *
// //           <tfoot>
// //           * <tr>
// //               <th></th>
// //               <th>Name</th>
// //               <th>Job</th>
// //               <th>Favorite Color</th>
// //               <th></th>
// //             </tr> 
// //           </tfoot>
// //         </table>
// //       </div> */}
// //     </>
// //   );
// // };

// // export default Masterlist;