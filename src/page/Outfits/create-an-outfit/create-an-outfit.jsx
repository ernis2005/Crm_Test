import React from "react";
import s from "./page.module.scss";
import DivBg from "../../../components/Cards/DivBg/DivBg";
import { CiDocumentation } from "../../../assets/svg/сreteAnOutfit";
const CreteAnOutfit = () => {
  return (
    <div className={s.page}>
      <DivBg>
        <div className={s.titel}>
          <h3>Наряд № 2</h3>
          <CiDocumentation />
        </div>
        <div className={s.from}></div>
      </DivBg>
    </div>
  );
};

export default CreteAnOutfit;
