import { cn } from '@/src/lib/utils';

type SectionProps = {
  children: React.ReactNode;

  // default variant tetap pakai string
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;

  id: string;
  className?: string;

  variant?: 'default' | 'horizontal' | 'horizontalWithRight';

  rightElement?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className,
  variant = 'default',
  rightElement,
}) => {
  const isCustom =
    variant === 'horizontal' || variant === 'horizontalWithRight';

  return (
    <div className={cn('custom-container', className)} id={id}>
      {/* DEFAULT */}
      {variant === 'default' && (
        <div className='text-center flex flex-col gap-2'>
          <h2 className='display-xl-bold leading-14 text-neutral-950'>
            {title as string}
          </h2>
          <p className='text-md-medium leading-4xl text-neutral-950'>
            {subtitle as string}
          </p>
        </div>
      )}

      {/* HORIZONTAL */}
      {variant === 'horizontal' && (
        <div className='flex flex-col text-white  items-center justify-end gap-6 md:flex-row md:items-start'>
          <div className='leading-14 display-xl-bold '>{title}</div>
          <div className='leading-4xl text-lg-semibold'>{subtitle}</div>
        </div>
      )}

      {/* HORIZONTAL WITH RIGHT */}
      {variant === 'horizontalWithRight' && (
        <div className='flex flex-col items-start justify-between gap-2 md:flex-row'>
          {/* left */}
          <div className='w-full flex flex-col gap-2 md:w-[686px]'>
            <div className='leading-14 '>{title}</div>
            <div className='leading-4xl text-md-medium'>{subtitle}</div>
          </div>

          {/* right */}
          <div className='w-full md:w-[514px]'>{rightElement}</div>
        </div>
      )}

      {/* content */}
      {variant && <div className='mt-6 md:mt-12'>{children}</div>}
    </div>
  );
};

export default Section;
