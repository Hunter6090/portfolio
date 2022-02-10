import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import GMapComponent from './pages/GMap';
import Products from './pages/Products/Products';
import logo from './logo.svg';
import SideBar from './layout/sideBar/SideBar';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar/>
        <Routes>
          <Route path='/' exactly element={<Home/>} />
          <Route path='gmap' exactly element={<GMapComponent/>} />
          <Route path='products' exactly element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
