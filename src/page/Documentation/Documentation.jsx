import React from "react";
import s from "./page.module.scss";
import DivBg from "../../components/Cards/DivBg/DivBg";
import { Search } from "../../assets/svg/navPfofil";
import { Delete, Edit } from "../../assets/svg/сreteAnOutfit";
import { NavLink } from "react-router-dom";

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
  const delite = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div className={s.Documentation}>
      <div className={s.Block1}>
        <DivBg>
          <div className={s.Titel}>
            <h4>Документация</h4>
            <NavLink to="/documentation/create-a-new-document">
              <button>Добавить документов</button>
            </NavLink>
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
          {data.length === 0 ? (
            <p>Ничего не найдено</p>
          ) : (
            <>
              {data.map((item) => (
                <div className={s.Cards} key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{item.nameFile}</p>
                  <div className={s.ButtonLlist}>
                    <button onClick={() => delite(item.id)}>
                      <Delete />
                    </button>
                    <NavLink to={`/documentation/${item.id}`}>
                      <button>
                        <Edit />
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </DivBg>
    </div>
  );
};

export default Documentation;
