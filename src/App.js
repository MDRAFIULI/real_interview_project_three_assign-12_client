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
import MyOrder from './page/Dashboard/MyOrder/MyOrder';
import AddReview from './page/Dashboard/AddReview/AddReview';
import MyProfile from './page/Dashboard/MyProfile/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyPortfolio from './page/MyPortfolio/MyPortfolio';
import MakeAdmin from './page/Dashboard/MakeAdmin/MakeAdmin';
import RequireAdmin from './page/RequireAdmin/RequireAdmin';

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
