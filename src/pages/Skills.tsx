import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const languages: Skill[] = [
    { name: 'Java', level: 90, color: 'bg-red-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'TypeScript', level: 80, color: 'bg-blue-500' },
    { name: 'Python', level: 75, color: 'bg-green-500' },
    { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
    { name: 'SQL', level: 85, color: 'bg-purple-500' }
  ];

  const frameworks: Skill[] = [
    { name: 'Spring', level: 85, color: 'bg-green-500' },
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'Angular', level: 80, color: 'bg-red-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-600' },
    { name: 'Express', level: 80, color: 'bg-gray-600' }
  ];

  const databases: Skill[] = [
    { name: 'MySQL', level: 85, color: 'bg-blue-600' },
    { name: 'MongoDB', level: 90, color: 'bg-green-700' },
    { name: 'PostgreSQL', level: 75, color: 'bg-blue-500' },
  ];

  const tools: Skill[] = [
    { name: 'Git', level: 90, color: 'bg-orange-600' },
    { name: 'Docker', level: 80, color: 'bg-blue-500' },
    { name: 'CI/CD', level: 75, color: 'bg-green-500' },
    { name: 'AWS', level: 70, color: 'bg-yellow-600' },
  ];

  const SkillBar: React.FC<{ skill: Skill, delay: number }> = ({ skill, delay }) => (
    <motion.div 
      className="mb-4"
      variants={itemVariants}
      custom={delay}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full ${skill.color}`}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay * 0.1 + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  const SkillGrid: React.FC<{ title: string, skills: Skill[] }> = ({ title, skills }) => (
    <div className="lab-card mb-8">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} delay={index} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen laboratory-section">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('skills.title')}
        </motion.h1>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <SkillGrid title={t('skills.languages')} skills={languages} />
            <SkillGrid title={t('skills.frameworks')} skills={frameworks} />
          </div>
          
          <div>
            <SkillGrid title={t('skills.databases')} skills={databases} />
            <SkillGrid title={t('skills.tools')} skills={tools} />
            
            <motion.div 
              className="lab-card"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-6">Skills Radar</h3>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="aspect-square w-full relative flex items-center justify-center">
                  {/* Radar background circles */}
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`absolute w-[${20 * (i + 1)}%] h-[${20 * (i + 1)}%] border border-gray-300 dark:border-gray-600 rounded-full`}
                      style={{ 
                        width: `${20 * (i + 1)}%`, 
                        height: `${20 * (i + 1)}%` 
                      }}
                    />
                  ))}
                  
                  {/* Radar data points */}
                  <motion.div
                    className="absolute h-full w-full"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 360, opacity: 1 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-[10%] left-[50%] w-2 h-2 rounded-full bg-primary-500 animate-pulse-slow" />
                    <div className="absolute top-[30%] left-[70%] w-3 h-3 rounded-full bg-secondary-500 animate-pulse-slow" />
                    <div className="absolute top-[60%] left-[80%] w-2 h-2 rounded-full bg-accent-500 animate-pulse-slow" />
                    <div className="absolute top-[80%] left-[50%] w-3 h-3 rounded-full bg-error-500 animate-pulse-slow" />
                    <div className="absolute top-[60%] left-[20%] w-2 h-2 rounded-full bg-warning-500 animate-pulse-slow" />
                    <div className="absolute top-[30%] left-[30%] w-3 h-3 rounded-full bg-success-500 animate-pulse-slow" />
                  </motion.div>
                  
                  {/* Center point */}
                  <div className="w-4 h-4 rounded-full bg-primary-500 z-10 animate-glow" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;