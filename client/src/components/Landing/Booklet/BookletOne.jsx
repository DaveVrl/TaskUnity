import style from './Booklet.module.css';
import image from '../../../assets/tablero-image.png';

const BookletOne = () => {

    return (
        <div className={style.container}>
            <img src={image} alt="board-image" />
            <p>El Tablero permite mantener tu proyecto organizado, podrás observar todo lo que se esté desarrollando en tan solo un vistazo.</p>
        </div>
    )
};

export default BookletOne;