import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import NavBar from "./components/HavBar/NavBar";
import s from "./App.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import PriceList from "./page/PriceList/PriceList";
import СreateAPriceList from "./page/PriceList/СreateAPriceList/СreateAPriceList";
import { useState } from "react";
import Outfits from "./page/Outfits/Outfits";
import CreteAnOutfit from "./page/Outfits/create-an-outfit/create-an-outfit";
import Patients from "./page/Patients/Patients";
import Patients2 from "./page/Patients2/Patients2";

function App() {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className={s.HomeNav}>
      <NavBar isModal={isModal} setIsModal={setIsModal} />
      <div>
        <div className={s.NavBarStyle}>
          <button onClick={() => setIsModal(!isModal)}>
            <RxHamburgerMenu />  
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price-list" element={<PriceList />} />
          <Route
            path="/price-list/create-a-price-list"
            element={<СreateAPriceList />}
          />
          <Route path="/qutfits" element={<Outfits />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients2" element={<Patients2 />} />
          <Route path="/qutfits/create-an-outfit" element={<CreteAnOutfit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
