import { NavLink, useNavigate } from "react-router-dom";

import { BsCartFill, BsSearch, BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { UserIcon } from "../../components";
import { Search } from "../other/Search";
import { useCart } from "../../context/CartContext";

export const Header = (props: any) => {

  const {cartList} = useCart();

  const navigate = useNavigate();
  const [itemsInCart, setItemsInCart] = useState(0);
  

  useEffect(() => {
    setItemsInCart(cartList.length);
  },[cartList])

  const handleLogoClick = () =>{
    return navigate("/");
  }

  return (
    <>
      <nav className="bg-slate-50 dark:bg-slate-950 border-b-2 mBorder">
        <div className="max-w-screen-xl flex flex-wrap flex-row items-center justify-between mx-auto p-4">
          <span className="flex items-center cursor-pointer space-x-3 mb-4 md:mb-0 px-2" onClick={handleLogoClick}>
              <img src="/assets/images/logo.png" className="h-10" alt="Codebook Logo" />
              <span className="self-center hidden md:block text-2xl font-semibold whitespace-nowrap dark:text-white">Codebooks</span>
          </span>
          <div className="flex md:order-2 items-center">

            <Search />

            <button type="button" className="relative flex text-sm mx-4  text-slate-500 dark:text-slate-400  rounded-full md:me-0 ">
              <NavLink to="cart" >
                <BsCartFill className="w-8 h-8"/>
                <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 dark:border-slate-800">
                    {itemsInCart}
                </span>
               </NavLink>
            </button>

            <button onClick={props.togggleDarkMode} id="theme-toggle" type="button" className="relative flex text-sm mx-4 text-slate-500 dark:text-slate-400  rounded-full md:me-0 ">
                <BsFillSunFill className="w-8 h-8 dark:inline-block hidden " />
                <BsMoonFill className="w-8 h-8 dark:hidden inline-block " />
            </button>

            <UserIcon />

          </div>
          <div className="relative block md:hidden w-full text-xl text-slate-500 dark:text-slate-400 focus:outline-none focus:ring-0 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-lg  p-2.5 mx-1">
              <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                <BsSearch />
                <span className="sr-only">Search icon</span>
              </div>
               <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
        </div>
      </nav>

    </>
  )
}