import { cn } from '@/src/lib/utils';

type SectionProps = {
  children: React.ReactNode;
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
  return (
    <section
      className={cn(
        'w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-30',
        className
      )}
      id={id}
    >
      {variant === 'default' && (
        <div className='mx-auto flex max-w-300 flex-col gap-2 text-center'>
          <h2 className='display-xl-bold text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-neutral-950'>
            {title}
          </h2>
          <p className='text-sm leading-6 font-medium text-neutral-950 sm:text-base sm:leading-7'>
            {subtitle}
          </p>
        </div>
      )}

      {variant === 'horizontal' && (
        <div className='mx-auto flex max-w-300 flex-col gap-6 text-white md:flex-row md:items-start md:gap-10'>
          <div className='display-xl-bold w-full text-[clamp(1.75rem,4vw,2.5rem)] leading-tight md:w-2/5 md:shrink-0'>
            {title}
          </div>

          <div className='w-full flex-1 text-base leading-7 font-semibold sm:text-lg'>
            {subtitle}
          </div>
        </div>
      )}

      {variant === 'horizontalWithRight' && (
        <div className='mx-auto flex max-w-300 flex-col items-start justify-between gap-6 md:flex-row'>
          <div className='flex w-full max-w-170 flex-col gap-2'>
            <div className='leading-tight'>{title}</div>
            <div className='text-sm leading-6 font-medium sm:text-base sm:leading-7'>
              {subtitle}
            </div>
          </div>
          <div className='w-full md:max-w-130'>{rightElement}</div>
        </div>
      )}

      <div className='mx-auto mt-8 max-w-300 md:mt-12'>{children}</div>
    </section>
  );
};

export default Section;
