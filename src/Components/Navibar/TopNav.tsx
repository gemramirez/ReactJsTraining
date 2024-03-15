import { ListItemIcon, MenuItem } from "@mui/material";
import TopNavStyle from "./TopNavStyle.module.css";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";

const TopNav: React.FC = () => {
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

              <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                  <ListItemIcon>
                    <Logout fontSize="medium" style={{ color: "red" }} />
                  </ListItemIcon>
                  Logout
              </Link>
             
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopNav;
