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
import DatePicker from "react-datepicker";
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
              <p>ФИО пациента*</p>
              <input type="text" placeholder="Введите ФИО пациента" />
            </label>
            <label name="" id="">
              <p>Дата рождения* </p>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                filterDate={filterWeekends}
                inline // Отображает календарь в развернутом виде
              />
            </label>
          </div>
        </div>
      </DivBg>
    </div>
  );
};

export default CreteAnOutfit;
