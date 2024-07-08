import React from "react";
import s from "./page.module.scss";
import {
  TeethList11,
  TeethList12,
  TeethList13,
  TeethList14,
  TeethList15,
  TeethList16,
  TeethList17,
  TeethList18,
  TeethList21,
  TeethList22,
  TeethList23,
  TeethList24,
  TeethList25,
  TeethList26,
  TeethList27,
  TeethList28,
  TeethList31,
  TeethList32,
  TeethList33,
  TeethList34,
  TeethList35,
  TeethList36,
  TeethList37,
  TeethList38,
  TeethList41,
  TeethList42,
  TeethList43,
  TeethList44,
  TeethList45,
  TeethList46,
  TeethList47,
  TeethList48,
} from "../../../assets/svg/TeethList";

const TeethCard = ({ TeethComponent, number, handleTeethColor }) => (
  <div className={s.TeethCard} onClick={() => handleTeethColor(number)}>
    <TeethComponent />
    <p>{number}</p>
  </div>
);
const TeethList = ({ priceListValue }) => {
  const teethData = [
    { component: TeethList18, number: 18 },
    { component: TeethList17, number: 17 },
    { component: TeethList16, number: 16 },
    { component: TeethList15, number: 15 },
    { component: TeethList14, number: 14 },
    { component: TeethList13, number: 13 },
    { component: TeethList12, number: 12 },
    { component: TeethList11, number: 11 },
    { component: TeethList21, number: 21 },
    { component: TeethList22, number: 22 },
    { component: TeethList23, number: 23 },
    { component: TeethList24, number: 24 },
    { component: TeethList25, number: 25 },
    { component: TeethList26, number: 26 },
    { component: TeethList27, number: 27 },
    { component: TeethList28, number: 28 },
    { component: TeethList48, number: 48 },
    { component: TeethList47, number: 47 },
    { component: TeethList46, number: 46 },
    { component: TeethList45, number: 45 },
    { component: TeethList44, number: 44 },
    { component: TeethList43, number: 43 },
    { component: TeethList42, number: 42 },
    { component: TeethList41, number: 41 },
    { component: TeethList31, number: 31 },
    { component: TeethList32, number: 32 },
    { component: TeethList33, number: 33 },
    { component: TeethList34, number: 34 },
    { component: TeethList35, number: 35 },
    { component: TeethList36, number: 36 },
    { component: TeethList37, number: 37 },
    { component: TeethList38, number: 38 },
  ];

  const updatedProducts = priceListValue?.values?.reduce(
    (acc, curr) => acc + (curr.price || 0),
    0
  );

  console.log(updatedProducts, "updatedProducts");

  console.log(priceListValue, "test1");
  const [teethColorIndex, setTeethColorIndex] = React.useState([]);
  console.log(teethColorIndex, "test1");

  const handleTeethColor = (index) => {
    if (teethColorIndex.includes(index)) {
      setTeethColorIndex(teethColorIndex.filter((i) => i !== index));
    } else {
      setTeethColorIndex([...teethColorIndex, index]);
    }
  };
  return (
    <div className={s.Teeth}>
      <h3>Зубные схемы</h3>
      <div className={s.Block2}>
        <div className={s.TeethList}>
          {teethData.map(({ component, number }) => (
            <TeethCard
              handleTeethColor={handleTeethColor}
              key={number}
              TeethComponent={component}
              number={number}
            />
          ))}
        </div>
        <div className={s.TitelTeeth}>
          <p>
            Зуб:
            {teethColorIndex.map((res) => (
              <span>{res},</span>
            ))}
          </p>
          <p>Общая сумма : {updatedProducts * teethColorIndex.length} </p>
        </div>
      </div>
    </div>
  );
};

export default TeethList;
