import { PiGearBold } from 'react-icons/pi';
import { SkillsCard } from './SkillsCard';

export const SkillsPage = () => {
  return (
    <div className={'max-w-4xl px-4 py-4 sm:py-6 mx-auto flex flex-col'}>
      <h1 className='pb-2 sm:pb-6 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        {'Software Engineer Techstack'}
        <PiGearBold color='#e60022' size={40} className='pl-2' />
      </h1>
      <div className='flex flex-col -mx-4 space-y-3'>
        <SkillsCard
          name={'Programming'}
          items={['TypeScript', 'Python', 'C#', 'JavaScript']} />
        <SkillsCard
          name={'Frontend'}
          items={['NextJs', 'ReactJs', 'Tailwind', 'MobX', 'Redux']} />
        <SkillsCard
          name={'Backend'}
          items={['.NET', 'MSSQL', 'MySQL', 'MongoDB', 'Redis']} />
        <SkillsCard
          name={'Tools'}
          items={['Docker', 'Git']} />
      </div>
    </div>
  );
};
