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
    <Section className='py-20'
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
    <div className="relative w-full max-w-4xl mx-auto">
      {/* shadow layers */}
      <div className="absolute left-0 right-0 mx-auto -bottom-6 w-[90%] h-6 bg-primary-300/40 rounded-3xl blur-md"></div>
      <div className="absolute left-0 right-0 mx-auto -bottom-12 w-[80%] h-6 bg-primary-300/20 rounded-3xl blur-md"></div>

      {/* main card */}
      <div className="bg-[#A8667A] text-white rounded-3xl px-12 py-16 text-center shadow-xl">
        {/* stars */}
        <div className="flex justify-center gap-1 mb-6">
          {new Array(rating).fill(null).map((_, index) => (
            <Icon
              key={index}
              icon="line-md:star-filled"
              className="text-3xl text-yellow-400"
            />
          ))}
        </div>

        {/* description */}
        <p className="text-xl leading-relaxed font-medium max-w-3xl mx-auto">
          {description}
        </p>

        {/* profile */}
        <div className="flex flex-col items-center mt-10">
          <Image
            src={profileSrc}
            alt={profileName}
            className="w-14 h-14 rounded-full object-cover"
          />
          <p className="mt-3 font-semibold text-lg">{profileName}</p>
          <p className="text-sm opacity-80">{profileOccupation}</p>
        </div>
      </div>
    </div>
  );
};

