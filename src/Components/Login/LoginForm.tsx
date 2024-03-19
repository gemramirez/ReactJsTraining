import React, {useState} from "react";
// import LoginStyle from "./LoginStyle.module.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/Store";
import { login } from "../../Redux/Saga/sessionSaga";
import { clearError } from "../../Redux/State/userState";


// type Props = {};

const LoginForm: React.FC = () => {     
 
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorIcon, setErrorIcon] = useState<JSX.Element>();
  const [helperText, setHelperText] = useState("");

  const errorMessage = useSelector((state: RootState) => state.sessionReducer.error);
  const [error, setErrorMessage] = React.useState<string | undefined>("");


  const navigate = useNavigate();

  /* THIS LINE IS USED TO FETCHED THE LOGGED IN USER'S INFO */
  const loggedUser = useSelector((state: RootState) => {
    return state.sessionReducer.user;
});

/* THIS LINE IS USED TO FETCHED THE AUTHENTICATION STATUS */
const isAuthenticated = useSelector((state: RootState) => {
    return state.sessionReducer.isAuthenticated;
});

React.useEffect(() => {
    // Remove this entire useEffect block
}, []);

const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ username, password }));
    dispatch(clearError());
};

React.useEffect(() => {
    if (errorMessage === null) {
        setErrorMessage(undefined);
        dispatch(clearError());
        console.log("there's no error", error)
    } else {
        setErrorMessage(errorMessage);
        dispatch(clearError());
        console.log("may error ka!", error)
    }
}, [errorMessage, error, username, password, dispatch]);

  console.log(username,password,isAuthenticated)
  return (
    <>
      {" "}
      <div className="h-[100%] w-[100]">
      <div className="h-[100vh] w-[100%] flex justify-center">
      {/* <div className="h-[100%] bg-cover bg-center w-[100%]" style={{  backgroundImage: `url('Untitled design.png')`}}> */}
        <form className="mt-[120px] m-auto w-[500px] h-[500px] p-[50px] bg-white rounded-xl	shadow-inner"  onClick={handleLogin}>
            <div>
              <h1 className="flex justify-center pt-10 mb-10 text-5xl font-semibold">Login</h1>
            </div>
            <div className="mt-10 flex justify-center">
              <TextField
                className="flex justify-center mb-10"
                // required
                id="outlined-required"
                label="Username"
                // type="text"
                name="username"
                value={username}
                autoComplete="current-email"
                onChange={(e) => setUsername(e.target.value)}
                error={!isValid}
                InputProps={{
                    endAdornment: errorIcon,
                }}
              />
              </div>
       
              <div className="mt-4 flex justify-center">
              <TextField
              className=""
                id="outlined-password-input"
                label="Password"
                type="password"
                name="password"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                            error={!isValid}
                            InputProps={{
                                endAdornment: errorIcon,
                            }}
              />
            </div>
            <div className="mt-4 flex justify-center ">
              {/* <Link to="/masterlist"> */}
                <Button  type="submit" variant="contained">
                  Login
                </Button>
              {/* </Link> */}
              </div>
        </form>
      </div>
      </div>
      
    </>
  );
};

export default LoginForm;

// import React from "react";
// import TextField from '@mui/material/TextField';
// import Button from "@mui/material/Button";
// import LoginStyle from "./LoginStyle.module.css"
// import { Box } from "@mui/material";

// interface LoginState {
//   username: string;
//   password: string;
// }x

// const LoginForm: React.FC = () => {
//   //   const [loginState, setLoginState] = useState<LoginState>({
// //     username: '',
// //     password: '',
// //   });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setLoginState({ ...loginState, [name]: value });
// //   };

//   const handleSubmit = (e) => {
//     navigate to
//     // e.preventDefault();
//     // console.log('Login submitted with:', loginState);
//     //
//   };
//   return (
//  <>
/* <div className={LoginStyle.mainContainer}>
      <form className={LoginStyle.form}>
        <div style={{ padding: "50px" }}>
          <div>
            <h1 className={LoginStyle.header}>Login</h1>
          </div>

          <div className={LoginStyle.input}>
            <TextField
              // required
              id="outlined-required"
              label="Username"
              defaultValue=""
              
              
            />
          </div>
          <div className={LoginStyle.input}>
            <TextField
              
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div className={LoginStyle.input}>
            <Button type="submit" variant="contained">
              Login
            </Button>


          </div>
        </div>
      </form>
    </div>
//   </> */
// //   );
// // }

// export default LoginForm;
