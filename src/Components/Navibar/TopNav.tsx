import TopNavStyle from "./TopNavStyle.module.css";
import { MdAccountCircle } from "react-icons/md";
import { logout } from "../../Redux/Saga/sessionSaga";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";

const TopNav: React.FC = () => {

  const dispatch =useDispatch();
  
  // Handle logout when the button is clicked

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
  };

  
  return (
    <>
      <div className={TopNavStyle.mainContainer}>
        <div className={TopNavStyle.contentContainer}>
          <ul>
            <li className={TopNavStyle.logo}>Logo</li>
            <li className={TopNavStyle.nav}>Logout</li>
            <span>
              <MdAccountCircle className={TopNavStyle.icon} />
            </span>
            <li>gramirez</li>

                 <button className={TopNavStyle.logout} onClick={handleLogout}>
                      <div className={TopNavStyle.logoutSpanContainer}>
                        <span className={TopNavStyle.logoutIcon}>
                          <LogoutIcon />
                        </span>
                        <span className={TopNavStyle.logoutText}>Log out</span>
                      </div>
                    </button>
             
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopNav;
