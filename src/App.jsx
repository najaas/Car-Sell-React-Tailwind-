import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./Router/UserRouter";
import AdminRouter  from "./Router/AdminRouter";
import Home from "../src/Pages/user/Home";

const App = () => {
  return (
      <Routes>
      <Route  path="/*"  element={<UserRouter/>}/>
    
      <Route  path="/*ar-Sell-React-Tailwind" element={<UserRouter/>}/>

      <Route path="/admin/*"  element={<AdminRouter/>}/>
      </Routes>
    
  );
}; 

export default App;
