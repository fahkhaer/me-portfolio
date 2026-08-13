'use client';
import React, { useState, useEffect } from 'react';

const Desc = () => {
  const fullText =
    'From Figma designs to fullstack applications, I build responsive, interactive, and user-focused digital experiences.';
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='py-20 text-center'>
      <p className='custom-container display-lg-medium -tracking-tight'>
        {displayText}
        <span className='animate-pulse'>|</span>
      </p>
    </div>
  );
};

export default Desc;
