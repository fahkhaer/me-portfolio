type Statistic = { data: string; info: string };

const statistics: Statistic[] = [
  { data: '2026', info: 'Full Stack Journey' },
  { data: '15+', info: 'Projects Built' },
  { data: 'AI', info: 'AI-Powered Products' },
  { data: 'Web + Mobile', info: 'Development Focus' },
];

const Statistics = () => (
  <div className='flex flex-col text-white'>
    {statistics.map((statistic) => (
      <div key={statistic.data} className='w-48 border-b border-primary-300 py-3 text-left last:border-b-0 sm:w-56 sm:py-4'>
        <p className='text-2xl font-bold leading-tight 2xl:text-3xl'>{statistic.data}</p>
        <p className='mt-1 text-xs font-medium sm:text-sm'>{statistic.info}</p>
      </div>
    ))}
  </div>
);

export default Statistics;
