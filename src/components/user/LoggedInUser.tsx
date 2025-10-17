import React from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authServices';

export const LoggedInUser = ({userData}: any) => {

  const {name} = userData;

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  }

  const navigateToProfile = () => {
    navigate("/profile");
  }

  return (
    <>
    <div className="px-4 py-3">
        <span className="block text-sm whitespace-nowrap mText">{name}</span>
    </div>
    <div className="py-2 flex flex-col">
        <div onClick={navigateToProfile} 
            className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Profile
        </div>
        <div onClick={handleLogout} 
            className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Log Out
        </div>
    </div>
    </>
  )
}