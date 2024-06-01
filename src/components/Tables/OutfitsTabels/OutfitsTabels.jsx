import React from "react";
import s from "./page.module.scss";
import cm from "classnames";
import { outfitsTabels } from "../../../data";

const OutfitsTabels = () => {

  return (
    <div className='div'>
      <table className={s.OutfitsTabels}>
        <tr>
          <th>№</th>
          <th>ФИО</th>
          <th>Дата прихода</th>
          <th>Дата сдачи</th>
          <th>Комментарий</th>
          <th>Статус</th>
          <th>Сумма работы</th>
        </tr>
        {outfitsTabels.map((item) => (
          <tr key={item.id}>
            <td style={{ textAlign: "center" }}>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>{item.dateEnd}</td>
            <td>{item.comment}</td>
            <td className={s.tb5}>
              <select
                className={cm(s.select, {
                  [s.selectActive1]: item.status === "В стоматологии",
                  [s.selectActive2]: item.status === "На примерке",
                  [s.selectActive3]: item.status === "Выставлен счет",
                  [s.selectActive4]: item.status === "Оплачен",
                  [s.selectActive5]: item.status === "Отложен",
                  [s.selectActive6]: item.status === "Отменен",
                })}
                defaultValue={item.status}
              >
                <option value="В стоматологии">В стоматологии</option>
                <option value="На примерке">На примерке</option>
                <option value="Выставлен счет">Выставлен счет</option>
                <option value="Оплачен">Оплачен</option>
                <option value="Отложен">Отложен</option>
                <option value="Отменен">Отменен</option>
              </select>
            </td>
            <td>{item.sum} тенге</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default OutfitsTabels;
