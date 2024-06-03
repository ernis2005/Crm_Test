import React from "react";
import s from "./page.module.scss";
import DivBg from "../../../components/Cards/DivBg/DivBg";
import { GoPlus } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const СreateAPriceList = () => {
  const location = useLocation();
  const queryString = location.search.startsWith("?")
    ? location.search.substring(1) // Remove the first character if it's '?'
    : location.search;

  const [InputList, setInputList] = React.useState([
    {
      work: null,
      price: null,
      term: null,
    },
  ]);

  const AddInput = () => {
    setInputList([
      ...InputList,
      {
        work: null,
        price: null,
        term: null,
      },
    ]);
    console.log(InputList);
  };

  return (
    <div className={s.СreateAPriceList}>
      <DivBg>
        <div className={s.titel}>
          <h4>Создание прайс - листа</h4>
        </div>
      </DivBg>
      <DivBg>
        <div className={s.titel}>
          <h4>Создание прайс - листа</h4>
        </div>
        <div className={s.inputLIst}>
          <input
            className={s.InputName}
            type="text"
            placeholder="Введите название прайс - листа"
          />
          <div className={s.inputLIstName}>
            <p>Вид работы </p>
            <p>Стоимость </p>
            <p>Срок изготовления</p>
          </div>
          {InputList.map((item, index) => (
            <div className={s.inputListVal} key={index}>
              <input type="text" placeholder="Введите вид работы  " />
              <input type="text" placeholder="Введите стоимость работы " />
              <input type="text" placeholder="Введите срок изготовления" />
            </div>
          ))}
          <div className={s.buttoList}>
            {queryString.length > 0 ? (
              <>
                <button
                  style={{
                    border: "1px solid #F83D3D",
                    color: "#fff",
                    background: "#F83D3D",
                  }}
                >
                  Удалить
                  <AiOutlineDelete />
                </button>
                <button
                  style={{
                    background: "#017DC3",
                    color: "#FFF",
                    border: "1px solid #017DC3",
                  }}
                >
                  Редактировать <GoPlus />
                </button>
              </>
            ) : (
              <>
                <button
                  style={{ border: "1px solid #017DC3", color: "#017DC3" }}
                >
                  Добавить эту позицию в другие прайс-листы <GoPlus />
                </button>
                <button onClick={() => AddInput()}>
                  Добавить позицию <GoPlus />
                </button>
              </>
            )}
          </div>
          <div className={s.ButtonCreate}>
            <NavLink to="/price-list">
              {" "}
              <button>Создать</button>{" "}
            </NavLink>
          </div>
        </div>
      </DivBg>
    </div>
  );
};

export default СreateAPriceList;
