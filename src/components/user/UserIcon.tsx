
import React, { useEffect, useState } from 'react';
import { LoggedInUser } from './LoggedInUser';
import { LoggedOutUser } from './LoggedOutUser';
import { getUser } from '../../services/dataServices';
import { BsPersonCircle } from 'react-icons/bs';

export const UserIcon = () => {

  const [isOpen, setIsOpen] = useState(false);

  const token = sessionStorage.getItem("token");
  const [userData, setUserData] = useState({name: "", email: "", image: ""} as any);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest('#user-menu-button') &&
        !target.closest('#user-dropdown')
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const fetchUserProfile = async () => {
    const data = await getUser();
    setUserData({
      name: data.name,
      email: data.email,
      image: data.image,
    });
  }

  useEffect(() => {
    if(token){
      fetchUserProfile();
    }
  }, [token])

  return (
    <div className="flex relative items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" onClick={()=> setIsOpen(!isOpen)} className="flex text-sm mx-4 text-slate-500 dark:text-slate-400  rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" >
            <span className="sr-only">Open user menu</span>
            {(token ? <img className="w-8 h-8 rounded-full" src={userData.image} alt="user" /> : <BsPersonCircle className="w-8 h-8" /> )}
        </button>
        {/* Dropdown menu  */}
        {isOpen && 
        <div className="z-50 absolute min-w-[200px] right-0 top-10 my-4 text-base list-none bg-slate-50 divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            {(token ? <LoggedInUser userData={userData} />: <LoggedOutUser />)}
        </div>
        }
    </div>
  )
}
