import React from 'react'
import cls from './NewsCart.module.scss'
import Container from '../ul/container/Container'
import Theme from '../ul/Theme/Theme'
import img1 from '../../img/Rectangle11001574.svg'
import img2 from '../../img/Rectanglesa111001574.png'
import img3 from '../../img/aRectangle111001574.png'
import Marquee from "react-fast-marquee";

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

const newArr = []

for (let i = 0; i < data.length; i++) {
    newArr.push(data.slice(i, i + 3))
    i += 2

}



export default function NewsCart() {

    return (
        <div className={cls.NewsCart}>
            <Container>
                <Theme title={'YANGILIKLAR'} />
            </Container>
            <Marquee speed={70} pauseOnHover={true} play={true} gradient={false} className={cls.NewsCart__Marquee}>
                <div className={cls.NewsCart__bottom} style={{ marginLeft: "10px" }} >
                    {newArr.map(e => (

                        <div className={cls.NewsCart__Cards} key={e.id}>
                            <div className={cls.NewsCart__Cards__left}>
                                <img src={e[0].img} alt='hello' width={538} height={375} />
                                <h3 className={cls.NewsCart__Cards__title}>{e[0].title}</h3>
                                <span className={cls.NewsCart__Cards__data}>{e[0].data}</span>
                            </div>
                            <div className={cls.NewsCart__Cards__right}>
                                <div>
                                    <img src={e[1]?.img} alt='hello' width={437} height={260} />
                                    <p className={cls.NewsCart__Cards__right__title}>{e[1]?.title}</p>
                                    <p className={cls.NewsCart__Cards__right__data}>{e[1]?.data}</p>
                                </div>
                                <div>
                                    <img src={e[2]?.img} alt='hello' width={437} height={260} />

                                    <p className={cls.NewsCart__Cards__right__title}>{e[2]?.title}</p>
                                    <p className={cls.NewsCart__Cards__right__data}>{e[2]?.data}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div >
    )
}

