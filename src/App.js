import { useState } from "react";
import Footer from "./component/Footer/Footer";
import Login from "./component/LoginRegistation/Login/Login";
import Registaion from "./component/LoginRegistation/Registation/Registation";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import AddItem from "./component/AddItem/AddItem";
import Update from "./component/Update/Update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import MyItem from "./component/MyItem/MyItem";
import TopNavbar from "./component/TopNavbar/TopNavbar";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Home from "./Page/Home/Home";
import Shop from "./Page/Shop/Shop";
import ServicesPage from "./Page/Services/ServicesPage";
import Error from "./Page/Error/Error";
const App = () => {
  const [dark, setDark] = useState(null);

  const sendDataToParent = (showDriveAction) => {
    const darkValue = showDriveAction;
    setDark(darkValue);
  };

  // console.log(dark);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <TopNavbar sendDataToParent={sendDataToParent} />
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Update></Update>
            </RequireAuth>
          }
        />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="services" element={<ServicesPage></ServicesPage>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="registation" element={<Registaion></Registaion>} />

        <Route
          path="myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        />
        <Route
          path="add"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        />
        {/* Start Dashboard */}
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyItem></MyItem>}></Route>
        </Route>
        {/* End dashboard */}

        <Route path="*" element={<Error></Error>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
