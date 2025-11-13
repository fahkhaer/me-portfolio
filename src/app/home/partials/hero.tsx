import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Statistics from '@/src/components/ui/statistic';

const Hero = () => {
  return (
    <div className='relative pl-30 md:h-225'>
      {/* kanan */}
      {/* <Button asChild className='bottom-0' variant={'default'}>
        <TechLogo  logo='public/icons/js.png' />
        <Link href='#'> Contact Me </Link>
      </Button> */}
      <div className='absolute right-0'>
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

      {/* tengah */}
      <div
        style={{ height: 'clamp(23.44rem, 61.25vw, 45.94rem)' }}
        className=''
      >
        <Image
          src='/images/hero.png'
          alt='hero-image'
          width={610}
          height={735}
          className=''
        />
      </div>

      {/* kiri */}
      <div></div>
      {/* hi i'm edwin */}
      <div className='absolute bottom-[144] left-0 flex w-113 flex-col gap-3.5 text-white'>
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
