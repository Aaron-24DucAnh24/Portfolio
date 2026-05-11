'use client';

import Image from 'next/image';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector, useHoverState } from '@/utils/hooks';

interface IEducationCard {
  image: string;
  orgName: string;
  degreeName: string;
  score: string;
  from: string;
  to: string;
}

export const EducationCard = (props: IEducationCard) => {
  const {
    image,
    orgName,
    degreeName,
    score,
    from,
    to,
  } = props;

  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);
  const { isHover, hoverProps } = useHoverState();

  return (
    <div
      className={
        `shadow-md hover:shadow-2xl rounded-xl overflow-hidden border relative
        ${isDarkTheme ? 'bg-fifth border-white/10' : 'bg-white border-gray-200'}`
      }
      {...hoverProps}>
      <div className="px-4 py-4 w-full flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0">
        <Image
          className='object-cover shadow-lg rounded-full border'
          src={image}
          alt={orgName}
          width={128}
          height={128} />
        <div className='flex flex-col space-y-1 justify-center items-center sm:items-start text-center sm:text-start'>
          <div className='text-sm uppercase font-semibold'>{orgName}</div>
          <div className='uppercase text-sm'>{degreeName}</div>
          <div className='text-primary text-sm font-medium'>{score}</div>
          <div className='italic text-third text-xs'>{`From ${from} to ${to}`}</div>
        </div>
      </div>
      <ShrinkBorder isHover={isHover} />
    </div>
  );
};