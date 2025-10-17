import React from 'react'
import { Link } from 'react-router-dom'

export const OrderFail = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 item-title rounded">
        <div className="my-5">
            <p className="bi bi-exclamation-circle text-red-500 text-7xl mb-5"></p>
            <p>Payment failed, please try again!</p>     
        </div>
        <div className="my-5">
            <p>Your order is not confirmed.</p>
            <p>Connect <span className="">codebook@example.com</span> for support.</p>
        </div>
        <Link to="/cart" type="button" className="large-button">Check Cart Again<i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}