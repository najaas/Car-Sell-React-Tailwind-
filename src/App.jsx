import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./Router/UserRouter";
import AdminRouter  from "./Router/AdminRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path="/*"  element={<UserRouter/>}/>
      <Route  path="/*ar-Sell-React-Tailwind" element={<UserRouter/>}/>

      <Route path="/admin/*"  element={<AdminRouter/>}/>
      </Routes>
    </BrowserRouter>
  );
}; 

export default App;
