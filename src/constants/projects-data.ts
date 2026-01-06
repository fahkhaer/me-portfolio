import { StaticImageData } from 'next/image';

import project1Src from '../../public/images/project1.png';
import project2Src from '../../public/images/project2.png';
import project3Src from '../../public/images/project3.png';
import { link } from 'fs';

type Project = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
  link: string;
};

export const projectsData: Project[] = [
  {
    imageSrc: project1Src,
    name: 'Company Profile',
    description: '2025',
    link: 'https://company-profile-five-wine.vercel.app/',
  },
  {
    imageSrc: project2Src,
    name: 'Foody',
    description: '2025',
    link: 'https://restaurant-app-alpha-tan.vercel.app/',
  },
  {
    imageSrc: project2Src,
    name: 'Booky',
    description: '2025',
    link: 'https://my-library-app-ebon.vercel.app/',
  },
  {
    imageSrc: project3Src,
    name: 'Movie',
    description: '2025',
    link: 'https://movie-new-wine.vercel.app/',
  },
  {
    imageSrc: project3Src,
    name: 'Sociality',
    description: '2025',
    link: 'https://social-media-tsy7.vercel.app/',
  },
  {
    imageSrc: project3Src,
    name: 'ToDo List',
    description: '2025',
    link: 'https://todolist-cv27.vercel.app/login',
  },
  {
    imageSrc: project3Src,
    name: 'ToDo List',
    description: '2025',
    link: 'https://e-commerce-theta-liart-83.vercel.app/',
  },
];
