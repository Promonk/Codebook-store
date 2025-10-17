import { Image, Price } from '../../../components/';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

export const CartItem = ({ product }: { product: any }) => {

  const {removeFromCart} = useCart();
  const navigate = useNavigate();

  const {id, name, overview, price} = product;

  const handleRemove = () => {
    removeFromCart(product);
  }

  const routeToDetails = () => {
  navigate(`/product/${id}`);
}

  return (
  <>
    <div className="mb-4 border-b-2 border-slate-200 dark:border-slate-700 ">
      <div className="flex flex-col md:flex-row">
        <div className="max-h-[150px] max-w-sm md:max-w-[150px] overflow-hidden" onClick={routeToDetails}>
          <Image product={product} />
        </div>
        <div className="px-4 pb-2 text-left">
            <h5 className="flex-1 mb-2 text-normal font-bold tracking-tight mText">{name}</h5> 
            <Price price={price}/>
            <button onClick={handleRemove} type="button" className="item-button remove-i-b">
              Remove
            </button>
            <p className="flex-1 mb-3 text-sm item-text">{overview}</p>
        </div>
      </div>
    </div>
  </>

  )
}