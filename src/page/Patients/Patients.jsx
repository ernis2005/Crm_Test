import React from "react";
import s from "./page.module.scss";
import image from "../../assets/image.svg";
import { patients } from "../../data";
import { CiSearch } from "react-icons/ci";
const Patients = () => {
  return (
    <div>
      <div className={s.patientsAll}>
        <div className={s.beetwenHeader}>
          <div className={s.patientsBlock}>
            <h4>Пациенты</h4>
          </div>
          <div className={s.headerSearch}>
            <input type="text" placeholder="Поиск" />
            <button>
              <CiSearch size={16} color="#fff" />
            </button>
          </div>
        </div>
        <div className={s.bigTable}>
          {patients.map((_, i) => (
            <div key={i} className={s.tableBlock}>
              <img src={image} alt="" />
              <li className={s.item1}>{_.name}</li>
              <li className={s.item2}>{_.button}</li>
              <li className={s.item3}>{_.phone}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
