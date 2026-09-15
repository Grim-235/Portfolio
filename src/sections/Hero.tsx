import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

const Hero = ({ onCursorEnter, onCursorLeave }: HeroProps) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'SOFTWARE DEVELOPER & AI ENTHUSIAST';
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y }}
      >
        {/* Section indicator */}
        <motion.div
          className="section-number mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.8, duration: 0.5 }}
        >
          
        </motion.div>

        {/* Main title with glitch effect */}
        <motion.h1
          className="font-orbitron text-5xl md:text-7xl lg:text-9xl font-black mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          <span className="relative inline-block">
            <motion.span
              className="text-white glitch-text"
              data-text="DEVANSHU"
              whileHover={{ scale: 1.02 }}
              onMouseEnter={onCursorEnter}
              onMouseLeave={onCursorLeave}
            >
              DEVANSHU
            </motion.span>
          </span>
          <br />
          <motion.span
            className="text-neon-cyan neon-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.5 }}
          >
            WARTAKAR
          </motion.span>
        </motion.h1>

        {/* Animated line */}
        <motion.div
          className="w-32 h-0.5 bg-gradient-to-r from-neon-cyan via-white/50 to-neon-cyan mx-auto my-8"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ delay: 3.4, duration: 0.8 }}
        />

        {/* Typing subtitle */}
        <motion.div
          className="font-rajdhani text-lg md:text-xl lg:text-2xl text-white/80 mb-4 h-8 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6 }}
        >
          <span className="text-neon-cyan">&gt;</span> {displayText}
          <motion.span
            className="inline-block w-0.5 h-6 bg-neon-cyan ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="font-rajdhani text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.5 }}
        >
          Computer Engineering student exploring{' '}
          <span className="text-neon-cyan font-medium">Software Development</span>,{' '}
          <span className="text-neon-cyan font-medium">AI & Automation</span>, and building tools to solve interesting problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.5 }}
        >
          <motion.button
            className="cyber-btn"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW PROJECTS
          </motion.button>

          <motion.button
            className="relative px-10 py-4 font-orbitron text-sm tracking-[3px] text-white/70 border border-white/20 overflow-hidden cursor-none"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
            whileHover={{ scale: 1.05, borderColor: 'rgba(143, 211, 244, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <motion.div
              className="absolute inset-0 bg-neon-cyan/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Badges / Focus indicators (Replaced fake exp with authentic active stats) */}
        <motion.div
          className="flex justify-center gap-8 md:gap-16 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 0.5 }}
        >
          {[
            { value: '8+', label: 'PROJECTS' },
            { value: '4', label: 'TECH DOMAINS' },
            { value: '∞', label: 'CURIOSITY' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.2 + index * 0.1 }}
              onMouseEnter={onCursorEnter}
              onMouseLeave={onCursorLeave}
            >
              <div className="font-orbitron text-2xl md:text-3xl text-neon-cyan">{stat.value}</div>
              <div className="font-rajdhani text-xs tracking-[2px] text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-orbitron text-xs tracking-[3px] text-white/40">SCROLL</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-neon-cyan to-transparent" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-16 h-16 border-l-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute top-24 right-6 w-16 h-16 border-r-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute bottom-10 left-6 w-16 h-16 border-l-2 border-b-2 border-neon-cyan/30" />
      <div className="absolute bottom-10 right-6 w-16 h-16 border-r-2 border-b-2 border-neon-cyan/30" />
    </motion.section>
  );
};

export default Hero;
