import { StaticImageData } from 'next/image';

import cosfit from '../../public/images/cosfit.png';
import foody from '../../public/images/foody.png';
import resto from '../../public/images/resto.png';
import bliin from '../../public/images/bliin.png';
import movie from '../../public/images/cosfit.png';
import booky from '../../public/images/booky.png';
import mobileapp from '../../public/images/project3.png';
import tripsync from '../../public/images/tripsync.png';
import copypastel from '../../public/images/copypastel.png';
import sociality from '../../public/images/sociality.png';
import compro from '../../public/images/compro.png';
import porto from '../../public/images/porto.png';
import cms from '../../public/images/cms.png';

type Project = {
  imageSrc: StaticImageData;
  videoSrc?: string;
  name: string;
  description: string;
  link: string;
};

export const projectsData: Project[] = [
  {
    imageSrc: cosfit,
    name: 'CosFit',
    description: 'Fullstack • AI • E-commerce',
    link: 'https://final-project-six-lemon.vercel.app/',
  },
  {
    imageSrc: foody,
    name: 'Foody AI',
    description: 'Fullstack • AI • React',
    link: 'https://foody-ai-nu.vercel.app/',
  },
  {
    imageSrc: bliin,
    name: 'Bliin',
    
    description: 'Fullstack • E-commerce • Next.js',
    link: 'https://bliin.vercel.app',
  },
  {
    imageSrc: tripsync,
    name: 'TripSync',
    description: 'Fullstack • AI • React',
    link: 'https://group-project-f6682.web.app',
  },
  {
    imageSrc: copypastel,
    name: 'Copy Pastel',

    description: 'Frontend • E-commerce • HTML • CSS',
    link: 'https://copy-pastel.vercel.app/',
  },
  {
    imageSrc: cms,
    name: 'IDEA CMS',
    videoSrc: '/videos/cms.mov',
    description: 'Backend • REST API • JWT Auth • Role-Based Access • CRUD',
    link: 'https://cms-site-mu.vercel.app/',
  },
  {
    imageSrc: mobileapp,
    name: 'Social Media Mobile App',
    description: 'Mobile • React Native • GraphQL',
    link: 'https://expo.dev/accounts/latifahkhaerani/projects/client/builds/3bd1be04-f8ea-49a5-8735-4395de5131ec',
  },
  {
    imageSrc: compro,
    name: 'Company Profile',
    videoSrc: '/videos/compro.mov',
    description: 'Frontend • React • Vite • Tailwind CSS',
    link: 'https://company-profile-five-wine.vercel.app/',
  },
  {
    imageSrc: movie,
    name: 'Movie Explorer',
    videoSrc: '/videos/movie.mov',
    description: 'Frontend • Next.js • TypeScript',
    link: 'https://movie-new-wine.vercel.app/',
  },
  {
    imageSrc: resto,
    name: 'Restaurant App',
    videoSrc: '/videos/resto.mov',
    description: 'Frontend • React • Web Application',
    link: 'https://restaurant-app-n7yo.vercel.app/',
  },
  {
    imageSrc: booky,
    name: 'Booky',
    videoSrc: '/videos/booky.mov',
    description: 'Frontend • React • TypeScript • React Query',
    link: 'https://my-library-app-ebon.vercel.app/',
  },
  {
    imageSrc: sociality,
    name: 'Sociality',
    videoSrc: '/videos/sociality.mov',
    description: 'Frontend • Next.js • TypeScript',
    link: 'https://social-media-tsy7.vercel.app/',
  },
  {
    imageSrc: porto,
    name: 'Portfolio',
    videoSrc: '/videos/porto.mov',
    description: 'Frontend • Next.js • Tailwind CSS • Framer Motion',
    link: 'https://portfolio-ten-plum-57.vercel.app/',
  },
];
