import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { images } from '../models/images.models';

const slideShowVariants = {
  hidden: {
    opacity: 0.4,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};

const Slider = () => {
  const [activeSlide, setActiveSlide] = React.useState<number>(1);

  function prevSlide() {
    if (activeSlide > 1) {
      setActiveSlide(prev => prev - 1);
    }

  };

  function nextSlide() {
    if (activeSlide < images.length) {
      setActiveSlide(prev => prev + 1);
    }

  };

  return (
    <div className="grid__center">
      <div className="slideshow__container shadow-sm">
        {
          images.map((item, index) => (
            <React.Fragment key={item.title} >
              {index == (activeSlide - 1) &&
                  <motion.div className="slideshow"
                    variants={slideShowVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <img src={item.imageUrl} alt="slide" />
                  </motion.div>
              }
            </React.Fragment>
          ))
        }
        <motion.a className="prev" onClick={prevSlide}
          whileHover={{backgroundColor: "rgba(0,0,0,0.8)"}}
        >&#10094;</motion.a>
        <motion.a className="next" onClick={nextSlide}
         whileHover={{backgroundColor: "rgba(0,0,0,0.8)"}}
         >&#10095;</motion.a>
        <div className="dots">
          {
            images.map((item, index) => (
              <div key={item.title} className="dot" onClick={() => setActiveSlide(index + 1)}>
                {index == (activeSlide - 1) && <motion.div layoutId="activeCircle"></motion.div>}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Slider;