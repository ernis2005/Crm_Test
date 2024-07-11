import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import { services } from "../../../data";
import cm from "classnames";
import { CiSearch } from "react-icons/ci";
import image9 from "../../../assets/image9.svg";
const Test = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState(services);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setFilteredServices(
      services.filter((service) =>
        Object.values(service).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }, [searchTerm]);

  const handleRowClick = (service) => {
    setSelectedService(service);
  };

  return (
    <>
      <div>
        <div className={s.testAll}>
          <div className={s.testHead}>
            <div className={s.testFlex}>
              <h4>Наряды</h4>
              <button>Добавить сотрудника</button>
            </div>
            <div className={s.testCenter}>
              <input
                type="text"
                placeholder="Поиск"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>
                <CiSearch size={16} color="#fff" />
              </button>
            </div>
            <button className={s.button}>Отсканировать наряд</button>
          </div>
          <div className={s.testBlock}>
            <div className={s.tableContainer}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>№</th>
                    <th>ФИО</th>
                    <th>Дата прихода</th>
                    <th>Дата сдачи</th>
                    <th>Комментарий</th>
                    <th>Статус</th>
                    <th>Сумма работы</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((row, index) => (
                    <tr key={index} onClick={() => handleRowClick(row)}>
                      <td>{row.id}</td>
                      <td>{row.fio}</td>
                      <td>{row.arrivalDate}</td>
                      <td>{row.dueDate}</td>
                      <td>{row.comment}</td>
                      <td>
                        <span
                          className={cm(s.select, {
                            [s.selectActive1]: row.status === "В работе",
                            [s.selectActive2]: row.status === "В стоматологии",
                            [s.selectActive3]: row.status === "На примерке",
                            [s.selectActive4]: row.status === "Выставлен счет",
                            [s.selectActive5]: row.status === "Оплачен",
                            [s.selectActive6]: row.status === "Отложен",
                            [s.selectActive7]: row.status === "Отменен",
                            [s.selectActive8]: row.status === "Корректировка",
                          })}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td>{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {selectedService && (
        <div onClick={() => setSelectedService(false)} className={s.Objects}>
          <div className={s.gridColump}>
            <div className={s.background}>
              <img src={image9} alt="" />
            </div>
            <button>Просмотреть этапы</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Test;
