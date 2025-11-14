'use client';
import { motion } from 'framer-motion';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Statistics from '@/src/components/ui/statistic';
import TechLogo from '@/src/components/ui/tech-logo';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#A53860F0]'>

      {/* kiri - tech logo floating */}
      <motion.div
        className='border-primary-300 absolute top-55 left-10 flex -translate-y-1/2 flex-col items-center gap-5 rounded-full border px-[21.78px] py-[32.67px]'
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        {['js', 'css', 'html', 'react'].map((tech) => (
          <TechLogo
            key={tech}
            logo={<Image width={52} height={52} src={`/icons/${tech}.png`} alt={`logo-${tech}`} />}
          />
        ))}
      </motion.div>

      {/* Tengah - Hero Text */}
      <div className='relative flex flex-col items-center text-center'>
        {/* Junior */}
        <motion.p
          className='font-bonheur absolute -top-60 -left-95 z-20 -rotate-12 text-[113px] leading-none text-white'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          Junior
        </motion.p>

        {/* FRONTEND DEVELOPER tetap aman */}
        <div className='font-anton text-secondary-100 absolute z-10 -top-[326px] translate-y-25 leading-[0.9]'>
          <p className='text-[9vw] md:text-[160px]'>FRONTEND</p>
          <p className='text-[8vw] md:text-[140px]'>
            DE
            <span className='text-[8vw] md:text-[140px] text-transparent stroke-2 stroke-yellow mix-blend-overlay'>
              VELO
            </span>
            PER
          </p>
        </div>

        {/* Available for Hire */}
        <motion.div
          className='absolute -top-80 mt-10 flex items-center gap-3'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Button
            className='border-primary-300 rounded-full border bg-[#860D39] text-white hover:bg-[#E26190]/30'
            variant='secondary'
          >
            <Icon icon='fontisto:ellipse' width='20' height='20' className='text-[#E26190]' />
            <p>Available for Hire</p>
          </Button>
        </motion.div>
      </div>

      {/* Hero Image hover */}
      <motion.div
        className='absolute bottom-0 left-1/2 -translate-x-1/2'
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <Image src='/images/hero.png' alt='hero-image' width={600} height={720} className='object-contain' />
      </motion.div>

      {/* Scroll down */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 1.5 }}
      >
        <Button
          variant='ghost'
          className='absolute -bottom-90 left-1/2 -translate-x-1/2 text-white'
          onClick={() => {
            const section = document.getElementById('strengths');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className='flex items-center gap-2'>
            <p className='text-md-semibold'>Scroll Down</p>
            <Icon icon='lucide:mouse' width='24' height='24' />
          </div>
        </Button>
      </motion.div>

      {/* kanan - statistics & contact */}
      <motion.div
        className='absolute top-40 right-10 flex flex-col items-end gap-4'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Statistics />
        <Button className='bg-secondary-100 flex h-auto w-56 items-center justify-between rounded-full px-4 hover:bg-[#D9A23F]'>
          <p className='text-neutral-950 text-md-semibold my-2 leading-8'>Contact Me</p>
          <div className='flex size-8 items-center justify-center rounded-full bg-neutral-950'>
            <Icon icon='ic:round-arrow-forward' width='36' height='36' className='text-white' />
          </div>
        </Button>
      </motion.div>

      {/* kiri bawah - Hi I'm Edwin */}
      <motion.div
        className='absolute bottom-29 left-10 w-[451px] text-white'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className='flex flex-col gap-4'>
          <div>
            <Icon icon='fluent:mic-24-filled' className='size-14 rounded-full border border-[#B76080] p-1' />
          </div>
          <p className='text-xl-bold'>Hi, I'm Edwin Anderson</p>
          <p className='text-lg-medium leading-relaxed'>
            A frontend developer passionate about creating seamless digital
            experiences that are fast, responsive, and user-friendly.
          </p>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
