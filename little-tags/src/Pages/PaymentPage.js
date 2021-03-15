import React from 'react'
import Navbar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Payment from '../components/Payment/Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'


const promise = loadStripe('pk_test_51HPvTZEm4kUlkaUGOprKB6CIt1RW7nlhHhINLYNBJCTM2m2eSwsML1Lq6eEJmHadidUcmUAP1Rbtq45kC4EW9Iv200K0HUq19q')


function CartPage() {
    return (
        <>
        <Navbar/>      
            <Elements stripe={promise}>
             <Payment />
            </Elements>
             <Footer/>   
       </>
    )
}

export default CartPage
