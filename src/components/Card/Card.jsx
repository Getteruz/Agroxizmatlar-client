import React from 'react'
import Cards from '../ul/card/Card'
import Container from '../ul/container/Container'
import websvg1 from '../../img/websvg.svg'
import websvg2 from '../../img/u_presentation.svg'
import websvg3 from '../../img/u_document.svg'
import websvg4 from '../../img/u_palette.svg'
import cls from './Card.module.scss'
import Theme from '../ul/Theme/Theme'
const data = [
    {
        id: 1,
        img: websvg1,
        title: 'Online kredit ',
        text: "Agentlikning markaziy apparat hodimlar ma'lumotlari bilan tanishish sahifasi"
    },
    {
        id: 2,
        img: websvg2,
        title: 'Subsidiya olish',
        text: "Agentlik va qishloq xo'jaligi faoliyatida yuz berayotgan yangiliklar bilan tanishish sahifasi"
    },
    {
        id: 3,
        img: websvg3,
        title: "Me'yoriy hujjatlar",
        text: "Agentlik va qishloq xo'jaligi faoliyatida yuz ."
    },
    {
        id: 4,
        img: websvg4,
        title: "Ochiq ma'lumotlar",
        text: "Agentlikning ochiq ma'lumotlari joylangan sahifasi"
    },
    {
        id: 5,
        img: websvg1,
        title: 'Markaziy apparat',
        text: "Agentlikning markaziy apparat hodimlar ma'lumotlari bilan tanishish sahifasi"
    },
    {
        id: 6,
        img: websvg2,
        title: 'Kelib tushgan murojatlar',
        text: "Agentlik va qishloq xo'jaligi faoliyatida yuz berayotgan yangiliklar bilan tanishish sahifasi"
    },
    {
        id: 7,
        img: websvg2,
        title: 'Xalq bilan muloqot',
        text: "Agentlik va qishloq xo'jaligi faoliyatida yuz berayotgan yangiliklar bilan tanishish sahifasi"
    },
]
export default function Card() {
    return (
        <Container className={cls.Card__Container} >
            <div className={cls.Card__box}></div>
            <Theme title={"INTEREKTIV XIZMATLAR"} />
            <div className={cls.Card__Container__wrap}>
                {data.map(e => (
                    <Cards img={e.img} title={e.title} text={e.text} />
                ))}
            </div>
        </Container>
    )
}
