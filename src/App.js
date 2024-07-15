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
import { Notification, Search, User } from "./assets/svg/navPfofil";
import Patients2 from "./page/Patients/Patients2/Patients2";
import Test from "./page/TechnicianPages/Test/Test";
import Login from "./page/Login/LoginLaboratory/Login";
import image10 from "./assets/image10.svg";
import image11 from "./assets/image11.svg";
import LoginOpen from "./components/LoginAll/Laboratory/LoginOpen/LoginOpen";
import LoginForget from "./components/LoginAll/Laboratory/LoginForget/LoginForget";
import LoginRegistration from "./components/LoginAll/Laboratory/LoginRegistration/LoginRegistration";
import LoginClinic from "./components/LoginAll/Clinic/LoginClinic/LoginClinic";
import LoginClinicOpen from "./components/LoginAll/Clinic/LoginClinicOpen/LoginClinicOpen";
import LoginClinicPassword from "./components/LoginAll/Clinic/LoginClinicPassword/LoginClinicPassword";
import LoginTechnician from "./components/LoginAll/Technician/LoginTechnician";

function App() {
  const [isModal, setIsModal] = useState(true);
  const [status, setStatus] = useState(4);
  if (status === 4) {
    return (
      <div>
        <div className={s.backGround}>
          <div className={s.flexCenter}>
            <div className={s.image10All}>
              <img className={s.image10} src={image10} alt="" />
            </div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/open" element={<LoginOpen />} />
              <Route path="/forget" element={<LoginForget />} />
              <Route path="/laboratory" element={<LoginForget />} />
              <Route path="/password" element={<LoginRegistration />} />
              <Route path="/clinic" element={<LoginClinic />} />
              <Route path="/clinic/open" element={<LoginClinicOpen />} />
              <Route
                path="/clinic/password"
                element={<LoginClinicPassword />}
              />
              <Route path="/technician" element={<LoginTechnician />} />
            </Routes>
            <div className={s.image11}>
              <img src={image11} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={s.HomeNav}>
        <NavBar isModal={isModal} setIsModal={setIsModal} />
        <div>
          <div className={s.NavBarStyle}>
            <button
              className={s.NavBarStyleButton}
              onClick={() => setIsModal(!isModal)}
            >
              <RxHamburgerMenu />
            </button>
            <div className={s.Profil}>
              <div className={s.NavSearch}>
                <input type="text" placeholder="Поиск" />
                <Search />
              </div>
              <div className={s.Notification}>
                <Notification />
              </div>
              <div className={s.UserProfil}>
                <User />
                <p>Пользователь</p>
              </div>
            </div>
          </div>
          {status === 2 ? (
            <Routes>
              <Route path="/" element={<Test />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/price-list" element={<PriceList />} />
              <Route
                path="/price-list/create-a-price-list"
                element={<СreateAPriceList />}
              />
              <Route path="/qutfits" element={<Outfits />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/patients/createoutfit" element={<Patients />} />
              <Route path="/patients/patients2" element={<Patients2 />} />
              <Route
                path="/qutfits/create-an-outfit"
                element={<CreteAnOutfit />}
              />
            </Routes>
          )}
        </div>
      </div>
    );
  }
}

export default App;
