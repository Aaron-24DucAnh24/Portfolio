'use client';

import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

interface ISkillsCard {
  name: string;
  items: string[];
}

export const SkillsCard = (props: ISkillsCard) => {
  const { name, items } = props;
  const [isHover, setIsHover] = useState(false);
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

  return (
    <div className='w-full px-4 sm:pb-4'>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={
          `rounded-xl overflow-hidden shadow-md hover:shadow-2xl border relative
          ${isDarkTheme ? 'bg-fifth border-white/10' : 'bg-white border-gray-200'}`
        }>
        <div className='flex flex-row items-center p-4 gap-4'>
          <div className='text-sm font-semibold w-28 shrink-0'>{name}</div>
          <div className='flex flex-wrap gap-2'>
            {items.map((item, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm font-light border ${isDarkTheme ? 'border-third text-white' : 'border-secondary text-secondary'}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <ShrinkBorder isHover={isHover} />
      </div>
    </div>
  );
};
