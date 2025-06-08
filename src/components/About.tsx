import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer and Competitive Programmer from IIIT Gwalior. 
              With expertise in the MERN stack and a strong foundation in data structures and algorithms, 
              I've solved over 1000+ problems across various competitive programming platforms.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Currently serving as an SDE Intern at AlgoUniversity and Backend Developer at C3iHub, 
              I bring real-world experience in building scalable applications and solving complex problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in technology is driven by curiosity and a constant desire to learn and innovate. 
              I specialize in creating efficient, user-friendly applications while maintaining clean, scalable code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg">
              <GraduationCap className="text-blue-400 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-300">Indian Institute of Information Technology (IIIT) Gwalior</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg">
              <Briefcase className="text-green-400 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Current Roles</h3>
                <p className="text-gray-300 mb-1">SDE Intern - AlgoUniversity</p>
                <p className="text-gray-300">Backend Developer - C3iHub</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg">
              <User className="text-purple-400 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Specialization</h3>
                <p className="text-gray-300">Full Stack Development, Competitive Programming, AWS Services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;