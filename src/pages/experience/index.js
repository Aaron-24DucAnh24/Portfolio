import clsx from 'clsx'
import {MdWork } from 'react-icons/md'
import WorkSection from '../../components/workSection'
import BackgroundLayer from '../../components/backgroundLayer'
import PageHeader from '../../components/pageHeader'
import style from './style.module.scss'
import experience from '../../assets/json/experience.json'

export default function ExperiencePage() {
    return (
        <BackgroundLayer name='exp'>
            <PageHeader title='Experience' icon={<MdWork/>}/>

            <div className={clsx('grid wide', style.grid)}>

                <div className='row'>
                    {
                        experience.map((item, index) => (
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