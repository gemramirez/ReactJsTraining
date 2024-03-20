import React, { useState } from "react";
import TopNav from "../Navibar/TopNav";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "../../Redux/State/userState";
import { RootState } from "../../Redux/Store/Store";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaKey } from "react-icons/fa";

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
const UserLists: React.FC = () => {
    // as User[] para makuha yung mga objects inside interface User at para maging type yung mga data(fname) sa table data
  const users = useSelector((state: RootState) => state.userReducer.users) as User[];
  const dispatch = useDispatch();
    // const [editRow, setEditRow] = useState();
  React.useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);


  console.log(users);
  return (
    <>
      <div className="">
      <h1 className=" p-9 text-2xl font-semibold z-10"> USERLIST</h1>

        <div className="w-[100%] h-[100%] " >
          <table className="table">
            <thead className=" text-amber-50 text-center	">
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
                <th>Action </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info"
                    />
                  </td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.position_sh_name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.section_name}</td>
                  <td>{user.dept_name}</td>
                  <td>{user.reg_date}</td>

                  <td className="flex justify-between mt-1">
                    <button>
                      <MdModeEdit className="w-[20px] h-[20px]" />
                    </button>
                    <button>
                      <MdDelete className="w-[20px] h-[20px]"/>
                    </button>
                    <button><FaKey className="w-[20px] h-[20px]" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserLists;
