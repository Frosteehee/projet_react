import PropTypes from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react"; // Utilisez useState, useEffect, useRef directement

const CustomCarousel = ({ images, title }) => {
  const [currentIndex, updateIndex] = useState(0);
  const total = images.length;
  const imageRef = useRef(null);

  const previous = () => {
    updateIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
  };

  const next = () => {
    updateIndex((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const imgElement = imageRef.current;
    if (imgElement) {
      imgElement.classList.add("slide-transition");
      imgElement.style.transform = "scaleX(0)";
      setTimeout(() => {
        imgElement.src = images[currentIndex];
        imgElement.style.transform = "scaleX(1)";
      }, 300); // Durée de l'animation
    }
  }, [currentIndex, images]);

  const handleKey = (e) => {
    if (e.key === "ArrowLeft") {
      previous();
    } else if (e.key === "ArrowRight") {
      next();
    }
  };

  return (
    <div className="custom-carousel" tabIndex="0" onKeyDown={handleKey}>
      {total > 1 && (
        <button aria-label="Previous image" onClick={previous} className="arrow left">
          <FaAngleLeft />
        </button>
      )}
      <img ref={imageRef} className="carousel-img" src={images[currentIndex]} alt={title} />
      {total > 1 && (
        <button aria-label="Next image" onClick={next} className="arrow right">
          <FaAngleRight />
        </button>
      )}
      {total > 1 && (
        <div className="image-counter">
          {currentIndex + 1} / {total}
        </div>
      )}
    </div>
  );
};

CustomCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default CustomCarousel;
