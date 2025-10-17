import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-slate-50 rounded-lg shadow-sm dark:bg-slate-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/assets/images/logo.png" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Codebooks</span>
                </div>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-500 sm:mb-0 dark:text-slate-400">
                    <li>
                        <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:underline me-4 md:me-6">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-slate-200 sm:mx-auto dark:border-slate-700 lg:my-8" />
            <span className="block text-sm text-slate-500 sm:text-center dark:text-slate-400">© 2025 Codebooks™. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
