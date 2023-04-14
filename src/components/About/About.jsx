import React from 'react'
import Container from '../ul/container/Container'
import Veterans from '../ul/Veterans/Veterans'
import cls from './About.module.scss'
import user1 from '../../img/Ellipse1274.svg'
import user2 from '../../img/Ellipse275.svg'
import user3 from '../../img/Ellipse 1276.svg'
import user4 from '../../img/Ellipse1277.svg'
import user5 from '../../img/Ellipse1278.svg'
import user6 from '../../img/Ellipse1279.svg'
import VidoeNews from '../ul/vidoeNews/vidoeNews'
import vidio from '../../img/Ellipse1406.jpg'
const users = [
    {
        id: 1,
        title: "name",
        img: user1
    },
    {
        id: 2,
        title: "name",
        img: user2
    },
    {
        id: 3,
        title: "name",
        img: user3
    },
    {
        id: 4,
        title: "name",
        img: user4
    },
    {
        id: 5,
        title: "name",
        img: user5
    },
    {
        id: 6,
        title: "name",
        img: user6
    }
]
const news = {
    id: 1,
    file: vidio,
    text: "Ozbekiston Respublikasi Prezidentining “O'zbekiston Respublikasida bog'dorchilik va issiqxona xo'jaligini yanada rivojlantirish chora-tadbirlari to'g'risida” 20-mart 2019- yildagi PQ-4246-sonli qaroriga muvofiq, O'zbekiston Respublikasi Qishloq xo'jaligi vazirligi huzurida Bog'dorchilik va issiqxona xo'jaligini rivojlantirish agentligi tashkil etilgan."
}

export default function About() {
    return (
        <div className={cls.About}>
            <Container>
                <h2 className={cls.About__title}>AGENTLIK HAQIDA</h2>
                <p className={cls.About__text}>Bog'dorchilik va issiqxona xo'jaliklarini <span>barqaror</span>   rivojlanishini</p>
                <p className={cls.About__textOur}>Bizning faxriylarimiz </p>
                <Veterans user={users} />
                <VidoeNews news={news} />
            </Container>
        </div>
    )
}
