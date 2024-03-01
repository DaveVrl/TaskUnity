import style from './Landing.module.css';
import Button from 'react-bootstrap/Button';
import imagePc from '../../assets/scrum.png'
import curve from '../../assets/desktop-curve.svg';
import imageBoard from '../../assets/scrum-board.png';
import Carousel from './Carousel/Carousel';

const Landing = () => {

    return (
        <div className={style.container}>

        <div className={style.container_h1_img_h5}>

        <h1>Amplifica tu productividad con <span>TaskUnity</span></h1>
        <img className={style.image_pc} src={imagePc} alt="scrum-pc" />
        <h5>Gestiona tus proyectos personales y grupales de forma ordenada basándote en la metodología Scrum.</h5>
        <img className={style.curve_black} src={curve} alt="curve" />
        </div>

        <div className={style.container_h5}>

        <div className={style.container_h5_row}>
        <h5>La aplicación está inspirada en Trello y Jira, ofreciendo el mismo ordenamiento de Tableros, Listas y Tarjetas.</h5>
        </div>
        <img className={style.boardImg} src={imageBoard} alt="board" />
        <Carousel/>
        <img className={style.curve_white} src={curve} alt="curve"/>
        </div>

        <div className={style.container_h5_btn}>
        <h5>¡Anímate y organiza tus proyectos!</h5>
        <Button variant="primary" size="lg">
          Regístrate
        </Button>
        </div>
        
        </div>
    );
};

export default Landing;