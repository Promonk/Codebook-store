import React from 'react'

export const LoggedOutUser = () => {
    const handleLogin = () => { 
        try {
            window.location.href = "/login";
        } catch (error) {
            // Handle navigation error if necessary
            console.error('Navigation error:', error);
        } finally {
            //setIsOpen(false);
        }
    };

    const handleSignup = () => { 
        try {
            window.location.href = "/register";
        } catch (error) {
            // Handle navigation error if necessary
            console.error('Navigation error:', error);
        } finally {
            //setIsOpen(false);
        }
    };

  return (
    <>
    <div className="px-4 py-3">
        <span className="block text-sm whitespace-nowrap mText">Guest</span>
    </div>
    <div className="py-2 flex flex-col">
        <div onClick={handleSignup} 
            className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Register
        </div>
        <div onClick={handleLogin} 
            className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Log In
        </div>
    </div>
    </>
  )
}