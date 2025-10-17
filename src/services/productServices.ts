export async function getProductList(searchTerm: any){
    const response = await fetch(`${process.env.REACT_APP_HOST}/products?name_like=${searchTerm ? searchTerm : ""}`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}

export async function getProduct(id: any){
    const response = await fetch(`${process.env.REACT_APP_HOST}/products?id=${id}`);
    console.log(response);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}

export async function getFeaturedList(){
    const response = await fetch(`${process.env.REACT_APP_HOST}/featured_products`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}