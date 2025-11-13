import Image from 'next/image';

import { skillsData } from '@/src/constants/skills-data';
import Section from '@/src/components/layouts/Section';
import TechLogo from '@/src/components/ui/tech-logo';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/src/components/ui/carousel';

export default function SkillsSection() {
  return (
    <Section
      id='skills'
      title='Code, Design, and Everything in Between'
      subtitle='These are the technologies that power my workflow and bring ideas to life.'
      className='bg-[#9E385E00]'
    >
      <Carousel>
        <CarouselContent className='gap-5'>
          {skillsData.map(({ title, subtitle, className, icon }) => (
            <CarouselItem
              key={title}
              className='basis-auto md:basis-1/4 lg:basis-1/6'
            >
              <TechLogo
                title={title}
                subtitle={subtitle}
                className={className}
                logo={
                  <Image
                    width={60}
                    height={60}
                    src={`/icons/${icon}.png`}
                    alt={`logo-${icon}`}
                    className={
                      ['css', 'react'].includes(icon) ? 'bg-[#F5F5F5]' : ''
                    }
                  />
                }
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNavigation />
      </Carousel>
    </Section>
  );
}
