import style from './About.module.css';
import imgRoboto from '../../assets/roboto-image-cut.png';
import imgContact from '../../assets/conctact-image.png';
import curve from '../../assets/desktop-curve.svg';
import { Button } from 'react-bootstrap';

const About = () => {

    return (
        <div className={style.container}>
            <div className={style.first_container}>
            <div className={style.h1_img_curve}>
            <div className={style.h1_img}>  
            <h1>About</h1>
            <img className={style.imgRoboto} src={imgRoboto} alt="roboto" />
            </div>
            <img className={style.curve_black} src={curve} alt="curve" />  
            </div>
            <div className={style.paragraphs}>
                <p>TaskUnity está basada en Trello y Jira Software.</p>
                <p>Fue diseñada y desarrollada con el objetivo de ofrecer una experiencia de usuario intuitiva y eficiente.</p>
                <p>Este proyecto se llevó a cabo con el fin de exhibir habilidades técnicas y proporcionar una solución que garantice un funcionamiento óptimo y un fácil y rápido acceso para los usuarios.</p>
            </div>
            </div>
            <div className={style.second_container}>
            <div className={style.h2_img_curve}>
            <img className={style.curve_black_invert} src={curve} alt="curve" /> 
            <div className={style.h2_img}>
            <h2>Contact Me</h2>
            <img className={style.imgContact} src={imgContact} alt="card" />
            </div>
            <img className={style.curve_white} src={curve} alt="curve" /> 
            </div>
            <div className={style.paragraphs_2}>
            <p>Si estás interesado en saber más sobre mí y mi trabajo, te invito a visitar mi Portfolio.</p>
            <p>Allí encontrarás una muestra de mis proyectos y podrás contactarme a través de mis principales redes sociales.</p>
            <p>¡Espero poder conectar contigo pronto y colaborar en futuros proyectos juntos!</p>
            <Button 
            style={{ display: 'flex', justifyContent:'center', alignItems: 'center', margin:'18px auto 18px', width:'180px', height:'60px', textAlign:'center'}}
            variant="primary" 
            size="lg"
            href='https://dave-vrl.pages.dev/'
            >
            Portfolio
            </Button>
            </div>
            </div>
        </div>
    )
};

export default About;