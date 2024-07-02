import React, { useState, useEffect } from "react";
import { outfitsTabels1 } from "../../data";
import DivBg from "../../components/Cards/DivBg/DivBg";
import { IoSearchOutline } from "react-icons/io5";
import OutfitsTabels from "../../components/Tables/OutfitsTabels/OutfitsTabels";
import { CiFilter } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import s from "./page.module.scss";
import { NavLink } from "react-router-dom";

const Outfits = () => {
  const [data, setData] = React.useState(outfitsTabels1);
  const [filterModal, setFilterModal] = useState(false);
  const [filterId, setFilterId] = useState(null);

  const filterList = [
    "В стоматологии",
    "На примерке",
    "Выставлен счет",
    "Оплачен",
    "Отложен",
    "Отменен",
  ];

  const handleFilter = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length >= 3) {
      const filteredData = outfitsTabels1.filter((el) =>
        el.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setData(filteredData);
    } else {
      setData(outfitsTabels1);
    }
  };

  const handleFilterId = () => {
    const filteredData = outfitsTabels1.filter((el) => el.status === filterId);

    setData(filteredData);
    setFilterModal(false);
  };
  const isHandlerFilter = () => {
    setData(outfitsTabels1);
    setFilterModal(false);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className={s.PriceList}>
      <DivBg>
        <div className={s.titel}>
          <h4>Наряды</h4>
          <NavLink to="/qutfits/create-an-outfit">
            <button
              style={{ background: "#017DC3", color: "#fff", border: "none" }}
            >
              Создать наряд <GoPlus />
            </button>
          </NavLink>
        </div>
      </DivBg>
      <div className={s.filter}>
        <DivBg>
          <div className={s.inputSearch}>
            <input
              onChange={(e) => handleFilter(e)}
              type="text"
              placeholder="Поиск наряда"
            />
            <button>
              <IoSearchOutline />
            </button>
          </div>
        </DivBg>
        <DivBg>
          <div
            onClick={() => setFilterModal(!filterModal)}
            className={s.inputFilter}
          >
            <p> Фильтрация</p>
            <button>
              <CiFilter />
            </button>
          </div>
        </DivBg>
      </div>
      <DivBg>
        <div style={{ paddingTop: "30px" }}>
          <OutfitsTabels data={data} />
        </div>
      </DivBg>
      {filterModal && (
        <div className={s.Modal}>
          <DivBg>
            <ul className={s.modalInfo}>
              {filterList.map((res, index) => (
                <li
                  key={index}
                  onClick={() => setFilterId(res)}
                  style={{
                    border:
                      filterId === res
                        ? "1px solid #017DC3"
                        : "1px solid #ECEEF1",
                  }}
                >
                  {res}
                </li>
              ))}

              <li
                onClick={() => handleFilterId()}
                style={{
                  background: "#017DC3",
                  border: "1px solid #017DC3",
                  color: "#fff",
                }}
              >
                Применить
              </li>

              <li
                onClick={() => isHandlerFilter()}
                style={{ border: "1px solid #017DC3", color: "#017DC3" }}
              >
                Отмена
              </li>
            </ul>
          </DivBg>
        </div>
      )}
    </div>
  );
};

export default Outfits;
