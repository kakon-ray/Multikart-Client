import Footer from "./component/Footer/Footer";
import Login from "./component/LoginRegistation/Login/Login";
import Registaion from "./component/LoginRegistation/Registation/Registation";
import Navbar from "./component/Navbar/Navbar";
import Delivery from "./component/Section/Service/Service";
import MetOurTem from "./component/Section/MetOurTem/MetOurTem";
import Slider from "./component/Slider/Slider";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Pages/Home/Home";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="registation" element={<Registaion></Registaion>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
