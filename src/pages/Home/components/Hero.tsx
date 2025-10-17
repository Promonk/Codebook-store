
import React, { useState } from 'react'
import { Loader } from '../../../components/other/Loader';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const navigateToStore = () => {
    navigate("/store");
  }

  return (
    <section className="bg-center bg-no-repeat mb-2 lg:mb-4 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="flex flex-col md:flex-row-reverse rtl md:ltr items-center justify-center py-8 px-4 mx-auto max-w-screen-xl lg:py-8">
        <div className="m-2 w-full flex-1">
             {
            isLoading && 
              <Loader />
            }
            <div className="object-cover w-full rounded-lg h-full border border-slate-800 ">
              <img 
                src="/assets/images/onLaptop.jpg" 
                alt="did somebody say potatoes?"
                onLoad={() => setIsLoading(false)}
                style={{display: isLoading ? "none" : "block"}}
                className="rounded-lg"
                />
            </div>

        </div>
        <div className="w-full flex-1 m-2">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">The Ultimate eBook Store</h1>
            <p className="text-lg font-normal text-slate-400 mb-6">Codebooks is the world's most popular and authoritative source for eBooks and eBook related merch. Find ratings and access to the newest eBooks digitally.</p>
            <button onClick={navigateToStore} className="inline-flex justify-center large-button">
                Explore eBooks
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
        </div>
        
      </div>
    </section>
  )
}