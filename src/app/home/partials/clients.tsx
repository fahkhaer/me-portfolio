'use client';
import Section from '@/src/components/layouts/Section';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const experiencesData = [
  {
    year: '2025 - Present',
    role: 'Frontend Developer',
    company: 'Airbnb',
    logo: '/icons/airbnb.png',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    year: '2025 - Present',
    role: 'Frontend Developer',
    company: 'Airtasker',
    logo: '/icons/air.png',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    year: '2025 - Present',
    role: 'Frontend Developer',
    company: 'Slack',
    logo: '/icons/slack.png',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, rotate: -2 },
  visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 15 } },
};

const charVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.3 },
  }),
};

function Clients() {
  return (
    <Section
      variant='horizontal'
      id='clients'
      title='Experiences That Shaped Me!'
      subtitle='From startups to side projects, every step has been a chance to learn, build, and level up.'
      className='bg-neutral-950 py-20 mx-auto'
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {experiencesData.map((exp, idx) => (
          <motion.div
            key={exp.company}
            className='border-t border-neutral-800 py-8'
            variants={cardVariants}
          >
            <div className='grid gap-6 md:grid-cols-[150px_1fr_1fr] md:items-center'>
              
              {/* year + role */}
              <div>
                <p className='text-sm text-neutral-400'>{exp.year}</p>
                <p className='text-xl leading-tight font-semibold text-white'>{exp.role}</p>
              </div>

              {/* logo with floating & hover */}
              <motion.div
                className='flex justify-center'
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 + idx }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                <div className='flex h-[70px] w-[180px] items-center justify-center rounded-3xl border border-neutral-800 bg-[#101010] p-4 shadow-lg hover:shadow-yellow-500/50 transition-all duration-300'>
                  <Image src={exp.logo} alt={`${exp.company} logo`} width={100} height={40} className='object-contain' />
                </div>
              </motion.div>

              {/* description letter by letter */}
              <p className='text-md-regular leading-relaxed text-neutral-400'>
                {exp.description.split('').map((char, i) => (
                  <motion.span key={i} custom={i} variants={charVariants} initial='hidden' animate='visible'>
                    {char}
                  </motion.span>
                ))}
              </p>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default Clients;
