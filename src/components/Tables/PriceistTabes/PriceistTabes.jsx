import React from 'react'

import s from './page.module.scss'

const PriceistTabes = ({ data }) => {
    return (
        <div className='div'>
            <table className={s.OutfitsTabels}>
                <tr>
                    <th>№</th>
                    <th>Вид работы</th>
                    <th>Стоимость </th>
                    <th>Срок изготовления</th>
                </tr>
                {data.map((item , i) => (
                    <tr key={item.id}>
                        <td style={{ textAlign: "center" }}>{i + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.temp}дней</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default PriceistTabes
