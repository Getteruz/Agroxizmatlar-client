import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../ul/container/Container'
import cls from './Header.module.scss'
import logo from '../../img/logo.svg'
import telegram from '../../img/telegram.svg'
import instagram from '../../img/instagramsvg.svg'
import facebook from '../../img/facebook.svg'
export default function Header() {
    return (
        <header className={cls.header} >
            <Container className={cls.header__container}>
                <Link className={cls.header__logo} to={"/"}>
                    <img src={logo} alt="img" />
                </Link >
                <div className={cls.header__right}>
                    <button className={cls.header__btn}>Barcha menu</button>
                    <button className={cls.header__btn}>Interaktiv xizmatlar</button>
                    <Link className={cls.header__icon} to={'/'}> <img src={facebook} alt="face" /></Link>
                    <Link className={cls.header__icon} to={'/'}> <img src={instagram} alt="insta" /></Link>
                    <Link className={cls.header__icon} to={'/'}> <img src={telegram} alt="telegram" /></Link>

                </div>
            </Container>
        </header >
    )
}
