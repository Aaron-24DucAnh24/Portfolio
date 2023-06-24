import clsx from 'clsx'
import style from './style.module.scss'
import SkillBox from "../skillBox"

export default function SkillList({skills}) {
    return (
        <div className={clsx('row no-gutters', style.row)}>
            {
                skills.map((skill, index) => (
                    <div className={clsx('col xl-2 l-2 m-3 s-4', style.col)}>
                        <SkillBox key={index} imgSrc={skill.icon} name={skill.name}/>
                    </div>
                ))
            }
        </div>
    )
} 