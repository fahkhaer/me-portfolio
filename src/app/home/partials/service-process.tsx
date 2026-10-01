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
      subtitle='A few things you might want to know before working with me.'
      id='faq' className='mx-auto bg-[#F5F5F5] py-14 sm:py-16 lg:py-20'
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
