'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

interface IExperienceCard {
  name: string,
  image: string,
  position: string,
  time: string,
  desc: JSX.Element,
  className: string,
}

export const ExperienceCard = (props: IExperienceCard) => {
  const { name, image, position, time, desc, className } = props;
  const theme = useAppSelector(x => x.theme);
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className='w-full md:w-1/2 px-4 sm:pb-8'>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-2xl border relative
          ${theme.value === THEME.DARK && 'bg-fifth border-third'}
        `}
      >
        <div className='relative w-full h-36 flex justify-center items-center text-fourth font-medium'>
          <div className={`${className} absolute top-0 left-0 right-0 bottom-0 brightness-90`}></div>
          <p className='absolute'>{name}</p>
          <div className='absolute h-24 w-24 rounded-full overflow-hidden -bottom-12 shadow-xl'>
            <Image
              src={image}
              alt={image}
              fill
              className=' object-cover'
            />
          </div>
        </div>

        <div className='mt-8 flex flex-col items-center p-8 space-y-3 text-justify'>
          <div className='text-lg font-medium'>
            {position}
          </div>
          <div className='italic font-light'>
            {time}
          </div>
          {desc}
        </div>
        <ShrinkBorder isHover={isHover} />
      </div>
    </div>
  );
};