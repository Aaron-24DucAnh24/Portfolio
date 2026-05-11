'use client';

import Image from 'next/image';
import { Button } from '../general/Button';
import { FaGithub } from 'react-icons/fa';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector, useHoverState } from '@/utils/hooks';

interface IPersonalProjectCard {
  name: string;
  type: string;
  techs: string;
  source: string;
  image: string;
  desc?: JSX.Element;
}

export const PersonalProjectCard = (props: IPersonalProjectCard) => {
  const { name, type, techs, image, source, desc } = props;

  const [isOpen, setIsOpen] = useState(false);
  const { isHover, hoverProps } = useHoverState();
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

  return (
    <div
      {...hoverProps}
      className={`shadow-md hover:shadow-2xl rounded-xl overflow-hidden border relative
        ${isDarkTheme ? 'border-white/10 bg-fifth' : 'border-gray-200 bg-white'}`}>

      <div className='px-5 py-4'>
        <div className='w-full flex flex-col items-center sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0'>
          <Image
            className='rounded-full w-32 h-32 object-cover shadow-lg'
            src={image}
            alt={name}
            width={128}
            height={128} />
          <div className='flex flex-col items-center text-center sm:text-start sm:items-start space-y-1 sm:space-y-2 flex-1'>
            <div className='text-sm font-semibold'>{name}</div>
            <div className='text-sm uppercase font-medium'>{type}</div>
            <div className='text-third text-xs italic'>{techs}</div>
            <div className='space-x-2 flex'>
              <Button
                name='Source'
                icon={<FaGithub size={22} />}
                action={() => window.open(source)}
                primary />
            </div>
          </div>
        </div>
      </div>

      {desc && (
        <>
          <div className={`border-t ${isDarkTheme ? 'border-white/10' : 'border-gray-100'}`}>
            <button
              onClick={() => setIsOpen(prev => !prev)}
              className={`w-full flex items-center justify-between px-5 py-3 text-left transition-colors
                ${isDarkTheme ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
              <span className={`text-sm font-medium ${isDarkTheme ? '' : 'text-gray-700'}`}>
                Description
              </span>
              <IoChevronDownOutline
                size={15}
                className={`flex-shrink-0 ml-4 transition-transform duration-300
                  ${isOpen ? 'rotate-180' : ''}
                  ${isDarkTheme ? 'text-third' : 'text-gray-400'}`}
              />
            </button>
          </div>

          <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className='overflow-hidden'>
              <div className={`ml-5 mr-5 mb-4 pl-4 border-l-2 border-primary text-sm
                ${isDarkTheme ? 'text-third' : 'text-gray-600'}`}>
                {desc}
              </div>
            </div>
          </div>
        </>
      )}

      <ShrinkBorder isHover={isHover} />
    </div>
  );
};
