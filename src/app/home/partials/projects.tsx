'use client';

import Section from '@/src/components/layouts/Section';
import { projectsData } from '@/src/constants/projects-data';
import Image, { StaticImageData } from 'next/image';
import { ArrowDown, ArrowUp, Globe, ArrowUpRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <Section
      id='projects'
      title={
        <p className='display-xl-bold'>
          Things I&apos;ve
          <span className='text-primary-300'> Built </span>
        </p>
      }
      subtitle='From pixel-perfect interfaces to fullstack applications, AI-powered products, and mobile experiences.'
      className='py-14 sm:py-16 lg:py-20'
    >
      <div className='grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
        {displayedProjects.map((project) => (
          <Card
            key={project.name}
            imageSrc={project.imageSrc}
            videoSrc={project.videoSrc}
            name={project.name}
            description={project.description}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>

      {/* See All */}
      <div className='mt-8 flex justify-center sm:mt-12'>
        <Button
          variant='outline'
          onClick={() => setShowAll(!showAll)}
          className='flex items-center gap-2 rounded-full px-5 py-4 text-sm sm:gap-3 sm:px-6 sm:py-5 sm:text-base'
        >
          {showAll ? 'Show Less' : 'See All'}

          {showAll ? (
            <ArrowUp className='h-5 w-5' />
          ) : (
            <ArrowDown className='h-5 w-5' />
          )}
        </Button>
      </div>
    </Section>
  );
};

export default Projects;

type CardProps = {
  imageSrc: StaticImageData;
  videoSrc?: string;
  name: string;
  description: string;
  link?: string;
  github?: string;
};

const Card = ({
  imageSrc,
  videoSrc,
  name,
  description,
  link,
  github,
}: CardProps) => {
  return (
    <div className='group flex flex-col gap-4'>
      {/* Preview */}
      <div className='relative overflow-hidden rounded-2xl bg-neutral-100 px-2 pt-3 pb-2 sm:rounded-3xl sm:pt-4'>
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload='metadata'
            className='mx-auto aspect-video w-full rounded-xl object-contain object-top transition duration-500 group-hover:scale-[1.02] sm:rounded-2xl'
          />
        ) : (
          <Image
            src={imageSrc}
            alt={name}
            className='mx-auto aspect-video w-full rounded-xl object-contain object-top transition duration-500 group-hover:scale-[1.02] sm:rounded-2xl'
          />
        )}
      </div>

      {/* Project Info */}
      <div className='rounded-2xl bg-white p-4 shadow-sm transition duration-300 group-hover:shadow-md sm:p-5'>
        {/* Name + Description */}
        <div className='min-w-0'>
          <h4 className='text-lg font-semibold text-neutral-900'>{name}</h4>

          <p className='mt-1 text-xs leading-5 text-neutral-600 sm:text-[13px] sm:leading-relaxed'>
            {description}
          </p>
        </div>

        {/* Links */}
        {/* Links */}
        <div className='mt-4 flex gap-2'>
          {/* Live Website */}
          {link && (
            <Link
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-neutral-900 px-3 text-sm font-medium text-white transition hover:bg-neutral-700'
            >
              <Globe className='h-4 w-4 shrink-0' />

              <span> Website</span>
            </Link>
          )}

          {/* GitHub */}
          {github && (
            <Link
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-neutral-100 px-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200'
            >
              <Icon
                icon='mdi:github'
                width='18'
                height='18'
                className='shrink-0'
              />

              <span>GitHub</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
