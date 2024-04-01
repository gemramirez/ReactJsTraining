import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "../../Redux/State/userState";
import { RootState } from "../../Redux/Store/Store";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaKey } from "react-icons/fa";

import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import DeleteModal from "../Alert/DeleteModal";
// import DeleteModal from "../Alert/DeleteModal";


interface User {
  fname: string;
  lname: string;
  position_sh_name: string;
  email: string;
  username: string;
  section_name: string;
  dept_name: string;
  reg_date: string;
  // Add more properties as needed
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const UserLists: React.FC = () => {
  const users = useSelector((state: RootState) => state.userReducer.users) as User[];
  const dispatch = useDispatch();

  const [delModal, setDelModal] = useState(false);
  const [showEmpId, setShowEmpId] = useState(null)




  React.useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  return (
    <>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <h1 className="p-9 text-2xl font-semibold z-10">USERLIST</h1>
          <Box sx={{ flexGrow: 1 }} className="flex justify-end">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
              ></IconButton>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Toolbar>
          </Box>
        </div>
        <div className="flex justify-between items-center ">

        <button className="px-4 py-3 rounded-2xl h-[50px] bg-[#EE820D] text-white flex items-center ">add new user</button>
        <span className="flex">
          <button className="px-4 py-3 rounded-2xl h-[30px] bg-[#EE820D] text-white  mr-2 flex items-center gap-1"><FaFilter />

  filter</button>
          <button className="px-4 py-3 rounded-2xl h-[30px] bg-[#EE820D] text-white mr-2  flex items-center gap-1"> <MdOutlineSort />
 sort</button></span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full mt-10">
            <thead className="text-amber-50 text-center">
              <tr>
                <th><input type="checkbox" className="checkbox checkbox-info" /></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Username</th>
                <th>Business Unit</th>
                <th>Department</th>
                <th>Created</th>
                <th>Project status</th>
                <th>Project status</th>
                <th>Project</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((user, index) => (
                <tr key={index}>
                  <td><input type="checkbox" className="checkbox checkbox-info" /></td>
                  <td><input type="text" id="fname" name="fname" className="w-28 bg-inherit text-center" defaultValue={user.fname}  /></td>
    <td><input type="text" className="w-28 bg-inherit text-center" defaultValue={user.lname}  /></td>
    <td><input type="text" className="w-28 bg-inherit text-center" defaultValue={user.position_sh_name}  /></td>
    <td><input type="text" className="w-28 bg-inherit text-center" defaultValue={user.email} /></td>
    <td><input type="text" className="w-28 bg-inherit text-center" defaultValue={user.username}  /></td>
    <td><input type="text" className="w-28 bg-inherit text-center" defaultValue={user.section_name}  /></td>
    <td><input type="text" className="w-28 bg-inherit text-center" defaultValue={user.dept_name} /></td>
    <td><input type="text" className="w-150 bg-inherit text-center" defaultValue={user.reg_date}  /></td>
                  <td >
                    <div className="bg-green-200 text-black rounded-xl mx-2">active</div>
                   </td> 
                   <td><div className="bg-gray-200 text-black rounded-xl w- px-2 mt-1">inactive</div>
                  </td>
                  <td className="w-28 bg-inherit text-center">null</td>
                  <td className="flex justify-between items-center mt-4">
                    <button><MdModeEdit className="w-6 h-6" /></button>
                    <button><MdDelete  className="w-6 h-6" onClick={()=>{setDelModal(prev=>!prev)} }/> </button>
                    <button><FaKey className="w-6 h-6" /></button>
                  </td>
                </tr>
              ))}

            </tbody>
           {delModal &&  <DeleteModal setDelModal={setDelModal}/>}
          </table>
        </div>
      </div>
    </>
  );
};

export default UserLists;


// import React from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { getUsersFetch } from "../../Redux/State/userState";
// import { RootState } from "../../Redux/Store/Store";
// import { MdModeEdit } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// import { FaKey } from "react-icons/fa";

// import { styled, alpha } from '@mui/material/styles';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
// import { Box } from "@mui/material";
// interface User {
//   fname: string;
//   lname: string;
//   position_sh_name: string;
//   email: string;
//   username: string;
//   section_name: string;
//   dept_name: string;
//   reg_date: string;
//   // Add more properties as needed
// }



// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   width: '100%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));



// ///
// const UserLists: React.FC = () => {
//   // as User[] para makuha yung mga objects inside interface User at para maging type yung mga data(fname) sa table data
//   const users = useSelector((state: RootState) => state.userReducer.users) as User[];
//   const dispatch = useDispatch();

//   React.useEffect(() => {
//     dispatch(getUsersFetch());
//   }, [dispatch]);

//   return (
//     <>
//       <div className="w-[100%]">
//         <div className="flex justify-center items-center">
//           <h1 className=" p-9 text-2xl font-semibold z-10"> USERLIST</h1>
//           <Box sx={{ flexGrow: 1 }}>
//             {/* <AppBar position="static"> */}
//             <Toolbar>
//               <IconButton
//                 size="large"
//                 edge="start"
//                 // color="inherit"
//                 aria-label="open drawer"
//               // sx={{ mr: 2 }}
//               ></IconButton>
//               <Search>
//                 <SearchIconWrapper>
//                   <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                   placeholder="Search…"
//                   inputProps={{ 'aria-label': 'search' }}
//                 />
//               </Search>
//             </Toolbar>
//             {/* </AppBar> */}
//           </Box>

//         </div>
//         <div className="flex justify-center items-center">
//           <span className="px-[70px] py-3 rounded-2xl bg-sky-100	text-black mr-2">filter</span>
//           <span className="px-[70px] py-3 rounded-2xl bg-sky-100	text-black mr-2">sort</span>
//         </div>
//         <div className="" >
//           <table className="table w-[700px]">
//             <thead className=" text-amber-50 text-center">
//               <tr>
//                 <th>
//                   <input
//                     type="checkbox"
//                     className="checkbox checkbox-info"
//                   />
//                 </th>
//                 <th> First Name </th>
//                 <th>Last Name </th>
//                 <th>Position </th>
//                 <th>Email </th>
//                 <th>Username </th>
//                 <th>Business Unit </th>
//                 <th>Department </th>
//                 <th>Created </th>
//                 <th>Project </th>
//                 <th>Project Status </th>
//                 <th>Action </th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {users.map((user, index) => (
//                 <tr key={index}>
//                   <td>
//                     <input
//                       type="checkbox"
//                       className=" checkbox checkbox-info"
//                     />
//                   </td>
//                   <td ><input type="text" id="fname" name="fname" className="bg-inherit text-center"
//                     value={user.fname} /></td>
//                   <td><input className="bg-inherit text-center"
//                     value={user.lname} /></td>
//                   <td><input className="bg-inherit text-center" value={user.position_sh_name} /></td>
//                   <td> <input className="bg-inherit text-center" value={user.email} /></td>
//                   <td><input className="bg-inherit text-center" value={user.username} /></td>
//                   <td><input className="bg-inherit text-center" value={user.section_name} /></td>
//                   <td><input className="bg-inherit text-center" value={user.dept_name} /></td>
//                   <td><input className="bg-inherit text-center" value={user.reg_date} /></td>
//                   <td className="bg-inherit text-center"><div className="bg-green-200	text-black rounded-xl">   active</div> <div className="bg-gray-200	text-black rounded-xl px-1 mt-1">inactive</div></td>
//                   <td className="bg-inherit text-center">null</td>

//                   <td className="flex justify-between mt-1">
//                     <button>
//                       <MdModeEdit className="w-[20px] h-[20px]" />
//                     </button>
//                     <button>
//                       <MdDelete className="w-[20px] h-[20px]" />
//                     </button>
//                     <button><FaKey className="w-[20px] h-[20px]" /></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserLists;



// {/* 
//         <div className="flex justify-center items-center m-9">
//       <button className="bg-white text-neutral-950 mr-2 " onClick={()=>{
//         dispatch(getAllUser()) 
//         dispatch(falseButton())
//         }} > show users </button>
//         { userListTrue &&  <button className="bg-red-400 text-neutral-950 ml-3">hide users</button>}
        
//         <button className="bg-white text-neutral-950 mr-2 " onClick={()=>dispatch(toggleButton())} > show </button>
//         { buttonsd &&  <button className="bg-red-400 text-neutral-950 ml-3">hide</button>}
//           </div>
//          */}