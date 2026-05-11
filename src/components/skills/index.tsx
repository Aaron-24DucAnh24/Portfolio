import { PiGearBold } from 'react-icons/pi';
import { SkillsCard } from './SkillsCard';
import { SKILLS } from '@/utils/constants';

export const SkillsPage = () => {
  return (
    <div className={'max-w-4xl px-4 py-4 sm:py-6 mx-auto flex flex-col'}>
      <h1 className='pb-2 sm:pb-6 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        {'Software Engineer Techstack'}
        <PiGearBold color='#e60022' size={40} className='pl-2' />
      </h1>
      <div className='flex flex-col -mx-4 space-y-3'>
        {SKILLS.map(({ name, items }) => (
          <SkillsCard key={name} name={name} items={[...items]} />
        ))}
      </div>
    </div>
  );
};
