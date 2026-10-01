import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/src/components/ui/accordion';

type PhasesAccordionItemElement = React.ReactElement<PhasesAccordionItemProps>;

type PhasesAccordionProps = {
  children: PhasesAccordionItemElement | PhasesAccordionItemElement[];
};

const PhasesAccordion: React.FC<PhasesAccordionProps> = ({ children }) => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full space-y-4'
    >
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child, { index: idx + 1 })
      )}
    </Accordion>
  );
};

type PhasesAccordionItemProps = {
  index?: number;
  title: string;
  description: string;
};

export default PhasesAccordion;

export const PhasesAccordionItem: React.FC<PhasesAccordionItemProps> = ({
  index,
  title,
  description,
}) => {
  return (
    <AccordionItem value={`item-${index}`} className='border-b border-neutral-300 py-3 sm:py-4'>
      <AccordionTrigger className='flex w-full items-center justify-between gap-4'>
        <div className='flex min-w-0 items-center gap-3 sm:gap-6'>
          {/* number on left (01, 02, 03…) */}
          <span className='w-8 shrink-0 text-base font-semibold text-neutral-900 sm:w-10 sm:text-lg'>
            {String(index).padStart(2, '0')}
          </span>

          {/* title */}
          <span className='text-left text-sm font-semibold text-neutral-900 sm:text-lg md:text-xl'>
            {title}
          </span>
        </div>
      </AccordionTrigger>

      <AccordionContent className='pl-11 pr-2 text-sm leading-6 text-neutral-700 sm:pl-16 sm:pr-10 sm:text-base sm:leading-relaxed'>
        {description}
      </AccordionContent>
    </AccordionItem>
  );
};
