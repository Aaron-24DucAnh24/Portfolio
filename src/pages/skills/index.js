import {FaTools} from 'react-icons/fa'
import clsx from 'clsx'

import SkillList from '../../components/skillList'
import style from './style.module.scss'
import PageHeader from '../../components/pageHeader'
import BackgroundLayer from '../../components/backgroundLayer'
import programming from '../../assets/json/programming.json'
import libraries from '../../assets/json/libraries.json'
import database from '../../assets/json/database.json'
import others from '../../assets/json/others.json'

export default function SkillPage() {
    return (
        <BackgroundLayer name='skills'>

            <PageHeader icon={<FaTools/>} title={'Tech stack'}/>

            <div className={clsx('grid wide', style.grid)}>

                <SkillList skills={programming}/>

                <SkillList skills={libraries}/>

                <SkillList skills={database}/>

                <SkillList skills={others}/>

            </div>

        </BackgroundLayer>
    )
}