import React from 'react'
import cls from './button.module.scss'

export default function Button({ title }) {
    return (
        <button className={cls.button}>
            {title}
        </button>
    )
}
