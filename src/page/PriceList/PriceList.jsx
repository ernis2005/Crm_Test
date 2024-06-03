import React from 'react'
import s from './page.module.scss'
import DivBg from '../../components/Cards/DivBg/DivBg'
import PriceistTabes from '../../components/Tables/PriceistTabes/PriceistTabes'
import { priceList } from '../../data'
import { Edit } from '../../assets/svg/priceiSvg'
import { GoPlus } from 'react-icons/go'
import { NavLink } from 'react-router-dom'
const PriceList = () => {
  return (
    <div className={s.PriceList}>
      <DivBg>
        <div className={s.titel}>
          <h4>Прайс -  лист</h4>
          <NavLink to="/price-list/create-a-price-list">  <button> Добавить прайс - лист<GoPlus /> </button>  </NavLink>
         
        </div>
      </DivBg>

      {priceList.map((res, index) => (
        <DivBg key={index}>
        <div className={s.titel1} style={{ justifyContent: 'space-between' , paddingBottom: '0px !important' }}>
          <h4>{res.name}</h4>
          <NavLink to={`/price-list/create-a-price-list?${res.name}`}> <button>Редактировать <Edit /> </button></NavLink>
        </div>
       <PriceistTabes data={res.data}/>
      </DivBg>
      ))}
  
    </div>
  )
}

export default PriceList
