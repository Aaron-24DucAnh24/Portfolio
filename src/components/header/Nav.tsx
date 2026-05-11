'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ROUTES } from '@/utils/constants';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

export const Nav = () => {
  const theme = useAppSelector(x => x.theme);
  const pathName = usePathname();
  const activeStyle = theme.value === THEME.LIGHT
    ? 'bg-secondary rounded-full text-fourth px-4 py-2'
    : 'bg-white rounded-full text-secondary px-4 py-2';

  return (
    <nav className="h-full hidden md:flex ml-auto">
      <ul className="flex text-base font-medium h-full items-center space-x-6">
        {NAV_ROUTES.slice(1).map(({ path, label }) => (
          <li key={path} className={`items-center flex ${pathName === path ? activeStyle : ''}`}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};