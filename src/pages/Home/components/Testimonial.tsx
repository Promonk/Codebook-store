import React from 'react'
import { TestimonialContent } from '../../../interfaces/testimonialType';

export const Testimonial = ({ content }: { content: TestimonialContent }) => {

    const {title, text, person} = content;
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-slate-50 border-b border-slate-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-slate-800 dark:border-slate-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-slate-700 lg:mb-8 dark:text-slate-400">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
            <p className="my-4">{text}</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src={person.icon} alt={person.name} />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>{person.name}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 ">{person.title}</div>
            </div>
        </figcaption>    
    </figure>
  )
}