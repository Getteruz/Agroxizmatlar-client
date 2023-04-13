import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../ul/container/Container'
import cls from "./contactHeader.module.scss"

export default function ContactHeader() {
    return (
        <div className={cls.ContactHeader}>

            <Container className={cls.ContactHeader__Container}>
                <ul className={cls.ContactHeader__left}>
                    <li><Link to="/about">Agentlik </Link></li>
                    <li><Link to="/service">Axborot xizmati</Link></li>
                    <li><Link to="/docs"> Me'yoriy hujjatlar</Link></li>
                    <li><Link to="/contact">Bog'lanish</Link></li>
                </ul>
                <div className={cls.ContactHeader__right}>
                    <p className={cls.ContactHeader__text}>Узбекистан, г.Ташкент, ул.Паркент, 131А</p>
                    <a href='tel:+998951224472' className={cls.ContactHeader__text}>+998 90 000-00-00</a>
                    <a href='mailto:hello@getter.uz' className={cls.ContactHeader__text}> info@gmail.com</a>
                </div>
            </Container>
        </div>

    )
}
