import React from 'react';
import { motion, useCycle } from 'framer-motion';


const Notifications = () => {
    const [x, cycleX] = useCycle(0, 50, 100)
    return (
        <motion.div  className="box"
          
        animate={{ x: x }}
        onTap={() => cycleX()}
        
        >
           
        </motion.div>
    )
}

export default Notifications;