import React from 'react';
import { motion, useCycle, AnimatePresence } from "framer-motion";
import useToggle from '../Hooks/useToggle';

const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeInOut" 
    }
  }
}

const ModalVariants = {
  hidden: {
    y: -400
  },
  visible: {
    y: 0,
    transition: {
       delay: 0.2, 
       duration: 0.4, 
       type: "spring" 
    }
  }
};

const Modal = () => {
  const { show, handletoggle } = useToggle();

  console.log("component redering")
  return (
    <React.Fragment>
      <button onClick={handletoggle}>Open Modal</button>

      <AnimatePresence exitBeforeEnter>
        {show &&
          <motion.div className="overlay"
            key="ovelay"
            variants={overlayVariants}
            animate="visible"
            initial="hidden"
            exit="hidden"
            onClick={handletoggle}>

            <motion.div className="modal"
              key="modal"
              variants={ModalVariants}
              onClick={(e)=> {e.stopPropagation()}}
             >
              <div className="modal-body p__16">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis sint nihil recusandae perspiciatis asperiores cum quae, quis hic in aspernatur quisquam voluptas natus totam incidunt officia at ipsam ullam.
                </p>
              </div>

              <div className="modal-footer">
                <button onClick={handletoggle}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </React.Fragment>
  )
}

export default Modal;