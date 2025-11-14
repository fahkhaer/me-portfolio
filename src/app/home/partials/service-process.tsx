import Section from '@/src/components/layouts/Section';
import PhasesAccordion, {
  PhasesAccordionItem,
} from '@/src/components/ui/phases-accordion';
import { serviceProcessData } from '@/src/constants/services-process-data';
import React from 'react';

function ServiceProcess() {
  return (
    <Section
      title='Let’s Clear Things Up'
      subtitle='I’ve answered a few questions that usually come up when working with a frontend developer like me.'
      id='services-process' className='bg-[#F5F5F5] mx-auto py-20 '
    >
      {/* content */}
      <PhasesAccordion>
        {serviceProcessData.map((item, index) => (
          <PhasesAccordionItem key={index} {...item} />
        ))}
      </PhasesAccordion>
    </Section>
  );
}

export default ServiceProcess;
