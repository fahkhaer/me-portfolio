import { cn } from '@/src/lib/utils';
import { Feature } from 'next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin';
import React from 'react';

type TechLogoProps = {
  title?: string;
  logo: React.ReactNode;
  className?: string;
};

const TechLogo: React.FC<TechLogoProps> = ({ title, logo, className }) => {
  return (
    <div
      className={cn(
        'flex aspect-square size-[69.4337387084961] items-center justify-center rounded-full border bg-white p-[11.57px] [&>*]:h-auto [&>*]:w-full'
      )}
      style={{ width: 'clamp(3rem, 5.75vw, 4.31rem)' }}
    >
      {logo}
    </div>
  );
};
export default TechLogo;
