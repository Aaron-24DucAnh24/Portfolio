'use client';

import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

export const W2Desc = () => {
  const theme = useAppSelector(x => x.theme);

  return (
    <ul className="leading-6 space-y-2 text-sm text-third">
      <li className="dotted-li">
        <p>
          {'Contributed to '}
          <i className={`text-black not-italic ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}>
            <b>{'W2 Commerce V5'}</b>
          </i>
          {', a scalable multi-tenant e-commerce platform serving 50+ partner businesses, including '}
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
          {'.'}
        </p>
      </li>
      <li className="dotted-li">
        <p>
          {'Built reusable, configurable modules using ASP.NET and SQL Server to support diverse business rules and UI requirements per partner.'}
        </p>
      </li>
      <li className="dotted-li">
        <p>
          {'Integrated third-party services including payment gateways, order management workflows, and user authentication systems.'}
        </p>
      </li>
    </ul>
  );
};
