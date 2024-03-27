import SideNav from "../Navibar/SideNav";
// import AddnewUSer from "./AddnewUser";
// import TopNav from "../Navibar/TopNav";
// import Masterlist from "./Masterlist";
// import UserTableProps from './Masterlist'; // Import UserTableProps type from its file
import UserLists from "./UserLists";

const UserListPage: React.FC =() =>{
    return(
        <>
           
           <div className="flex gap-4 ">   {/* <TopNav /> */}
            <SideNav/>
        {/* <DataGridProDemo/> */}
          
            
           <UserLists />


         

        {/*<div className="w-[1200px]">

        {/* <div className="mx-[310px] w-[1200px]"> 
            <Masterlist data={[]} />
        {/* </div> *
        </div> */}

       
        </div>
        {/* <AddnewUSer/> */}
        </>

    );
};

export default UserListPage;