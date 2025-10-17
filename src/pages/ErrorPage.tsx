import React from 'react'
import { useTitle } from '../hooks/useTitle';

export const ErrorPage = () => {

  useTitle("Error");
  
  return (
    <main>
        <section className="bg">
          <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 text-center">
            <h1 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-bold mb-2">Error!</h1>
          </div>
        </section>
    </main>
    
  )
}