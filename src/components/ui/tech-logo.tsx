import { cn } from '@/src/lib/utils';
import { Feature } from 'next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin';
import React from 'react';

type TechLogoProps = {
  title?: string;
  subtitle?: string;
  logo: React.ReactNode;
  className?: string;
};

const TechLogo: React.FC<TechLogoProps> = ({
  title,
  logo,
  className,
  subtitle,
}) => {
  return (
    <div
      className={cn(
        'border-primary-300 flex aspect-square size-[69.4337387084961] items-center justify-center rounded-full border p-[11.57px] *:h-auto *:w-auto', className
      )}
      style={{ width: 'clamp(3rem, 5.75vw, 4.31rem)' }}
    >
      {logo}
      <p className='display-xs-bold'>{title}</p>
      <p className='text-md-regular text-neutral-950'>{subtitle}</p>
    </div>
  );
};
export default TechLogo;
