import React, { useEffect, useState } from 'react'
import { Filter } from './Filter'
import { on } from 'events';

export const Drawer = ({onTrigger}:any) => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const drawerBaseClass =
        'fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-slate-50 w-64 dark:bg-gray-800 border-r-2 mBorder';
    const drawerClass = `${drawerBaseClass} ${drawerIsOpen ? 'transform-none' : '-translate-x-full'}`;
    const toggleDrawer = () => setDrawerIsOpen((prev) => !prev);

    useEffect(() => {
        toggleDrawer();
    }, [onTrigger]);

  return (
    <div id="drawer-navigation" className={drawerClass} aria-labelledby="drawer-navigation-label">
          <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 dark:text-gray-400">
            Filters
          </h5>
          <button
            onClick={toggleDrawer}
            type="button"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close filters</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <Filter />
          </div>
        </div>
  )
}