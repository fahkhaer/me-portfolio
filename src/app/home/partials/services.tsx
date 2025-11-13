import Section from '@/src/components/layouts/Section';
import TechLogo from '@/src/components/ui/tech-logo';
import { servicesData } from '@/src/constants/services-data';
import Image from 'next/image';
import React from 'react';

function Services() {
  return (
    <>
      <div className='divide-primary-300 divide-y flex items-start gap-5'>
        {servicesData.map((service, index) => (
          <div key={index}>
            <div className='size-16 rounded-full border border-neutral-300'>
              {service.logo}
            </div>
            <p className='display-xs-bold'>{service.title}</p>
            <p className='text-md-regular'>{service.subtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;


