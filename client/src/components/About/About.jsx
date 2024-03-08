import style from './About.module.css';
import imgRoboto from '../../assets/image-about.png';
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
                <h5>¿Qué es TaskUnity?</h5>
                <p>Es una plataforma diseñada y desarrollada para ofrecer una experiencia de usuario intuitiva y eficiente. Con un acceso rápido y sencillo, los usuarios pueden organizar fácilmente sus proyectos individuales o grupales utilizando tableros, listas y tarjetas.</p>
                <p>Al fragmentar tus proyectos en tareas, podrás avanzar hacia su cumplimiento con mayor fluidez y eficacia.</p>
                <p>Este proyecto también fue realizado con el propósito de exhibir habilidades técnicas, además de proporcionar una solución que garantice un funcionamiento óptimo.</p>
                <hr />
                <h5>¿Qué es la Metodología Scrum?</h5>
                <p>Es un enfoque ágil de gestión de proyectos, comúnmente utilizado en el desarrollo de software. Se basa en la división del proyecto en iteraciones cortas llamadas &quot;sprints&quot;, durante las cuales el equipo trabaja en partes específicas del proyecto con roles definidos como el Product Owner, Scrum Master y Equipo de Desarrollo.</p>
                <p>Scrum promueve la transparencia, la comunicación constante y la entrega de valor en cada iteración. Ayuda a los equipos a gestionar proyectos de manera eficiente, entregando valor de manera incremental y adaptándose a medida que avanza el proyecto.</p>
                <hr />
                <h5>¿Cómo puedo empezar a usar TaskUnity?</h5>
                <p>Para utilizar la aplicación es necesario registrarte, ya que tus proyectos se almacenarán en una base de datos para que puedas conservarlos y acceder a ellos desde cualquier dispositivo. Quiero asegurarte que tu seguridad es mi prioridad. Tus claves de acceso serán transformadas mediante un proceso de encriptación conocido como &quot;hashing&quot;, lo que significa que tu contraseña será convertida en una secuencia de caracteres única e irreconocible antes de ser almacenada en la base de datos. De esta manera, tus claves de acceso permanecerán seguras y protegidas.</p>
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
            <p>Si estás interesado en saber sobre mí y mi trabajo, te invito a visitar mi Portfolio. Allí encontrarás una muestra de mis proyectos y podrás contactarme a través de mis principales redes sociales.</p>
            <p></p>
            <Button 
            style={{ display: 'flex', justifyContent:'center', alignItems: 'center', margin:'24px auto 24px', width:'180px', height:'60px', textAlign:'center'}}
            variant="primary" 
            size="lg"
            href='https://dave-vrl.pages.dev/'
            >
            Ir a Portfolio
            </Button>
            <div className={style.endP}><p>¡Espero poder conectar contigo pronto y colaborar en futuros proyectos juntos!</p></div>
            </div>
            </div>
        </div>
    )
};

export default About;