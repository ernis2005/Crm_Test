import React from 'react'
import s from './App.module.scss'
import DivBg from '../../components/Cards/DivBg/DivBg'
import DashboardCards from '../../components/Cards/DashboardCards/DashboardCards'
import OutfitsTabels from '../../components/Tables/OutfitsTabels/OutfitsTabels'
import { BiPlus } from 'react-icons/bi'
import { diogram } from '../../data'
const Home = () => {

   
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
                    <h4>Наряды  </h4>
                    <button>Подробнее</button>
                </div>
                <OutfitsTabels />
            </DivBg>
        </div>
    )
}

export default Home


//   <DivBg>
//   <div className={s.titel}>
//     <h4>Финансы</h4>
//       <button>Подробнее</button>
//   </div>
// <DiagramsBasic/>
// </DivBg>
