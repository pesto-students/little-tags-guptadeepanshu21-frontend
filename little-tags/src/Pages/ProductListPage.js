import React from 'react'
import Navbar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import ProductList from '../components/Product-List/ProductList'

function ProductListPage() {
    return (
        <>
         <Navbar/>
         <ProductList/>
         <Footer/>   
        </>
    )
}

export default ProductListPage
