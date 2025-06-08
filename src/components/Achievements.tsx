import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy size={32} />,
      title: '1000+ Problems Solved',
      description: 'Solved over 1000 Data Structures and Algorithms problems across multiple platforms including LeetCode, Codeforces, and others.',
      color: 'yellow',
      platforms: ['LeetCode', 'Codeforces', 'JobOverflow', 'Coding Ninjas']
    },
    {
      icon: <Star size={32} />,
      title: 'Specialist on Codeforces',
      description: 'Achieved Specialist rating on Codeforces through consistent performance in competitive programming contests.',
      color: 'blue',
      link: 'https://codeforces.com/profile/A_bhishek_04_001'
    },
    {
      icon: <Award size={32} />,
      title: 'Knight on LeetCode',
      description: 'Earned Knight badge on LeetCode, demonstrating strong problem-solving skills and algorithmic thinking.',
      color: 'orange',
      link: 'https://leetcode.com/u/abhi_gang/'
    },
    {
      icon: <Target size={32} />,
      title: 'MERN Stack Expert',
      description: 'Mastered full-stack development with MongoDB, Express.js, React.js, and Node.js, building production-ready applications.',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: 'from-yellow-500 to-orange-500 bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
      blue: 'from-blue-500 to-cyan-500 bg-blue-500/20 border-blue-500/30 text-blue-400',
      orange: 'from-orange-500 to-red-500 bg-orange-500/20 border-orange-500/30 text-orange-400',
      green: 'from-green-500 to-emerald-500 bg-green-500/20 border-green-500/30 text-green-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={`p-8 rounded-lg border ${getColorClasses(achievement.color).split('text-')[0]} backdrop-blur-sm`}
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${getColorClasses(achievement.color).split(' ')[0]} ${getColorClasses(achievement.color).split(' ')[1]} flex items-center justify-center mb-6 ${getColorClasses(achievement.color).split(' ').pop()}`}>
                {achievement.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">{achievement.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{achievement.description}</p>
              
              {achievement.platforms && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {achievement.platforms.map((platform, platformIndex) => (
                    <span
                      key={platformIndex}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full text-gray-300"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              )}
              
              {achievement.link && (
                <motion.a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center space-x-2 ${getColorClasses(achievement.color).split(' ').pop()} hover:underline`}
                >
                  <span>View Profile</span>
                  <Target size={16} />
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;