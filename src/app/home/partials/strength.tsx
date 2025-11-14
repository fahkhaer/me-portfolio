import Section from '@/src/components/layouts/Section';
import { Icon } from '@iconify/react';
import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

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

  return (
    <Section
      className='py-20'
      title='More Than Just Code'
      subtitle='We care about design, performance, and user experience all in one.'
      id='strengths'
    >
      {/* container */}
      <div className='grid gap-8 md:grid-cols-2'>
        {/* With Me */}
        <div className='flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm'>
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
              <div key={index} className='flex items-center gap-3'>
                <Icon
                  icon='material-symbols:check-rounded'
                  width='24'
                  height='24'
                />
                <p className='text-lg-semibold'>{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Without Me */}
        <div className='bg-secondary-100 flex flex-col items-center rounded-2xl p-8 text-center'>
          <p className='text-lg-bold text-neutral-950'>Without Me</p>

          <Icon
            icon='ix:user-profile-filled'
            width='100'
            height='100'
            className='mt-6'
          />

          {/* text */}
          <div className='flex flex-col items-center space-y-6 pt-8'>
            {other.map((item, index) => (
              <div key={index} className='flex items-center gap-3'>
                <X className='text-[#E5352D]' />
                <p className='text-lg-semibold'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Strength;
