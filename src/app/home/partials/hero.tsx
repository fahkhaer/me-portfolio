import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Statistics from '@/src/components/ui/statistic';
import TechLogo from '@/src/components/ui/tech-logo';
import Link from 'next/link';
import Navbar from './navbar';

const Hero = () => {
  return (
    <>
      <div className='relative bg-[#A53860F0] items-start pl-30 md:h-225'>
      {/* kanan */}

      {/* kiri */}
      <div className='border-primary-300 absolute top-1/2 left-0 flex w-28 -translate-y-full flex-col items-center justify-center gap-[21.78px] rounded-full border px-[21.78px] py-[32.67px]'>
        <TechLogo
          logo={
            <Image width={52} height={52} src='/icons/js.png' alt='logo-js' />
          }
        />
        <TechLogo
          logo={
            <Image width={52} height={52} src='/icons/css.png' alt='logo-css' />
          }
        />
        <TechLogo
          logo={
            <Image
              width={52}
              height={52}
              src='/icons/html.png'
              alt='logo-html'
            />
          }
        />
        <TechLogo
          logo={
            <Image
              width={52}
              height={52}
              src='/icons/react.png'
              alt='logo-react'
            />
          }
        />
      </div>

      {/* tengah */}
      {/* available for hire */}
      <div className='absolute top-[227px] translate-x-full gap-3.5'>
        <Button
          className='border-primary-300 rounded-full'
          variant={'secondary'}
        >
          <Icon
            icon='fontisto:ellipse'
            width='24'
            height='24'
            className='text-[#E26190]'
          />
          <p className='text-white'>Available for Hire </p>
        </Button>
      </div>

      <p className='font-bonheur -rotate-12 h-[142px] leading-[142px] text-[113.23px] text-white absolute '>
        Junior
      </p>
      {/* front end developer */}
      <div className='font-anton text-secondary-100 tracki flex flex-col leading-[228px]'>
        <p className='text-[187.76px]'>FRONTEND</p>
        <p className='text-[168.82px]'>DEVELOPER</p>
      </div>

      {/* Image */}
      <div
        style={{ height: 'clamp(23.44rem, 61.25vw, 45.94rem)' }}
        className='translate-10xl bottom-0 left-0 absolute'
      >
        <Image
          src='/images/hero.png'
          alt='hero-image'
          width={610}
          height={735}
          className=''
        />
      </div>

      {/* scroll down */}
      <Button
        variant='ghost'
        className='absolute bottom-10 translate-x-full'
        asChild
      >
        <Link href='#'>
          <div className='flex items-center gap-1 text-white'>
            <p className='text-md-semibold leading-5'>Scroll Down</p>
            <Icon
              icon='lucide:mouse'
              width='24'
              height='24'
              className='size-6 rounded-full'
            />
          </div>
        </Link>
      </Button>

      {/* right */}
      <div className='absolute top-1/2 right-0 -translate-y-1/2'>
        <Statistics />
        <Button className='bg-secondary-100 flex h-14 w-full justify-between rounded-full py-2 pr-2 pl-4 hover:bg-[#D9A23F]'>
          <p className='text-neutral-950'>Contact Me </p>

          <Icon
            icon='lucide:arrow-right'
            width='36'
            height='36'
            className='size-9 rounded-full bg-neutral-950 p-2'
          />
        </Button>
      </div>
      {/* hi i'm edwin */}
      <div className='absolute bottom-[188px] left-0 flex w-113 flex-col gap-3.5 text-white'>
        <div>
          <Icon
            icon='fluent:mic-24-filled'
            className='size-16 rounded-full border border-[#B76080] px-[6.56px] pt-[2.63px]'
          />
        </div>
        <p className='text-md-medium md:text-xl-bold'>Hi, I'm Edwin Anderson</p>
        <p className='text-lg-medium'>
          a frontend developer passionate about creating seamless digital
          experiences that are fast, responsive, and user-friendly.
        </p>
      </div>
    </div>
    </>
  
  );
};
export default Hero;
