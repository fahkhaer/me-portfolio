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
    <Navbar />
     <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#A53860F0] px-6">
      {/* kiri - tech logo */}
      <div className="absolute left-10 top-70 -translate-y-1/2 flex flex-col items-center gap-5">
        {['js', 'css', 'html', 'react'].map((tech) => (
          <TechLogo
            key={tech}
            logo={
              <Image
                width={52}
                height={52}
                src={`/icons/${tech}.png`}
                alt={`logo-${tech}`}
              />
            }
          />
        ))}
      </div>

      {/* Tengah - Hero Text */}
      <div className="relative flex flex-col items-center text-center">
        {/* Junior */}
        <p className="absolute -top-16 -left-24 -rotate-12 font-bonheur text-[113px] leading-none text-white">
          Junior
        </p>

        {/* FRONTEND DEVELOPER */}
        <div className="font-anton leading-[0.9] text-secondary-100">
          <p className="text-[9vw] md:text-[160px]">FRONTEND</p>
          <p className="text-[8vw] md:text-[140px]">DEVELOPER</p>
        </div>

        {/* Available for Hire */}
        <div className="mt-10 flex items-center gap-3">
          <Button
            className="rounded-full border border-primary-300 bg-transparent text-white hover:bg-[#E26190]/30"
            variant="secondary"
          >
            <Icon
              icon="fontisto:ellipse"
              width="20"
              height="20"
              className="text-[#E26190]"
            />
            <p>Available for Hire</p>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Image
          src="/images/hero.png"
          alt="hero-image"
          width={600}
          height={720}
          className="object-contain"
        />
      </div>

      {/* Scroll down */}
      <Button
        variant="ghost"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        asChild
      >
        <Link href="#">
          <div className="flex items-center gap-2">
            <p className="text-md-semibold">Scroll Down</p>
            <Icon icon="lucide:mouse" width="24" height="24" />
          </div>
        </Link>
      </Button>

      {/* kanan - statistics & contact */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-end gap-4">
        <Statistics />
        <Button className="flex h-14 w-56 items-center justify-between rounded-full bg-secondary-100 px-4 py-2 hover:bg-[#D9A23F]">
          <p className="text-neutral-950">Contact Me</p>
          <Icon
            icon="lucide:arrow-right"
            width="28"
            height="28"
            className="rounded-full bg-neutral-950 p-1.5"
          />
        </Button>
      </div>

      {/* kiri bawah - Hi I'm Edwin */}
      <div className="absolute bottom-24 left-10 w-[360px] text-white">
        <div className="flex flex-col gap-3">
          <div>
            <Icon
              icon="fluent:mic-24-filled"
              className="size-14 rounded-full border border-[#B76080] p-1"
            />
          </div>
          <p className="text-xl font-semibold">Hi, I'm Edwin Anderson</p>
          <p className="text-base leading-relaxed">
            A frontend developer passionate about creating seamless digital
            experiences that are fast, responsive, and user-friendly.
          </p>
        </div>
      </div>
    </section>
    </>


   
  );
};
export default Hero;
