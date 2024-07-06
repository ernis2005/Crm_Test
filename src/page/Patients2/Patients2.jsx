import React from "react";
import s from "./page.module.scss";
import image2 from "../../assets/image2.svg";
import downloa from "../../assets/downloa.svg";
import image3 from "../../assets/image3.svg";
import { NavLink } from "react-router-dom";
const Patients2 = () => {
  return (
    <div>
      <div className={s.patallBlock}>
        <div className={s.blockFlex}>
          <img src={image2} alt="" />
          <div className={s.gridBlock}>
            <div className={s.flexInput}>
              <div className={s.inputStart}>
                <h4>ФИО</h4>
                <input type="text" placeholder="Носкова Дарья Николаевна" />
              </div>
              <div className={s.inputStart}>
                <h4>Телефон №1</h4>
                <input type="text" placeholder="+7 (7xx) xxx-xx-xx" />
              </div>
              <div className={s.inputStart}>
                <h4>Телефон №1</h4>
                <input type="text" placeholder="+7 (7xx) xxx-xx-xx" />
              </div>
            </div>
            <div className={s.flexInput}>
              <div className={s.flexminiblock}>
                <div className={s.inputStart2}>
                  <h4>ФИО</h4>
                  <input type="text" placeholder="Носкова Дарья Николаевна" />
                </div>
                <div className={s.gridItem}>
                  <h4>Пол</h4>
                  <div className={s.Itemblock}></div>
                </div>
              </div>
              <div className={s.inputStart}>
                <h4>ФИО</h4>
                <input type="text" placeholder="Носкова Дарья Николаевна" />
              </div>
              <div className={s.inputStart}>
                <h4>ФИО</h4>
                <input type="text" placeholder="Носкова Дарья Николаевна" />
              </div>
            </div>
          </div>
        </div>
        <div className={s.pataiCenter}>
          <h4>Файл</h4>
          <div className={s.pataiCenterFlex}>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className={s.blockItem}>
                <p>Название файла</p>
                <img src={downloa} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className={s.aiEndCenter}>
          <h4>Фото</h4>
          <div className={s.columpGap}>
            {[1, 2, 3, 4, 5].map((item) => (
              <img src={image3} alt="" />
            ))}
          </div>
        </div>
        <div className={s.blockEnd}>
          <div className={s.flexBlockLorem}>
            <h5>Важная информация</h5>
            <div className={s.blockLorem1}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make{" "}
              </p>
            </div>
          </div>
          <div className={s.flexBlockLorem}>
            <h5>Важная информация</h5>
            <div className={s.blockLorem}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className={s.EndBtn}>
          <button>Отмена</button>
          <button>Принят</button>
        </div>
      </div>
    </div>
  );
};
export default Patients2;
