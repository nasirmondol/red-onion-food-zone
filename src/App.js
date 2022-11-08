import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breakfast from './Pages/Breakfast/Breakfast';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import About from './Pages/About/About';
import Lunch from './Pages/Lunch/Lunch';
import Dinner from './Pages/Dinner/Dinner';
import Footer from './Pages/Shared/Footer/Footer';
import BreakfastDetails from './Pages/Details/BreakfastDetails/BreakfastDetails';
import LunchDetails from './Pages/Details/LunchDetails/LunchDetails';
import DinnerDetails from './Pages/Details/DinnerDetails/DinnerDetails';

function App() {
  return (
    <div className='App'>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/breakfast' element={<Breakfast/>}></Route>
      <Route path='/lunch' element={<Lunch></Lunch>}></Route>
      <Route path='/dinner' element={<Dinner></Dinner>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/breakfast/:breakfastId' element={<BreakfastDetails/>}></Route>
      <Route path='/lunch/:lunchId' element={<LunchDetails></LunchDetails>}></Route>
      <Route path='/dinner/:dinnerId' element={<DinnerDetails/>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
