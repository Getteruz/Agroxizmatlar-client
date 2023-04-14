import React from 'react'
import cls from './STABtn.module.scss'

export default function STABtn({ onClick, title, img }) {
    return (
        <div className={cls.STABtn} onClick={onClick}>
            <div className={cls.STABtn__box}><img src={img} alt="img" /></div>
            {title}
        </div>
    )
}
