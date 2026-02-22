'use client';

import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

export const NPFullstackDesc = () => {
  const theme = useAppSelector(x => x.theme);

  return (
    <ul className={'leading-6 space-y-2 text-sm text-third '}>
      <li className="dotted-li">
        <p>
          {'Worked on '}
          <i
            className={`cursor-pointer text-black underline ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}
            onClick={() => window.open('https://institute.debeers.com/en-gb/education')}>
            <b>{'DeBeers Education'}</b>
          </i>
          {', an education platform for an international fashion company.'}
        </p>
      </li>
      <li className="dotted-li">
        {'Developed user management and authentication features integrating OKTA.'}
      </li>
      <li className="dotted-li">
        {'Collaborated in a 6-member agile team, working closely with stakeholders to refine and deliver business requirements'}
      </li>
    </ul>
  );
};