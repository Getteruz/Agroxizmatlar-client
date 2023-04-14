import React from 'react'
import Container from '../ul/container/Container'
import cls from './partners.module.scss'
import img1 from '../../img/Qonunchilik.png'
import img2 from '../../img/Qonunchi.png'
import img3 from '../../img/Qonunchilikpng.png'
import img4 from '../../img/Qonunchilik-palatasi.png.png'
import img5 from '../../img/Qonunchilik-palatasi1.png'
import PartnersCart from '../ul/Partners/PartnersCart'
import Marquee from 'react-fast-marquee'
const data = [
    {
        id: 1,
        img: img1,
        title: "O'zbekiston Respublikasi qonunchilik ma'lumotlari milliy bazasi"
    },

    {
        id: 2,
        img: img2,
        title: "O'zbekiston Respublikasi Prezidentining virtual qabulxonasi"
    },
    {
        id: 3,
        img: img3,
        title: "O'zbekiston Respublikasi Prezidentining virtual qabulxonasi"
    },
    {
        id: 4,
        img: img4,
        title: "O'zbekiston Respublikasi Oliy Majlis Qonunchilik Palatasi"
    },
    {
        id: 5,
        img: img5,
        title: "O'zbekiston Respublikasi Oliy Majlis Qonunchilik Palatasi"
    },
    {
        id: 6,
        img: img3,
        title: "O'zbekiston Respublikasi Prezidentining virtual qabulxonasi"
    },
]

export default function Partners() {
    return (
        <div className={cls.partners}>
            <Container>
                <h2 className={cls.partners__title}>Hamkorlarimiz</h2>
            </Container>
            <Marquee speed={70} pauseOnHover={true} play={true} gradient={false} className={cls.NewsCart__Marquee}>
                <div className={cls.partners__box}>
                    {data && data?.map(e => (
                        <PartnersCart title={e.title} img={e.img} />
                    ))}
                </div>
            </Marquee>
        </div>
    )
}
