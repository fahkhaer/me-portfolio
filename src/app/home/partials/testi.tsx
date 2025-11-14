import Section from '@/src/components/layouts/Section';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/src/components/ui/carousel';

function Testi() {
  return (
    <Section
      className='py-20'
      title='What They Say About Working With Me'
      subtitle='Real words from clients, teammates, and mentors I’ve collaborated with on various projects.'
      id='testimonial'
    >
      <Carousel>
        <CarouselContent>
          <CarouselItem variant='single'>
            <div className='relative   flex w-full justify-center'>
              {/* content */}
              <div className='bg-primary-300 z-50 relative flex h-auto flex-col rounded-4xl px-10 py-8'>
                <div className='mb-6 flex flex-col justify-center gap-1'>
                  {' '}
                  <div className='flex justify-center'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        icon='line-md:star-filled'
                        className='text-3xl text-yellow-400'
                      />
                    ))}
                  </div>
                  <div>
                    <p className='display-xs-semibold text-neutral-25 pt-2 text-center leading-8'>
                      “Working with Edwin Anderson was a smooth experience from
                      start to finish. He translated our design into clean,
                      responsive code and even suggested improvements we hadn’t
                      thought of. Highly recommended!”
                    </p>
                  </div>
                  <div className='mt-8 flex flex-col items-center'>
                    <Image
                      src='/images/profile1.jpg'
                      alt='Profile Picture'
                      width={64}
                      height={64}
                      className='mb-4 rounded-full'
                    />
                    <p className='text-lg-semibold text-neutral-25'>Sarah </p>
                    <p className='text-md-medium text-neutral-25'>
                      Product Manager at Finovate
                    </p>
                  </div>
                </div>
              </div>
              {/* shadow 1 */}
              <div className='absolute z-10 -bottom-5 h-[40px] w-[95%] rounded-3xl bg-[#D4A0B3]'></div>
              {/* shadow 2 */}
              <div className='absolute -bottom-6  h-[30px] w-[90%] translate-y-4 rounded-3xl bg-[#B7608033]'></div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation className='pt-8' />
      </Carousel>
    </Section>
  );
}

export default Testi;
