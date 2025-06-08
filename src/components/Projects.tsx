import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'LiveWithCoding',
      description: 'Interactive coding platform with real-time collaboration features, code execution, and educational content management. Deployed on AWS for scalability.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'AWS'],
      github: 'https://github.com/Khiladi124/LiveWithCoding',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'HealthCare Management with Blockchain',
      description: 'Secure healthcare management backend system using blockchain technology for patient data integrity and privacy. RESTful API architecture.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Blockchain'],
      github: 'https://github.com/Khiladi124/HealthCare-management-with-Blockchain',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'File Storage System',
      description: 'Cloud-based file storage solution with secure upload, download, and sharing capabilities using Cloudinary for media management.',
      technologies: ['MongoDB', 'Express.js', 'Node.js', 'Cloudinary', 'Multer'],
      github: 'https://github.com/Khiladi124/File-Storge',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Intrusion Detection System',
      description: 'Network security system using machine learning algorithms to detect and prevent unauthorized access.',
      technologies: ['Python', 'Machine Learning', 'Flask', 'Scikit-learn'],
      github: 'https://github.com/Khiladi124/Intrusion-Detection-System',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Netflix GPT',
      description: 'AI-powered movie recommendation system with Netflix-like interface and GPT integration for personalized suggestions.',
      technologies: ['React', 'OpenAI API', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/Khiladi124/Netflix-GPT',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Food Ordering App',
      description: 'Full-stack food delivery application with real-time order tracking, payment integration, and restaurant management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Khiladi124/Food-Ordering-App',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;