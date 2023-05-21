import React from 'react'
import style from '../Style/header.module.css'

const Header = ({ header }) => {
    return (
        <div className={style.header}>
            <h3>{header}</h3>
        </div>
    )
}

export default Header
