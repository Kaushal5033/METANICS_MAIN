import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl p-4 md:p-8 bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow-lg"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white/20 backdrop-blur-md p-6 md:p-10 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Subscribe Our Newsletter</h2>
          <p className="mt-4 text-base md:text-lg text-white text-center">
            A diam maecenas sed enim ut sem viverra. Vulputate ut pharetra sit amet aliquam id diam.
          </p>

          <form className="mt-6 flex flex-col md:flex-row justify-center items-center">
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              whileFocus={{ scale: 1.05 }}
              className="p-3 w-full md:w-2/3 text-gray-900 bg-gray-200 rounded-full md:rounded-l-full md:rounded-r-none focus:outline-none mb-4 md:mb-0"
              placeholder="Email"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              className="bg-white text-black font-bold p-3 px-8 rounded-full md:rounded-l-none md:rounded-r-full hover:bg-gray-200 transition-all w-full md:w-auto"
            >
              {isHovering ? "Join Us!" : "Subscribe"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid blue;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.1s ease;
          transform: translate(-50%, -50%);
        }
        
        input, button {
          cursor: none;
        }
        
        input:hover ~ .custom-cursor,
        button:hover ~ .custom-cursor {
          transform: translate(-50%, -50%) scale(1.5);
          background-color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
};

export default Newsletter;
