import React from 'react';
import * as Accordion from "@radix-ui/react-accordion";

export const Questions = () => {

  return (
    <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6">
      <div className="text-center w-full">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Questions?</h3>
      </div>
      <Accordion.Root type="single" collapsible>
        {/* Accordion Item 1 */}
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger className="accordion-trigger flex items-center justify-between w-full py-5 font-medium rtl:text-right text-slate-500 border-b border-slate-200 dark:border-slate-700 dark:text-slate-400 gap-3">
                Why should I use Codebooks
              {/* <ChevronDownIcon aria-hidden /> */}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content py-5 border-b border-slate-200 dark:border-slate-700">
            <p className="mb-2 text-slate-500 dark:text-slate-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Accordion Item 2 */}
        <Accordion.Item value="item-2">
          <Accordion.Header>
            <Accordion.Trigger className="accordion-trigger flex items-center justify-between w-full py-5 font-medium rtl:text-right text-slate-500 border-b border-slate-200 dark:border-slate-700 dark:text-slate-400 gap-3">
              Can I access my eBooks on mobile?
              {/* <ChevronDownIcon aria-hidden /> */}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content py-5 border-b border-slate-200 dark:border-slate-700">
            <p className="mb-2 text-slate-500 dark:text-slate-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
            <p className="text-slate-500 dark:text-slate-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Accordion Item 3 */}
        <Accordion.Item value="item-3">
          <Accordion.Header>
            <Accordion.Trigger className="accordion-trigger flex items-center justify-between w-full py-5 font-medium rtl:text-right text-slate-500 border-b border-slate-200 dark:border-slate-700 dark:text-slate-400 gap-3">
              Do you offer refunds?
              {/* <ChevronDownIcon aria-hidden /> */}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content py-5 border-b border-slate-200 dark:border-slate-700">
            <p className="mb-2 text-slate-500 dark:text-slate-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
            <p className="text-slate-500 dark:text-slate-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      
    </div>
  )

}