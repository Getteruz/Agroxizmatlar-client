import React from 'react'
import logo from '../../../img/Group48098564.svg'
import { Link } from "react-router-dom"
import Container from '../../ul/container/Container'
import cls from './contactFooter.module.scss'

export default function ContactFooter() {
    return (
        <div className={cls.ContactFooter}>
            <Container className={cls.ContactFooter__Container}>
                <Link to={'/'}><img src={logo} alt='img' /></Link>
                <ul>
                    <li>
                        <Link to={'/'}>Agentlik</Link>
                        <Link to={'/'}>Axborot xizmati</Link>
                        <Link to={'/'}>Rahbariyat</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Online kredit</Link>
                        <Link to={'/'}>Me'yoriy hujjatlar </Link>
                        <Link to={'/'}>Ochiq ma'lumotlar</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Tarkibiy tuzilma</Link>
                        <Link to={'/'}>Tarkibiy tuzilma </Link>
                        <Link to={'/'}>Ochiq ma'lumotlar</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={'/'}>info@agro.uz</Link>
                        <Link to={'/'}>www.agro.uz </Link>
                        <Link to={'/'}>+998 71 206-70-30</Link>
                    </li>
                    <li>
                        <Link to={'to'}>+998 71 206-70-30</Link>
                        <Link to={'to'}>garden@agro.uz </Link>
                        <Link to={'to'}>+998 71 244 46 25</Link>
                    </li>
                </ul>
            </Container>
        </div>
    )
}
