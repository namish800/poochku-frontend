import './App.css';
import Homepage from './Components/Pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pups from './Components/Pages/Pups';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adopt from './Components/Pages/Adopt';
import Mating from './Components/Pages/Mating';
import AddDog from './Components/Pages/AddDog';
import Seller from './Components/Pages/Seller';
import ViewDog from './Components/Pages/ViewDog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />}/>
          <Route path='viewDog' element={<ViewDog/>}/>
          <Route exact path='/browse' element={<Pups/>}/>
          <Route exact path='/adopt' element={<Adopt/>}/>
          <Route exact path='/mating' element={<Mating/>}/>
          <Route exact path='/newDog' element={<AddDog/>}/>
          <Route exact path='/seller' element={<Seller/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
