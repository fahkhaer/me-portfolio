type Statistic = {
  data: string;
  info: string;
};

const statistics: Statistic[] = [
  {
    data: '2026',
    info: 'Full Stack Journey',
  },
  {
    data: '10+',
    info: 'Projects Built',
  },
  {
    data: 'AI',
    info: 'AI-Powered Products',
  },
  {
    data: 'Web + Mobile',
    info: 'Development Focus',
  },
];

const Statistics = () => {
  return (
    <div className='flex flex-col justify-items-start  text-white 2xl:mt-12'>
      {statistics.map((statistic) => (
        <div
          key={statistic.data}
          className='border-primary-300 w-55.5 border-b py-4 text-left last:border-b-0'
        >
          <p className='display-sm-bold 2xl:display-lg-bold'>
            {statistic.data}
          </p>

          <p className='font-regular 2xl:text-md-semibold text-[13px]'>
            {statistic.info}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
