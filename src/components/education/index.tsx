'use client';

import { STATIC_URLS } from '@/utils/constants';
import { EducationCard } from './EducationCard';
import { GrCertificate } from 'react-icons/gr';
import { useAppSelector } from '@/utils/hooks';
import { THEME } from '@/utils/enums';

export const EducationPage = () => {
  const { value } = useAppSelector(x => x.theme);

  return (
    <div className={'max-w-5xl px-4 py-4 sm:py-12 mx-auto flex flex-col'}>
      <h1 className='pb-2 sm:pb-12 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        Education and Certificates <GrCertificate color='#e60022' size={40} className='pl-2' />
      </h1>

      <div className='space-y-4'>
        <EducationCard
          image={STATIC_URLS.HCMUT}
          orgName={'hcm university of technology'}
          degreeName={'bachelor of computer science'}
          score={'GPA: 3.1'}
          from={'2020'}
          to={'2024'}
        />
        <EducationCard
          image={STATIC_URLS.QUANG_TRUNG}
          orgName={'Quang-trung gifted high school'}
          degreeName={'Specialized Chemistry Student'}
          score={'National High School Graduation Exam Top Score - 29.35'}
          from={'2017'}
          to={'2020'}
        />
      </div>

      <div className={`
        my-4 sm:my-8 border shadow-sm mx-12 
        ${value === THEME.DARK && 'border-third'}`
      } />

      <div className='space-y-4'>
        <EducationCard
          image={STATIC_URLS.IDP}
          orgName={'IDP education Vietnam'}
          degreeName={'IELTS'}
          score={'Band 6.0'}
          from={'2022'}
          to={'2024'}
        />
      </div>
    </div>
  );
};