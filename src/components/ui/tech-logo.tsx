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
        'border-primary-300 flex aspect-square size-[58px] items-center justify-center rounded-full border p-[9px] *:h-auto *:w-auto',
        className
      )}
      style={{ width: 'clamp(2.75rem, 5vw, 3.625rem)' }}
    >
      {logo}
      <p className='display-xs-bold'>{title}</p>
      <p className='text-md-regular text-neutral-950'>{subtitle}</p>
    </div>
  );
};
export default TechLogo;
