import Image from 'next/image';
import React from 'react';

const experiencesData = [
  {
    year: '2025 - Present',
    role: 'Frontend Developer',
    company: 'airbnb',
    logo: '/logos/airbnb.png',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    year: '2025 - Present',
    role: 'Frontend Developer',
    company: 'Airtasker',
    logo: '/logos/airtasker.png',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    year: '2025 - Present',
    role: 'Frontend Developer',
    company: 'Slack',
    logo: '/logos/slack.png',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
];

function Clients() {
  return (
    <section
      id='clients'
      className='bg-[#0D0D0D] px-4 py-20 text-neutral-100 md:px-12 lg:px-24'
    >
      {/* heading */}
      <div className='mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center'>
        <div>
          <h2 className='text-4xl leading-tight font-bold'>
            Experiences That <span className='text-[#E9B949]'>Shaped Me!</span>
          </h2>
        </div>
        <p className='text-md max-w-md text-neutral-400'>
          From startups to side projects, every step has been a chance to learn,
          build, and level up.
        </p>
      </div>

      {/* experiences list */}
      <div className='flex flex-col gap-10'>
        {experiencesData.map((exp) => (
          <div key={exp.company} className='border-t border-neutral-800 pt-8'>
            <div className='grid gap-6 md:grid-cols-[150px_1fr_1fr] md:items-center'>
              {/* year + role */}
              <div>
                <p className='text-sm text-neutral-400'>{exp.year}</p>
                <p className='text-xl leading-tight font-semibold text-white'>
                  {exp.role}
                </p>
              </div>

              {/* company logo */}
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
              <p className='text-base leading-relaxed text-neutral-400'>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
