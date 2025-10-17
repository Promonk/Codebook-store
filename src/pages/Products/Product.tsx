
import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services";
import { Loader, Price, Rating, Tags } from "../../components";
import { productType } from "../../interfaces/productType";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";

export const Product = () => {

  const { id } = useParams();
  const {cartList, addToCart, removeFromCart} = useCart();

  const [product, setProduct] = useState<productType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInCart, setIsInCart] = useState(false);

  useTitle(product ? product.name : "Product");

  useEffect(() => {
  if (!product) return;
    const productInCart = cartList.find((item: any) => item.id === product.id);
    setIsInCart(!!productInCart);
  }, [product, cartList]);

  useEffect(() => {
     const fetchProducts = async() =>{
      try{
        const data = await getProduct(id);
        console.log(data);
        setProduct(data[0]);
      } catch (error) {
        const errorMessage = typeof error === "object" && error !== null && "message" in error
          ? (error as { message?: string }).message
          : "Failed to fetch product";
        toast.error(errorMessage);
      }     
    }
    fetchProducts();
  }, [id]);

  if (!product) return <Loader />;

  const {name, price, rating, long_description, image_local} = product;

  const handleAdd = () => {
    addToCart(product);
  }
  
  const handleRemove = () => {
    removeFromCart(product);
  }
  
  return (
    <main>
      <section className="bg">
          <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 text-center">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1">
                {isLoading && <Loader />}
                <img 
                  className="rounded-lg w-full" 
                  src={image_local} 
                  alt={name} 
                  onLoad={() => setIsLoading(false)}
                  style={{display: isLoading ? "none" : "block"}}
                  />
              </div>
              <div className="flex-1 text-left mx-4">
                <h1 className="item-title text-2xl md:text-2xl font-bold mb-2">{name}</h1>
                <div className="my-2">
                  <Price price={price} />
                </div>
                <div className="my-2">
                  <Rating rating={rating} />
                </div>
                <div className="my-2">
                  <Tags product={product}/>
                </div>
                {product.in_stock &&
                  <div className="my-2">
                    {isInCart ? 
                      <button onClick={handleRemove} className="item-button remove-i-b">
                        Remove
                      </button>
                      :
                      <button onClick={handleAdd} className="item-button add-i-b">
                        Add to cart
                      </button>
                    }
                  </div>
                }
                <p className="flex-1 mb-3 font-normal item-text">{long_description}</p>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}
