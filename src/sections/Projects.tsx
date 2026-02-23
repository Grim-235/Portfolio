import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Cpu, Cloud, Mic, GraduationCap, Search } from 'lucide-react';

interface ProjectsProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

const Projects = ({ onCursorEnter, onCursorLeave }: ProjectsProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'COLLEGE PREDICTOR',
      subtitle: 'Admission Prediction System',
      description: 'Advanced algorithm to predict college admissions based on historical data, merit scores, and category analysis.',
      icon: GraduationCap,
      tags: ['Python', 'ML', 'Data Analysis'],
      color: 'from-neon-cyan to-neon-blue',
      link: '#',
      github: '#',
      features: ['Predictive Modeling', 'Data Visualization', 'Real-time Analysis'],
    },
    {
      id: 2,
      title: 'AI VOICE COMMAND MODEL  ( RAY )',
      subtitle: 'Control Your Device on voice commands',
      description: 'Sophisticated voice synthesis model trained for natural communication with emotion detection.',
      icon: Mic,
      tags: ['AI/ML', 'Neural Networks', 'Audio Processing'],
      color: 'from-neon-pink to-neon-purple',
      link: '#',
      github: '#',
      features: ['Speech to Execute', 'Voice Cloning', 'Emotion Control'],
    },
    {
      id: 3,
      title: 'CLOUD STORAGE',
      subtitle: 'Decentralized Data Platform',
      description: 'Secure, high-availability platform for decentralized data storage with end-to-end encryption.',
      icon: Cloud,
      tags: ['Cloud', 'Security', 'Distributed Systems'],
      color: 'from-neon-purple to-neon-cyan',
      link: '#',
      github: '#',
      features: ['End-to-End Encryption', 'Multi-region', 'Auto-backup'],
    },
    {
      id: 4,
      title: 'TERM ROOM',
      subtitle: 'Classroom Alternative',
      description: 'A Google Classroom alternative designed for seamless student-teacher interaction and collaboration.',
      icon: Cpu,
      tags: ['Fullstack', 'Real-time', 'Collaboration'],
      color: 'from-neon-green to-neon-cyan',
      link: '#',
      github: '#',
      features: ['Live Chat', 'Assignment Management', 'Video Calls'],
    },
    {
      id: 5,
      title: 'AI WEB SCRAPER',
      subtitle: 'Intelligent Data Extraction',
      description: 'Intelligent scraping tool that adapts to dynamic web structures using AI and machine learning.',
      icon: Search,
      tags: ['AI', 'Web Scraping', 'Automation'],
      color: 'from-neon-cyan to-neon-pink',
      link: '#',
      github: 'https://github.com/Grim-235/Ai-integrated-Scraper',
      features: ['Dynamic Adaptation', 'Anti-detection', 'Data Parsing'],
    },
  ];

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative min-h-screen py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number mb-4">// 03.PROJECTS</div>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black">
            <span className="text-white">FEATURED </span>
            <span className="text-neon-cyan neon-glow">WORKS</span>
          </h2>
          <p className="font-rajdhani text-lg text-white/60 mt-6 max-w-2xl">
            A collection of projects showcasing my expertise in AI-assisted development, 
            fullstack engineering, and innovative problem-solving.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="cyber-card group relative overflow-hidden cursor-none"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => {
                setSelectedProject(project.id);
                onCursorEnter();
              }}
              onMouseLeave={() => {
                setSelectedProject(null);
                onCursorLeave();
              }}
            >
              {/* Card content */}
              <div className="p-8 h-full flex flex-col">
                {/* Icon and title */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} p-0.5`}
                    animate={selectedProject === project.id ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full bg-black/80 rounded-lg flex items-center justify-center">
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>
                  
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-neon-cyan/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 text-white/60" />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-neon-cyan/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5 text-white/60" />
                    </motion.a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-xl font-bold text-white mb-1 tracking-[1px]">
                  {project.title}
                </h3>
                <p className={`font-rajdhani text-sm bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-4`}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="font-rajdhani text-white/60 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 rounded text-xs font-rajdhani text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features preview on hover */}
                <AnimatePresence>
                  {selectedProject === project.id && (
                    <motion.div
                      className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/95 to-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="font-orbitron text-xs text-neon-cyan tracking-[2px] mb-3">
                        KEY FEATURES
                      </p>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <motion.li
                            key={feature}
                            className="font-rajdhani text-sm text-white/80 flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Border glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/Grim-235"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-neon-cyan/50 text-neon-cyan font-orbitron text-sm tracking-[3px] hover:bg-neon-cyan hover:text-black transition-all duration-300"
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            VIEW ALL ON GITHUB
          </motion.a>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Projects;
