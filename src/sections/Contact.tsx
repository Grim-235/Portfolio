import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Linkedin, Github, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

const Contact = ({ onCursorEnter, onCursorLeave }: ContactProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/devanshu-wartakar-318ab53aa/',
      color: 'hover:text-[#0077b5]'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      url: 'https://github.com/Grim-235',
      color: 'hover:text-white'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      url: 'mailto:devansh@example.com',
      color: 'hover:text-neon-cyan'
    },
  ];

  return (
    <section
      ref={containerRef}
      id="contact"
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
          <div className="section-number mb-4">// 04.CONTACT</div>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black">
            <span className="text-white">LET'S </span>
            <span className="text-neon-pink neon-glow-pink">CONNECT</span>
          </h2>
          <p className="font-rajdhani text-lg text-white/60 mt-6 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat 
            about the future of AI and development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="cyber-card p-8 corner-accent">
              <h3 className="font-orbitron text-xl text-neon-cyan tracking-[3px] mb-8">
                SEND MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div className="relative">
                  <label className="font-rajdhani text-sm text-white/50 mb-2 block">
                    NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 font-rajdhani text-white placeholder-white/30 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all"
                    placeholder="Enter your name"
                    onMouseEnter={onCursorEnter}
                    onMouseLeave={onCursorLeave}
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-pink w-0 focus-within:w-full transition-all duration-300" />
                </div>

                {/* Email field */}
                <div className="relative">
                  <label className="font-rajdhani text-sm text-white/50 mb-2 block">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 font-rajdhani text-white placeholder-white/30 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all"
                    placeholder="Enter your email"
                    onMouseEnter={onCursorEnter}
                    onMouseLeave={onCursorLeave}
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-pink w-0 focus-within:w-full transition-all duration-300" />
                </div>

                {/* Message field */}
                <div className="relative">
                  <label className="font-rajdhani text-sm text-white/50 mb-2 block">
                    MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 font-rajdhani text-white placeholder-white/30 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
                    placeholder="Enter your message..."
                    onMouseEnter={onCursorEnter}
                    onMouseLeave={onCursorLeave}
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-pink w-0 focus-within:w-full transition-all duration-300" />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cyber-btn flex items-center justify-center gap-3 disabled:opacity-50"
                  onMouseEnter={onCursorEnter}
                  onMouseLeave={onCursorLeave}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-neon-cyan border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </>
                  )}
                </motion.button>

                {/* Status message */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg text-neon-green font-rajdhani text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Info cards */}
            <div className="cyber-card p-8">
              <h3 className="font-orbitron text-xl text-neon-cyan tracking-[3px] mb-6">
                CONTACT INFO
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="font-rajdhani text-sm text-white/50">LOCATION</p>
                    <p className="font-rajdhani text-white">India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-neon-pink/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div>
                    <p className="font-rajdhani text-sm text-white/50">EMAIL</p>
                    <p className="font-rajdhani text-white">devanshuips@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="cyber-card p-8">
              <h3 className="font-orbitron text-xl text-neon-cyan tracking-[3px] mb-6">
                SOCIALLINKS
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg group hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    onMouseEnter={onCursorEnter}
                    onMouseLeave={onCursorLeave}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-4">
                      <link.icon className={`w-6 h-6 text-white/60 ${link.color} transition-colors`} />
                      <span className="font-rajdhani text-white group-hover:text-neon-cyan transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-neon-cyan transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Status card */}
            <div className="cyber-card p-6 holographic">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-orbitron text-xs text-white/50 tracking-[2px]">CURRENT STATUS</p>
                  <p className="font-rajdhani text-neon-green text-lg">Learning and Building something Every Week</p>
                </div>
                <motion.div
                  className="w-4 h-4 bg-neon-green rounded-full"
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(0, 255, 136, 0.4)',
                      '0 0 0 10px rgba(0, 255, 136, 0)',
                      '0 0 0 0 rgba(0, 255, 136, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-32 pt-16 border-t border-white/10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="font-orbitron text-2xl font-bold">
              <span className="text-neon-cyan">DEVANSH</span>
              <span className="text-neon-pink">.W</span>
            </div>

            {/* Copyright */}
            <p className="font-rajdhani text-white/40 text-sm">
              &copy; 2026 Devansh Wartakar. Built with AI & Passion.
            </p>

            {/* Back to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 font-orbitron text-xs text-white/40 hover:text-neon-cyan transition-colors"
              onMouseEnter={onCursorEnter}
              onMouseLeave={onCursorLeave}
              whileHover={{ y: -3 }}
            >
              BACK TO TOP
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-4 h-4 rotate-[-45deg]" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.footer>

      {/* Background effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Contact;
