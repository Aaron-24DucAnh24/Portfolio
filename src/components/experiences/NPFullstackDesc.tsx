'use client';

import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

export const NPFullstackDesc = () => {
  const theme = useAppSelector(x => x.theme);

  return (
    <ul className={'leading-6 space-y-2 text-sm text-third '}>
      <li className="dotted-li">
        <p>
          {'Developed backend services and frontend features for '}
          <i
            className={`cursor-pointer text-black underline ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}
            onClick={() => window.open('https://institute.debeers.com/en-gb/education')}>
            <b>{'DeBeers Education'}</b>
          </i>
          {', a large-scale education platform serving an international fashion brand (.NET Core + React).'}
        </p>
      </li>
      <li className="dotted-li">
        {'Implemented user management and authentication flows integrated with OKTA.'}
      </li>
      <li className="dotted-li">
        {'Worked in a 6-member team, collaborating directly with stakeholders to refine and deliver business requirements.'}
      </li>
    </ul>
  );
};
