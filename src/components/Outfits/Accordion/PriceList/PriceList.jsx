import React from "react";
import s from "./page.module.scss";
import { Delete, Edit } from "../../../../assets/svg/сreteAnOutfit";
const PriceList = ({ setPriceListValue }) => {
  const dataList = [];
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "name",
      price: 2000,
      temp: "9",
    },
    {
      id: 1,
      name: "name",
      price: 2000,
      temp: "9",
    },
    {
      id: 1,
      name: "name",
      price: 2000,
      temp: "9",
    },
    {
      id: 1,
      name: "name",
      price: 2000,
      temp: "9",
    },
  ]);

  const [newPrice, setNewPrice] = React.useState({
    name: "",
    price: "",
    temp: "",
    id: 1,
  });
  const andData = () => {
    if (newPrice.price === "" || newPrice.name === "" || newPrice.temp === "")
      return;
    setData([...data, newPrice]);

    setNewPrice({
      name: "",
      price: "",
      temp: "",
      id: 1,
    });
  };
  return (
    <div className={s.PriceList}>
      <select onChange={(e) => setPriceListValue(e.target.value)}>
        <option>Выберите прайс - лист</option>
        {data.map((res, index) => (
          <option key={index} value={res.name}>
            {res.name}
          </option>
        ))}
      </select>
      <div className={s.PriceListTabes}>
        {data.map((res, index) => (
          <div key={index} className={s.PriceListTabesCard}>
            <p>{index + 1}</p>
            <p>{res.name}</p>
            <p>{res.price}</p>
            <p>{res.temp}</p>
            <div className={s.edit}>
              <button>
                <Delete />
              </button>
              <button>
                <Edit />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={s.PriceListInputList}>
        <input
          type="text"
          placeholder="Название"
          value={newPrice.name}
          onChange={(e) => setNewPrice({ ...newPrice, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Цена"
          value={newPrice.price}
          onChange={(e) => setNewPrice({ ...newPrice, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Срок"
          value={newPrice.temp}
          onChange={(e) => setNewPrice({ ...newPrice, temp: e.target.value })}
        />
      </div>
      <button onClick={() => andData()} className={s.PriceListAdd}>
        Добавить
      </button>
    </div>
  );
};

export default PriceList;
