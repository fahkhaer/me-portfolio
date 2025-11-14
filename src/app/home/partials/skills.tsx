import Image from 'next/image';

import { skillsData } from '@/src/constants/skills-data';
import Section from '@/src/components/layouts/Section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/src/components/ui/carousel';
import { cn } from '@/src/lib/utils';

export default function SkillsSection() {
  return (
    <Section
      id='skills'
      title='Code, Design, and Everything in Between'
      subtitle='These are the technologies that power my workflow and bring ideas to life.'
      className='bg-[#9E385E00] py-20'
    >
      <Carousel>
        <CarouselContent>
          {skillsData.map(({ title, subtitle, className, icon }) => (
            <CarouselItem variant='grid' key={title} className='lg:basis-1/4'>
              <div
                className={cn(
                  `flex h-[260px] w-[215px] flex-col items-center rounded-[40px] border border-neutral-200 bg-white p-6 text-center shadow-sm`,
                  className
                )}
              >
                <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full border bg-white shadow-sm'>
                  <Image
                    width={40}
                    height={40}
                    src={`/icons/${icon}.png`}
                    alt={`logo-${icon}`}
                    className={
                      ['css', 'react'].includes(icon) ? 'bg-[#F5F5F5]' : ''
                    }
                  />
                </div>

                {/* TITLE */}
                <h3 className='mb-2 text-lg font-semibold text-neutral-900'>
                  {title}
                </h3>

                {/* SUBTITLE */}
                <p className='text-sm leading-relaxed text-neutral-700'>
                  {subtitle}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNavigation />
      </Carousel>
    </Section>
  );
}
