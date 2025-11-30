import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Code, Server, Cpu, Shield, Users, Coffee, Zap } from 'lucide-react';

const About: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const timelineItems = [
    {
      year: '2024 - 2025',
      title: 'Advanced University Projects',
      institution: 'ESPRIT',
      description:
        'Web distributed systems, microservices architecture, DevOps pipelines, ML recommendation system, cybersecurity workshops (pfSense, Snort, VPN), and Big Data ecosystem.'
    },
    {
      year: '2023 - Present',
      title: 'Engineering Student in Computer Science',
      institution: 'ESPRIT',
      description:
        'Focused on full-stack web development, REST APIs, cloud technologies, microservices, machine learning, and software architecture.'
    },
    {
      year: '2022 - 2023',
      title: 'Web Development Internship',
      institution: 'Tech Company',
      description:
        'Developed responsive interfaces, integrated backend APIs, improved UI/UX, collaborated using Agile and Git workflow.'
    },
    {
      year: '2020 - 2022',
      title: 'Computer Science Foundations',
      institution: 'Faculty of Sciences of Bizerte',
      description:
        'Strengthened fundamentals in algorithms, data structures, system design, and mathematical reasoning.'
    }
  ];

  const interests = [
    { icon: <Code size={24} />, name: 'Web Development' },
    { icon: <Server size={24} />, name: 'Backend & APIs' },
    { icon: <Cpu size={24} />, name: 'Artificial Intelligence' },
    { icon: <Shield size={24} />, name: 'Cybersecurity' },
    { icon: <Users size={24} />, name: 'Team Collaboration' },
    { icon: <Coffee size={24} />, name: 'Problem Solving' },
    { icon: <Zap size={24} />, name: 'Innovation & Creativity' }
  ];

  const skills = [
    'React / Next.js',
    'Node.js / Express',
    'Spring Boot',
    'MongoDB / SQL',
    'Docker / GitHub Actions',
    'Python (Pandas, Scikit-learn)',
    'Linux / Networking',
    'UX/UI & Design Thinking'
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
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section */}
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
              <h2 className="text-2xl font-bold">Education & Background</h2>
            </div>

            <p className="text-lg mb-6">
              I am an engineering student passionate about building modern applications, exploring AI, and designing secure distributed systems.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My academic path has allowed me to develop strong technical skills in full‑stack development, data engineering, machine learning, and cybersecurity.
            </p>

            <p className="text-gray-700 dark:text-gray-300 italic border-l-4 border-primary-500 pl-4">
              Curious, ambitious, and always learning — I am actively seeking a Final Year Internship (PFE) to contribute to innovative real‑world projects.
            </p>

            {/* Timeline */}
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

          {/* Right Section */}
          <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
            <div className="lab-card h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary-500/10 flex items-center justify-center mr-4">
                  <Cpu className="w-6 h-6 text-secondary-500" />
                </div>
                <h2 className="text-2xl font-bold">Interests</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 112, 243, 0.1)' }}
                  >
                    <div className="text-primary-500 mb-2">{interest.icon}</div>
                    <span className="text-center">{interest.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Skills
              <motion.div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg" variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill, i) => (
                    <div key={i} className="px-3 py-2 bg-white dark:bg-gray-700 rounded-md shadow text-sm text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div> */}

              {/* Personality */}
              <motion.div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg" variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4">Personality</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Organized', value: '90%' },
                    { label: 'Ambitious', value: '85%' },
                    { label: 'Fast Learner', value: '80%' },
                    { label: 'Team Player', value: '95%' }
                  ].map((trait, index) => (
                    <div className="flex justify-between items-center" key={index}>
                      <span>{trait.label}</span>
                      <div className="w-32 h-2 bg-gray-300 dark:bg-gray-700 rounded-full ml-4">
                        <motion.div
                          className="h-full bg-primary-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: trait.value }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
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
