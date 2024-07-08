import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Home from "./pages/user/Home";
import Btn from "./components/Btn";
import Forget from "./pages/user/ForgetPassword/Forgetpass";
import Otp from "./pages/user/ForgetPassword/Otppage";
import NewPassword from "./pages/user/ForgetPassword/Newpassword";
import Success from "./pages/user/ForgetPassword/Success";
import Card from "./components/Card";
import Card1 from "./components/Card1";
import Header from "./components/Header/Head";
import Card2 from "./pages/user/Card2";
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
