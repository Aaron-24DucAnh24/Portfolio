import style from './style.module.scss'
import homeBackground from '../../assets/img/home-background.png'
import eduBackground from '../../assets/img/eduction-background.png'
import skillsBackground from '../../assets/img/skills-background.png'
import expBackground from '../../assets/img/exp.png'

export default function BackgroundLayer({children, name}) {

    let background

    switch (name) {
        case 'home':
            background = homeBackground
            break;

        case 'edu':
            background = eduBackground
            break;

        case 'skills':
            background = skillsBackground
            break;

        case 'exp':
            background = expBackground
            break;
    
        default:
            background = homeBackground
            break;
    }

    return (
        <div 
            style={{
                backgroundImage: `url(${background})`
            }} 
            className={style.layer1}
        >
            <div className={style.layer2}>
                {children}
            </div>
        </div>
    )
}