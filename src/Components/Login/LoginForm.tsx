import React from "react";
import LoginStyle from "./LoginStyle.module.css";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

// type Props = {};

const LoginForm: React.FC = () => {
  return (
    <>
      {" "}
      <div className={LoginStyle.mainContainer}>
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
              <Link to="/masterlist">
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </form>
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
