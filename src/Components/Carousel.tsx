import React from 'react';
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import styles from './Carousel.module.css';

interface CarouselProps {
  imageComponents: JSX.Element[];
}

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  const flickityOptions = {
    initialIndex: 2,
    imagesLoaded: true,
    autoPlay: 1500,
    wrapAround: true,
    lazyLoad: true,
    draggable: true
  };

  return (
    <div className={styles.CarouselContainer}>
      <Flickity options={flickityOptions}>
        {props.imageComponents}
      </Flickity>
    </div>
  )
};

export default Carousel;
