'use client';

import Section from '@/src/components/layouts/Section';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const goals = [
  {
    icon: 'solar:global-bold',
    title: 'REMOTE OPPORTUNITIES',
    description:
      'Open to remote opportunities and international teams where I can contribute, learn, and grow as a developer.',
  },
  {
    icon: 'solar:rocket-bold',
    title: 'CONTINUOUSLY LEARNING',
    description:
      'Exploring new technologies across fullstack development, mobile applications, and AI-powered experiences.',
  },
  {
    icon: 'solar:lightbulb-bold',
    title: 'BUILDING MEANINGFUL PRODUCTS',
    description:
      'I enjoy turning ideas into useful digital products that solve real problems and create better user experiences.',
  },
];

function WhatNext() {
  return (
    <Section
      className='py-20'
      title="WHAT'S NEXT"
      subtitle="I'm always looking for new challenges, meaningful products, and opportunities to grow as a developer."
      id='next'
    >
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {goals.map((goal, index) => (
          <motion.div
            key={goal.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{ y: -8 }}
            className='group relative'
          >
            {/* Main card */}
            <div className='bg-primary-300 relative z-20 flex min-h-[320px] flex-col rounded-[32px] p-8'>
              {/* Icon */}
              <div className='mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm'>
                <Icon
                  icon={goal.icon}
                  className='text-primary-500 text-3xl'
                />
              </div>

              {/* Content */}
              <h3 className='text-xl font-bold text-white'>
                {goal.title}
              </h3>

              <p className='mt-4 text-base leading-7 text-white/80'>
                {goal.description}
              </p>
            </div>

            {/* Decorative layers */}
            <div className='absolute top-3 left-3 z-10 h-full w-full rounded-[32px] bg-[#D4A0B3]' />

            <div className='absolute top-6 left-6 h-full w-full rounded-[32px] bg-[#B7608033]' />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default WhatNext;