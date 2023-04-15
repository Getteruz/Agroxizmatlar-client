import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Container from '../ul/container/Container'
import cls from './Navbar.module.scss'
import img1 from '../../img/image.svg'
import img2 from '../../img/image 22.png'
import getElementSize from '../../utils/getElementSize'

const data = [
    {
        id: 1,
        img: img1,
        title: "Bog'dorchilik va issiqxona xo'jaliklarini barqaror rivojlanishini",
        data: '28 Mart 2023'
    },
    {
        id: 2,
        img: img2,
        title: "Bog'dorchilik va issiqxona xo'jaliklarini barqaror rivojlanishini",
        data: '28 Mart 2023'
    }
]
const link = [
    {
        id: 1,
        link: '/',
        label: 'Bosh sahifa'
    },
    {
        id: 2,
        link: '/about',
        label: 'Agentlik haqda'
    },
    {
        id: 3,
        link: '/service',
        label: 'Axborot xizmati'
    },
    {
        id: 4,
        link: '/docs',
        label: "Me'yoriy hujjatlar"
    },
    {
        id: 5,
        link: '/data',
        label: "Ochiq ma'lumotlar"
    },
    {
        id: 6,
        link: '/Online kredit',
        label: 'Bosh'
    },
    {
        id: 7,
        link: '/contact',
        label: "Bog'lanish"
    },

]

export default function Navbar() {
    const [size, setSize] = useState({ width: 131, height: 49, x: 2, y: 2 })
    const router = useLocation()

    const func = () => {
        if (router.pathname === '/') setSize({ width: 131, height: 49, x: 2, y: 2 })
        const el = document.getElementById(link.find(link => link.link === router.pathname)?.id || link[0]?.id)
        setSize(el ? getElementSize(el) : { width: 131, height: 49, x: 2, y: 2 })

    }

    useEffect(() => {
        func()
    }, [router, link])
    return (
        <div className={cls.Navbar} >
            <Container>
                <div className={cls.Navbar__list}>
                    {link?.map(e => (
                        <NavLink
                            key={e.id}
                            id={e.id}
                            className={cls.Navbar__item}
                            to={e.link}
                            active={true}
                            whiteMode={true}
                            onMouseOver={(el) => {
                                setSize(getElementSize(el.target))
                                el.target.style.color = "#017802"

                            }}

                            onMouseLeave={(el) => {
                                func()
                                el.target.style.color = "black"
                            }}
                        >
                            {e.label}
                        </NavLink>

                    ))}

                    <div className={cls.Navbar__active}
                        style={{
                            width: size.width,
                            height: size.height,
                            top: size.y,
                            left: size.x
                        }}
                    />

                </div>
            </Container>
            <Container className={cls.Navbar__bottom}>
                {
                    data?.map(e => (
                        <div className={cls.Navbar__Card} key={e?.id}>
                            <img src={e.img} alt="img" />
                            <p >{e?.title}</p>
                            <p>{e?.data}</p>
                        </div>
                    ))
                }


            </Container>

        </div>
    )
}
