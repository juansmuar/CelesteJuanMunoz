import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/Header/NavBar";

import Menu from './views/Menu/Menu';
import Home from './views/Home/Home';
import Cart from './views/Cart/Cart';
import ItemDetails from './views/ItemDetails/ItemDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/detail/:id' element={<ItemDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
