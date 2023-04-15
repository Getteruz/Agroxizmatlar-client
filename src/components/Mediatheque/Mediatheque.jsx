import React from 'react'
import Container from '../ul/container/Container'
import cls from './Mediatheque.module.scss'
import img1 from '../../img/Rectangle1111001627.png'
import img2 from '../../img/Rectangle121211001628.png'
import img3 from '../../img/Rectangle88211001629.png'
import Button from '../ul/button/button'


const data = [
    {
        id: 1,
        img: img1,
        title: "Tashabbus 2022",
        data: "32 foto"
    },
    {
        id: 2,
        img: img2,
        title: "Tashabbus 2022",
        data: "32 foto"
    },
    {
        id: 3,
        img: img3,
        title: "Tashabbus 2022",
        data: "32 foto"
    },
]
export default function Mediatheque() {
    return (
        <div className={cls.Mediatheque}>
            <Container>
                <h3 className={cls.Mediatheque__title}>MEDIATEKA</h3>
                <div className={cls.Mediatheque__btns}>
                    <button className={cls.Mediatheque__btn}>Foto galareya</button>
                    <button className={cls.Mediatheque__btn}>Video galareya</button>
                </div>
                <div className={cls.Mediatheque__buttom}>
                    <div className={cls.Mediatheque__left}>
                        {data && data?.map(e => (
                            <img src={e?.img} alt="img" />
                        ))}
                    </div>
                    <div className={cls.Mediatheque__right}>
                        <h3 className={cls.Mediatheque__right__title}>«Навроз сайлы» стал особенным праздником для спортивной общественности</h3>
                        <Button title={"Barchasini ko'rish"} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
