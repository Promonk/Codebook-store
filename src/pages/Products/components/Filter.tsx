
import { useFilter } from '../../../context/FilterContext';

export const Filter = () => {

  const {state, dispatch} = useFilter();

  const handleClear = () =>{
      dispatch({type: "CLEAR_FILTERS"});
  }

  const handleBestSeller = () => {
      dispatch({type: "BEST_SELLER_ONLY", payload: {bestSellerOnly: !state.bestSellerOnly}});
  }

  const handleInStock = () => { 
      dispatch({type: "ONLY_IN_STOCK", payload: {onlyInStock: !state.onlyInStock}});   
  }

  const handleSort = (sortBy: string) => {
      dispatch({type: "SORT_BY", payload: {sortBy: sortBy}});
  }

  const handleRatings = (rate: string) => {
      dispatch({type: "RATINGS", payload: {ratings: rate}});
  }

  return (
    <>
    <section className="mb-4">
      <h4 className="text-gray-500 dark:text-gray-400">Price</h4>
      <div className="flex items-center">
          <input onChange={() => handleSort("LOW_TO_HIGH")} 
                 id="priceLow" 
                 type="radio" 
                 value="" 
                 checked={state.sortBy === "LOW_TO_HIGH"}
                 name="price-radio" 
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="priceLow" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Low to High</label>
      </div>
      <div className="flex items-center">
          <input onChange={() => handleSort("HIGH_TO_LOW")} 
                 id="priceHigh" 
                 type="radio" 
                 value=""
                 checked={state.sortBy === "HIGH_TO_LOW"}
                 name="price-radio" 
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="priceHigh" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">High to Low</label>
      </div>
    </section>
    <section className="mb-4">
      <h4 className="text-gray-500 dark:text-gray-400">Rating</h4>
      <div className="flex items-center">
          <input onChange={() => handleRatings("4STARSABOVE")} 
                 id="fourStar" 
                 type="radio" 
                 value="4StarsAbove" 
                 checked={state.ratings === "4STARSABOVE"}
                 name="rating-radio" 
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="fourStar" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">4 Stars +</label>
      </div>
      <div className="flex items-center">
          <input onChange={() => handleRatings("3STARSABOVE")} 
                 id="threeStar" 
                 type="radio" 
                 value="3StarsAbove" 
                 checked={state.ratings === "3STARSABOVE"}
                 name="rating-radio" 
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="threeStar" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">3 Stars +</label>
      </div>
      <div className="flex items-center">
          <input onChange={() => handleRatings("2STARSABOVE")} 
                 id="twoStar" 
                 type="radio" 
                 value="2StarsAbove" 
                 checked={state.ratings === "2STARSABOVE"}
                 name="rating-radio" 
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="twoStar" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">2 Stars +</label>
      </div>
      <div className="flex items-center">
          <input onChange={() => handleRatings("1STARSABOVE")} 
                 id="oneStar" 
                 type="radio" 
                 value="1StarsAbove" 
                 checked={state.ratings === "1STARSABOVE"}
                 name="rating-radio" 
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="oneStar" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">1 Star +</label>
      </div>
    </section>
    <section className="mb-4">
      <h4 className="text-gray-500 dark:text-gray-400">Other</h4>
      <div className="flex items-center">
          <input onChange={handleBestSeller} 
                 id="bestseller-checkbox" 
                 type="checkbox" 
                 value="" 
                 checked={state.bestSellerOnly}
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="bestseller-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bestsellers Only</label>
      </div>
      <div className="flex items-center mb-4">
          <input onChange={handleInStock} 
                 id="instock-checkbox" 
                 type="checkbox" 
                 value="" 
                 checked={state.onlyInStock}
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="instock-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Instock Only</label>
      </div>
    </section>
    <section>
      <button onClick={handleClear} className="my-2 inline-flex justify-center items-center py-1 px-2.5 text-sm font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
        Clear Filters
      </button>
    </section>
    </>
  )
}