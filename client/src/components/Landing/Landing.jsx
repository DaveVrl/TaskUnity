import style from './Landing.module.css';
import Button from 'react-bootstrap/Button';
import imagePc from '../../assets/scrum.png'
import curve from '../../assets/desktop-curve.svg';
import Carousel from './Carousel/Carousel';
import { useNavigate } from 'react-router-dom';

const Landing = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  }

    return (
        <div className={style.container}>
        <div className={style.container_h1_img_h5}>
        <div className={style.container_h1_imagePc}>
        <h1>Amplifica tu productividad con <span>TaskUnity</span></h1>
        <img className={style.image_pc} src={imagePc} alt="scrum-pc" />
        </div>
        <h5>Gestiona tus proyectos personales y grupales de forma ordenada basándote en la metodología Scrum.</h5>
        <img className={style.curve_black} src={curve} alt="curve" />
        </div>

        <div className={style.container_h5}>
        <h5>La aplicación te permitirá crear tu propio Tablero y en él establecer las Listas y Tarjetas de tareas a realizar.</h5>
        <Carousel/>
        <img className={style.curve_white} src={curve} alt="curve"/>
        </div>

        <div className={style.container_h5_btn}>
        <h5>¡Anímate y organiza tus proyectos!</h5>
        <Button variant="primary" size="lg">
          Regístrate
        </Button>
        <h4>Para más información visita <a onClick={handleNavigation}>About</a></h4>
        </div>
        </div>
    );
};

export default Landing;