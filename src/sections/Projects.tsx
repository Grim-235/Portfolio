import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Mic,
  Eye,
  Search,
  GraduationCap,
  CloudRain,
  Activity,
  Sliders,
  Database,
  ArrowUpRight
} from 'lucide-react';

interface ProjectsProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: typeof Mic;
  github: string;
  highlights: string[];
  align: 'left' | 'right';
}

const Projects = ({ onCursorEnter, onCursorLeave }: ProjectsProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const projects: Project[] = [
    {
      number: '01',
      title: 'AURA — AI VOICE & TEXT ASSISTANT',
      subtitle: 'Autonomous Desktop Command & Speech Agent',
      description:
        'Production-ready AI assistant capable of system control, question answering, and automated desktop execution via natural voice commands, speech recognition, and synthesized audio responses.',
      tags: ['Python', 'Speech Recognition', 'AI/ML', 'PyTTSx3', 'System Automation'],
      icon: Mic,
      github: 'https://github.com/Grim-235/AURA-Ai-Voice-Text-Command-Model',
      highlights: ['Real-time speech synthesis & STT', 'OS desktop automation & control', 'Custom voice command parser'],
      align: 'left',
    },
    {
      number: '02',
      title: 'SIH 2026 — ALPR SYSTEM',
      subtitle: 'Automated License Plate Recognition Pipeline',
      description:
        'Built for the Smart India Hackathon 2026. High-accuracy computer vision pipeline using deep learning and OCR for real-time vehicular license plate detection, character segmentation, and database logging.',
      tags: ['Python', 'OpenCV', 'PyTorch / YOLO', 'EasyOCR', 'Computer Vision'],
      icon: Eye,
      github: 'https://github.com/Grim-235/SIH2026-ALPR-System-',
      highlights: ['Deep learning plate localization', 'Dynamic multi-angle character OCR', 'High-throughput video stream analysis'],
      align: 'right',
    },
    {
      number: '03',
      title: 'AI INTEGRATED SCRAPER SUITE',
      subtitle: 'Adaptive Intelligent Web Extraction Engine',
      description:
        'Dynamic web scraper architecture leveraging AI algorithms to adapt to shifting DOM layouts and modern anti-scraping protections, automatically exporting structured, sanitized data pipelines.',
      tags: ['Python', 'BeautifulSoup', 'Dynamic DOM Parsing', 'AI Automation', 'Data Pipeline'],
      icon: Search,
      github: 'https://github.com/Grim-235/Ai-integrated-Scraper',
      highlights: ['Self-healing selector adaptation', 'Structured JSON extraction pipeline', 'Automated request throttling & spoofing'],
      align: 'left',
    },
    {
      number: '04',
      title: 'COLLEGE ADMISSION PREDICTOR',
      subtitle: 'MHT-CET Merit & Rank Recommendation Engine',
      description:
        'Predictive admission counseling tool analyzing multi-year historical cutoff statistics, candidate percentiles, categories, and quota allocations to project optimal engineering college placements.',
      tags: ['Python', 'Pandas', 'Data Analytics', 'Prediction Algorithms', 'Web UI'],
      icon: GraduationCap,
      github: 'https://github.com/Grim-235/COLLAGE-PREDICTOR_TOOL',
      highlights: ['Multi-year cutoff dataset analytics', 'Category & merit quota calculation', 'Personalized college shortlist generator'],
      align: 'right',
    },
    {
      number: '05',
      title: 'REAL-TIME WEATHER DASHBOARD',
      subtitle: 'Live Atmospheric Analytics & Forecast UI',
      description:
        'Interactive telemetry web application consuming OpenWeather APIs with real-time location detection, multi-day forecasting, humidity and pressure metrics, and fluid responsive UI styling.',
      tags: ['JavaScript', 'REST APIs', 'Geolocation API', 'CSS3', 'Dynamic UI'],
      icon: CloudRain,
      github: 'https://github.com/Grim-235/weather-dashboard',
      highlights: ['Live OpenWeatherMap integration', 'Automatic browser geolocation sync', 'Dynamic weather metric visualization'],
      align: 'left',
    },
    {
      number: '06',
      title: 'TRACK — HABIT & FOCUS ENGINE',
      subtitle: 'Activity & Milestone Productivity Platform',
      description:
        'Modern monitoring and activity tracking web application for managing daily productivity, habits, streaks, and focus metrics with persistent client state and a minimalist interface.',
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'State Management', 'Analytics'],
      icon: Activity,
      github: 'https://github.com/Grim-235/Track',
      highlights: ['Interactive habit streak system', 'Progress & milestone visualization', 'Responsive modern component architecture'],
      align: 'right',
    },
    {
      number: '07',
      title: 'WEIGHTED DECISION MATRIX',
      subtitle: 'Multi-Criteria Analytical Decision System',
      description:
        'Systematic analytical tool implementing weighted multi-attribute decision theory (MADM) to objectively score and rank complex choices based on user-defined weight factors and sensitivity thresholds.',
      tags: ['JavaScript', 'Analytical Modeling', 'Decision Theory', 'Data Normalization'],
      icon: Sliders,
      github: 'https://github.com/Grim-235/Weighted-Decision-Matrix-',
      highlights: ['Customizable factor weighting', 'Mathematical normalization matrix', 'Visual comparative outcome ranking'],
      align: 'left',
    },
    {
      number: '08',
      title: 'BANK DATABASE MANAGEMENT SYSTEM',
      subtitle: 'Transactional Ledger & Account Architecture',
      description:
        'Robust prototype database management engine modeling ACID-compliant financial transactions, secure user balance mutations, ledger integrity verification, and relational schema validation.',
      tags: ['TypeScript', 'Database Architecture', 'ACID Transactions', 'Data Integrity'],
      icon: Database,
      github: 'https://github.com/Grim-235/BANK-DATABASE-MANAGEMENT-prototype',
      highlights: ['ACID transaction verification', 'Balance mutation & validation rules', 'Relational ledger record auditing'],
      align: 'right',
    },
  ];

  return (
    <motion.section
      ref={containerRef}
      id="projects"
      className="relative min-h-screen py-32 px-6 overflow-hidden"
      style={{ opacity, scale }}
    >
      <motion.div className="max-w-6xl mx-auto" style={{ y }}>
        {/* Editorial Section Header */}
        <motion.div
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="flex items-center gap-2 font-orbitron text-xs text-neon-cyan tracking-[4px] mb-3">
              <span></span>
              <span className="text-white/40"></span>
            </div>
            <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white tracking-wide">
              FEATURED <span className="text-neon-cyan neon-glow">PROJECTS</span>
            </h2>
          </div>
          <p className="font-rajdhani text-base md:text-lg text-white/50 max-w-md">
            A showcase of software tools built and maintained on GitHub.
          </p>
        </motion.div>

        {/* Z-Pattern / Serpentine Timeline Layout */}
        <div className="relative">
          {/* Central Vertical Guide Line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/40 via-neon-cyan/20 to-transparent -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => {
              const isLeft = project.align === 'left';
              return (
                <div key={project.number} className="relative">
                  {/* Glowing Node Circle on Center Line (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 w-9 h-9 rounded-full border border-neon-cyan/50 bg-black/90 items-center justify-center z-20 shadow-[0_0_16px_rgba(143,211,244,0.35)] transition-transform duration-300 hover:scale-110">
                    <span className="font-orbitron text-[10px] text-neon-cyan font-bold">
                      {project.number}
                    </span>
                  </div>

                  {/* Horizontal Connector Line (desktop) */}
                  <div
                    className={`hidden lg:block absolute top-14 h-px bg-gradient-to-r z-10 ${
                      isLeft
                        ? 'right-1/2 from-transparent to-neon-cyan/35 w-16'
                        : 'left-1/2 from-neon-cyan/35 to-transparent w-16'
                    }`}
                  />

                  {/* Two-Column Grid Row for alternating Z placement */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Slot */}
                    <div className={isLeft ? 'block' : 'hidden lg:block'}>
                      {isLeft && (
                        <motion.div
                          className="relative group p-8 md:p-10 rounded-xl border border-transparent hover:border-neon-cyan/50 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(143,211,244,0.12)] lg:mr-10"
                          initial={{ opacity: 0, x: -50 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.7, delay: index * 0.1 }}
                          onMouseEnter={onCursorEnter}
                          onMouseLeave={onCursorLeave}
                        >
                          {/* Big Watermark Number */}
                          <div className="absolute top-4 right-6 font-orbitron font-black text-6xl md:text-7xl text-white/[0.025] group-hover:text-neon-cyan/[0.07] transition-colors pointer-events-none select-none">
                            {project.number}
                          </div>

                          {/* Corner Tech Brackets (visible on hover) */}
                          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-neon-cyan transition-colors duration-300" />
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-neon-cyan transition-colors duration-300" />

                          {/* Header: Number, Title, Icon */}
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <div className="flex items-center gap-3 font-orbitron text-xs md:text-sm text-neon-cyan tracking-[3px] mb-2">
                                <span>{project.number}</span>
                                <span className="w-8 h-px bg-neon-cyan/50" />
                                <span className="text-white/80 font-semibold">{project.subtitle}</span>
                              </div>
                              <h3 className="font-orbitron text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-neon-cyan transition-colors">
                                {project.title}
                              </h3>
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-neon-cyan group-hover:bg-neon-cyan/10 transition-all flex-shrink-0">
                              <project.icon className="w-5 h-5" />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="font-rajdhani text-base md:text-lg text-white/70 leading-relaxed mb-5">
                            {project.description}
                          </p>

                          {/* Key Highlights */}
                          <div className="mb-6 space-y-1.5">
                            {project.highlights.map((highlight) => (
                              <div key={highlight} className="flex items-center gap-2 font-rajdhani text-sm text-white/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded font-rajdhani text-xs md:text-sm text-white/80 group-hover:border-neon-cyan/25 hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Action Links */}
                          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 border border-neon-cyan/40 rounded text-neon-cyan font-orbitron text-xs tracking-[2px] hover:bg-neon-cyan hover:text-black transition-all duration-300"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-4 h-4" />
                              <span>VIEW CODE</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Slot */}
                    <div className={!isLeft ? 'block' : 'hidden lg:block'}>
                      {!isLeft && (
                        <motion.div
                          className="relative group p-8 md:p-10 rounded-xl border border-transparent hover:border-neon-cyan/50 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(143,211,244,0.12)] lg:ml-10"
                          initial={{ opacity: 0, x: 50 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.7, delay: index * 0.1 }}
                          onMouseEnter={onCursorEnter}
                          onMouseLeave={onCursorLeave}
                        >
                          {/* Big Watermark Number */}
                          <div className="absolute top-4 right-6 font-orbitron font-black text-6xl md:text-7xl text-white/[0.025] group-hover:text-neon-cyan/[0.07] transition-colors pointer-events-none select-none">
                            {project.number}
                          </div>

                          {/* Corner Tech Brackets (visible on hover) */}
                          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-neon-cyan transition-colors duration-300" />
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-neon-cyan transition-colors duration-300" />

                          {/* Header: Number, Title, Icon */}
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <div className="flex items-center gap-3 font-orbitron text-xs md:text-sm text-neon-cyan tracking-[3px] mb-2">
                                <span>{project.number}</span>
                                <span className="w-8 h-px bg-neon-cyan/50" />
                                <span className="text-white/80 font-semibold">{project.subtitle}</span>
                              </div>
                              <h3 className="font-orbitron text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-neon-cyan transition-colors">
                                {project.title}
                              </h3>
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-neon-cyan group-hover:bg-neon-cyan/10 transition-all flex-shrink-0">
                              <project.icon className="w-5 h-5" />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="font-rajdhani text-base md:text-lg text-white/70 leading-relaxed mb-5">
                            {project.description}
                          </p>

                          {/* Key Highlights */}
                          <div className="mb-6 space-y-1.5">
                            {project.highlights.map((highlight) => (
                              <div key={highlight} className="flex items-center gap-2 font-rajdhani text-sm text-white/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded font-rajdhani text-xs md:text-sm text-white/80 group-hover:border-neon-cyan/25 hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Action Links */}
                          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 border border-neon-cyan/40 rounded text-neon-cyan font-orbitron text-xs tracking-[2px] hover:bg-neon-cyan hover:text-black transition-all duration-300"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-4 h-4" />
                              <span>VIEW CODE</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View all on GitHub button */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/Grim-235"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-neon-cyan/50 text-neon-cyan font-orbitron text-sm tracking-[3px] hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(143,211,244,0.15)] hover:shadow-[0_0_30px_rgba(143,211,244,0.4)]"
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>EXPLORE ALL REPOSITORIES ON GITHUB</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[160px] pointer-events-none" />
    </motion.section>
  );
};

export default Projects;
