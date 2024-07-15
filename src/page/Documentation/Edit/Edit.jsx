import React, { useRef, useState } from "react";
import s from "./page.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import DivBg from "../../../components/Cards/DivBg/DivBg";
import { FiDelete } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
const Edit = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [fileName, setFileName] = useState(null);
  const fileRef = useRef();

  const acctiv = () => {
    fileRef.current.click();
  };
  const handlerFile = (e) => {
    setFileName(e.target.files[0].name);
  };

  const deleteDocument = () => {
    if (window.confirm("Вы действительно хотите удалить документ?")) {
      navigate("/documentation");
    }
  };
  const editDocument = () => {
    navigate("/documentation");
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
            onChange={(e) => handlerFile(e)}
            accept="image/*"
          />

          <div onClick={() => acctiv()}>
            <p>{fileName == null ? `Название документа` : fileName}</p>
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
        <div className={s.ButtonList}>
          <button onClick={() => deleteDocument()}>
            <AiOutlineDelete />
          </button>
          <button onClick={() => editDocument()}>
            <BiEdit />
          </button>
        </div>
      </DivBg>
    </div>
  );
};

export default Edit;
