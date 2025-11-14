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
    <AccordionItem value={`item-${index}`} className='border-b border-neutral-300 py-4'>
      <AccordionTrigger className='flex w-full items-center justify-between gap-4'>
        <div className='flex items-center gap-6'>
          {/* number on left (01, 02, 03…) */}
          <span className='text-lg font-semibold text-neutral-900 w-10'>
            {String(index).padStart(2, '0')}
          </span>

          {/* title */}
          <span className='text-xl font-semibold text-neutral-900'>
            {title}
          </span>
        </div>
      </AccordionTrigger>

      <AccordionContent className='pl-16 pr-10 text-neutral-700 text-base leading-relaxed'>
        {description}
      </AccordionContent>
    </AccordionItem>
  );
};
