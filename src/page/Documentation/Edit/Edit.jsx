import React, { useRef } from "react";
import s from "./page.module.scss";
import { useParams } from "react-router-dom";
import DivBg from "../../../components/Cards/DivBg/DivBg";
const Edit = () => {
  const { id } = useParams();
  const fileRef = useRef();

  const acctiv = () => {
    fileRef.current.click();
  };
  return (
    <div className={s.Edit}>
      <DivBg>
        <h2 className={s.Titel}>Добавление документов</h2>
      </DivBg>

      <DivBg>
        <div className={s.InputList}>
          <input type="text" placeholder="Название документа" />
          <input type="date" />
          <input
            type="file"
            placeholder="Название документа"
            style={{ display: "none" }}
            ref={fileRef}
          />

          <div onClick={() => acctiv()}>
            <p>Название документа</p>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 8.875L7 1.375M7 8.875C6.47483 8.875 5.49365 7.37927 5.125 7M7 8.875C7.52517 8.875 8.50635 7.37927 8.875 7"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 10.375C13 12.2365 12.6115 12.625 10.75 12.625H3.25C1.3885 12.625 1 12.2365 1 10.375"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </DivBg>
    </div>
  );
};

export default Edit;
