import React, { useState } from 'react'
import Container from '../ul/container/Container'
import STABtn from '../ul/STABtn/STABtn'
import Theme from '../ul/Theme/Theme'
import cls from './STA.module.scss'
import img1 from '../../img/fi_archive.svg'
import img2 from '../../img/u_bag.svg'
import img3 from '../../img/u_map.svg'
import AnnouncementsCard from '../ul/Announcements/AnnouncementsCard'
export default function STA() {
    const [link, setLink] = useState('Announcements')
    return (
        <div className={cls.STA}>
            <Container>
                <Theme title="STA" />
                <div className={cls.STA__btn}>
                    <STABtn title={'E\'lonlar va tenderlar'} img={img1} onClick={() => setLink('Announcements')} />
                    <STABtn title={'Bo\'sh ish o\'rinlari'} img={img2} onClick={() => setLink('freeWork')} />
                    <STABtn title={'Hududiy bo\'limlar'} img={img3} onClick={() => setLink('state')} />
                </div>
                {
                    (() => {
                        if (link === "Announcements") {
                            return <AnnouncementsCard />
                        } else if (link === "freeWork") {
                            return <h1>workt</h1>
                        } else if (link == "state") {
                            return <h1>state</h1>
                        } else {
                            return <AnnouncementsCard />
                        }
                    })()
                }
            </Container>
        </div>
    )
}
