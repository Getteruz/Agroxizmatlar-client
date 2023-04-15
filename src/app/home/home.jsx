import React from 'react'
import About from '../../components/About/About'
import Card from '../../components/Card/Card'
import ContactFooter from '../../components/contact/contactFooter/contactFooter'
import ContactHeader from '../../components/contact/contactHeader/ContactHeader'
import Footer from '../../components/footer/Footer'

import Header from '../../components/header/Header'
import Navbar from '../../components/Navbar/Navbar'
import NewsCart from '../../components/NewsCart/NewsCart'
import Partners from '../../components/partners/Partners'
import Questions from '../../components/questions/Questions'
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
            <Questions />
            <Partners />
            <ContactFooter />
            <Footer />
        </>
    )
}
