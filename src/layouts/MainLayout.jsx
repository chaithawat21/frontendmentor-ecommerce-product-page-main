import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductPage from '../pages/ProductPage'

function MainLayout() {
  return (
    <>
    <Header />
    <main>
        <ProductPage />
    </main>
    <Footer />
    </>
  )
}

export default MainLayout