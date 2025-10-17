import React from 'react'
import { Link } from 'react-router-dom'

export const OrderSuccess = ({data} : any) => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 item-title rounded">
        <div className="my-5">
            <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
            <p>Thank you {data.user.name} for the order!</p>
            <p>Your Order ID: {data.id}</p>          
        </div>
        <div className="my-5">
            <p>Your order is confirmed.</p>
            <p>Please check your email ({data.user.email}) for the eBook.</p>
            <p className="my-5">Payment ID: </p>
        </div>
        <Link to="/store" type="button" className="large-button">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}