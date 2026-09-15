import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Code2, Database, Brain, Terminal } from 'lucide-react';

interface SkillsProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

const Skills = ({ onCursorEnter, onCursorLeave }: SkillsProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.94, 1, 1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const categories = [
    {
      number: '01',
      title: 'FRONTEND',
      description: 'Building responsive and interactive web experiences.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'DOM', 'Responsive Design', 'Tailwind CSS'],
      icon: Code2,
      align: 'left' as const,
    },
    {
      number: '02',
      title: 'PYTHON & DATA',
      description: 'Using Python for development, data processing, visualization, and machine learning.',
      skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'PyTorch', 'REST APIs'],
      icon: Database,
      align: 'right' as const,
    },
    {
      number: '03',
      title: 'AI & AUTOMATION',
      description: 'Building AI-powered applications and automating workflows.',
      skills: ['AI Development', 'Prompt Engineering', 'AI APIs', 'n8n', 'Workflow Automation', 'AI-Assisted Dev'],
      icon: Brain,
      align: 'left' as const,
    },
    {
      number: '04',
      title: 'TOOLS & DEVOPS',
      description: 'Tools I use to build, manage, and run projects.',
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Linux CLI', 'Postman'],
      icon: Terminal,
      align: 'right' as const,
    },
  ];

  return (
    <motion.section
      ref={containerRef}
      id="skills"
      className="relative min-h-screen py-32 px-6 overflow-hidden"
      style={{ opacity, scale }}
    >
      <motion.div className="max-w-6xl mx-auto" style={{ y }}>
        {/* Editorial Subheader inspired by reference image */}
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
              TECHNICAL <span className="text-neon-cyan neon-glow">ARSENAL</span>
            </h2>
          </div>
          <p className="font-rajdhani text-base md:text-lg text-white/50 max-w-md">
            Of Course, I have few skills, you think i am potato like you?
          </p>
        </motion.div>

        {/* Staggered Timeline Flow Layout */}
        <div className="relative">
          {/* Central Vertical Guide Line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/40 via-neon-cyan/15 to-transparent -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {categories.map((cat, index) => {
              const isLeft = cat.align === 'left';
              return (
                <div key={cat.number} className="relative">
                  {/* Glowing Node Circle on Center Line (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 w-8 h-8 rounded-full border border-neon-cyan/50 bg-black/80 items-center justify-center z-20 shadow-[0_0_15px_rgba(143,211,244,0.3)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan" />
                  </div>

                  {/* Horizontal Connector Line (desktop) */}
                  <div
                    className={`hidden lg:block absolute top-14 h-px bg-gradient-to-r z-10 ${
                      isLeft
                        ? 'right-1/2 from-transparent to-neon-cyan/30 w-16'
                        : 'left-1/2 from-neon-cyan/30 to-transparent w-16'
                    }`}
                  />

                  {/* Card Row Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column Slot */}
                    <div className={isLeft ? 'block' : 'hidden lg:block'}>
                      {isLeft && (
                        <motion.div
                          className="relative group p-8 md:p-10 rounded-xl border border-white/10 bg-white/[0.015] backdrop-blur-sm hover:border-neon-cyan/50 hover:bg-white/[0.03] hover:shadow-[0_0_35px_rgba(143,211,244,0.12)] transition-all duration-500 lg:mr-10"
                          initial={{ opacity: 0, x: -50 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.7, delay: index * 0.15 }}
                          onMouseEnter={onCursorEnter}
                          onMouseLeave={onCursorLeave}
                        >
                          {/* Watermark Number */}
                          <div className="absolute top-4 right-6 font-orbitron font-black text-6xl md:text-7xl text-white/[0.03] group-hover:text-neon-cyan/[0.07] transition-colors pointer-events-none select-none">
                            {cat.number}
                          </div>

                          {/* Corner Tech Brackets */}
                          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-cyan/40 group-hover:border-neon-cyan transition-colors" />
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-cyan/40 group-hover:border-neon-cyan transition-colors" />

                          {/* Number & Arrow Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3 font-orbitron text-sm md:text-base text-neon-cyan tracking-[3px]">
                              <span>{cat.number}</span>
                              <span className="w-8 h-px bg-neon-cyan/50" />
                              <span className="text-white font-bold">{cat.title}</span>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-neon-cyan group-hover:bg-neon-cyan/10 transition-all">
                              <cat.icon className="w-4 h-4" />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="font-rajdhani text-base md:text-lg text-white/70 leading-relaxed mb-6">
                            {cat.description}
                          </p>

                          {/* Skill Tags */}
                          <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3.5 py-1.5 bg-white/[0.03] border border-white/10 rounded-md font-rajdhani text-sm text-white/80 group-hover:border-neon-cyan/25 hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Column Slot */}
                    <div className={!isLeft ? 'block' : 'hidden lg:block'}>
                      {!isLeft && (
                        <motion.div
                          className="relative group p-8 md:p-10 rounded-xl border border-white/10 bg-white/[0.015] backdrop-blur-sm hover:border-neon-cyan/50 hover:bg-white/[0.03] hover:shadow-[0_0_35px_rgba(143,211,244,0.12)] transition-all duration-500 lg:ml-10"
                          initial={{ opacity: 0, x: 50 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.7, delay: index * 0.15 }}
                          onMouseEnter={onCursorEnter}
                          onMouseLeave={onCursorLeave}
                        >
                          {/* Watermark Number */}
                          <div className="absolute top-4 right-6 font-orbitron font-black text-6xl md:text-7xl text-white/[0.03] group-hover:text-neon-cyan/[0.07] transition-colors pointer-events-none select-none">
                            {cat.number}
                          </div>

                          {/* Corner Tech Brackets */}
                          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-cyan/40 group-hover:border-neon-cyan transition-colors" />
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-cyan/40 group-hover:border-neon-cyan transition-colors" />

                          {/* Number & Arrow Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3 font-orbitron text-sm md:text-base text-neon-cyan tracking-[3px]">
                              <span>{cat.number}</span>
                              <span className="w-8 h-px bg-neon-cyan/50" />
                              <span className="text-white font-bold">{cat.title}</span>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-neon-cyan group-hover:bg-neon-cyan/10 transition-all">
                              <cat.icon className="w-4 h-4" />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="font-rajdhani text-base md:text-lg text-white/70 leading-relaxed mb-6">
                            {cat.description}
                          </p>

                          {/* Skill Tags */}
                          <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3.5 py-1.5 bg-white/[0.03] border border-white/10 rounded-md font-rajdhani text-sm text-white/80 group-hover:border-neon-cyan/25 hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
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
      </motion.div>
    </motion.section>
  );
};

export default Skills;
