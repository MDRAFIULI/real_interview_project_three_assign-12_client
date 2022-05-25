import logo from './logo.svg';
import './App.css';
import Nav from './page/shared/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home/Home';
import Purchase from './page/Purchase/Purchase';
import Register from './page/Register/Register';
import Login from './page/Login/Login';
import RequireAuth from './page/RequireAuth';
import Dashboard from './page/Dashboard/Dashboard';
import NotFound from './page/NotFound/NotFound';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
