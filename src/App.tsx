// import TopNavBar from "./Components/Navibar/TopNav"
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";
// import Masterlist from "./Components/Masterlist/Masterlist";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { RootState } from "./Redux/Store/Store";
import { apiLogin } from "./Redux/Saga/sessionSaga";
import { setAuthenticationStatus, setUser } from "./Redux/State/sessionState";
import UserListPage from "./Components/Masterlist/UserListPage";
import DeleteModal from "./Components/Alert/DeleteModal";
// import AddnewUser from "./Components/Masterlist/AddnewUser";


const App: React.FC = () => {






  const isAuthenticated = useSelector((state: RootState) => state.sessionReducer.isAuthenticated);
  console.log("isAuthenticated", isAuthenticated);
  const cookies = new Cookies();
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  useEffect(() => {
    // Check if the user is authenticated in localStorage
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'false';

    if (isAuthenticated) {
      // If the user is authenticated, call the login API to get user info
      const username = cookies.get('username'); // Retrieve the username from localStorage
      const password = cookies.get('password'); // Replace with the actual way you retrieve the password or token

      if (isAuthenticated && username && password) {
        apiLogin(username, password)
          .then((userData) => {
            if (userData) {
              // Dispatch an action to update the user state
              dispatch(setUser(userData)); // You should define the setUser action
              // Dispatch an action to update the authentication status
              dispatch(setAuthenticationStatus(true)); // You should define the setAuthenticationStatus action

            }
          })
          .catch((error) => {
            console.error('Error while checking authentication:', error);
          });
      }
    }
  }, [cookies, dispatch]);

  // console.log(username, password, is)

  return (

    <div>

      {/* <DeleteModal/> */}
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Navigate to="/userlistpage" />} />
              <Route path="/userlistpage/*" element={<UserListPage />} />

            </>
          ) : (
            <>
              <Route index element={<Login />} />
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
          <Route path="/deletemodal" element={<DeleteModal />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;