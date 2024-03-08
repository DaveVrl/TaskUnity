import style from './Booklet.module.css';
import image from '../../../assets/image-ideas.png';

const BookletOne = () => {

    return (
        <div className={style.container}>
            <img src={image} alt="board-image" />
            <h5>El Tablero permite mantener tu proyecto organizado, observarás todo lo que se esté desarrollando en tan solo un vistazo.</h5>
        </div>
    )
};

export default BookletOne;