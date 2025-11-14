import Section from '@/src/components/layouts/Section';
import Image from 'next/image';
import React from 'react';

const experiencesData = [
  {
    year: '2025 - Present',
    role: 'Frontend Developer',
    company: 'airbnb',
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

function Clients() {
  return (
    <>
      {/* experiences list */}
      <Section
        variant='horizontal'
        id='clients'
        title='Experiences That Shaped Me!'
        subtitle='From startups to side projects, every step has been a chance to learn, build, and level up.'
        className='bg-neutral-950 py-20 mx-auto'
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
                <div className='flex h-[70px] w-[180px] items-center justify-center rounded-3xl border border-neutral-800 bg-[#101010] p-4'>
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={100}
                    height={40}
                    className='object-contain'
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
