import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './components/Auth/login'
import UserLayout from './layout/layout'
import Login from './pages/user/Login'
import Signup from './pages/user/signup'
import Home from './pages/user/Home'
import Btn from './components/btn'
import Forget from './pages/user/ForgetPassword/forgetpass'
import Otp from './pages/user/ForgetPassword/Otppage'
import NewPassword from './pages/user/ForgetPassword/newpassword';
import Success from './pages/user/ForgetPassword/success';
import Card from './components/card';
import Card1 from './components/card1';
import Header from './components/Header/header';
import Card2 from './pages/user/card2'


const  App=()=> {
  return (

<BrowserRouter>
<Routes >
  <Route path='/' element={<UserLayout/>}>
<Route path='/home' element={<Home/>}/>
</Route>

<Route path='/success' element={<Success/>}/>
<Route path='/newpassword' element={<NewPassword/>}/>
<Route path='/otp' element={<Otp/>}/>
<Route path='/forget' element={<Forget/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/btn' element={<Btn/>}/>
<Route path='/card' element={<Card/>}/>
<Route path='/card1' element={<Card1/>}/>
<Route path='/header' element={<Header/>}/>
<Route path='/card2' element={<Card2/>}/>


</Routes>
</BrowserRouter>   
 );
}

export default App;
