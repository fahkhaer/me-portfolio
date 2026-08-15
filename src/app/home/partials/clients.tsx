import Section from '@/src/components/layouts/Section';
import Image from 'next/image';
import React from 'react';

const experiencesData = [
  {
    year: '2025',
    role: 'Career Transition',
    company: 'airbnb',
    logo: '/images/bc.png',
    description:
      'Started my professional journey in broadcasting before transitioning into software development and technology.',
  },
  {
    year: '2025',
    role: 'Frontend Developer',
    company: 'WPH',
    logo: '/images/image.png',
    description:
      'Strengthened my frontend fundamentals through hands-on projects focused on translating Figma designs into responsive web interfaces using React, TypeScript, and Tailwind CSS.',
  },
  {
    year: '2026',
    role: 'Full Stack JavaScript Immersive Program',
    company: 'Hacktiv8',
    logo: '/images/h8.png',
    description:
      'Completed an intensive Full Stack JavaScript program covering frontend, backend, databases, APIs, mobile development, TypeScript, Next.js, and cloud deployment.',
  },
];

function Clients() {
  return (
    <>
      {/* experiences list */}
      <Section
        variant='horizontal'
        id='clients'
        title='From Broadcasting to Software'
        subtitle='A career transition driven by curiosity, technology, and the desire to build what comes next.'
        className='mx-auto bg-neutral-950 py-20'
      >
        {experiencesData.map((exp) => (
          <div key={exp.company} className='border-t border-neutral-800 py-8'>
            <div className='grid gap-6 md:grid-cols-[150px_1fr_1fr] md:items-center'>
              {/* year + role */}
              <div>
                <p className='text-sm text-neutral-400'>{exp.year}</p>
                <p className='text-xl leading-tight font-semibold text-white'>
                  {exp.role}
                </p>
              </div>

              {/* logo */}
              <div className='flex justify-center'>
                <div className='flex h-[70px] w-[180px] items-center justify-center overflow-hidden rounded-3xl border border-neutral-800 bg-white p-4'>
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={120}
                    height={45}
                    className='h-auto max-h-[70px] w-auto max-w-[120px] object-contain'
                  />
                </div>
              </div>

              {/* description */}
              <p className='text-md-regular leading-relaxed text-neutral-400'>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </Section>
    </>
  );
}

export default Clients;
