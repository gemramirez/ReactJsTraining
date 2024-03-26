import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "../../Redux/State/userState";
import { RootState } from "../../Redux/Store/Store";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaKey } from "react-icons/fa";

import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
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



///
const UserLists: React.FC = () => {
  // as User[] para makuha yung mga objects inside interface User at para maging type yung mga data(fname) sa table data
  const users = useSelector((state: RootState) => state.userReducer.users) as User[];
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  return (
    <>
      <div className="w-[2000px]">
        <div className="flex justify-center items-center">
          <h1 className=" p-9 text-2xl font-semibold z-10"> USERLIST</h1>
          <Box sx={{ flexGrow: 1 }}>
            {/* <AppBar position="static"> */}
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                // color="inherit"
                aria-label="open drawer"
              // sx={{ mr: 2 }}
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
            {/* </AppBar> */}
          </Box>

        </div>
        <div className="flex">
          <span className="px-[70px] py-3 rounded-2xl bg-sky-100	text-black mr-2">filter</span>
          <span className="px-[70px] py-3 rounded-2xl bg-sky-100	text-black mr-2">sort</span>
        </div>
        <div className="w-[1500px] h-[1000px]" >
          <div className="table">
            <thead className=" text-amber-50 text-center">
              <tr>
                <th>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-info"
                  />
                </th>
                <th> First Name </th>
                <th>Last Name </th>
                <th>Position </th>
                <th>Email </th>
                <th>Username </th>
                <th>Business Unit </th>
                <th>Department </th>
                <th>Created </th>
                <th>Project </th>
                <th>Project Status </th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      className=" checkbox checkbox-info"
                    />
                  </td>
                  <td ><input type="text" id="fname" name="fname" className="bg-inherit text-center"
                    value={user.fname} /></td>
                  <td><input className="bg-inherit text-center"
                    value={user.lname} /></td>
                  <td><input className="bg-inherit text-center" value={user.position_sh_name} /></td>
                  <td> <input className="bg-inherit text-center" value={user.email} /></td>
                  <td><input className="bg-inherit text-center" value={user.username} /></td>
                  <td><input className="bg-inherit text-center" value={user.section_name} /></td>
                  <td><input className="bg-inherit text-center" value={user.dept_name} /></td>
                  <td><input className="bg-inherit text-center" value={user.reg_date} /></td>
                  <td className="bg-inherit text-center"><div className="bg-green-200	text-black rounded-xl">   active</div> <div className="bg-gray-200	text-black rounded-xl px-1 mt-1">inactive</div></td>
                  <td className="bg-inherit text-center">null</td>

                  <td className="flex justify-between mt-1">
                    <button>
                      <MdModeEdit className="w-[20px] h-[20px]" />
                    </button>
                    <button>
                      <MdDelete className="w-[20px] h-[20px]" />
                    </button>
                    <button><FaKey className="w-[20px] h-[20px]" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLists;



{/* 
        <div className="flex justify-center items-center m-9">
      <button className="bg-white text-neutral-950 mr-2 " onClick={()=>{
        dispatch(getAllUser()) 
        dispatch(falseButton())
        }} > show users </button>
        { userListTrue &&  <button className="bg-red-400 text-neutral-950 ml-3">hide users</button>}
        
        <button className="bg-white text-neutral-950 mr-2 " onClick={()=>dispatch(toggleButton())} > show </button>
        { buttonsd &&  <button className="bg-red-400 text-neutral-950 ml-3">hide</button>}
          </div>
         */}