import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tabVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    }
  }
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);


  return (
    <div className="tabs shadow-sm">

      <ul className="tabs__header">
        <li className={activeTab === 1 ? 'active__tab':''} onClick={()=> setActiveTab(1)}>
          Tab 1
          {activeTab === 1 ? <motion.div layoutId="underline" className="underline"></motion.div>: null}
        </li>
        <li className={activeTab === 2 ? 'active__tab':''} onClick={()=> setActiveTab(2)}>
          tab 2
          {activeTab === 2 ? <motion.div layoutId="underline" className="underline"></motion.div>: null}
        </li>
        <li className={activeTab === 3 ? 'active__tab':''} onClick={()=> setActiveTab(3)}>
          tab 3
          {activeTab === 3 ? <motion.div layoutId="underline" className="underline"></motion.div>: null}
        </li>
      </ul>


    { activeTab === 1 && <motion.div className="tabs__body"
      variants={tabVariants}
      initial="hidden"
      animate="visible">
        content 1
      </motion.div>}

      { activeTab === 2 && <motion.div className="tabs__body"
      variants={tabVariants}
      initial="hidden"
      animate="visible">
         content 2
      </motion.div>}

      { activeTab === 3 && <motion.div className="tabs__body"
      variants={tabVariants}
      initial="hidden"
      animate="visible">
        content  3
      </motion.div>}

    </div>
  )
}

export default Tabs