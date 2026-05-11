import { AiOutlineProject } from 'react-icons/ai';
import { ExperienceCard } from './ExperienceCard';
import { NPInternDesc } from './NPInternDesc';
import { NPFullstackDesc } from './NPFullstackDesc';
import experiencesData from '@/data/experienceData.json';
import { W2Desc } from './W2Desc';
import { LabelboxDesc } from './LabelboxDesc';

type DescComponentKey = keyof typeof descComponents;

const descComponents = {
  NPFullstackDesc: <NPFullstackDesc />,
  NPInternDesc: <NPInternDesc />,
  W2Desc: <W2Desc />,
  LabelboxDesc: <LabelboxDesc />
};

export const ExperiencePage = () => {
  return (
    <div className={'max-w-4xl px-4 py-4 sm:py-6 mx-auto flex flex-col'}>
      <h1 className='pb-4 sm:pb-6 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        {'Working Experiences'}
        <AiOutlineProject color='#e60022' size={40} className='pl-2' />
      </h1>
      <div className='flex flex-col space-y-4'>
        {experiencesData.map((company, index) => (
          <ExperienceCard
            key={index}
            name={company.name}
            image={company.image}
            companyUrl={company.companyUrl}
            positions={company.positions.map(p => ({
              title: p.title,
              from: new Date(p.from),
              to: ('to' in p && p.to) ? new Date(p.to as string) : null,
              desc: descComponents[p.descComponent as DescComponentKey],
            }))}
          />
        ))}
      </div>
    </div>
  );
};
