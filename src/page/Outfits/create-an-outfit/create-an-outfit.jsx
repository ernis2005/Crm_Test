import React, { useState } from "react";
import s from "./page.module.scss";
import DivBg from "../../../components/Cards/DivBg/DivBg";
import {
  addDays,
  isWeekend,
  isSameMonth,
  setMonth,
  startOfMonth,
} from "date-fns";
import { CiDocumentation } from "../../../assets/svg/сreteAnOutfit";
const CreteAnOutfit = () => {
  const [selectedDate, setSelectedDate] = useState(startOfMonth(new Date()));

  const filterWeekends = (date) => {
    return !isWeekend(date) && isSameMonth(date, setMonth(new Date(), 9)); // 9 - October
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className={s.page}>
      <DivBg>
        <div className={s.titel}>
          <h3>Наряд № 2</h3>
          <CiDocumentation />
        </div>
        <div className={s.from}>
          <div className={s.from1}>
            <label name="" id="">
              <p>
                ФИО пациента<span>*</span>{" "}
              </p>
              <input type="text" placeholder="Введите ФИО пациента" />
            </label>
            <label name="" id="">
              <p>
                Дата рождения <span>*</span>{" "}
              </p>
              <input type="date" />
            </label>
            <label name="" id="">
              <p>Дата сдачи </p>
              <input type="date" />
            </label>
            <label name="" id="">
              <p>
                Клиника (откуда пришла работа)<span>*</span>{" "}
              </p>
              <select name="" id="">
                <option value="1">ООО Клиника</option>
                <option value="2">2</option>
              </select>
            </label>
            <label name="" id="">
              <p>
                Врач <span>*</span>{" "}
              </p>
              <select name="" id="">
                <option value="1">Захаров Илья Николаевич</option>
                <option value="2">2</option>
              </select>
            </label>
            <label name="" id="">
              <p>Дата примерки </p>
              <input type="date" />
            </label>
          </div>

          <div className={s.from2}>
            <p>
              Выбрать прайс - лист <span>*</span>
            </p>
          </div>
        </div>
      </DivBg>
    </div>
  );
};

export default CreteAnOutfit;
