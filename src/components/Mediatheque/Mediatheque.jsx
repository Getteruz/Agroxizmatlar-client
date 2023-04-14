import React from 'react'
import Container from '../ul/container/Container'
import cls from './Mediatheque.module.scss'

export default function Mediatheque() {
    return (
        <div className={cls.Mediatheque}>
            <Container>
                <h3 className={cls.Mediatheque__title}>MEDIATEKA</h3>
            </Container>
        </div>
    )
}
