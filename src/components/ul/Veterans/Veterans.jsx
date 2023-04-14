import React from 'react'
import Button from '../button/button'
import cls from './Veterans.module.scss'

export default function Veterans({ user }) {

    return (
        <div className={cls.Veterans}>
            <div className={cls.Veterans__avater}>
                {
                    user && user?.map((e) => (
                        <div className={cls.Veterans__avaterone}>
                            <img key={e.id} src={e?.img} alt="img" />
                        </div>
                    ))
                }
            </div>
            <Button title={'Barchasini ko\'rish'} />
        </div>
    )
}
