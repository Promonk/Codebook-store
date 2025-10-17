
import { Rating, Price, Image } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { productType } from '../../../interfaces/productType';

export const LibraryItem = ({ product }: { product: productType }) => {

  const navigate = useNavigate();

  const {id, name, overview, price, rating, best_seller} = product;
  
  const routeToDetails = () => {
    navigate(`/product/${id}`);
  }
  
  return (
    <div className="flex-1 relative max-w-sm min-w-[230px] mCard m-2">
      {best_seller && 
        <div className="absolute top-2 right-0">
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
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
            <p className="my-1 font-normal text-sm item-text">
                {overview}
            </p>
            <button onClick={routeToDetails} className="item-button details-i-b">
                Download
            </button>
            <button className="item-button details-i-b">
                Stream
            </button>
        </div>
    </div>
  )
}