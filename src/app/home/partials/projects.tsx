'use client';

import Section from '@/src/components/layouts/Section';
import { projectsData } from '@/src/constants/projects-data';
import Image, { StaticImageData } from 'next/image';
import { ArrowDown, ArrowUp, ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import React, { useState } from 'react';
import Link from 'next/link';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projectsData
    : projectsData.slice(0, 6);

  return (
    <Section
      variant='horizontalWithRight'
      rightElement={
        <div className='mt-10 flex justify-end'>
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
      }
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
          />
        ))}
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
  link: string;
};

const Card = ({
  imageSrc,
  videoSrc,
  name,
  description,
  link,
}: CardProps) => {
  return (
    <Link
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex flex-col gap-4'
    >
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
            className='mx-auto aspect-video w-full rounded-2xl object-cover object-top transition duration-500 group-hover:scale-[1.02]'
          />
        ) : (
          <Image
            src={imageSrc}
            alt={name}
            className='mx-auto aspect-video rounded-2xl object-cover object-top'
          />
        )}
      </div>

      {/* Project info */}
      <div className='flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm transition group-hover:shadow-md'>
        <div className='min-w-0'>
          <h4 className='text-lg font-semibold text-neutral-900'>
            {name}
          </h4>

          <p className='text-sm text-neutral-500'>
            {description}
          </p>
        </div>

        <Button
          size='icon'
          className='ml-4 shrink-0 rounded-full bg-neutral-200 text-neutral-700 transition group-hover:bg-neutral-900 group-hover:text-white'
        >
          <ArrowRight className='h-5 w-5' />
        </Button>
      </div>
    </Link>
  );
};