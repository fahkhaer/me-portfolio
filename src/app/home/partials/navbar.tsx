'use client';

import { Button } from '@/src/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet';
import { navigationData } from '@/src/constants/navigation-data';
import { Menu } from 'lucide-react';
import { useScroll, useTransform, motion } from 'motion/react';
import Link from 'next/link';
import Hero from './hero';

function Navbar() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.7)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <>
      <div className='flex-wrap place-items-center overflow-hidden bg-[#A53860F0]'>
        <motion.header
          className='mt-8 flex rounded-full'
          style={{ background, backdropFilter: backdropBlur }}
        >
          <nav className='hidden place-content-center lg:block'>
            <ul className='flex-start gap-6 rounded-full px-6'>
              {navigationData.map((data) => (
                <li key={data.label}>
                  <Link
                    href={data.href}
                    className='text-md-medium tracking-wide text-white'
                  >
                    {data.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* navbar mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Menu className='cursor-pointer lg:hidden' />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edwin</SheetTitle>
              </SheetHeader>
              <nav className=''>
                <ul className='flex-col gap-2 px-2 py-4 text-white'>
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <Link href={data.href} className='text-md'>
                        {data.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
            <SheetClose />
          </Sheet>
        </motion.header>
      </div>
      <Hero />
    </>
  );
}
export default Navbar;
