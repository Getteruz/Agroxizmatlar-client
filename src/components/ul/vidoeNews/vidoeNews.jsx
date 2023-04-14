import React from 'react'
import cls from './vidoeNews.module.scss'
export default function VidoeNews({ news }) {
    return (
        <div className={cls.vidoeNews__wrap}>
            <div className={cls.vidoeNews}>
                <img className={cls.vidoeNews__img} src={news?.file} alt="img" />
                <p className={cls.vidoeNews__text}>{news?.text}</p>
            </div>
            <div className={cls.vidoeNews__box}></div>
            <div className={cls.vidoeNews__box2}></div>
        </div>
    )
}
