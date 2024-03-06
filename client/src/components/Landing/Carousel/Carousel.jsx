import { useState } from "react";
import style from './Carousel.module.css';
import BookletOne from "../Booklet/BookletOne";
import BookletTwo from "../Booklet/BookletTwo";
import BookletThree from "../Booklet/BookletThree";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [carouselData] = useState([
     <BookletOne key='Booklet1'/>, 
     <BookletTwo key='Booklet2'/>, 
     <BookletThree key='Booklet3'/>
    ]);
  
    const handleButtonClick = (index) => {
      setCurrentIndex(index);
    };

    return (
      <div className={style.carousel}>
        
        {/* Renderiza el componente Booklet correspondiente al índice actual */}
        {carouselData[currentIndex]}

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