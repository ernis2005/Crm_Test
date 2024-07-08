import React, { useState } from "react";
import s from "./page.module.scss";
import DivBg from "../../../components/Cards/DivBg/DivBg";
import cm from "classnames";
import {
  addDays,
  isWeekend,
  isSameMonth,
  setMonth,
  startOfMonth,
} from "date-fns";
import { ArrowDown, CiDocumentation } from "../../../assets/svg/сreteAnOutfit";
import PriceList from "../../../components/Outfits/Accordion/PriceList/PriceList";

const CreteAnOutfit = () => {
  const [selectedDate, setSelectedDate] = useState(startOfMonth(new Date()));

  const [isPriceListAccordion, setIsPriceListAccordion] = useState(false);
  const [priceListValue, setPriceListValue] = useState("Выберите прайс - лист");
  const filterWeekends = (date) => {
    return !isWeekend(date) && isSameMonth(date, setMonth(new Date(), 9)); // 9 - October
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [teethColorIndex, setTeethColorIndex] = useState(2222222);
  const teethColorList = [
    {
      id: 1,
      name: "A1",
    },
    {
      id: 2,
      name: "A2",
    },
    {
      id: 3,
      name: "A3",
    },
    {
      id: 4,
      name: "A3.5",
    },
    {
      id: 5,
      name: "A4",
    },
    {
      id: 6,
      name: "C1",
    },
    {
      id: 7,
      name: "C2",
    },
    {
      id: 8,
      name: "C3",
    },
    {
      id: 9,
      name: "C4",
    },
    {
      id: 10,
      name: "B1",
    },

    {
      id: 11,
      name: "B2",
    },
    {
      id: 12,
      name: "B3",
    },
    {
      id: 13,
      name: "B4",
    },

    {
      id: 14,
      name: "D2",
    },
    {
      id: 15,
      name: "D3",
    },
    {
      id: 16,
      name: "D4",
    },
  ];
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
            <div
              className={s.from2Accordion}
              onClick={() => setIsPriceListAccordion(!isPriceListAccordion)}
            >
              <p>{priceListValue}</p>
              <ArrowDown />
            </div>
            {isPriceListAccordion && (
              <PriceList setPriceListValue={setPriceListValue} />
            )}
          </div>
          <div className={s.from3}>
            <p>Цвета для обозначения</p>
            <hr />
            <div>
              {teethColorList.map((res, index) => (
                <button
                  key={index}
                  className={
                    teethColorIndex === res.id ? s.activeTeethColorIndex : ""
                  }
                  onClick={() => setTeethColorIndex(res.id)}
                >
                  {res.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DivBg>
    </div>
  );
};

export default CreteAnOutfit;
