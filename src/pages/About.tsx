import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Book, Code, Server, Cpu, Shield, Users, Coffee, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const timelineItems = [
    {
      year: '2023 - Present',
      title: 'IT Engineering Student',
      institution: 'ESPRIT',
      description: 'Specialized in web technologies, fullstack development, AI, and cybersecurity.'
    },
    {
      year: '2022 - 2023',
      title: 'Web Development Internship',
      institution: 'Tech Company',
      description: 'Developed responsive web applications using modern JavaScript frameworks.'
    },
    {
      year: '2020 - 2022',
      title: 'Computer Science Foundation',
      institution: 'University',
      description: 'Acquired fundamental knowledge in algorithms, data structures, and software engineering principles.'
    }
  ];

  const interests = [
    { icon: <Code size={24} />, name: 'Web Development' },
    { icon: <Server size={24} />, name: 'Backend Systems' },
    { icon: <Cpu size={24} />, name: 'Artificial Intelligence' },
    { icon: <Shield size={24} />, name: 'Cybersecurity' },
    { icon: <Users size={24} />, name: 'Team Collaboration' },
    { icon: <Coffee size={24} />, name: 'Problem Solving' },
    { icon: <Zap size={24} />, name: 'Innovation' }
  ];

  return (
    <div className="min-h-screen laboratory-section">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('about.title')}
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lab-card"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mr-4">
                <Book className="w-6 h-6 text-primary-500" />
              </div>
              <h2 className="text-2xl font-bold">{t('about.education')}</h2>
            </div>
            
            <p className="text-lg mb-6">
              {t('about.esprit')}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t('about.bio')}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 italic border-l-4 border-primary-500 pl-4">
              {t('about.personal')}
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Timeline</h3>
              <div className="vertical-timeline">
                {timelineItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="ml-4">
                      <span className="text-sm text-primary-500 font-semibold">{item.year}</span>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.institution}</p>
                      <p className="text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <div className="lab-card h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary-500/10 flex items-center justify-center mr-4">
                  <Cpu className="w-6 h-6 text-secondary-500" />
                </div>
                <h2 className="text-2xl font-bold">{t('about.interests')}</h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 112, 243, 0.1)' }}
                  >
                    <div className="text-primary-500 mb-2">
                      {interest.icon}
                    </div>
                    <span className="text-center">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-8 workstation p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-4">Personality</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Sociable</span>
                    <div className="w-32 h-2 bg-gray-300 dark:bg-gray-700 rounded-full">
                      <motion.div 
                        className="h-full bg-primary-500 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: '90%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Ambitious</span>
                    <div className="w-32 h-2 bg-gray-300 dark:bg-gray-700 rounded-full">
                      <motion.div 
                        className="h-full bg-primary-500 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.6 }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Energetic</span>
                    <div className="w-32 h-2 bg-gray-300 dark:bg-gray-700 rounded-full">
                      <motion.div 
                        className="h-full bg-primary-500 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: '80%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Player</span>
                    <div className="w-32 h-2 bg-gray-300 dark:bg-gray-700 rounded-full">
                      <motion.div 
                        className="h-full bg-primary-500 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: '95%' }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;