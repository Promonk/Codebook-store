import React, { useState, useEffect } from 'react';
import { Rating, Price, Image } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { productType } from '../../../interfaces/productType';
import { useCart } from '../../../context/CartContext';

export const StoreItem = ({ product }: { product: productType }) => {

  const {cartList, addToCart, removeFromCart} = useCart();
  const navigate = useNavigate();
  const {id, name, overview, price, rating, best_seller} = product;
  const [isInCart, setIsInCart] = useState(false);

  const handleAdd = () => {
    addToCart(product);
  }

  const handleRemove = () => {
    removeFromCart(product);
  }

  const routeToDetails = () => {
    navigate(`/product/${id}`);
  }
  
  useEffect(() => {
    const productInCart = cartList.find((item: any) => item.id === product.id);
    if(productInCart){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }
    console.log(product)
  },[product, cartList])

  return (
    <div className="flex-1 relative max-w-sm min-w-[230px] mCard m-2">
      {best_seller && 
        <div className="absolute top-2 right-0">
          <span className="badge best-seller">
            Best Seller
          </span>
        </div>
      }
        
        <div className="max-h-[125px] max-w-sm overflow-hidden" onClick={routeToDetails}>
          <Image product={product} />
        </div>
        <div className="p-5 text-left">
            <h5 className="mb-1 font-bold tracking-tight item-title">
                {name}
            </h5>
            <div className="flex flex-row">
                <div className="flex-1">
                  <Price price={price}/>
                </div>
                <div className="flex-1">
                  <Rating rating={rating}/>
                </div>
            </div>
            <p className="my-1 font-normal text-sm item-text">
                {overview}
            </p>
            <button onClick={routeToDetails} className="item-button details-i-b">
                Details
            </button>
            {product.in_stock && 
              <>
              {isInCart ? 
                <button onClick={handleRemove} className="item-button remove-i-b">
                  Remove
                </button>
                :
                <button onClick={handleAdd} className="item-button add-i-b">
                  Add to cart
                </button>
              }
              </>
            }
            
        </div>
    </div>
  )
}