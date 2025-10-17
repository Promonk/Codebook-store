import React, { useState } from 'react'
import { Loader } from '../other/Loader';

interface Product {
  image_local: string;
  name: string;
}

export const Image = ({ product }: { product: Product }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { image_local, name } = product;

  return (
    <>
      {isLoading && !hasError && <Loader />}
      {hasError ? (
        <div className="rounded-t-lg w-full bg-gray-200 flex items-center justify-center h-48">
          <span className="text-gray-500">Image not available</span>
        </div>
      ) : (
        <img
          className="rounded-t-lg w-full cursor-pointer"
          src={image_local}
          alt={name}
          onLoad={() => setIsLoading(false)}
          onError={() => { setIsLoading(false); setHasError(true); }}
          style={{ display: isLoading ? "none" : "block" }}
        />
      )}
    </>
  );
}