import React from "react";
import s from "./page.module.scss";
import DivBg from "../../components/Cards/DivBg/DivBg";
import { Search } from "../../assets/svg/navPfofil";
import { Delete, Edit } from "../../assets/svg/сreteAnOutfit";

const Documentation = () => {
  const datalist = [
    { id: 1, name: "test1", price: "4500", nameFile: "test  " },
    { id: 2, name: "test2", price: "4500", nameFile: "test  " },
    { id: 3, name: "test3", price: "4500", nameFile: "test  " },
    { id: 4, name: "test4", price: "4500", nameFile: "test  " },
    { id: 5, name: "test5", price: "4500", nameFile: "test  " },
  ];

  const [data, setData] = React.useState(datalist);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const result = datalist.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(result);
  }, [search]);
  return (
    <div className={s.Documentation}>
      <div className={s.Block1}>
        <DivBg>
          <div className={s.Titel}>
            <h4>Документация</h4>
            <button>Добавить документов</button>
          </div>
        </DivBg>
        <DivBg>
          <div className={s.search}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Поиск"
            />

            <button>
              <Search />
            </button>
          </div>
        </DivBg>
      </div>

      <DivBg>
        <div className={s.Block2}>
          {data.map((item) => (
            <div className={s.Cards}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.nameFile}</p>
              <div className={s.ButtonLlist}>
                <button>
                  <Delete />{" "}
                </button>
                <button>
                  <Edit />
                </button>
              </div>
            </div>
          ))}
        </div>
      </DivBg>
    </div>
  );
};

export default Documentation;
