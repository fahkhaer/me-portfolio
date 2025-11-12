import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/src/components/ui/carousel';
import Section from '@/src/components/layouts/Section';
import { testimonialsData } from '@/src/constants/testimonials-data';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

function Testimonials() {
  return (
    <Section
      title='What They Say About Working With Me'
      subtitle='Real words from clients, teammates, and mentors I’ve collaborated with on various projects.'
      id='testimonial'
    >
      <Carousel>
        <CarouselContent>
          {testimonialsData.map((testimonial, index) => (
            <CarouselItem key={index}>
              <TestimonialCard
                key={index}
                rating={testimonial.rating}
                description={testimonial.description}
                profileSrc={testimonial.profileSrc}
                profileName={testimonial.profileName}
                profileOccupation={testimonial.profileOccupation}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
}

export default Testimonials;

type TestimonialCardProps = {
  rating: number;
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  description,
  profileSrc,
  profileName,
  profileOccupation,
}) => {
  return (
    <div className='bg-primary-300 rounded-7 px-10 py-8'>
      {/* stars */}
      <div className='flex gap-1'>
        {new Array(rating).fill(null).map((_, index) => (
          <Icon
            key={index}
            icon='line-md:star-filled'
            className='text-2xl text-yellow-500'
          />
        ))}
      </div>
      {/* text */}
      <p className='display-xs-semibold text-neutral-25'>{description}</p>
      {/* profile */}
      <div className='flex-start mt-4 gap-4 md:mt-6'>
        <Image
          src={profileSrc}
          alt={profileName}
          className='size-12 rounded-full'
        />
        <div>
          <p className='text-sm-bold md:text-md-semibold text-neutral-200'>
            {profileName}
          </p>
          <p className='text-sm-regular md:text-md-regular text-neutral-400'>
            {profileOccupation}
          </p>
        </div>
      </div>
    </div>
  );
};
