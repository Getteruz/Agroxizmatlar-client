import React from 'react'
import cls from './Theme.module.scss'
export default function Theme({ title }) {
    return (
        <h2 className={cls.Theme}>
            {title}
        </h2>
    )
}
