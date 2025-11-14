import { Icon } from '@iconify/react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

export const Footer = () => {
  return (
    <section className='text-neutral-25 flex h-22 items-center justify-between bg-neutral-950 px-32'>
      <div>
        <p className='text-md-regular'>
          © 2025 Edwin Anderson. All rights reserved.
        </p>
      </div>
      <div className='flex gap-4'>
        <Icon
          className='rounded-full border border-neutral-800 p-2'
          icon='ri:facebook-fill'
          width='40'
          height='40'
        />
        <Icon
          className='rounded-full border border-neutral-800 p-2'
          icon='mdi:instagram'
          width='40'
          height='40'
        />
        <Icon
          className='rounded-full border border-neutral-800 p-2'
          icon='akar-icons:linkedin-fill'
          width='40'
          height='40'
        />
        <Icon
          className='rounded-full border border-neutral-800 p-2'
          icon='line-md:tiktok'
          width='40'
          height='40'
        />{' '}
      </div>
    </section>
  );
};
