export const FilterReducer = (state: any, action: any) => {
 const {type, payload} = action;

 switch(type){
    case "PRODUCT_LIST":
        return {productList: payload.products};
    case "ONLY_IN_STOCK":
        return {...state, onlyInStock: payload.onlyInStock};
    case "BEST_SELLER_ONLY":
        return {...state, bestSellerOnly: payload.bestSellerOnly};
    case "SORT_BY":
        return {...state, sortBy: payload.sortBy};
    case "RATINGS":
        return {...state, ratings: payload.ratings};
    case "CLEAR_FILTERS":
        return {
            ...state,
            onlyInStock: false,
            bestSellerOnly: false,
            sortBy: null,
            ratings: null
        };
    default:
        throw new Error("Unknown action type" + type);
 }
}
