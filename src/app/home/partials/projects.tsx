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
      className='py-20'
    >
      <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
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
      <div className='mt-12 flex justify-center'>
        <Button
          variant='outline'
          onClick={() => setShowAll(!showAll)}
          className='flex items-center gap-3 rounded-full px-6 py-5 text-base'
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
      <div className='relative overflow-hidden rounded-3xl bg-neutral-100 pt-4 pb-2'>
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload='metadata'
            className='mx-auto aspect-video w-full rounded-2xl object-contain object-top transition duration-500 group-hover:scale-[1.02]'
          />
        ) : (
          <Image
            src={imageSrc}
            alt={name}
            className='mx-auto aspect-video w-full rounded-2xl object-contain object-top transition duration-500 group-hover:scale-[1.02]'
          />
        )}
      </div>

      {/* Project Info */}
      <div className='rounded-2xl bg-white p-5 shadow-sm transition duration-300 group-hover:shadow-md'>
        {/* Name + Description */}
        <div className='min-w-0'>
          <h4 className='text-lg font-semibold text-neutral-900'>{name}</h4>

          <p className='mt-1 text-[10px] leading-relaxed text-neutral-600'>
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
