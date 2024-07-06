import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import image from "../../assets/image.svg";
import { patients } from "../../data";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Patients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(patients);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    setFilteredPatients(
      patients.filter((patient) =>
        patient.name.toLowerCase().includes(lowercasedQuery)
      )
    );
  }, [searchQuery]);

  return (
    <div>
      <div className={s.patientsAll}>
        <div className={s.beetwenHeader}>
          <div className={s.patientsBlock}>
            <h4>Пациенты</h4>
          </div>
          <div className={s.headerSearch}>
            <input
              type="text"
              placeholder="Поиск"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button>
              <CiSearch size={16} color="#fff" />
            </button>
          </div>
        </div>
        <div className={s.bigTable}>
          {filteredPatients.map((patient, i) => (
            <NavLink to={"./patients2"} key={i}>
              <div className={s.tableBlock}>
                <img src={image} alt="" />
                <li className={s.item1}>{patient.name}</li>
                <li className={s.item2}>{patient.button}</li>
                <li className={s.item3}>{patient.phone}</li>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
