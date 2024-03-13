import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Loginstyle from "./LoginStyle.module.css";

const Login: React.FC = () =>{
  return (
    <>
    <div className={Loginstyle.mainContainer}>
      <LoginForm />

      {/* <button>
    <Link to="/"> Login</Link>
    </button> */}
    </div>
    </>
  );
}

export default Login;
