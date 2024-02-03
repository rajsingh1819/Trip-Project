import React from 'react'


import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Routers from '../../router/Routers'

function Layout() {
    return (
        <>
            <Header />
            <Routers />
            <Footer />
        </>

    )
}

export default Layout