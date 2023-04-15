import React, { useState } from 'react'
import Container from '../ul/container/Container'
import cls from './questions.module.scss'

const data = [
    {
        id: 1,
        title: "Oсобенным праздником для спортивной общественности",
        text: "O'zbekiston Respublikasi Prezidentining “O'zbekiston Respublikasida bog'dorchilik va issiqxona xo'jaligini yanada rivojlantirish chora-tadbirlari to'g'risida” 20-mart 2019- yildagi PQ-4246-sonli qaroriga muvofiq, O'zbekiston Respublikasi Qishloq xo'jaligi vazirligi huzurida Bog'dorchilik va issiqxona xo'jaligini rivojlantirish agentligi tashkil etilgan."
    },
    {
        id: 2,
        title: "Для спортивной общественности",
        text: "O'zbekiston Respublikasi Prezidentining “O'zbekiston Respublikasida bog'dorchilik va issiqxona xo'jaligini yanada rivojlantirish chora-tadbirlari to'g'risida” 20-mart 2019- yildagi PQ-4246-sonli qaroriga muvofiq, O'zbekiston Respublikasi Qishloq xo'jaligi vazirligi huzurida Bog'dorchilik va issiqxona xo'jaligini rivojlantirish agentligi tashkil etilgan."
    },
    {
        id: 3,
        title: "Праздником для спортивной общественности",
        text: "O'zbekiston Respublikasi Prezidentining “O'zbekiston Respublikasida bog'dorchilik va issiqxona xo'jaligini yanada rivojlantirish chora-tadbirlari to'g'risida” 20-mart 2019- yildagi PQ-4246-sonli qaroriga muvofiq, O'zbekiston Respublikasi Qishloq xo'jaligi vazirligi huzurida Bog'dorchilik va issiqxona xo'jaligini rivojlantirish agentligi tashkil etilgan."
    },
    {
        id: 4,
        title: "Oсобенным праздником для спортивной общественности",
        text: "O'zbekiston Respublikasi Prezidentining “O'zbekiston Respublikasida bog'dorchilik va issiqxona xo'jaligini yanada rivojlantirish chora-tadbirlari to'g'risida” 20-mart 2019- yildagi PQ-4246-sonli qaroriga muvofiq, O'zbekiston Respublikasi Qishloq xo'jaligi vazirligi huzurida Bog'dorchilik va issiqxona xo'jaligini rivojlantirish agentligi tashkil etilgan."
    },
    {
        id: 5,
        title: "Oсобенным праздником для спортивной общественности",
        text: "O'zbekiston Respublikasi Prezidentining “O'zbekiston Respublikasida bog'dorchilik va issiqxona xo'jaligini yanada rivojlantirish chora-tadbirlari to'g'risida” 20-mart 2019- yildagi PQ-4246-sonli qaroriga muvofiq, O'zbekiston Respublikasi Qishloq xo'jaligi vazirligi huzurida Bog'dorchilik va issiqxona xo'jaligini rivojlantirish agentligi tashkil etilgan."
    },
]

export default function Questions() {
    const [text, setText] = useState(data[0].id)
    return (
        <div className={cls.questions}>
            <Container className={cls.questions__container}>
                <div className={cls.questions_left}>
                    <h3 className={cls.questions_left__title}>Kop berilgan savollar</h3>
                    <p className={cls.questions_left__text}>O'zbekiston Respublikasi Prezidentining “O'zbekiston Respublikasida bog'dorchilik va issiqxona xo'jaligini yanada rivojlantirish chora-tadbirlari to'g'risida”</p>
                </div>

                <ul className={cls.questions__list}>
                    {data && data?.map(e => (
                        <li key={e.id} className={cls.questions_item}>
                            <div className={cls.questions__list_div} onClick={() => setText(state => state === e.id ? false : e.id)}>
                                <p className={cls.questions_item__title}> {e?.title}</p>
                                <div className={cls.questions__list__line}>
                                    <div style={text == e.id ? { display: "none" } : { display: "inline-block" }}></div>
                                </div>
                            </div>
                            <p className={cls.questions_item__text} style={text == e.id ? { display: "inline-block" } : { display: "none" }}>{e.text}</p>
                        </li>
                    ))}

                </ul>
            </Container>
        </div>
    )
}
