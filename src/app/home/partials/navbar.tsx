'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/src/components/ui/sheet';
import { navigationData } from '@/src/constants/navigation-data';
import { Menu } from 'lucide-react';
import { useScroll, useTransform, motion } from 'motion/react';
import Link from 'next/link';

function Navbar() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 100], ['rgba(134, 13, 57, 0)', 'rgba(70, 6, 31, 0.82)']);
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);

  return (
    <motion.header
      className='fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8'
      style={{ background, backdropFilter: backdropBlur }}
    >
      <div className='mx-auto flex h-14 max-w-300 items-center justify-between rounded-full border border-white/10 px-4 sm:px-6'>
        <Link href='#' className='font-semibold tracking-wide text-white'>
          Portfolio 
        </Link>

        <nav className='hidden lg:block'>
          <ul className='flex items-center justify-center gap-5 xl:gap-7'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className='text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-70 xl:text-base'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <button aria-label='Open menu' className='flex size-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden'>
              <Menu className='size-5' />
            </button>
          </SheetTrigger>
          <SheetContent className='w-[86vw] max-w-sm border-l border-white/10 bg-[#860D39] text-white' side='right'>
            <SheetHeader className='border-b border-white/10 px-5 py-5'>
              <SheetTitle className='text-left text-white'>Navigation</SheetTitle>
            </SheetHeader>
            <nav className='px-5 py-4'>
              <ul className='flex flex-col gap-1'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <Link href={data.href} className='block rounded-xl px-3 py-3 text-base text-white hover:bg-white/10'>
                      {data.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

export default Navbar;
