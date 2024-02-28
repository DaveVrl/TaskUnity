import style from './Landing.module.css';
import Button from 'react-bootstrap/Button';

const Landing = () => {

    return (
        <div className={style.container}>
        <h1>Bienvenido a TaskUnity</h1>
        <h4>Gestiona tus proyectos personales y grupales de forma ordenada basándote en la metodología Scrum.</h4>
        <h5>TaskUnity está inspirada en Trello y Jira, ofreciendo el mismo ordenamiento de Tablas, Listas y Tarjetas.</h5>
        <div className={style.container_h5_btn}>
        <h5>¡Anímate y organiza tus proyectos!</h5>
        <Button style={{
            width:'200px',
            height:'60px'
            }}
            variant="primary" size="lg">
          Regístrate
        </Button>
        </div>
        </div>
    );
};

export default Landing;