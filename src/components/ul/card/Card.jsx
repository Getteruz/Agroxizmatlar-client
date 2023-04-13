import React from 'react'
import cls from './card.module.scss'

export default function Cards({ img, title, text }) {
    return (
        <div className={cls.Card}>
            <div className={cls.Card__box}><img src={img} alt="img" /></div>
            <h3 className={cls.Card__title}>{title}</h3>
            <p className={cls.Card__text}>{text}</p>
        </div>
    )
}
