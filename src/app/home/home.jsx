import React from 'react'
import About from '../../components/About/About'
import Card from '../../components/Card/Card'
import ContactHeader from '../../components/contact/contactHeader/ContactHeader'

import Header from '../../components/header/Header'
import Navbar from '../../components/Navbar/Navbar'
import NewsCart from '../../components/NewsCart/NewsCart'
import STA from '../../components/STA/STA'

export default function Home() {
    return (
        <>
            <ContactHeader />
            <Header />
            <Navbar />
            <Card />
            <NewsCart />
            <STA />
            <About />
        </>
    )
}
