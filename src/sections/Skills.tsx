import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Brain, 
  Rocket, 
  GitBranch, 
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';

interface SkillsProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

const Skills = ({ onCursorEnter, onCursorLeave }: SkillsProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const skillCategories = [
    {
      icon: Code2,
      title: 'FRONTEND',
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Tailwind CSS'],
      color: 'from-neon-cyan to-neon-blue',
      description: 'Building responsive, interactive user interfaces with modern frameworks',
    },
    {
      icon: Database,
      title: 'BACKEND',
      skills: ['Python', 'Node.js', 'REST APIs', 'Data Structures', 'Algorithms'],
      color: 'from-neon-pink to-neon-purple',
      description: 'Creating robust server-side solutions and efficient data handling',
    },
    {
      icon: Brain,
      title: 'AI & TOOLS',
      skills: ['Prompt Engineering', 'AI-Assisted Dev', 'Git', 'VS Code', 'Cursor'],
      color: 'from-neon-purple to-neon-cyan',
      description: 'Leveraging AI to accelerate development and enhance productivity',
    },
    {
      icon: Rocket,
      title: 'PHILOSOPHY',
      skills: ['Rapid Prototyping', 'Scalable Design', 'Clean Code', 'Best Practices'],
      color: 'from-neon-green to-neon-cyan',
      description: "Adaptation isn't survival, it's fluency. I don't just fit into eras, people, and environments. I learn to speak them.",
    },
  ];

  const techStack = [
    { icon: Terminal, name: 'Bash', color: 'text-neon-green' },
    { icon: GitBranch, name: 'Git', color: 'text-neon-pink' },
    { icon: Cpu, name: 'AI/ML', color: 'text-neon-purple' },
    { icon: Layers, name: 'Fullstack', color: 'text-neon-cyan' },
  ];

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative min-h-screen py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number mb-4">// 02.CAPABILITIES</div>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black">
            <span className="text-white">MY </span>
            <span className="text-neon-pink neon-glow-pink">ARSENAL</span>
          </h2>
          <p className="font-rajdhani text-lg text-white/60 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building the future, powered by cutting-edge technology 
            and AI-enhanced workflows.
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="cyber-card p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => {
                setHoveredCard(index);
                onCursorEnter();
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                onCursorLeave();
              }}
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                className="relative mb-6"
                animate={hoveredCard === index ? { rotate: 360, scale: 1.1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} p-0.5`}>
                  <div className="w-full h-full bg-black/80 rounded-lg flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="font-orbitron text-2xl font-bold text-white mb-4 tracking-[2px]">
                {category.title}
              </h3>

              {/* Description */}
              <p className="font-rajdhani text-white/60 mb-6">
                {category.description}
              </p>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded font-rajdhani text-sm text-white/80"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + skillIndex * 0.05 }}
                    whileHover={{ 
                      borderColor: 'rgba(0, 245, 255, 0.5)',
                      color: '#00f5ff'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/30" />
            </motion.div>
          ))}
        </div>

        {/* Tech stack row */}
        <motion.div
          className="cyber-card p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-orbitron text-lg text-neon-cyan tracking-[3px] mb-8 text-center">
            TECH_STACK
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                onMouseEnter={onCursorEnter}
                onMouseLeave={onCursorLeave}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-neon-cyan/50 transition-colors`}>
                  <tech.icon className={`w-7 h-7 ${tech.color}`} />
                </div>
                <span className="font-rajdhani text-sm text-white/60">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-pink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default Skills;
