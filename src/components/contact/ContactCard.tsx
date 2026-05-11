'use client';

import { ReactNode } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector, useHoverState } from '@/utils/hooks';
import { IoOpenOutline } from 'react-icons/io5';

interface IContactCard {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
}

export const ContactCard = ({ label, value, href, icon }: IContactCard) => {
  const { isHover, hoverProps } = useHoverState();
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <div
        {...hoverProps}
        className={`rounded-xl overflow-hidden shadow-md hover:shadow-2xl border relative
          ${isDarkTheme ? 'bg-fifth border-white/10' : 'bg-white border-gray-200'}`}>
        <div className='flex items-center gap-4 px-5 py-4'>
          <div className='text-primary shrink-0'>{icon}</div>
          <div className='flex flex-col gap-0.5'>
            <span className='font-semibold text-sm'>{label}</span>
            <span className={`text-xs ${isDarkTheme ? 'text-third' : 'text-gray-500'}`}>{value}</span>
          </div>
          <IoOpenOutline size={15} className={`ml-auto shrink-0 opacity-50 ${isDarkTheme ? 'text-third' : 'text-gray-400'}`} />
        </div>
        <ShrinkBorder isHover={isHover} />
      </div>
    </a>
  );
};
