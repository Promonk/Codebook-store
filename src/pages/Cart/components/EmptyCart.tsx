import { BsCart } from "react-icons/bs"
import { Link } from "react-router-dom"

export const EmptyCart = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 ">
        <div className="my-5">
            <BsCart className="text-green-600 text-7xl mb-5 mx-auto" />
            <p>Oops! Your cart looks empty!</p>
            <p>Add eBooks to your cart from our store collection.</p>
        </div>
        <Link to="/store" type="button" className="large-button">Continue Shopping</Link>
    </section>
  )
}