import { createContext, useContext, useReducer } from "react";

import { FilterReducer } from "../reducers";
import { productType } from "../interfaces/productType";

const filterInitialState: any = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null
}

const FilterContext = createContext<any>(filterInitialState);

export const FilterProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(FilterReducer, filterInitialState);

    const initialProductList = (products: any) => {
        dispatch({type: "PRODUCT_LIST", payload: {products: products}});
    }

    //dispatch({type: "BEST_SELLER_ONLY"});
    const bestSeller = (products: Array<productType>) => {
        return products.filter((prod:productType) => prod.best_seller === true);
    }

    //dispatch({type: "ONLY_IN_STOCK"});
    const onlyInStock = (products: Array<productType>) => {
        return products.filter((prod:productType) => prod.in_stock === true);
    }

    //dispatch({type: "SORT_BY", payload: state.sortBy});
    const sort = (products: Array<productType>) => {
        console.log("Sorting by:", state.sortBy);
        if(state.sortBy === "LOW_TO_HIGH"){
            return products.sort((a:productType,b:productType) => a.price - b.price);
        }
        if(state.sortBy === "HIGH_TO_LOW"){
            return products.sort((a:productType,b:productType) => b.price - a.price);
        }
    }

    //dispatch({type: "RATINGS", payload: rate});
    const ratings = (products: Array<productType>) => {
        if(state.ratings === "4STARSABOVE"){
            return products.filter((prod:productType) => prod.rating >= 4);
        }
        if(state.ratings === "3STARSABOVE"){
            return products.filter((prod:productType) => prod.rating >= 3);
        } 
        if(state.ratings === "2STARSABOVE"){
            return products.filter((prod:productType) => prod.rating >= 2);
        }
        if(state.ratings === "1STARSABOVE"){
            return products.filter((prod:productType) => prod.rating >= 1);
        }
    }

    const filteredProducts = () => {
        let filteredList = state.productList;
        if(state.bestSellerOnly){
            filteredList = bestSeller(filteredList);
        }
        if(state.onlyInStock){
            filteredList = onlyInStock(filteredList);
        }
        if(state.sortBy){
            filteredList = sort(filteredList);
        }
        if(state.ratings){
            filteredList = ratings(filteredList);
        }
        return filteredList;
    }
 
    const value = {
        state,
        dispatch,
        products: filteredProducts(),
        initialProductList
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);
