import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import image2 from "../../../assets/image2.svg";
import downloa from "../../../assets/downloa.svg";
import image3 from "../../../assets/image3.svg";
import stop from "../../../assets/stop.svg";
import { NavLink } from "react-router-dom";
import image4 from "../../../assets/image4.svg";
import image5 from "../../../assets/image5.svg";
import image6 from "../../../assets/image6.svg";
import image7 from "../../../assets/image7.svg";
import image8 from "../../../assets/image8.svg";
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

  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const loadYandexMaps = () => {
      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      script.type = "text/javascript";
      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(init);
        } else {
          console.error("Яндекс.Карты не загрузились");
        }
      };
      script.onerror = () => {
        console.error("Ошибка при загрузке скрипта Яндекс.Карт");
      };
      document.body.appendChild(script);
    };

    const init = () => {
      if (!document.getElementById("map")) {
        console.error('Элемент с id "map" не найден');
        return;
      }

      const map = new window.ymaps.Map("map", {
        center: [55.76, 37.64], // Координаты центра карты (Москва)
        zoom: 10,
      });

      const placemark = new window.ymaps.Placemark(
        [55.76, 37.64],
        {},
        { draggable: true }
      );

      map.geoObjects.add(placemark);
    };

    if (!window.ymaps) {
      loadYandexMaps();
    } else {
      window.ymaps.ready(init);
    }
  }, []);

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
      // Отправка данных формы
      console.log("Form submitted:", inputs);
    }
  };

  const handleFocus = () => {
    setShowMap(true);
  };

  const handleBlur = () => {
    // Задержка для того, чтобы карта не исчезала мгновенно при потере фокуса
    setTimeout(() => setShowMap(false), 200);
  };
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
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
                    <h4>Дата рождения</h4>
                    <input
                      type="date"
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
                    <img src={image8} alt="" />
                  </div>
                </div>
                <div className={s.inputStart}>
                  <h4>Адрес</h4>
                  <input
                    type="text"
                    name="fio3"
                    placeholder="Геолакационный переулок 3/1"
                    value={inputs.fio3}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    maxLength={inputMax}
                    className={errors.fio3 ? s.errorInput : ""}
                  />
                  {errors.fio3 && <p className={s.error}>{errors.fio3}</p>}
                </div>
                {showMap && <div id="map" className={s.mapContainer}></div>}
                <div className={s.inputStart}>
                  <h4>E - mail</h4>
                  <input
                    type="email"
                    name="fio4"
                    placeholder="Admin@gmail.com"
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
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
              <img src={image6} alt="" />
              <img src={image7} alt="" />
            </div>
          </div>
          <div className={s.blockEnd}>
            <div className={s.flexBlockLorem}>
              <h5>
                Важная информация
                <img src={stop} alt="" />
              </h5>
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
              <h5>Комментарий</h5>
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
            {isAccepted ? (
              <button className={s.btn}>Создать наряд</button>
            ) : (
              <>
                <button>Отмена</button>
                <button type="submit" onClick={handleAccept}>
                  Принят
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Patients2;
