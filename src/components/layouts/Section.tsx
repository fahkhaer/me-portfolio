type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id: string;
};

const Section: React.FC<SectionProps> = ({ children, title, subtitle, id }) => {
  return (
    // heading
    <div className='custom-container' id={id}>
      <div className='text-center'>
        <h2 className='display-xl-bold text-neutral-950'>{title}</h2>
        <p className='text-md-medium text-neutral-950'>{subtitle}</p>
      </div>
      {/* content */}
      <div className="mt-6 md:mt-16">
        {children}  
      </div>
    </div>
  );
};

export default Section;
