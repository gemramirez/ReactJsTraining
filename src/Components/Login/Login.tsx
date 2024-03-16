// import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import TopNav from "../Navibar/TopNav";
// import Loginstyle from "./LoginStyle.module.css";

const Login: React.FC = () =>{
  return (
    <>
    <div className="">

      <LoginForm />

      {/* <button>
    <Link to="/"> Login</Link>
    </button> */}
    </div>
    </>
  );
}

export default Login;
