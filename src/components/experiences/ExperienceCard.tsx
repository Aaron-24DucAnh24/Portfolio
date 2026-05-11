'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';
import { formatDateRange, calculateDuration } from '@/utils/dateUtils';
import { IoChevronDownOutline, IoOpenOutline } from 'react-icons/io5';

interface IPosition {
  title: string;
  from: Date;
  to: Date | null;
  desc: JSX.Element;
}

interface IExperienceCard {
  name: string;
  image: string;
  positions: IPosition[];
  companyUrl: string;
}

const PositionRow = ({
  position,
  isDarkTheme,
  defaultOpen,
}: {
  position: IPosition;
  isDarkTheme: boolean;
  defaultOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const dateRange = formatDateRange(position.from, position.to);
  const duration = calculateDuration(position.from, position.to);

  return (
    <div className={`border-t ${isDarkTheme ? 'border-white/10' : 'border-gray-100'}`}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={`w-full flex items-center justify-between px-5 py-3 text-left transition-colors
          ${isDarkTheme ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
        <div className='flex flex-col gap-0.5'>
          <span className='font-medium text-sm'>{position.title}</span>
          <div className='flex items-center flex-wrap gap-x-2 gap-y-1'>
            <span className={`text-xs ${isDarkTheme ? 'text-third' : 'text-gray-500'}`}>
              {dateRange}
            </span>
            <span className='px-2 py-0.5 bg-primary text-fourth rounded-full text-[10px] font-medium tracking-wide'>
              {duration}
            </span>
          </div>
        </div>
        <IoChevronDownOutline
          size={15}
          className={`flex-shrink-0 ml-4 transition-transform duration-300
            ${isOpen ? 'rotate-180' : ''}
            ${isDarkTheme ? 'text-third' : 'text-gray-400'}`}
        />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className='overflow-hidden'>
          <div className={`ml-5 mr-5 mb-4 pl-4 border-l-2 border-primary text-sm
            ${isDarkTheme ? 'text-third' : 'text-gray-600'}`}>
            {position.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExperienceCard = ({ name, image, positions, companyUrl }: IExperienceCard) => {
  const [isHover, setIsHover] = useState(false);
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`rounded-xl border overflow-hidden relative shadow-md hover:shadow-2xl
        ${isDarkTheme ? 'bg-fifth border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>

      <div className={`flex items-center gap-4 px-5 py-4 border-b
        ${isDarkTheme ? 'border-white/10' : 'border-gray-100'}`}>
        <Image
          className='object-cover rounded-lg flex-shrink-0'
          src={image}
          alt={name}
          width={48}
          height={48}
        />
        <Link
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className='font-semibold tracking-wide text-sm inline-flex items-center gap-1.5 hover:text-primary transition-colors'>
          {name}
          <IoOpenOutline size={13} className='opacity-50' />
        </Link>
      </div>

      <div>
        {positions.map((pos, i) => (
          <PositionRow
            key={i}
            position={pos}
            isDarkTheme={isDarkTheme}
            defaultOpen={true}
          />
        ))}
      </div>

      <ShrinkBorder isHover={isHover} />
    </div>
  );
};
