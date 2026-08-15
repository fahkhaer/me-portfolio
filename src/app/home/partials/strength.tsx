'use client';

import Section from '@/src/components/layouts/Section';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

function Strength() {
  const strengths = [
    {
      icon: 'solar:user-heart-bold',
      title: 'User-Focused',
      description:
        'I build interfaces with usability, accessibility, and user experience in mind.',
    },
    {
      icon: 'solar:palette-bold',
      title: 'Design to Code',
      description:
        'I turn Figma designs into responsive and high-fidelity web interfaces.',
    },
    {
      icon: 'solar:code-square-bold',
      title: 'Clean & Reusable',
      description:
        'I prefer modular components and maintainable code that can grow with the product.',
    },
    {
      icon: 'solar:rocket-bold',
      title: 'Always Learning',
      description:
        'From frontend to fullstack, mobile, and AI, I keep expanding my technical range.',
    },
  ];

  return (
    <Section
      className='py-20'
      title='WHAT I BRING'
      subtitle='Beyond writing code, I care about how a product looks, feels, and works.'
      id='strengths'
    >
      <div className='grid gap-6 md:grid-cols-2'>
        {strengths.map((strength, index) => (
          <motion.div
            key={strength.title}
            className='rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
          >
            <div className='bg-primary-100 flex h-14 w-14 items-center justify-center rounded-full'>
              <Icon
                icon={strength.icon}
                width='28'
                height='28'
                className='text-primary-600'
              />
            </div>

            <h3 className='text-lg-bold mt-6 text-neutral-950'>
              {strength.title}
            </h3>

            <p className='text-md-regular mt-3 leading-relaxed text-neutral-600'>
              {strength.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Strength;
