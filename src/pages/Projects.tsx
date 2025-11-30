import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ExternalLink, Code, Server, Database, Monitor, Users, Brain, Tv, Globe, Sparkles, Palette } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  image: string;
  color: string;
  githubUrl: string;
  features: string[];
  challenges: string[];
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'skillexchange',
      title: 'SkillExchange Platform',
      description: 'A comprehensive platform for skill sharing and exchange, connecting people based on complementary skills and learning opportunities.',
      tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React'],
      icon: <Users className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-blue-500 to-purple-600',
      githubUrl: 'https://github.com/YosrMekkii/FullStackJS_project',
      features: [
        'User skill matching algorithm',
        'Real-time messaging system',
        'Skill verification system',
        'Rating and review system',
        'Advanced search and filtering'
      ],
      challenges: [
        'Implementing complex matching algorithms',
        'Real-time communication features',
        'Scalable database design',
        'User authentication and security'
      ]
    },
    {
      id: 'microservice-gamification',
      title: 'Microservice Gamification: SkillExchange',
      description: 'Advanced microservices architecture implementation for the SkillExchange platform with gamification elements to enhance user engagement.',
      tech: ['Microservices', 'Spring Boot', 'Docker', 'Kubernetes', 'Redis'],
      icon: <Server className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-green-500 to-teal-600',
      githubUrl: 'https://github.com/ayari-khalil/application-distribu-project-',
      features: [
        'Microservices architecture',
        'Gamification system with points and badges',
        'Service discovery and load balancing',
        'Distributed caching with Redis',
        'Container orchestration'
      ],
      challenges: [
        'Service communication and coordination',
        'Data consistency across services',
        'Performance optimization',
        'Monitoring and logging distributed systems'
      ]
    },
    {
      id: 'insightweb',
      title: 'InsightWeb',
      description: 'A powerful web analytics and insights platform that provides comprehensive data analysis and visualization tools for web applications.',
      tech: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
      icon: <Brain className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-purple-500 to-pink-600',
      githubUrl: 'https://github.com/ayari-khalil/InsightWeb',
      features: [
        'Real-time analytics dashboard',
        'Interactive data visualizations',
        'Custom report generation',
        'User behavior tracking',
        'Performance metrics analysis'
      ],
      challenges: [
        'Processing large datasets efficiently',
        'Creating responsive data visualizations',
        'Real-time data streaming',
        'Optimizing query performance'
      ]
    },
    {
      id: 'tv-management',
      title: 'TV Channel Management System',
      description: 'A comprehensive .NET application for managing TV channels, programming schedules, and content distribution with advanced administrative features.',
      tech: ['.NET', 'C#', 'SQL Server', 'Entity Framework', 'WPF'],
      icon: <Tv className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-red-500 to-orange-600',
      githubUrl: 'https://github.com/ayari-khalil/gestion-chaine-tv-dotNet',
      features: [
        'Channel programming management',
        'Content scheduling system',
        'User role management',
        'Broadcasting analytics',
        'Content library management'
      ],
      challenges: [
        'Complex scheduling algorithms',
        'Real-time broadcasting coordination',
        'Database optimization for large content',
        'User permission management'
      ]
    },
    {
      id: 'nutrition-semantic-web',
      title: 'Nutrition AI Semantic Web Application',
      description: 'An intelligent nutrition and wellness recommendation system powered by AI, OWL ontologies, and SPARQL queries with natural language processing.',
      tech: ['React', 'Python', 'Flask', 'Groq LLM', 'Apache Jena', 'OWL', 'SPARQL', 'RDFLib'],
      icon: <Sparkles className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-emerald-500 to-cyan-600',
      githubUrl: 'https://github.com/ayari-khalil/nutrition-semantic-web',
      features: [
        'Natural language to SPARQL query conversion',
        'AI-powered using Groq LLM (Llama 3.3)',
        'Semantic search with OWL ontologies',
        'Real-time query execution with Jena Fuseki',
        'Beautiful glass-morphism UI design'
      ],
      challenges: [
        'NLP to SPARQL query translation',
        'Semantic web ontology design',
        'AI model integration and optimization',
        'Complex SPARQL query generation'
      ]
    },
    {
      id: 'django-art-gallery',
      title: 'Django Art Gallery',
      description: 'A full-featured art gallery web application built with Django where users can upload artworks, browse by category and style, engage with comments and likes.',
      tech: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'HTML/CSS'],
      icon: <Palette className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-pink-500 to-rose-600',
      githubUrl: 'https://github.com/DhiaGhouma/ArtGallery',
      features: [
        'Artwork upload and management',
        'Category and style-based browsing',
        'User commenting and interaction',
        'Like and favorite system',
        'User profile management'
      ],
      challenges: [
        'Image upload and optimization',
        'Efficient content categorization',
        'User authentication and permissions',
        'Responsive gallery design'
      ]
    }
  ];

  const toggleProject = (id: string) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <div className="min-h-screen laboratory-section">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('projects.title')}
        </motion.h1>
        
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of the projects I've worked on, showcasing my skills in fullstack development, 
          microservices architecture, and modern web technologies.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="workstation overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>
                
                {/* GitHub link overlay */}
                <div className="absolute top-4 right-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors duration-300"
                  >
                    <Globe className="w-4 h-4 mr-1" />
                    View on GitHub
                  </a>
                  <button 
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    {activeProject === project.id ? 'Hide Details' : 'Show Details'}
                    <ArrowRight className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      activeProject === project.id ? 'rotate-90' : ''
                    }`} />
                  </button>
                </div>
                
                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-primary-500">Key Features</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Technical Challenges */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-accent-500">Technical Challenges</h4>
                          <ul className="space-y-1">
                            {project.challenges.map((challenge, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex gap-3">
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 lab-button text-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Source Code
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="lab-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/contact" className="lab-button">
                Get In Touch
              </a>
              <a 
                href="https://github.com/ayari-khalil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="lab-button-outline"
              >
                View All Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;