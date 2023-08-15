import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Styles/ImageSlideShow.css'

const ImageSlideshow = ({ images, interval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlideshow, setAutoSlideshow] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || !autoSlideshow) return; // No need for a slideshow with one image or if autoSlideshow is false

    const slideshowTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, interval);

    return () => clearInterval(slideshowTimer);
  }, [images, interval, autoSlideshow]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    setAutoSlideshow(false); // Stop the automatic slideshow when navigating manually
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    setAutoSlideshow(false); // Stop the automatic slideshow when navigating manually
  };

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//     setAutoSlideshow(false); // Stop the automatic slideshow when navigating manually
//   };

  if (images.length <= 0) {
    return <div>No images found.</div>;
  }

  return (
    <div className="iss-slideshow-container">
      <div className="iss-slide">
        
        <div className='iss-slide-center'>
                <div className="iss-prev" onClick={prevSlide}>
                &#10094;
                </div>
                <img className='iss-slide-image' src={images[currentSlide]} alt={`Image ${currentSlide + 1}`} />
                <div className="iss-next" onClick={nextSlide}>
                &#10095;
                </div>
        </div>

      </div>
      {/* <div className="iss-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`iss-dot ${index === currentSlide ? 'iss-active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

ImageSlideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  interval: PropTypes.number,
};

ImageSlideshow.defaultProps = {
  interval: 3000,
};

export default ImageSlideshow;
