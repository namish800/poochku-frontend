import './App.css';
import React from 'react'
import Homepage from './Components/Pages/Homepage'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Pups from './Components/Pages/Pups';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adopt from './Components/Pages/Adopt';
import Mating from './Components/Pages/Mating/Mating';
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
import EditDog from './Components/Pages/EditDog';
import SellerRegister from './Components/Pages/SellerRegister';
import SellerView from './Components/Pages/SellerView';
import Otp from './Components/Pages/Otp';
import Vets from './Components/Pages/Vets';
import Doctor from './Components/Pages/Doctor';
import * as analytics from './ga4/ga4'
import { AuthProvider } from './Components/Auth/AuthContext';
import PrivateRoute from './Components/Auth/PrivateRoute';

function App() {
  // useAnalytics()

  const location = useLocation()

  React.useEffect(() => {
    analytics.init()
  }, [])

  React.useEffect(() => {
    const path = location.pathname + location.search
    analytics.sendPageview(path)
  }, [location])


  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />}/>
          <Route exact path='/browse' element={<Pups/>}/>
          <Route exact path='/adopt' element={<Adopt/>}/>
          {/* <Route exact path='/newDog' element={<AddDog/>}/> */}
          {/* <Route exact path='/newDog/adoption' element={<AddDog/>}/>
          <Route exact path='/newDog/mydog' element={<AddDog/>}/> */}
          <Route exact path='/sellerdashboard' element={<Seller/>}/>
          <Route exact path='/shop' element={<Shop/>}/>
          <Route exact path="/useraccount" element={<UserAccount/>}/>
          <Route exact path="/auth" element={<Login/>} />
          {/* <Route exact path="/auth" element={<Otp/>} /> */}
          <Route exact path="/signup" element={<Login/>} />
          <Route exact path='sellerdashboard/billing' element={<Billing/>} />
          <Route exact path="/pricing" element={<Plans/>} />
          <Route exact path='/sellerprofile' element={<SellerProfile/>} />
          <Route exact path='/sellerregister' element={<SellerRegister/>} />
          <Route exact path='/sellerview/:id' element={<SellerView/>} />
          <Route exact path='/otp' element={<Otp/>} />
          <Route exact path='/vets' element={<Vets/>}/>
          <Route exact path='/doctor/:id' element={<Doctor />} />
          <Route exact path='/viewDog/:id' element={<ViewDog/>}/>



          {/* Private Routes */}
          <Route exact path='/mating' element={<PrivateRoute/>}>
            <Route exact path='/mating' element={<Mating/>}/>
          </Route>
          {/* <Route exact path='/viewDog/:id' element={<PrivateRoute/>}>
            <Route exact path='/viewDog/:id' element={<ViewDog/>}/>
          </Route> */}
          <Route path='/newDog/:type' element={<PrivateRoute/>}>
            <Route  path='/newDog/:type' element={<AddDog/>}/>
          </Route>
          <Route path='/editdog/:service/:id' element={<PrivateRoute/>}>
            <Route exact path ='/editdog/:service/:id' element={<EditDog />} />
          </Route>

          {/* Add a catch-all route for 404 */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
    </div>
  );
}

function NoMatch() {
  const location = useLocation();

  React.useEffect(() => {
    // Track 404 errors
    analytics.sendPageview(location.pathname + location.search);
  }, [location]);

  return (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  );
}

export default App;
