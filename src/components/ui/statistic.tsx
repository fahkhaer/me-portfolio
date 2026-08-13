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
    data: '30+',
    info: 'Projects & Challenges',
  },
  {
    data: 'React',
    info: 'Frontend Focus',
  },
  {
    data: '50',
    info: 'Clients Worldwide',
  },
];

const Statistics = () => {
  return (
    <div className='divide-primary-300 mt-6 flex flex-col items-start gap-5 text-white max-md:divide-x md:mt-12 md:divide-y'>
      {statistics.map((statistic) => (
        <div
          key={statistic.data}
          className='w-55.5 flex-1 text-left max-md:w-full max-md:py-5 max-md:first:pt-0 max-md:last:pb-0 md:last:pr-0'
        >
          <p className='display-md-bold md:display-lg-bold'>{statistic.data}</p>
          <p className='text-sm-regular md:text-md-semibold mb-5'>
            {statistic.info}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Statistics;
