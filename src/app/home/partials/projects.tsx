import Section from '@/src/components/layouts/Section';
import { projectsData } from '@/src/constants/projects-data';
import Image, { StaticImageData } from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { link } from 'fs';
import Link from 'next/link';

const Projects = () => {
  return (
    <Section
      variant='horizontalWithRight'
      rightElement={
        <div className='mt-10 flex justify-end'>
          <Button
            variant='outline'
            className='flex items-center gap-3 rounded-full px-6 py-5 text-base'
          >
            See All
            <ArrowRight className='h-5 w-5' />
          </Button>
        </div>
      }
      id='projects'
      title={
        <p className='display-xl-bold'>
          Design to
          <span className='text-primary-300'> Code Accuracy </span>
        </p>
      }
      subtitle='We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.'
      className='py-20'
    >
      {/* cards */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
        {projectsData.map((project) => (
          <Card
            key={project.name}
            imageSrc={project.imageSrc}
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
  name: string;
  description: string;
  link: string;
};

const Card = ({ imageSrc, name, description, link }: CardProps) => {
  return (
    <Link href={link} className='group flex flex-col gap-4'>
      {/* image */}
      <div className='relative overflow-hidden rounded-3xl bg-neutral-100 pt-4 pb-2'>
        <span className='absolute top-4 left-4 rounded-md bg-yellow-500 px-3 py-1 text-xs font-semibold text-white shadow'>
          Best Portfolio
        </span>

        <Image
          src={imageSrc}
          alt={name}
          className='mx-auto rounded-2xl object-cover'
        />
      </div>

      {/* bottom */}
      <div className='flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm'>
        <div>
          <h4 className='text-lg font-semibold text-neutral-900'>{name}</h4>
          <p className='text-sm text-neutral-500'>{description}</p>
        </div>

        <Button
          size='icon'
          className='rounded-full bg-neutral-200 text-neutral-700 transition group-hover:bg-neutral-900 group-hover:text-white'
        >
          <ArrowRight className='h-5 w-5' />
        </Button>
      </div>
    </Link>
  );
};
