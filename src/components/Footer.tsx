import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-300">Made with</span>
            <Heart size={16} className="text-red-400" />
            <span className="text-gray-300">and</span>
            <Code size={16} className="text-blue-400" />
            <span className="text-gray-300">by Abhishek Gangwar</span>
          </div>
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Abhishek Gangwar. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-xs mt-2">
            Full Stack Developer • Competitive Programmer • Problem Solver
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;