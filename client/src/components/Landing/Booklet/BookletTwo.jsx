import style from './Booklet.module.css';
import image from '../../../assets/roboto-image-cut.png';

const BookletTwo = () => {

    return (
        <div>
            <div className={style.container}>
            <img src={image} alt="board-image" />
            <p>Las Listas te ayudarán a llevar el flujo de tu trabajo, indicando el estado de las tareas como pendientes, en curso o finalizadas.</p>
        </div>
        </div>
    )
};

export default BookletTwo;