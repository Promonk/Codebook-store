import React, { useEffect, useState } from 'react';
import { StoreItem } from '../Cart/components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { getProductList } from '../../services';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Drawer } from './components/Drawer';
import { useTitle } from '../../hooks/useTitle';
import { useFilter } from '../../context/FilterContext';

export const Store: React.FC = () => {

  useTitle("Store");

  const {products, initialProductList} = useFilter();

  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('search') || '';
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductList(searchTerm);
        // Initialize product list in context
        initialProductList(data); 
      } catch (error) {
        const errorMessage =
          typeof error === 'object' && error !== null && 'message' in error
            ? (error as { message?: string }).message
            : 'Failed to fetch products';
        toast.error(errorMessage, {
          closeButton: true,
          position: 'bottom-center',
        });
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <main>
      {/* Header */}
      <section className="bg">
        <div className="py-4 px-6 mx-auto max-w-screen-xl lg:py-6 text-center flex">
          <h1 className="text-slate-900 dark:text-white text-2xl font-bold mb-2">Store</h1>
          <div className="ml-auto">
            <button
              onClick={() => setDrawerIsOpen((prev) => !prev)}
              type="button"
              aria-controls="drawer-navigation"
              className="my-2 inline-flex justify-center items-center py-1 px-2.5 text-sm font-medium rounded-lg text-gray-900 bg-slate-50 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <BsThreeDotsVertical />
              <span className="sr-only">Toggle filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {products.map((product:any) => (
              <StoreItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Drawer Filter */}
      <section>
        <Drawer  onTrigger={drawerIsOpen}/>
      </section>
    </main>
  );
};
