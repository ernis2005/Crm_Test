import React, { useState } from "react";
import s from "./page.module.scss";
import image2 from "../../assets/image2.svg";
import downloa from "../../assets/downloa.svg";
import image3 from "../../assets/image3.svg";
import { NavLink } from "react-router-dom";

const inputMax = 50;
const Patients2 = () => {
  const [inputs, setInputs] = useState({
    fio1: "",
    phone1: "",
    phone2: "",
    fio2: "",
    fio3: "",
    fio4: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    if (value.trim() === "") {
      setErrors({ ...errors, [name]: "Поле не может быть пустым" });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(inputs).forEach((key) => {
      if (inputs[key].trim() === "") {
        newErrors[key] = "Поле не может быть пустым";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", inputs);
    }
  };
  return (
    <div>
      <div className={s.patallBlock}>
        <form onSubmit={handleSubmit}>
          <div className={s.blockFlex}>
            <img src={image2} alt="" />
            <div className={s.gridBlock}>
              <div className={s.flexInput}>
                <div className={s.inputStart}>
                  <h4>ФИО</h4>
                  <input
                    type="text"
                    name="fio1"
                    placeholder="Носкова Дарья Николаевна"
                    value={inputs.fio1}
                    onChange={handleChange}
                    maxLength={inputMax}
                    className={errors.fio4 ? s.errorInput : ""}
                  />
                  {errors.fio1 && <p className={s.error}>{errors.fio1}</p>}
                </div>
                <div className={s.inputStart}>
                  <h4>Телефон №1</h4>
                  <input
                    type="text"
                    name="phone1"
                    placeholder="+7 (7xx) xxx-xx-xx"
                    value={inputs.phone1}
                    onChange={handleChange}
                    maxLength={inputMax}
                    className={errors.fio4 ? s.errorInput : ""}
                  />
                  {errors.phone1 && <p className={s.error}>{errors.phone1}</p>}
                </div>
                <div className={s.inputStart}>
                  <h4>Телефон №2</h4>
                  <input
                    type="text"
                    name="phone2"
                    placeholder="+7 (7xx) xxx-xx-xx"
                    value={inputs.phone2}
                    onChange={handleChange}
                    maxLength={inputMax}
                    className={errors.fio4 ? s.errorInput : ""}
                  />
                  {errors.phone2 && <p className={s.error}>{errors.phone2}</p>}
                </div>
              </div>
              <div className={s.flexInput}>
                <div className={s.flexminiblock}>
                  <div className={s.inputStart2}>
                    <h4>ФИО</h4>
                    <input
                      type="text"
                      name="fio2"
                      placeholder="Носкова Дарья Николаевна"
                      value={inputs.fio2}
                      onChange={handleChange}
                      maxLength={inputMax}
                      className={errors.fio4 ? s.errorInput : ""}
                    />
                    {errors.fio2 && <p className={s.error}>{errors.fio2}</p>}
                  </div>
                  <div className={s.gridItem}>
                    <h4>Пол</h4>
                    <div className={s.Itemblock}></div>
                  </div>
                </div>
                <div className={s.inputStart}>
                  <h4>ФИО</h4>
                  <input
                    type="text"
                    name="fio3"
                    placeholder="Носкова Дарья Николаевна"
                    value={inputs.fio3}
                    onChange={handleChange}
                    maxLength={inputMax}
                    className={errors.fio4 ? s.errorInput : ""}
                  />
                  {errors.fio3 && <p className={s.error}>{errors.fio3}</p>}
                </div>
                <div className={s.inputStart}>
                  <h4>ФИО</h4>
                  <input
                    type="text"
                    name="fio4"
                    placeholder="Носкова Дарья Николаевна"
                    value={inputs.fio4}
                    onChange={handleChange}
                    maxLength={inputMax}
                    className={errors.fio4 ? s.errorInput : ""}
                  />
                  {errors.fio4 && <p className={s.error}>{errors.fio4}</p>}
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
                  <a href={downloa} download>
                    <img src={downloa} alt="Download" />
                  </a>
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make{" "}
                </p>
              </div>
            </div>
            <div className={s.flexBlockLorem}>
              <h5>Важная информация</h5>
              <div className={s.blockLorem}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          <div className={s.EndBtn}>
            <button>Отмена</button>
            <button type="submit">Принят</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Patients2;
