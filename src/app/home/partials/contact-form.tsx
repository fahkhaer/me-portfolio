'use client';
import { motion } from 'framer-motion';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

import { Button } from '@/src/components/ui/button';
import { Checkbox } from '@/src/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import Section from '@/src/components/layouts/Section';
import FormStatusDialog from '@/src/components/ui/form-status-dialog';
import Image from 'next/image';

const services = [
  'Web Development',
  'Cloud Solutions',
  'Mobile App Development',
  'Software Development',
  'UI/UX Design',
  'Other',
];

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long')
    .refine((val) => val.trim().length > 0, { message: 'Name is required' }),

  email: z
    .string()
    .email('Please enter a valid email address')
    .refine((val) => val.trim().length > 0, { message: 'Email is required' }),

  message: z
    .string()
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long')
    .refine((val) => val.trim().length > 0, { message: 'Message is required' }),

  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one service.',
  }),
});

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);

  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      services: [],
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
          services: data.services.join(', '),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  return (
    <section className='relative px-30 py-20'>
      <div className='flex justify-around gap-12'>
        {/* left */}
        <div className='flex flex-col gap-10'>
          <div>
            <p className='display-xl-bold'>Let’s Work Together</p>
            <p className='text-md-medium'>
              Looking for a developer for your next project? I'd love to hear what you're building. I'm open to remote opportunities and collaborations with teams around the world.
            </p>
          </div>

          <div className='flex'>
            <Image
              width={142}
              height={142}
              src='/images/project1.png'
              alt='project1'
            />
            <Image
              width={142}
              height={142}
              src='/images/project2.png'
              alt='project2'
            />
            <Image
              width={142}
              height={142}
              src='/images/project3.png'
              alt='project3'
            />
          </div>
        </div>

        <div>
          <motion.div
            className='absolute top-0 translate-x-12/7 -translate-y-9'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image width={142} height={142} src='/images/man.png' alt='man' />
          </motion.div>
          <Form {...form}>
            <form
              className='mx-auto max-w-180 space-y-5 rounded-4xl bg-white p-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)] md:w-[612px] md:p-8'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm-bold leading-7'>
                      Name
                    </FormLabel>
                    <Input
                      disabled={loading}
                      placeholder={'Input your name'}
                      {...field}
                      className='h-12'
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm-bold leading-7'>
                      Email
                    </FormLabel>
                    <Input
                      disabled={loading}
                      placeholder='Input your email'
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm-bold leading-7'>
                      Message
                    </FormLabel>
                    <Textarea
                      className='h-[134px] resize-none'
                      disabled={loading}
                      placeholder='Input your message'
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                variant='secondary'
                disabled={loading}
                className='mt-6 w-full rounded-full md:mt-10'
              >
                {loading ? <ClipLoader size={20} color='#fff' /> : 'Lets Talk'}
              </Button>
            </form>
          </Form>
          <FormStatusDialog
            open={showDialog}
            variant={variant}
            loading={loading}
            onOpenChange={setShowDialog}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
