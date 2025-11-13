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
      title='More Than Just Code'
      subtitle='We care about design, performance, and user experience all in one.'
      id='strengths'
    >
      {/* my skills */}
      <div className='gap-8 rounded-2xl p-8 text-center md:flex md:justify-center md:px-16 lg:px-32'>
        <div>
          <p className='text-lg-bold text-center text-neutral-950'>With Me</p>
          <Image
            src='/images/hero.png'
            alt='hero-image'
            width={100}
            height={100}
            className='bg-primary-300 rounded-full'
          />
          {/* skills */}
          <div className=''>
            {skills.map((skill, index) => (
              <div key={index} className='flex gap-3'>
                <Icon
                  icon='material-symbols:check-rounded'
                  width='24'
                  height='24'
                />
                <p className='text-lg-semibold'>{skill} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* another */}
      <div className='bg-secondary-100 gap-8 rounded-2xl p-8 text-center md:flex md:justify-center md:px-16 lg:px-32'>
        <div>
          <p className='text-lg-bold text-center text-neutral-950'>With Me</p>
          <Icon icon='ix:user-profile-filled' width='512' height='512' />
          {/* skills */}
          <div className=''>
            {skills.map((other, index) => (
              <div key={index} className='flex gap-3'>
                <X className='text-[#E5352D]' />
                <p className='text-lg-semibold'>{other} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Strength;
