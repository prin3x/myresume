import React from 'react';
import {motion} from 'framer-motion';

const IconContainer = ({iconClass}) => {
  return (
    <motion.i
      key={iconClass}
      initial={{rotate: 180, scale: 0}}
      animate={{rotate: 360, scale: 1}}
      transition={{
        type: 'spring',
        duration: 0.1,
      }}
      className={iconClass}
    />
  );
};

export default IconContainer;
