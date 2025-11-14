'use client';
import Section from '@/src/components/layouts/Section';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/src/components/ui/carousel';
import { testimonialsData } from '@/src/constants/testimonials-data';

function Testi() {
  return (
    <Section
      className='py-20'
      title='What They Say About Working With Me'
      subtitle='Real words from clients, teammates, and mentors I’ve collaborated with on various projects.'
      id='testimonial'
    >
      <Carousel className='overview-hidden'>
        <CarouselContent>
          {testimonialsData.map((testimonial, index) => (
            <CarouselItem key={index} variant='single'>
              <motion.div
                className='relative flex w-full justify-center'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                {/* content */}
                <motion.div
                  className='bg-primary-300 z-50 relative flex h-auto flex-col rounded-4xl px-10 py-8'
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  <motion.div
                    className='mb-6 flex flex-col justify-center gap-1'
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                  >
                    {/* Stars */}
                    <motion.div
                      className='flex justify-center'
                      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                    >
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Icon
                            icon='line-md:star-filled'
                            className='text-3xl text-yellow-400'
                          />
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className='display-xs-semibold text-neutral-25 pt-2 text-center leading-8'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {testimonial.description}
                    </motion.p>

                    {/* Profile */}
                    <motion.div
                      className='mt-8 flex flex-col items-center'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <Image
                        src={testimonial.profileSrc}
                        alt={testimonial.profileName}
                        width={64}
                        height={64}
                        className='mb-4 rounded-full'
                      />
                      <p className='text-lg-semibold text-neutral-25'>
                        {testimonial.profileName}
                      </p>
                      <p className='text-md-medium text-neutral-25'>
                        {testimonial.profileOccupation}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* shadow 1 */}
                <motion.div
                  className='absolute z-10 -bottom-5 h-[40px] w-[95%] rounded-3xl bg-[#D4A0B3]'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />

                {/* shadow 2 */}
                <motion.div
                  className='absolute -bottom-6 h-[30px] w-[90%] translate-y-4 rounded-3xl bg-[#B7608033]'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation className='pt-8' />
      </Carousel>
    </Section>
  );
}

export default Testi;
