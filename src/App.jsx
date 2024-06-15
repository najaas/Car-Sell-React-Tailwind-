import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './components/Auth/login'
import UserLayout from './layout/layout'
import Login from './pages/user/Login'
import Signup from './pages/user/signup'
import Home from './pages/user/home'
import Btn from './components/btn'
import Forget from './pages/user/forgetpass'
const  App=()=> {
  return (

<BrowserRouter>
<Routes >
  <Route path='/' element={<UserLayout/>}>
<Route path='/home' element={<Home/>}/>
</Route>
<Route path='/forget' element={<Forget/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/btn' element={<Btn/>}/>


</Routes>
</BrowserRouter>   
 );
}

export default App;
