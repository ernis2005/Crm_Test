
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import NavBar from './components/HavBar/NavBar'
import s from './App.module.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import PriceList from './page/PriceList/PriceList'
import СreateAPriceList from "./page/PriceList/СreateAPriceList/СreateAPriceList"
import { useState } from 'react';

function App() {
  const [isModal, setIsModal] = useState(false)
 
  return (
    <div className={s.HomeNav}>
    <NavBar isModal={isModal} setIsModal={setIsModal} />
    <div>
      <div className={s.NavBarStyle}>
        <button onClick={() => setIsModal(!isModal)}><RxHamburgerMenu /></button>

      </div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/price-list/create-a-price-list" element={<СreateAPriceList />} />
      </Routes>

    </div>
  </div>
  );
}

export default App;
