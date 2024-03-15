import React, {useState} from "react";
// import LoginStyle from "./LoginStyle.module.css";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
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
      <div className="h-[100vh] bg-white">
      <div className="	">
        <form className="" onSubmit={handleLogin}>
          <div style={{ padding: "50px" }}>
            <div>
              <h1 className="">Login</h1>
            </div>

            <div>
              <TextField
                className="bg-blue-300"
                // required
                id="outlined-required"
                label="Username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!isValid}
                InputProps={{
                    endAdornment: errorIcon,
                }}
              />
            </div>
            <div className="">
              <TextField
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
            <div className="">
              {/* <Link to="/masterlist"> */}
                <Button type="submit" variant="contained">
                  Login
                </Button>
              {/* </Link> */}
            </div>
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
