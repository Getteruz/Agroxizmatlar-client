import React from 'react'
import cls from './Footer.module.scss'
import Container from '../ul/container/Container'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={cls.Footer}>
            <Container className={cls.Footer__Container}>
                <ul className={cls.Footer__list}>
                    <li className={cls.Footer__item}><Link to={'/'}>Политика безопасности</Link></li>
                    <li className={cls.Footer__item}><Link to={'/'}>Условия соглашения</Link></li>
                    <li className={cls.Footer__item}><Link to={'/'}>Публичная оферта</Link></li>
                    <li className={cls.Footer__item}> © 2023 ООО. All rights reserved</li>
                </ul>
                <Link to="https://getter.uz/" className={cls.Footer__getter}>Developed by: <span>Getter</span></Link>
            </Container>
        </footer>
    )
}
