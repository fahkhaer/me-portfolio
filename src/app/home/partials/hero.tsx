import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Statistics from '@/src/components/ui/statistic';
import TechLogo from '@/src/components/ui/tech-logo';
import Link from 'next/link';
import Navbar from './navbar';

const Hero = () => {
  return (
    <section className='relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#A53860F0]'>
      {/* kiri - tech logo */}
      <div className='border-primary-300 absolute top-55 left-10 flex -translate-y-1/2 flex-col items-center gap-5 rounded-full border px-[21.78px] py-[32.67px]'>
        {['js', 'css', 'html', 'react'].map((tech) => (
          <TechLogo
            key={tech}
            logo={
              <Image
                width={52}
                height={52}
                src={`/icons/${tech}.png`}
                alt={`logo-${tech}`}
              />
            }
          />
        ))}
      </div>

      {/* Tengah - Hero Text */}
      <div className='relative flex flex-col items-center text-center'>
        {/* Junior */}
        <p className='font-bonheur absolute -top-60 -left-95 z-10 -rotate-12 text-[113px] leading-none text-white'>
          Junior
        </p>

        {/* FRONTEND DEVELOPER */}
        <div className='font-anton text-secondary-100 absolute  z-50 -top-[326px] translate-y-25 leading-[0.9]'>
          <p className='text-[9vw] md:text-[160px]'>FRONTEND</p>
          <p className='text-[8vw] md:text-[140px]'>DE<span className='text-[8vw] md:text-[140px] text-transparent stroke-2 stroke-yellow mix-blend-overlay'>VELO</span>PER </p>
        </div>

        {/* Available for Hire */}
        <div className='absolute -top-80 mt-10 flex items-center gap-3'>
          <Button
            className='border-primary-300 rounded-full border bg-[#860D39] text-white hover:bg-[#E26190]/30'
            variant='secondary'
          >
            <Icon
              icon='fontisto:ellipse'
              width='20'
              height='20'
              className='text-[#E26190]'
            />
            <p>Available for Hire</p>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
        <Image
          src='/images/hero.png'
          alt='hero-image'
          width={600}
          height={720}
          className='object-contain'
        />
      </div>

      {/* Scroll down */}
      <Button
        variant='ghost'
        className='absolute bottom-8 left-1/2 -translate-x-1/2 text-white'
        asChild
      >
        <Link href='#'>
          <div className='flex items-center gap-2'>
            <p className='text-md-semibold'>Scroll Down</p>
            <Icon icon='lucide:mouse' width='24' height='24' />
          </div>
        </Link>
      </Button>

      {/* kanan - statistics & contact */}
      <div className='absolute top-40 right-10 flex flex-col items-end gap-4'>
        <Statistics />
        <Button className='bg-secondary-100 flex h-auto w-56 items-center justify-between rounded-full px-4  hover:bg-[#D9A23F]'>
          <p className='text-neutral-950 text-md-semibold  my-2 leading-8'>Contact Me</p>
          <div className='flex size-8 items-center justify-center rounded-full bg-neutral-950'>
            <Icon
              icon='ic:round-arrow-forward'
              width='36'
              height='36'
              className='text-white'
            />
          </div>
        </Button>
      </div>

      {/* kiri bawah - Hi I'm Edwin */}
      <div className='absolute bottom-29 left-10 w-[451px] text-white'>
        <div className='flex flex-col gap-4'>
          <div>
            <Icon
              icon='fluent:mic-24-filled'
              className='size-14 rounded-full border border-[#B76080] p-1'
            />
          </div>
          <p className='text-xl-bold'>Hi, I'm Edwin Anderson</p>
          <p className='text-lg-medium leading-relaxed'>
            A frontend developer passionate about creating seamless digital
            experiences that are fast, responsive, and user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
