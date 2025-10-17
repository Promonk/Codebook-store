import React from 'react'

interface ProductTagProps {
  best_seller?: boolean;
  in_stock?: boolean;
  size: number;
}

export const Tags = ({ product }: { product: ProductTagProps }) => {
 
  const {best_seller, in_stock, size} = product;
  const formattedSize = typeof size === "number" && !isNaN(size) ? `${size}MB` : "Unknown Size";
  
  return (
    <>
        {best_seller && 
            <span aria-label="Best Seller" className="badge best-seller">Best Seller</span>
        }
        {in_stock ? 
            <span aria-label="In Stock" className="badge in-stock">In Stock</span>
            : 
            <span aria-label="Not In Stock" className="badge not-in-stock">Not In Stock</span>
        }
        <span aria-label={formattedSize} className="badge size">{formattedSize}</span>
    </>
  )
}
