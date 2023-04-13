import React from 'react'
import Card from '../../components/Card/Card'
import ContactHeader from '../../components/contact/contactHeader/ContactHeader'

import Header from '../../components/header/Header'
import Navbar from '../../components/Navbar/Navbar'
import NewsCart from '../../components/NewsCart/NewsCart'

export default function Home() {
    return (
        <>
            <ContactHeader />
            <Header />
            <Navbar />
            <Card />
            <NewsCart />
        </>
    )
}
