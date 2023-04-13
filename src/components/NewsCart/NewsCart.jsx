import React from 'react'
import cls from './NewsCart.module.scss'
import Container from '../ul/container/Container'
import Theme from '../ul/Theme/Theme'
import img1 from '../../img/Rectangle11001574.png'
import img2 from '../../img/Rectangle111001574.png'
import img3 from '../../img/Rectangle111001574s.png'

const data = [
    {
        id: 1,
        img: img1,
        title: "«Навроз сайлы» стал особенным праздником для спортивной общественности",
        data: "10:42"
    },
    {
        id: 2,
        img: img2,
        title: "«Навроз сайлы» стал особенным праздником для спортивной общественности",
        data: "10:42"
    },
    {
        id: 3,
        img: img3,
        title: "«Навроз сайлы» стал особенным праздником для спортивной общественности",
        data: "10:42"
    },
    {
        id: 4,
        img: img1,
        title: "«Навроз сайлы» стал особенным праздником для спортивной общественности",
        data: "10:42"
    },
    {
        id: 5,
        img: img2,
        title: "«Навроз сайлы» стал особенным праздником для спортивной общественности",
        data: "10:42"
    },
    {
        id: 6,
        img: img3,
        title: "«Навроз сайлы» стал особенным праздником для спортивной общественности",
        data: "10:42"
    }

]

export default function NewsCart() {
    return (
        <div className={cls.NewsCart}>
            <Container>
                <Theme title={'YANGILIKLAR'} />
            </Container>
            <div className={cls.NewsCart__bottom}>
                <div className={cls.NewsCart__card}>

                </div>
            </div>
        </div>
    )
}

