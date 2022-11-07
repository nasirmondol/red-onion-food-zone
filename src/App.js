import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breakfast from './Pages/Breakfast/Breakfast';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import About from './Pages/About/About';
import Details from './Pages/Details/Details';
import Lunch from './Pages/Lunch/Lunch';
import Dinner from './Pages/Dinner/Dinner';

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
      <Route path='/details' element={<Details></Details>}></Route>
     </Routes>
    </div>
  );
}

export default App;
