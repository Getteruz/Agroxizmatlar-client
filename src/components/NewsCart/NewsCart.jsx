import React from 'react'
import cls from './NewsCart.module.scss'
import Container from '../ul/container/Container'
import Theme from '../ul/Theme/Theme'

export default function NewsCart() {
    return (
        <div className={cls.NewsCart}>
            <Container>
                <Theme title={'YANGILIKLAR'} />
            </Container>
            <div className={cls.NewsCart__bottom}>

            </div>
        </div>
    )
}
