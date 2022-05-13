import React from 'react';

import { motion } from "framer-motion";

function Portofolio() {
  return (
    <div className="page">
      <motion.div
        transition={{ duration: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2>This is portofolio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          doloremque voluptas, reiciendis assumenda tempore totam incidunt nam
          ducimus temporibus! Ea mollitia laudantium minus ut illum
          consequuntur, dignissimos porro! Praesentium, debitis!
        </p>
      </motion.div>
    </div>
  );
}

export default Portofolio
