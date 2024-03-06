import style from './Booklet.module.css';
import image from '../../../assets/image-ideas.png';

const BookletThree = () => {

    return (
        <div className={style.container}>
            <img src={image} alt="board-image" />
            <p>Las Tarjetas representan las tareas, en ellas podrás incluir toda la información necesaria y realizar comentarios durante su desarrollo.</p>
        </div>
    )
};

export default BookletThree;