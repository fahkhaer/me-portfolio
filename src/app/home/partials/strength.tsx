'use client';
import Section from '@/src/components/layouts/Section';
import { Icon } from '@iconify/react';
import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function Strength() {
  const skills = [
    'React Expert',
    'Precise Website Implementation',
    'TypeScript Proficiency',
    'Clean, Maintainable Code',
    'Responsive Website Development',
    'Performance Optimization',
    'UI Design Proficiency (Figma)',
  ];
  const other = [
    'Basic React Knowledge',
    'Inconsistent Design Translation',
    'Little to No TypeScript Knowledge',
    'Unstructured Code',
    'Inconsistent Responsiveness',
    'Slow and Heavy Websites',
    'No Design Skills',
  ];

  // Variants untuk daftar item muncul dengan stagger
  const listVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <Section
      className='py-20'
      title='WHAT I BRING'
      subtitle='Beyond writing code, I care about how a product looks, feels, and works.'
      id='strengths'
    >
      {/* container */}
      <div className='grid gap-8 md:grid-cols-2'>
        {/* With Me */}
        <motion.div
          className='flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className='text-lg-bold text-neutral-950'>With Me</p>

          <Image
            src='/images/hero.png'
            alt='hero-image'
            width={100}
            height={100}
            className='bg-primary-300 mt-6 rounded-full'
          />

          {/* text */}
          <div className='flex flex-col items-center space-y-6 pt-8'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className='flex items-center gap-3'
                custom={index}
                initial="hidden"
                animate="visible"
                variants={listVariant}
              >
                <Icon
                  icon='material-symbols:check-rounded'
                  width='24'
                  height='24'
                />
                <p className='text-lg-semibold'>{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

    
      </div>
    </Section>
  );
}

export default Strength;
