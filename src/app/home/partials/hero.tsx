'use client';
import { motion } from 'framer-motion';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Statistics from '@/src/components/ui/statistic';
import TechLogo from '@/src/components/ui/tech-logo';

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className='relative min-h-[780px] w-full overflow-hidden bg-[#A53860F0] pt-20 text-white sm:min-h-[820px] lg:h-screen lg:min-h-[720px]'>
      {/* Desktop left rail */}
      <motion.div
        className='absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col items-start justify-center gap-8 xl:flex 2xl:left-10'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className='border-primary-300 flex flex-col items-center gap-3 rounded-full border px-2 py-4'>
          {['js', 'css', 'html', 'react'].map((tech) => (
            <TechLogo key={tech} logo={<Image width={20} height={20} src={`/icons/${tech}.png`} alt={`logo-${tech}`} />} />
          ))}
        </div>

        <div className='w-[min(451px,30vw)]'>
          <Icon icon='fluent:mic-24-filled' className='size-11 rounded-full border border-[#B76080] p-1' />
          <p className='mt-4 text-base font-bold 2xl:text-xl'>Hi, I'm Latifahtul Khaerani</p>
          <p className='mt-3 text-sm leading-relaxed 2xl:text-lg'>I build modern web & mobile applications with a strong focus on frontend development and AI-powered experiences, creating clean interfaces and seamless user experiences.</p>
        </div>
      </motion.div>

      {/* Mobile intro */}
      <div className='absolute inset-x-5 bottom-8 z-20 xl:hidden sm:bottom-10'>
        <div className='mx-auto max-w-lg rounded-2xl border border-white/15 bg-black/10 p-4 backdrop-blur-sm'>
          <div className='flex items-center gap-3'>
            <Icon icon='fluent:mic-24-filled' className='size-9 shrink-0 rounded-full border border-[#B76080] p-1' />
            <p className='text-sm font-bold sm:text-base'>Hi, I'm Latifahtul Khaerani</p>
          </div>
          <p className='mt-2 text-xs leading-5 text-white/85 sm:text-sm'>I build modern web & mobile applications with a strong focus on frontend development and AI-powered experiences.</p>
        </div>
      </div>

      {/* Center heading */}
      <div className='absolute inset-x-0 top-28 z-10 flex flex-col items-center text-center sm:top-32 lg:top-1/2 lg:-translate-y-1/2'>
        <motion.p
          className='font-bonheur absolute -top-8 -left-2 z-20 -rotate-12 text-[48px] leading-none text-white sm:-left-8 sm:text-[64px] lg:-top-24 lg:-left-36 lg:text-[80px] 2xl:-left-56 2xl:text-[113px]'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          Junior
        </motion.p>

        <motion.div
          className='font-anton text-secondary-100 leading-[0.82]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className='text-[clamp(3.4rem,18vw,7rem)] sm:text-[clamp(4rem,15vw,8rem)] lg:text-[9vw]'>FULLSTACK</p>
          <p className='text-[clamp(3.2rem,17vw,6.6rem)] sm:text-[clamp(3.8rem,14vw,7.5rem)] lg:text-[8vw]'>
            DEV<span className='stroke-yellow stroke-2 text-transparent mix-blend-overlay'>ELO</span>PER
          </p>
        </motion.div>

        <motion.div
          className='mt-5 flex items-center gap-3 sm:mt-7 lg:absolute lg:-bottom-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Button className='border-primary-300 rounded-full border bg-[#860D39] px-4 text-white hover:bg-[#E26190]/30' variant='secondary'>
            <Icon icon='fontisto:ellipse' width='16' height='16' className='text-[#E26190]' />
            <p className='text-xs sm:text-sm'>Available for Hire</p>
          </Button>
        </motion.div>
      </div>

      {/* Portrait */}
      <motion.div
        className='absolute bottom-16 left-1/2 z-[5] w-[270px] -translate-x-1/2 sm:bottom-14 sm:w-[330px] md:w-[390px] lg:bottom-0 lg:w-[420px] xl:w-[480px] 2xl:w-[520px]'
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
        whileHover={{ scale: 1.02 }}
      >
        <Image src='/images/fah.png' alt='Latifah' width={520} height={520} priority className='h-auto w-full object-top' />
      </motion.div>

      {/* Mobile contact */}
      <Button
        onClick={() => scrollTo('contact')}
        className='absolute bottom-8 right-5 z-30 hidden h-11 rounded-full bg-secondary-100 px-4 text-neutral-950 shadow-lg sm:right-8 md:flex lg:right-10 xl:hidden'
      >
        Contact Me <Icon icon='ic:round-arrow-forward' width='22' height='22' />
      </Button>

      {/* Desktop right rail */}
      <motion.div
        className='absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-start gap-4 xl:flex 2xl:right-16'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Statistics />
        <Button onClick={() => scrollTo('contact')} className='mt-6 flex h-auto w-52 items-center justify-between rounded-full bg-secondary-100 px-4 hover:bg-[#D9A23F]'>
          <p className='my-2 text-sm font-semibold leading-8 text-neutral-950'>Contact Me</p>
          <div className='flex size-8 items-center justify-center rounded-full bg-neutral-950'>
            <Icon icon='ic:round-arrow-forward' width='28' height='28' className='text-white' />
          </div>
        </Button>
      </motion.div>

      {/* Scroll down */}
      <motion.div
        className='absolute bottom-5 left-1/2 z-30 -translate-x-1/2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 1.5 }}
      >
        <Button variant='ghost' className='text-white hover:bg-white/10' onClick={() => scrollTo('projects')}>
          <div className='flex items-center gap-2'><p className='text-xs font-semibold sm:text-sm'>Scroll Down</p><Icon icon='lucide:mouse' width='20' height='20' /></div>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
