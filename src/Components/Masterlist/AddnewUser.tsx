// import React, { useState } from "react";
// import { addUser } from "../../Redux/State/userState";
// import { useDispatch, useSelector } from "react-redux";
// import { userList } from "../data";



// const AddnewUser: React.FC = () => {

//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const dispatch = useDispatch();
//     const adduser = useSelector((state) => state.addusers)
//     // const users = useSelector((state: RootState) => state.userReducer.users) as User[];

//     const handleSubmit = (event: any) =>{
//         event.preventDefault();
//         dispatch(addUser({id: adduser[adduser.length-1].id + 1, name,email}))
//     }

//     React.useEffect
//     return (
//         <>
//             <div className="flex justify-center items-center bg-slate-400 m-10">
                
//                 <form action="" className="m-2 flex-col justify-center items-center" onSubmit={handleSubmit}>
//                 <h1 className="flex justify-center items-center text-black font-bold">Add New User</h1>
//                     <label className="form-control w-full max-w-xs">
//                         <div className="label">
//                             <span className="label-text text-black font-bold">Full Name</span>
//                         </div>
//                         <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={name} onChange={e => setName(e.target.value)} />
//                         <div className="label">

//                         </div>
//                     </label>
//                     <label className="form-control w-full ">
//                         <div className="label">
//                             <span className="label-text text-black font-bold">Email</span>
//                         </div>
//                         <input type="text" placeholder="Type here" name="email" className="input input-bordered w-full max-w-xs" value={email} onChange={e => setEmail(e.target.value)}/>
//                         <div className="label">

//                         </div>
//                     </label>
//                     <button className="flex justify-center items-center mb-10 rounded-lg bg-blue-100 text-black p-2"> submit</button>

//                 </form>
//             </div>
//         </>
//     );
// }
// export default AddnewUser;