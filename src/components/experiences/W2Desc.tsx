'use client';

import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

export const W2Desc = () => {
  const theme = useAppSelector(x => x.theme);

  return (
    <ul className="leading-6 space-y-2 text-sm text-third">
      <li className="dotted-li">
        <p>
          {'Worked on '}
          <i className={`text-black not-italic ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}>
            <b>{'w2Commerce V5'}</b>
          </i>
          {', a scalable e-commerce platform designed to be customized for multiple partner businesses including: '}
          <i
            className={`cursor-pointer text-black underline ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}
            onClick={() => window.open('https://www.wakudoki.ne.jp/ec/cmShopTopPage1.html')}>
            <b>{'Shirohato'}</b>
          </i>
          {', '}
          <i
            className={`cursor-pointer text-black underline ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}
            onClick={() => window.open('https://www.morinagamilk.co.jp/english/')}>
            <b>{'Morinaga'}</b>
          </i>
          {', and '}
          <i
            className={`cursor-pointer text-black underline ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}
            onClick={() => window.open('https://www.fukutaro.co.jp/en/')}>
            <b>{'Fukutaro'}</b>
          </i>
        </p>
      </li>
      <li className="dotted-li">
        <p>
          {'Built reusable and configurable modules to support different business rules, workflows, and UI requirements.'}
        </p>
      </li>
    </ul>
  );
};