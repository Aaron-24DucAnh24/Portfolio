'use client';
import { useStores } from '@/store';
import { THEME } from '@/utils/enums';
import { useEffect, useState } from 'react';

export const ShrinkBorder = ({ isHover }: { isHover: boolean }) => {
  const { generalStore } = useStores();
  const [className, setClassName] = useState('');

  useEffect(() => {
    generalStore.theme === THEME.DARK && setClassName('border-third w-3/4');
    generalStore.theme === THEME.LIGHT && setClassName('border-fourth w-3/4');
  }, [generalStore.theme]);

  return (
    <hr className={`border-2 duration-1000
      ${isHover ? 'border-primary w-full' : className}`}
    />
  );
};