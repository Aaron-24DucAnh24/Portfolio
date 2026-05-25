'use client';

import { PATH_NAME, STATIC_URLS } from '@/utils/constants';
import { Button } from '../general/Button';
import Image from 'next/image';
import { FloatingCode } from './FloatingCode';

export const HomePage = () => {
  const handleOpenCV = () => {
    window.open(STATIC_URLS.CV);
  };

  const handleContact = () => {
    window.location.replace(PATH_NAME.CONTACT);
  };

  return (
    <div className={'h-full w-full flex flex-col sm:flex-wrap sm:flex-row'}>
      <div
        className='h-1/2 sm:h-full w-full sm:w-1/2 flex flex-col justify-center space-y-3 md:space-y-5 p-4'>
        <div className='text-xl md:text-3xl font-semibold flex items-center sm:tracking-tighter'>
          {'Hi there, I\'m Duc-anh Bui'}
          <Image
            className='ml-2 md:ml-3 animate-shake'
            src={STATIC_URLS.WAVING_HAND}
            alt={STATIC_URLS.WAVING_HAND}
            height={36}
            width={36} />
        </div>
        <div className='text-base md:text-xl text-third italic'>
          {'Fullstack Software Engineer'}
        </div>
        <div className='text:md sm:text-lg text-justify'>
          {'Software engineer with experience building production systems across e-commerce and education domains. Proficient in .NET, React, and Next.js, with hands-on experience evaluating and directing AI-generated code. Actively developing business analysis skills alongside engineering, with a goal of transitioning into a Business Analyst role within the next 5 years.'}
        </div>
        <div className='flex space-x-2'>
          <Button
            name={'My CV'}
            action={handleOpenCV}
            primary />
          <Button
            name={'Contact me'}
            action={handleContact} />
        </div>
      </div>
      <div className='sm:bg-primary h-1/2 sm:h-full w-full sm:w-1/2 p-4 rounded-l-2xl'>
        <div className='h-full flex items-center justify-center relative'>
          <div className='absolute inset-0 overflow-hidden'>
            <FloatingCode />
          </div>
          <div className='h-72 w-72 rounded-full overflow-hidden relative z-10'>
            <Image
              src={STATIC_URLS.DUCANH}
              alt={STATIC_URLS.DUCANH}
              className='object-cover'
              fill />
          </div>
        </div>
      </div>
    </div>
  );
};
