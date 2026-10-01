'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id='contact' className='relative overflow-x-hidden px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 xl:px-24 2xl:px-30 lg:py-20'>
      <div className='mx-auto flex max-w-300 flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12'>
        {/* LEFT */}
        <div className='w-full lg:max-w-xl'>
          <div>
            <p className='text-[clamp(2rem,5vw,2.5rem)] font-bold leading-tight'>Let’s Work Together</p>

            <p className='mt-4 text-sm font-medium leading-6 text-neutral-600 sm:text-base sm:leading-7'>
              Looking for a developer for your next project? I&apos;d love to
              hear what you&apos;re building. I&apos;m open to remote
              opportunities and collaborations with teams around the world.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className='relative w-full lg:max-w-150'>
          <motion.div
            className='absolute -top-12 right-6 z-10 sm:-top-14 sm:right-10'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              width={142}
              height={142}
              src='/images/man.png'
              alt='Illustration'
            />
          </motion.div>

          {/* Contact Card */}
          <div className='mx-auto w-full max-w-153 space-y-4 rounded-3xl bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.1)] sm:space-y-5 sm:rounded-4xl sm:p-6 md:p-8'>
            <div>
              <p className='text-xl font-semibold text-neutral-950'>
                Have a project in mind?
              </p>

              <p className='mt-2 text-sm leading-6 text-neutral-500'>
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Email */}
            <Link
              href='mailto:khaeranifah@gmail.com'
              className='group hover:border-primary-300 hover:bg-primary-50 flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 p-3 transition sm:p-4'
            >
              <div className='flex min-w-0 items-center gap-3 sm:gap-4'>
                <div className='bg-primary-100 flex size-11 items-center justify-center rounded-full'>
                  <Mail className='size-5' />
                </div>

                <div>
                  <p className='text-sm font-semibold text-neutral-950'>
                    Email
                  </p>
                  <p className='truncate text-xs text-neutral-500 sm:text-sm'>
                    Let&apos;s talk about an opportunity
                  </p>
                </div>
              </div>

              <ArrowUpRight className='size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>

            {/* LinkedIn */}
            <Link
              href='https://www.linkedin.com/in/latifahtul-khaerani-a-2793532a5/'
              target='_blank'
              rel='noopener noreferrer'
              className='group hover:border-primary-300 hover:bg-primary-50 flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 p-3 transition sm:p-4'
            >
              <div className='flex min-w-0 items-center gap-3 sm:gap-4'>
                <div className='bg-primary-100 flex size-11 items-center justify-center rounded-full'>
                  <Linkedin className='size-5' />
                </div>

                <div>
                  <p className='text-sm font-semibold text-neutral-950'>
                    LinkedIn
                  </p>
                  <p className='truncate text-xs text-neutral-500 sm:text-sm'>
                    Connect with me professionally
                  </p>
                </div>
              </div>

              <ArrowUpRight className='size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>

            {/* GitHub */}
            <Link
              href='https://github.com/latifahkhaerani'
              target='_blank'
              rel='noopener noreferrer'
              className='group hover:border-primary-300 hover:bg-primary-50 flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 p-3 transition sm:p-4'
            >
              <div className='flex min-w-0 items-center gap-3 sm:gap-4'>
                <div className='bg-primary-100 flex size-11 items-center justify-center rounded-full'>
                  <Github className='size-5' />
                </div>

                <div>
                  <p className='text-sm font-semibold text-neutral-950'>
                    GitHub
                  </p>
                  <p className='truncate text-xs text-neutral-500 sm:text-sm'>
                    Explore my projects and code
                  </p>
                </div>
              </div>

              <ArrowUpRight className='size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
