import React, { useEffect, useState } from 'react';
import { CartItem } from "./components";
import { FormatCurrency } from '../../utilities/FormatCurrency';
import { useTitle } from '../../hooks/useTitle';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { EmptyCart } from './components/EmptyCart';
import { Checkout } from './components/Checkout';


export const Cart = () => {

  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const {cartList, total} = useCart();

  useTitle("Cart");

  const [formattedTotal, setFormattedTotal] = useState("");
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    if(!token){
      navigate("/login");
      return;
    }
  }, [token])

  useEffect(() => {
    setFormattedTotal(FormatCurrency(total));
  },[total]);

  return (
    
    <main >
        <section className="bg">
          <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 ">
            
            <h1 className="text-white text-2xl md:text-2xl font-bold mb-2">Cart</h1>

            <div className="flex flex-col w-full md:flex-row-reverse">
              <div className="flex-1">
                  <div className="flex flex-row text-1xl font-bold p-2 md:text-right mText">
                    <div className="flex-1">Cart Total:</div>
                    <div className="flex-1">{formattedTotal}</div>
                  </div>
                  <div>
                    <button onClick={() => setCheckout(true)} type="button" className="large-button float-right">
                      Place Order
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <div className="flex flex-col flex-wrap w-full py-4 px-4 mx-auto max-w-screen-xl lg:py-6">
                    {cartList?.length > 0 ?
                      cartList.map((product: any) => (
                        <CartItem key={product.id} product={product} />
                      )) :
                        <EmptyCart />
                    }        
                  </div>
                </div>
            </div>

          </div>
        </section>
        {checkout && <Checkout setCheckout={setCheckout} />}
    </main>
  )
}