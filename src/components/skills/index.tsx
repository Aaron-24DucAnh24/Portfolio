import { PiGearBold } from 'react-icons/pi';
import { SkillsCard } from './SkillsCard';
import { STATIC_URLS } from '@/utils/constants';

export const SkillsPage = () => {
  return (
    <div className={'max-w-4xl px-4 py-4 sm:py-6 mx-auto flex flex-col'}>
      <h1 className='pb-2 sm:pb-6 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        {'Technical Skills'}
        <PiGearBold color='#e60022' size={40} className='pl-2' />
      </h1>
      <div className='flex flex-wrap justify-between items-start -mx-4 sm:-mb-8 space-y-4 md:space-y-0'>
        <SkillsCard
          name={'Programming'}
          image={STATIC_URLS.PROGRAMMING}
          items={[
            STATIC_URLS.CPP,
            STATIC_URLS.C_SHARP,
            STATIC_URLS.JS,
            STATIC_URLS.TS,
            STATIC_URLS.PYTHON
          ]}
          techNames={[
            'C++',
            'C#',
            'Javascript',
            'Typescript',
            'Python',
          ]} />
        <SkillsCard
          name={'Frontend'}
          image={STATIC_URLS.FE}
          items={[
            STATIC_URLS.NEXT,
            STATIC_URLS.REACT,
            STATIC_URLS.TAILWIND,
            STATIC_URLS.MOBX,
            STATIC_URLS.REDUX,
          ]}
          techNames={[
            'NextJs',
            'ReactJs',
            'Tailwind',
            'MobX',
            'Redux'
          ]} />
        <SkillsCard
          name={'Backend'}
          image={STATIC_URLS.BE}
          items={[
            STATIC_URLS.NET,
            STATIC_URLS.MSSQL,
            STATIC_URLS.MYSQL,
            STATIC_URLS.MONGO,
            STATIC_URLS.REDIS,
          ]}
          techNames={[
            '.NET',
            'MSSQL',
            'MySQL',
            'MongoDB',
            'Redis',
          ]} />
        <SkillsCard
          name={'Other tools'}
          image={STATIC_URLS.TOOLS}
          items={[
            STATIC_URLS.DOCKER,
            STATIC_URLS.GIT,
            STATIC_URLS.AZURE,
            STATIC_URLS.CY
          ]}
          techNames={[
            'Docker',
            'Git',
            'Azure',
            'Cypress'
          ]} />
      </div>
    </div>
  );
};