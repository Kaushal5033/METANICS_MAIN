import React from 'react';
import { motion } from 'framer-motion';

const LandLogoslider = () => {
  const brands = ['NIKE', 'ADIDAS', 'PUMA', 'REEBOK', 'UNDER ARMOUR'];

  return (
    <div className="w-full bg-black py-8 overflow-hidden">
      <motion.div
        className="whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ 
          x: { repeat: Infinity, duration: 20, ease: "linear" },
        }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <span 
            key={index}
            className="inline-block text-4xl md:text-6xl font-bold text-white mx-8 md:mx-12 hover:text-blue-500 transition-colors duration-300"
          >
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default LandLogoslider;
