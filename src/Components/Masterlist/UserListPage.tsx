import TopNav from "../Navibar/TopNav";
import Masterlist from "./Masterlist";
import UserTableProps from './Masterlist'; // Import UserTableProps type from its file


const UserListPage: React.FC =() =>{
    return(
        <>
              <TopNav />
        <div className="w-[1200px]">

        <div className="mx-[310px] w-[1200px]">
            <Masterlist data={[]} />
        </div>
        </div>
        </>

    );
};

export default UserListPage;