import React from 'react';

import { motion } from "framer-motion";


function Home() {
  return (
    <div className="page">
      <motion.div
        transition={{ duration: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2>this is Home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sed exercitationem repudiandae quo at omnis veniam iusto iure aperiam
          velit!
        </p>
      </motion.div>
    </div>
  );
}

export default Home
