import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/user/Loginform";
import Signup from "./pages/user/Signupform";
import Home from "./pages/user/Homeform";
import Btn from "./components/Btnform";
import Forget from "./pages/user/ForgetPassword/Forgetpassform";
import Otp from "./pages/user/ForgetPassword/Otppageform";
import NewPassword from "./pages/user/ForgetPassword/Newpasswordform";
import Success from "./pages/user/ForgetPassword/Successform";
import Card from "./components/Cardform";
import Card1 from "./components/Card1form";
import Header from "./components/Header/Headerform";
import Card2 from "./pages/user/Card2form";
import Layout from "./Layoutform/Layoutform";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="/success" element={<Success />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/btn" element={<Btn />} />
        <Route path="/card" element={<Card />} />
        <Route path="/card1" element={<Card1 />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card2" element={<Card2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
