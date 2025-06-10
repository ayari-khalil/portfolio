import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Code, Database, Shield, Cpu, Download, Github, Linkedin, Mail, MapPin, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Home: React.FC = () => {
  const { t } = useTranslation();
  const labRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!labRef.current) return;
    
    const elements = labRef.current.querySelectorAll('.lab-icon');
    
    gsap.from(elements, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: labRef.current,
        start: 'top center+=100',
      }
    });
  }, []);

  const stats = [
    { icon: <Code className="w-6 h-6" />, value: '15+', label: 'Projects Completed' },
    { icon: <Award className="w-6 h-6" />, value: '3+', label: 'Years Experience' },
    { icon: <Database className="w-6 h-6" />, value: '8+', label: 'Technologies' },
    { icon: <Calendar className="w-6 h-6" />, value: '2023', label: 'Started at ESPRIT' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-4">
                  👋 Welcome to my Digital Laboratory
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="block mb-2">{t('home.greeting')}</span>
                  <span className="text-gradient">Khalil AYARI</span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {t('home.title')}
              </motion.p>

              <motion.p 
                className="text-base md:text-lg mb-8 text-gray-600 dark:text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {t('home.subtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              >
                <Link to="/about" className="lab-button">
                  {t('home.cta')}
                </Link>
                <Link to="/projects" className="lab-button-outline">
                  View Projects
                </Link>

              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <a href="https://github.com/ayari-khalil" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/khalil-ayari-8498aa215/" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:ayari2014khalil@gmail.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Animated background elements */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Profile image container */}
                <motion.div
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/src/uploads/khalill.jpg" 
                    alt="Khalil AYARI"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Floating elements around the image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Code className="w-8 h-8" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <Shield className="w-6 h-6" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-8 w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{
                    x: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Database className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll to discover</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-primary-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Quick Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Get to know me better through these key highlights of my journey and expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="lab-card"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-500 mr-3" />
                  <h3 className="text-xl font-semibold">Location & Education</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Currently studying IT Engineering at ESPRIT, Tunisia. Passionate about emerging technologies and their real-world applications.
                </p>
                <div className="flex items-center text-sm text-primary-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Expected Graduation: 2025
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="lab-card"
              >
                <div className="flex items-center mb-4">
                  <Cpu className="w-6 h-6 text-accent-500 mr-3" />
                  <h3 className="text-xl font-semibold">Current Focus</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Specializing in fullstack development, AI integration, and cybersecurity. Always eager to learn new technologies and tackle challenging projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Spring Boot', 'AI/ML', 'Security'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent-500/10 text-accent-500 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Laboratory Section */}
      <section ref={labRef} className="laboratory-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Welcome to my Digital Laboratory
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore the different areas of my expertise and the technologies I work with to bring ideas to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="lab-card group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Code className="w-8 h-8 text-primary-500 lab-icon" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Web Technologies</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                Crafting responsive and modern web experiences using the latest technologies and best practices.
              </p>
            </motion.div>
            
            <motion.div 
              className="lab-card group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary-500/10 flex items-center justify-center group-hover:bg-secondary-500/20 transition-colors duration-300">
                  <Database className="w-8 h-8 text-secondary-500 lab-icon" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Fullstack Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                Building end-to-end applications with robust backends and intuitive frontends that scale.
              </p>
            </motion.div>
            
            <motion.div 
              className="lab-card group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors duration-300">
                  <Cpu className="w-8 h-8 text-accent-500 lab-icon" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Artificial Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                Exploring machine learning and AI to create intelligent applications that solve real problems.
              </p>
            </motion.div>
            
            <motion.div 
              className="lab-card group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-error-500/10 flex items-center justify-center group-hover:bg-error-500/20 transition-colors duration-300">
                  <Shield className="w-8 h-8 text-error-500 lab-icon" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Cybersecurity</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                Implementing secure solutions and protecting digital assets from evolving threats.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;