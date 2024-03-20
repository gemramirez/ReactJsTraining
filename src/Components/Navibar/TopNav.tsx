import { MdAccountCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Saga/sessionSaga";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";

const TopNav: React.FC = () => {
  const dispatch = useDispatch();
  // Handle logout when the button is clicked

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
  };

  return (
    <>
      <div className="navbar bg-base-100 flex justify-center items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>User</a>
              </li>
              <li>
                <a>Project</a>
              </li>
              <li>
                <a>Role</a>
              </li>
              <li>
                <a>Others</a>
                <ul className="p-2">
                  <li>
                    <a>Development Phase</a>
                  </li>
                  <li>
                    <a>Project Status</a>
                  </li>
                  <li>
                    <a>Employee Status</a>
                  </li>
                  <li>
                    <a>Employee Position</a>
                  </li>
                  <li>
                    <a>Business Unit</a>
                  </li>
                  <li>
                    <a>Departments</a>
                  </li>
                  <li>
                    <a>Technologies</a>
                  </li>
                  <li>
                    <a>Clients</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Control Center</a>
        </div>
        <div className="navbar-center hidden lg:flex sm:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>User</a>
            </li>
            <li>
              <a>Role</a>
            </li>
            <li>
              <details>
                <summary>Others</summary>
                <ul className="p-2 w-[200px] z-10">
                  <li>
                    <a>Development Phase</a>
                  </li>
                  <li>
                    <a>Project Status</a>
                  </li>
                  <li>
                    <a>Employee Status</a>
                  </li>
                  <li>
                    <a>Employee Position</a>
                  </li>
                  <li>
                    <a>Business Unit</a>
                  </li>
                  <li>
                    <a>Departments</a>
                  </li>
                  <li>
                    <a>Technologies</a>
                  </li>
                  <li>
                    <a>Clients</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end pr-[50px] z-10">
          <details>
            <summary>Profile</summary>
            <ul className="mt-5 rounded-md  p-2 absolute bg-blue-950 w-[100px]">
              <li> </li>
              <li className="flex justify-between items-center gap-1 text-center">
                <span>
                  <BsPersonCircle className=" mt-[4px] w-[21px] h-[21px]" />
                </span>
                <span>gramirez</span>
              </li>
              <li onClick={handleLogout} className="flex items-center ">
                <span>
                  <BiLogOutCircle className=" mt-[1px] w-[25px] h-[25px]"/>
                </span>
              <span className="m-1">Logout</span>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </>
  );
};

export default TopNav;

// import { MdAccountCircle } from "react-icons/md";
// import { logout } from "../../Redux/Saga/sessionSaga";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { useDispatch } from "react-redux";

// const TopNav: React.FC = () => {

//   const dispatch =useDispatch();

//   // Handle logout when the button is clicked

//   const handleLogout = () => {
//     // Dispatch the logout action
//     dispatch(logout());
//   };

//   return (
//     <>
//       <div className={TopNavStyle.mainContainer}>
//         <div className={TopNavStyle.contentContainer}>
//           <ul>
//             <li className={TopNavStyle.logo}>Logo</li>
//             <li className={TopNavStyle.nav}></li>
//             <span>
//               <MdAccountCircle className={TopNavStyle.icon} />
//             </span>
//             <li>gramirez</li>

//                  <button className={TopNavStyle.logout} onClick={handleLogout}>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TopNav;
