

import React from 'react';
import s from './page.module.scss'
const DashboardCards = ({res}) => {
      console.log(res);
    return (
        <div className={s.DashboardCards}>
            <div>
                <h2>{res.category}</h2>
                <span>{res.icon}</span>
                
            </div>
            <p>{res.value}</p>
            <samp>{res.change}</samp>
        </div>
    )
}

export default DashboardCards
