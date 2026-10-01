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
import { Icon } from '@iconify/react';

export default function SkillsSection() {
  return (
    <Section
      id='skill'
      title='Code, Design, and Everything in Between'
      subtitle='Technologies I use to turn ideas, designs, and problems into working digital products.'
      className='overflow-hidden py-14 sm:py-16 lg:py-20'
    >
      <Carousel>
        <CarouselContent className='-ml-3 sm:-ml-4'>
          {skillsData.map(({ title, subtitle, className, icon }) => (
            <CarouselItem
              key={title}
              className='basis-[88%] pl-3 sm:basis-1/2 sm:pl-4 lg:basis-1/4'
            >
              <div
                className={cn(
                  'flex min-h-[260px] w-full flex-col items-center rounded-[28px] border border-neutral-200 bg-white p-5 text-center shadow-sm sm:min-h-[281px] sm:rounded-[40px] sm:p-6',
                  className
                )}
              >
                <div className='mb-3 flex size-16 items-center justify-center rounded-full bg-white p-2 shadow-sm'>
                  <Icon icon={icon} width={40} height={40} />
                </div>

                <h3 className='mb-2 text-lg font-semibold text-neutral-900'>
                  {title}
                </h3>

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
