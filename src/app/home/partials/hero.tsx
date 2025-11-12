import { Button } from '@/src/components/ui/button';
import { link } from 'fs';
import { ArrowRightCircle, Link, Mic } from 'lucide-react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import TechLogo from '@/src/components/ui/tech-logo';
import Statistics from '@/src/components/ui/statistic';

const Hero = () => {
  return (
    <div className='relative h-screen'>
      {/* kanan */}
      <Button asChild className='bottom-0' variant={'default'}>
        {/* <TechLogo  logo='public/icons/js.png' /> */}
        {/* <Link href=''> Contact Me </Link> */}
      </Button>
      <div className='absolute right-0'>
        <Statistics />
        <Button className='bg-secondary-100'>Contact Me 
          <ArrowRightCircle className='bg-neutral-950 rounded-full ' />
        </Button>
      </div>

      {/* tengah */}
      <div
        style={{ height: 'clamp(23.44rem, 61.25vw, 45.94rem)' }}
        className='bottom-0'
      >
        {' '}
        <Image
          src='/images/hero.png'
          alt='hero-image'
          width={610}
          height={735}
        />
      </div>

      {/* kiri */}
      <div></div>
      {/* hi i'm edwin */}
      <div className='left-1 flex w-113 flex-col gap-3.5 text-white'>
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
  );
};
export default Hero;
