
import React, { KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const Search: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (searchTerm: string) => {
    console.log('Search term:', searchTerm);
      navigate(`/store?search=${searchTerm}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(e.currentTarget.value);
    }
  };

  return (
    <div className="relative hidden md:inline-block text-xl text-slate-500 dark:text-slate-400 rounded-lg p-2.5 mx-1">
      <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
        <BsSearch />
        <span className="sr-only">Search icon</span>
      </div>
      <input
        type="text"
        id="search-navbar"
        onKeyDown={handleKeyDown}
        className="block w-full p-2 ps-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
    </div>
  );
};
