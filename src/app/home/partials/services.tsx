import { servicesData } from '@/src/constants/services-data';

function Services() {
  return (
    <section className='w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 xl:px-24 2xl:px-30 lg:py-20'>
      <div className='mx-auto grid max-w-300 grid-cols-1 divide-y divide-neutral-300 md:grid-cols-3 md:divide-x md:divide-y-0'>
        {servicesData.map((service, index) => (
          <div key={index} className={`flex flex-col gap-3 py-6 md:px-6 md:py-2 lg:px-8 ${index === 0 ? 'md:pl-0' : ''} ${index === servicesData.length - 1 ? 'md:pr-0' : ''}`}>
            <div className='flex size-14 shrink-0 items-center justify-center rounded-full border border-neutral-300 sm:size-16'>
              <p className='text-2xl sm:text-3xl'>{service.logo}</p>
            </div>
            <p className='text-xl font-bold sm:text-2xl'>{service.title}</p>
            <p className='text-sm leading-6 text-neutral-600 sm:text-base'>{service.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
