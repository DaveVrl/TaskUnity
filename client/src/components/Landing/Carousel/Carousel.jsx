import { useState } from "react";
import style from './Carousel.module.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [carouselData] = useState([
        { content: "El Tablero permite mantener tu proyecto organizado, podrás observar todo lo que se esté desarrollando en tan solo un vistazo." },
        { content: "Las Listas te ayudarán a llevar el flujo de tu trabajo, indicando el estado de las tareas como pendientes, en curso o finalizadas." },
        { content: "Las Tarjetas representan las tareas, en ellas podrás incluir toda la información necesaria y realizar comentarios durante su desarrollo." }
      ]);
  
    const handleButtonClick = (index) => {
      setCurrentIndex(index);
    };

    return (
      <div className={style.carousel}>
        <div className={style.title_content}>
          
          <h5>{carouselData[currentIndex].content}</h5>
        </div>
        <div className={style.buttons}>
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              disabled={currentIndex === index} // Deshabilita el botón si corresponde al índice actual
            >
            </button>
          ))}
        </div>
      </div>
    );
  };

export default Carousel;