import React from 'react'
import cls from './Partners.module.scss'

export default function PartnersCart({ title, img }) {
    return (
        <div className={cls.PartnersCart}>
            <img className={cls.PartnersCart__img} src={img} alt="img" />
            <p className={cls.PartnersCart__title}>{title}</p>
        </div>
    )
}
