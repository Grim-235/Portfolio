import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AboutProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

const About = ({ onCursorEnter, onCursorLeave }: AboutProps) => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.94, 1, 1, 0.94]);

  return (
    <motion.section
      ref={containerRef}
      id="about"
      className="relative min-h-screen py-32 px-6 flex items-center justify-center"
      style={{ opacity, scale }}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          className="mb-14 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number mb-4"></div>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black">
            <span className="text-white">WHO </span>
            <span className="text-neon-cyan neon-glow">AM I?</span>
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          style={{ y }}
        >
          <motion.div
            className={`group p-8 md:p-12 relative rounded-xl transition-all duration-500 cursor-pointer ${
              isActive
                ? 'bg-white/[0.02] border border-neon-cyan/50 shadow-[0_0_30px_rgba(143,211,244,0.2)]'
                : 'bg-transparent border border-transparent hover:border-neon-cyan/40 hover:bg-white/[0.015] hover:shadow-[0_0_25px_rgba(143,211,244,0.15)]'
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => setIsActive(!isActive)}
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
          >
            {/* Corner brackets - visible only on hover or click */}
            <div className={`pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan" />
            </div>
            {/* Top greeting */}
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-orbitron text-2xl md:text-3xl text-white font-bold tracking-wide">
                Yo, I’m <span className="text-neon-cyan">Devanshu</span>
              </h3>
              <span className="text-2xl">👋</span>
            </div>

            {/* Body paragraphs */}
            <div className="space-y-5 font-rajdhani text-lg md:text-xl text-white/80 leading-relaxed">
              <p>
                I’m a <span className="text-white font-semibold">Computer Engineering student</span> who likes building things, experimenting with tech, and figuring out how stuff works.
              </p>
              <p>
                I’m currently exploring <span className="text-neon-cyan font-medium">software development</span>, <span className="text-neon-cyan font-medium">AI</span>, <span className="text-neon-cyan font-medium">automation</span>, and whatever interesting problem catches my attention. I learn mostly by building — sometimes it works, sometimes it absolutely doesn’t.
              </p>
            </div>

            {/* Signature tagline */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3 font-orbitron text-sm md:text-base tracking-[2px] text-neon-pink">
                <Sparkles className="w-5 h-5 text-neon-pink shrink-0" />
                <span>Still learning. Still building. Still curious.</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded font-rajdhani text-xs text-white/60 tracking-wider">
                  ENGINEERING
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded font-rajdhani text-xs text-neon-cyan tracking-wider">
                  AI & AUTOMATION
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-gradient-to-l from-neon-cyan/5 to-transparent pointer-events-none" />
    </motion.section>
  );
};

export default About;
