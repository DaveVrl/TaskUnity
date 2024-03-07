import style from './Booklet.module.css';
import image from '../../../assets/tareas-image.png';

const BookletThree = () => {

    return (
        <div className={style.container}>
            <img src={image} alt="board-image" />
            <h5>Las Tarjetas representan las tareas, en ellas podrás incluir toda la información necesaria y realizar comentarios durante su desarrollo.</h5>
        </div>
    )
};

export default BookletThree;