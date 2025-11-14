import { cn } from '@/src/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id: string;
  className?: string;

  // variant: default | horizontal | horizontalWithRight
  variant?: 'default' | 'horizontal' | 'horizontalWithRight';

  // untuk variant horizontalWithRight
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
  return (
    <div className={cn('custom-container', className)} id={id}>
      {/* heading */}
      {variant === 'default' && (
        <div className='text-center'>
          <h2 className='display-xl-bold text-neutral-950'>{title}</h2>
          <p className='text-md-medium text-neutral-950'>{subtitle}</p>
        </div>
      )}

      {variant === 'horizontal' && (
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row md:items-start'>
          <h2 className='display-xl-bold text-white'>{title}</h2>
          <p className='text-md-medium text-white'>{subtitle}</p>
        </div>
      )}

      {variant === 'horizontalWithRight' && (
        <div className='flex flex-col items-start justify-between gap-6 md:flex-row'>
          {/* left */}
          <div className='w-full md:w-[686px]'>
            <h2 className='display-xl-bold text-neutral-950'>{title}</h2>
            <p className='text-md-medium text-neutral-950'>{subtitle}</p>
          </div>

          {/* right */}
          <div className='w-full md:w-[514px]'>{rightElement}</div>
        </div>
      )}

      {/* content */}
      {variant && <div className='mt-6 md:mt-16'>{children}</div>}
    </div>
  );
};

export default Section;
