import TopNavStyle from "./TopNavStyle.module.css";
import { MdAccountCircle } from "react-icons/md";

const TopNav: React.FC = () => {
  return (
    <>
      <div className={TopNavStyle.mainContainer}>
        <div className={TopNavStyle.contentContainer}>
          <ul>
            <li className={TopNavStyle.logo}>Logo</li>
            <li className={TopNavStyle.nav}></li>
            <span>
              <MdAccountCircle className={TopNavStyle.icon} />
            </span>
            <li>gramirez</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopNav;
