import React from 'react';
import Links from '../components/Links';
import { motion } from "framer-motion";





function Contact() {
  return (
    <div className="page">
      <motion.div
        transition={{ duration: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2>this is contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sed exercitationem repudiandae quo at omnis veniam iusto iure aperiam
          velit!
        </p>
      </motion.div>
      <Links />
    </div>
  );
}

export default Contact
