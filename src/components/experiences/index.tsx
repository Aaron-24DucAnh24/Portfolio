import { AiOutlineProject } from 'react-icons/ai';
import { STATIC_URLS } from '@/utils/constants';
import { ExperienceCard } from './ExperienceCard';
import { NPInternDesc } from './NPInternDesc';
import { NPFullstackDesc } from './NPFullstackDesc';

export const ExperiencePage = () => {
  return (
    <div className={'max-w-5xl px-4 py-4 sm:py-12 mx-auto flex flex-col'}>
      <h1 className='pb-4 sm:pb-12 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        Working Experiences
        <AiOutlineProject color='#e60022' size={40} className='pl-2' />
      </h1>
      <div className='flex flex-wrap justify-between items-start -mx-4 -mb-8 space-y-4 md:space-y-0'>
        <ExperienceCard
          name={'NETPOWER VIETNAM'}
          image={STATIC_URLS.NETPOWER}
          position={'Fullstack Developer'}
          time={'August 2023 - December 2023'}
          className='bg-[#11b9e8]'
          desc={<NPFullstackDesc />}
        />
        <ExperienceCard
          name={'NETPOWER VIETNAM'}
          image={STATIC_URLS.NETPOWER}
          position={'Software Engineer Intern'}
          time={'June 2023 - August 2023'}
          className='bg-[#11b9e8]'
          desc={<NPInternDesc />}
        />
      </div>
    </div>
  );
};