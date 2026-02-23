import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface AboutProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

const About = ({ onCursorEnter, onCursorLeave }: AboutProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skills = [
    { name: 'AI-Assisted Development', level: 95 },
    { name: 'Fullstack Engineering', level: 60 },
    { name: 'Prompt Engineering', level: 98 },
    { name: 'Rapid Prototyping', level: 92 },
  ];

  return (
    <motion.section
      ref={containerRef}
      id="about"
      className="relative min-h-screen py-32 px-6"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number mb-4">// 01.ABOUT</div>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black">
            <span className="text-white">WHO </span>
            <span className="text-neon-cyan neon-glow">AM I?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            style={{ y }}
          >
            {/* Main text */}
            <motion.div
              className="cyber-card p-8 mb-8 corner-accent"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseEnter={onCursorEnter}
              onMouseLeave={onCursorLeave}
            >
              <p className="font-rajdhani text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                Hello! I'm <span className="text-neon-cyan font-semibold">Devansh Wartakar</span>, 
                a dedicated student currently pursuing my Bachelor of Engineering in Computer Engineering. 
                My approach to development is centered around{' '}
                <span className="text-neon-pink font-semibold">efficiency and innovation</span>.
              </p>
              <p className="font-rajdhani text-lg text-white/60 leading-relaxed">
                I thrive at the intersection of traditional software engineering and{' '}
                <span className="text-neon-cyan">Prompt Engineering</span>, using AI tools to build 
                high-quality applications at lightning speed. I'm constantly exploring new ways to 
                optimize the development lifecycle.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="relative pl-6 border-l-2 border-neon-pink"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-rajdhani text-xl md:text-2xl text-white/70 italic">
                "The best way to predict the future is to create it—using the best tools available."
              </p>
              <div className="mt-4 font-orbitron text-xs text-neon-pink tracking-[3px]">
                — Devanshu
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Skills visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="cyber-card p-8 holographic">
              <h3 className="font-orbitron text-xl mb-8 text-neon-cyan tracking-[3px]">
                SKILL_MATRIX
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    onMouseEnter={onCursorEnter}
                    onMouseLeave={onCursorLeave}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-rajdhani text-sm text-white/80">{skill.name}</span>
                      <span className="font-orbitron text-sm text-neon-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.7 + index * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: 'FOCUS', value: 'AI DEV' },
                    { label: 'STATUS', value: 'ACTIVE' },
                    { label: 'MODE', value: 'LEARN' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="p-4 bg-white/5 rounded"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + i * 0.1 }}
                    >
                      <div className="font-orbitron text-xs text-white/40 mb-1">{item.label}</div>
                      <div className="font-orbitron text-sm text-neon-cyan">{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div
              className="absolute -right-10 top-1/2 w-20 h-20 border border-neon-cyan/30 rotate-45"
              animate={{ rotate: [45, 135, 45] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-gradient-to-l from-neon-cyan/5 to-transparent pointer-events-none" />
    </motion.section>
    
  );
};

export default About;
