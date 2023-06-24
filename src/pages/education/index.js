import {HiAcademicCap} from 'react-icons/hi'
import clsx from 'clsx'

import education from '../../assets/json/education.json'
import PageHeader from '../../components/pageHeader'
import BackgroundLayer from '../../components/backgroundLayer'
import WorkSection from '../../components/workSection'
import style from './style.module.scss'


export default function EducationPage() {
    return (
        <BackgroundLayer name='edu'>

            <PageHeader icon={<HiAcademicCap/>} title={'My Education'}/>

            <p className={style.quote}>
                The result of education is not knowledge, 
                it is the ability to think, self-study and solve problems.
            </p>

            <div className={clsx('grid wide', style.grid)}>

                <div className='row'>
                    {
                        education.map((item, index) => (
                            <div className={clsx('col xl-10 xl-o-1 l-12 m-12 s-12')}>
                                <WorkSection
                                    key={index}
                                    img={item.img}
                                    position={item.position}
                                    organization={item.organization}
                                    period={item.period}
                                    completed={item.completed}
                                />
                            </div>
                        ))
                    }

                </div>
                
            </div>

        </BackgroundLayer>
    )
}