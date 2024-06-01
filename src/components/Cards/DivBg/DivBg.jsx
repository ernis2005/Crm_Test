import React from 'react'
import s from './page.module.scss'

const DivBg = ({ children }) => {
    return (
        <div className={s.BlockCards}>
            {children}
        </div>
    )
}

export default DivBg
