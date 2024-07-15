import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import s from "./page.module.scss";
import DivBg from "../../../components/Cards/DivBg/DivBg";
import { NavLink } from "react-router-dom";
function AddAocuments() {
  const [inputList, setInputList] = useState([
    { id: uuidv4(), name: "", date: "", nameFile: "", file: null },
  ]);

  const addImageButton = () => {
    setInputList([
      ...inputList,
      { id: uuidv4(), name: "", date: "", nameFile: "", file: null },
    ]);
  };

  const handleInputChange = (itemId, updatedItem) => {
    setInputList((prevList) =>
      prevList.map((item) => (item.id === itemId ? updatedItem : item))
    );
  };

  return (
    <div className={s.page}>
      <DivBg>
        <h3 className={s.Titel}>Добавление документов</h3>
      </DivBg>
      <DivBg>
        <div className={s.inputlist}>
          {inputList.map((item) => (
            <InputItem key={item.id} item={item} onChange={handleInputChange} />
          ))}
          <button className={s.addImageButton} onClick={addImageButton}>
            Добавить поля для ввода
          </button>
        </div>
        <div className={s.ButtonEnd}>
          <NavLink to="/documentation">
            <button>Сохранить</button>
          </NavLink>
        </div>
      </DivBg>
    </div>
  );
}

function InputItem({ item, onChange }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onChange(item.id, { ...item, nameFile: file.name, file });
  };

  return (
    <div className={s.inputCards}>
      <span>
        <p>Название документа</p>
        <input
          type="text"
          placeholder="Название картинки"
          value={item.name}
          onChange={(e) => onChange(item.id, { ...item, name: e.target.value })}
        />
      </span>
      <span>
        <p>Дата</p>
        <input
          type="date"
          value={item.date}
          onChange={(e) => onChange(item.id, { ...item, date: e.target.value })}
        />
      </span>
      <span>
        <p>Прикрепить файл</p>
        <input type="file" onChange={handleFileChange} />
      </span>
    </div>
  );
}

export default AddAocuments;
