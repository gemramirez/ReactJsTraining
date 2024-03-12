import LoginCard from "./LoginForm";
import Loginstyle from "./LoginStyle.module.css"

function Login (){
    return(
        <div className={Loginstyle.mainContainer}>
    <LoginCard />
    </div>
    );
};

export default Login;