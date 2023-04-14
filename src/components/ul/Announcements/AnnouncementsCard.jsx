import React from 'react'
import img from '../../../img/Group48098575.png'
import Container from '../container/Container'
import cls from './Announcements.Card.module.scss'

import img1 from '../../../img/fi_check-square.svg'
import img2 from '../../../img/fi_check-square.svg'
import img3 from '../../../img/fi_check-square.svg'

export default function AnnouncementsCard() {
    return (

        <div className={cls.AnnouncementsCard}>
            <img src={img} alt="img" />
            <ul className={cls.AnnouncementsCard__left}>
                <li className={cls.AnnouncementsCard__left__item}>
                    <img src={img1} alt="img" />
                    <span>
                        <h3 className={cls.AnnouncementsCard__left__title}> 2400 м²</h3>
                        <p className={cls.AnnouncementsCard__left__text}>Ajiratilgan yer maydoni</p>
                    </span>
                </li>
                <li className={cls.AnnouncementsCard__left__item}>
                    <img src={img2} alt="img" />
                    <span>
                        <h3 className={cls.AnnouncementsCard__left__title}> 2400 mln uzs</h3>
                        <p className={cls.AnnouncementsCard__left__text}>Ajiratilgan subsidiyalar</p>
                    </span>
                </li>
                <li className={cls.AnnouncementsCard__left__item}>
                    <img src={img3} alt="img" />
                    <span>
                        <h3 className={cls.AnnouncementsCard__left__title}>475 mln uzs</h3>
                        <p className={cls.AnnouncementsCard__left__text}>Issiqxona uchun subsidiyalar</p>
                    </span>
                </li>
            </ul>
        </div>

    )
}
