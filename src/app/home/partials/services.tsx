import Section from '@/src/components/layouts/Section';
import TechLogo from '@/src/components/ui/tech-logo';
import { servicesData } from '@/src/constants/services-data';
import Image from 'next/image';
import React from 'react';

function Services() {
  return (
    <>
<div className='divide-neutral-300 flex flex-row items-start gap-10 divide-x px-30 py-20'>
  {servicesData.map((service, index) => (
    <div
      key={index}
      className={`flex flex-col gap-4 ${index !== servicesData.length - 1 ? 'pr-10' : ''}`}
    >
      <div className='size-16 text-center place-content-center rounded-full border border-neutral-300'>
        <p className='text-3xl'>{service.logo}</p>
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
