import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../ul/container/Container'
import cls from './Navbar.module.scss'
import img from '../../img/image.svg'
import img2 from '../../img/image 22.png'

export default function Navbar() {
    return (
        <div className={cls.Navbar} >
            <Container>
                <ul className={cls.Navbar__list}>
                    <li className={cls.Navbar__item}><Link to={'/'}>Bosh sahifa</Link></li>
                    <li className={cls.Navbar__item}><Link to={'/about'}>Agentlik haqda</Link></li>
                    <li className={cls.Navbar__item}><Link to={'/service'}>Axborot xizmati</Link></li>
                    <li className={cls.Navbar__item}><Link to={'/docs'}> Me'yoriy hujjatlar</Link></li>
                    <li className={cls.Navbar__item}><Link to={'/data'}>Ochiq ma'lumotlar</Link></li>
                    <li className={cls.Navbar__item}><Link to={'/cridit'}>Online kredit </Link></li>
                    <li className={cls.Navbar__item}><Link to={'/contact'}>Bog'lanish </Link></li>
                </ul>
            </Container>
            <Container className={cls.Navbar__bottom}>
                <div>
                    <img src={img} alt="img" />
                    <img src={img2} alt="img" />
                </div>

            </Container>

        </div>
    )
}
