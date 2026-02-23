import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.div
        className="loader-text glitch-text"
        data-text="WELCOME To MY WORLD"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        WELCOME To MY WORLD
      </motion.div>
      
      <div className="loader-bar">
        <motion.div 
          className="loader-progress"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
      </div>
      
      <motion.div
        className="mt-4 font-orbitron text-xs text-neon-cyan tracking-[5px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        INITIALIZING SYSTEM...
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border border-neon-cyan/30"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 border border-neon-pink/30"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: -45 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      
      {/* Corner brackets */}
      <div className="absolute top-5 left-5 w-10 h-10 border-l-2 border-t-2 border-neon-cyan" />
      <div className="absolute top-5 right-5 w-10 h-10 border-r-2 border-t-2 border-neon-cyan" />
      <div className="absolute bottom-5 left-5 w-10 h-10 border-l-2 border-b-2 border-neon-cyan" />
      <div className="absolute bottom-5 right-5 w-10 h-10 border-r-2 border-b-2 border-neon-cyan" />
    </motion.div>
  );
};

export default LoadingScreen;
