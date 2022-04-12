import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={

          <Shop></Shop>

        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/shipment' element={
        <RequireAuth>
          <Shipment></Shipment>
        </RequireAuth>
        }></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>


    </div>
  );
}

export default App;
