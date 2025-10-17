import React, { useEffect, useState } from 'react'
import { StoreItem } from '../../Products/components/StoreItem';
import { getFeaturedList } from "../../../services";
import { toast } from 'react-toastify';

export const Featured = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async() =>{
      try{
        const data = await getFeaturedList();
        setProducts(data);
      } catch(error){
        const errorMessage = typeof error === "object" && error !== null && "message" in error
          ? (error as { message?: string }).message
          : "Failed to fetch featured items";
        toast.error(errorMessage || "Failed to fetch featured items", {closeButton: true, position: "bottom-center" });
      }      
    }
    fetchProducts();
  }, [])

  return (
    <>
    <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 text-center">
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Items</h3>
      <div className="flex flex-col md:flex-row" >
        {products.map((product: any) => (
            <StoreItem key={product.id} product={product} />
        ))}
      </div>
    </div>
        
    </>
  )
}