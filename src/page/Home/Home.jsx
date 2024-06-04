import React from 'react'
import s from './App.module.scss'
import DivBg from '../../components/Cards/DivBg/DivBg'
import DashboardCards from '../../components/Cards/DashboardCards/DashboardCards'
import OutfitsTabels from '../../components/Tables/OutfitsTabels/OutfitsTabels'
import { BiPlus } from 'react-icons/bi'
import { diogram, outfitsTabels1 } from '../../data'
import DiagramsInflation from '../../components/Diagrams/DiagramsInflation/DiagramsInflation'
const Home = () => {

    const series = [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2, 1.4, 0.8, 2.5, 0.2]
    }]
    const data = outfitsTabels1
  
    return (
        <div className={s.App}>
            <DivBg>
                <div className={s.titel}>
                    <h4>Панель приборов
                        Создать наряд</h4>
                    <button>Создать наряд <BiPlus /></button>
                </div>
                <div className={s.Cards}>
                    {diogram.map((item, index) => (
                        <DashboardCards res={item} />
                    ))}
                </div>
            </DivBg>

            <DivBg>
                <div className={s.titel}>
                    <h4>Финансы</h4>
                    <button>Подробнее</button>
                </div>

                <div className={s.DiagramsInflation}>
                    <div  >
                        <div className={s.DiagramsInflationNav}>
                            <h4>Доходы за год</h4>
                            <span>
                                <select name="" id="" >

                                    <option value="Выбрать другой год">
                                        Выбрать другой год
                                    </option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                </select>
                                <button>
                                    за этот год
                                </button>

                            </span>
                        </div>
                        <DiagramsInflation series={series} />
                    </div>

                    <div  >
                        <div className={s.DiagramsInflationNav}>
                            <h4>Расходы за год</h4>
                            <span>
                                <select name="" id="" >

                                    <option value="Выбрать другой год">
                                        Выбрать другой год
                                    </option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                </select>
                                <button>
                                    за этот год
                                </button>

                            </span>
                        </div>
                        <DiagramsInflation series={series} />
                    </div>
                </div>
            </DivBg>

            <DivBg>
                <div className={s.titel}>
                    <h4>Наряды  </h4>
                    <button>Подробнее</button>
                </div>
                <OutfitsTabels data={data}/>
            </DivBg>
        </div>
    )
}

export default Home

