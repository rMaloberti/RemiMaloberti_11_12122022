import carouselPrevious from '../assets/carousel-previous.svg';
import carouselNext from '../assets/carousel-next.svg';
import { useState } from 'react';
import './Carousel.css';

function Carousel(props) {
  const { pictures } = props;

  const [currentPicture, setCurrentPicture] = useState(0);

  const showPrevious = () => {
    if (currentPicture === 0) {
      setCurrentPicture(pictures.length - 1);
    } else {
      setCurrentPicture(currentPicture - 1);
    }
  };

  const showNext = () => {
    if (currentPicture === pictures.length - 1) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + 1);
    }
  };

  return (
    <div className="carousel">
      <img className="carousel__img" alt={currentPicture + 1} src={pictures[currentPicture]} />
      <div className="carousel__controls">
        <div className="carousel__controls__previous" onClick={showPrevious}>
          <img
            className="carousel__controls__previous__img"
            alt="précédent"
            src={carouselPrevious}
          />
        </div>
        <div className="carousel__controls__next" onClick={showNext}>
          <img className="carousel__controls__next__img" alt="suivant" src={carouselNext} />
        </div>
        <div className="carousel__controls__counter">{`${currentPicture + 1}/${
          pictures.length
        }`}</div>
      </div>
    </div>
  );
}

export default Carousel;
