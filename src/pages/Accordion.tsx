import React from 'react';
import { motion, useCycle } from "framer-motion";

const items = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Section 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Section 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
];

const accordionVariants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: 'auto',
    transition: { 
      duration: 0.3, 
      ease: "easeIn" 
    }
  }
}

const Accordion = () => {
 
  return (
    <div>
      {
        items.map((item)=> (
          <AccordionItems key={item.title} item={item} />
        ))
      }
    </div>
  )
}

const AccordionItems = ({item}: {item: any}) => {
  const [show, cycleShow] = useCycle(false, true);

  return (
    <div className="accordion">
      <div className="acc__header" onClick={()=> cycleShow()}>
        <h5>{item.title}</h5>
        {show ? <span>&#43;</span>: <span>&#8722;</span>}
      </div>

      <motion.div className="acc__body"
        variants={accordionVariants}
        initial="hidden"
        animate={show?"visible": "hidden"}>
          <p className="p__16">{item.content}</p>
      </motion.div>
    </div>
  )
};

export default Accordion;