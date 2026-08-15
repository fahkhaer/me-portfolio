'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className='relative px-30 py-20'>
      <div className='flex justify-around gap-12'>
        {/* LEFT */}
        <div className='flex flex-col gap-10'>
          <div>
            <p className='display-xl-bold'>Let’s Work Together</p>

            <p className='text-md-medium'>
              Looking for a developer for your next project? I&apos;d love to
              hear what you&apos;re building. I&apos;m open to remote
              opportunities and collaborations with teams around the world.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <motion.div
            className='absolute top-0 translate-x-12/7 -translate-y-9'
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
          <div className='mx-auto max-w-180 space-y-5 rounded-4xl bg-white p-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)] md:w-[612px] md:p-8'>
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
              href='mailto:your-email@example.com'
              className='group hover:border-primary-300 hover:bg-primary-50 flex items-center justify-between rounded-2xl border border-neutral-200 p-4 transition'
            >
              <div className='flex items-center gap-4'>
                <div className='bg-primary-100 flex size-11 items-center justify-center rounded-full'>
                  <Mail className='size-5' />
                </div>

                <div>
                  <p className='text-sm font-semibold text-neutral-950'>
                    Email
                  </p>
                  <p className='text-sm text-neutral-500'>
                    Let&apos;s talk about an opportunity
                  </p>
                </div>
              </div>

              <ArrowUpRight className='size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>

            {/* LinkedIn */}
            <Link
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='group hover:border-primary-300 hover:bg-primary-50 flex items-center justify-between rounded-2xl border border-neutral-200 p-4 transition'
            >
              <div className='flex items-center gap-4'>
                <div className='bg-primary-100 flex size-11 items-center justify-center rounded-full'>
                  <Linkedin className='size-5' />
                </div>

                <div>
                  <p className='text-sm font-semibold text-neutral-950'>
                    LinkedIn
                  </p>
                  <p className='text-sm text-neutral-500'>
                    Connect with me professionally
                  </p>
                </div>
              </div>

              <ArrowUpRight className='size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>

            {/* GitHub */}
            <Link
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='group hover:border-primary-300 hover:bg-primary-50 flex items-center justify-between rounded-2xl border border-neutral-200 p-4 transition'
            >
              <div className='flex items-center gap-4'>
                <div className='bg-primary-100 flex size-11 items-center justify-center rounded-full'>
                  <Github className='size-5' />
                </div>

                <div>
                  <p className='text-sm font-semibold text-neutral-950'>
                    GitHub
                  </p>
                  <p className='text-sm text-neutral-500'>
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
