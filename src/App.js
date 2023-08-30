import './App.css';
import Homepage from './Components/Pages/Homepage'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Pups from './Components/Pages/Pups';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adopt from './Components/Pages/Adopt';
import Mating from './Components/Pages/Mating';
import AddDog from './Components/Pages/AddDog';
import Seller from './Components/Pages/Seller';
import ViewDog from './Components/Pages/ViewDog';
import UserAccount from './Components/Pages/UserAccount';
import Shop from './Components/Pages/Shop';
import Login  from './Components/Pages/Login';
import Signup from './Components/Pages/Login/Signup';
import Billing from './Components/Pages/Billing';
import Plans from './Components/Pages/Plans';
import SellerProfile from './Components/Pages/SellerProfile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />}/>
          <Route exact path='/viewDog/:id' element={<ViewDog/>}/>
          <Route exact path='/browse' element={<Pups/>}/>
          <Route exact path='/adopt' element={<Adopt/>}/>
          <Route exact path='/mating' element={<Mating/>}/>
          <Route exact path='/newDog/:type' element={<AddDog/>}/>
          {/* <Route exact path='/newDog' element={<AddDog/>}/> */}
          {/* <Route exact path='/newDog/adoption' element={<AddDog/>}/>
          <Route exact path='/newDog/mydog' element={<AddDog/>}/> */}
          <Route exact path='/sellerdashboard' element={<Seller/>}/>
          <Route exact path='/shop' element={<Shop/>}/>
          <Route exact path="/useraccount" element={<UserAccount/>}/>
          <Route exact path="/auth" element={<Login/>} />
          <Route exact path="/signup" element={<Login/>} />
          <Route exact path='/billing' element={<Billing/>} />
          <Route exact path="/pricing" element={<Plans/>} />
          <Route exact path='/sellerprofile' element={<SellerProfile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
