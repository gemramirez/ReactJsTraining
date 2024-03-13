// import TopNavBar from "./Components/Navibar/TopNav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Masterlist from "./Components/Masterlist/Masterlist";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/masterlist" element={<Masterlist />} />
        </Routes>
      </Router>
    </div>
  );
};

//{

//   return (
//     <>
//     <div>

//       <LoginCard />
//       {/* <Counter /> */}
//     {/* <Listgroup/> */}
{
  /* <LoginForm/> */
}
//     </div>
//      </>
//   )
// }

export default App;
