import React from 'react'
import { Testimonial } from './Testimonial';
import { testimonials } from '../../../data/testimonials';
import { TestimonialContent } from '../../../interfaces/testimonialType';

export const Testimonials = () => {

  return (
    <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6">
      <div className="text-center w-full">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Testimonials</h3>
      </div>
      <div>

      <div className="grid border border-slate-200 rounded-lg shadow-xs dark:border-slate-700 md:grid-cols-2 bg-slate-50 dark:bg-slate-800">
          {testimonials.map((t: TestimonialContent) => (
            <Testimonial key={t.id} content={t} />
          ))}
      </div>

      </div>
    </div>
  )
}