import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Linkedin,
  Github,
  Mail,
  Instagram,
  ArrowUpRight,
  Sparkles,
  MapPin
} from 'lucide-react';

interface ContactProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const Contact = ({ onCursorEnter, onCursorLeave }: ContactProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [isActive, setIsActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 0.25], [40, 0]);

  const socialLinks = [
    {
      name: 'Gmail',
      handle: 'devanshuips@gmail.com',
      url: 'mailto:devanshuips@gmail.com',
      icon: Mail,
      tag: 'INBOX',
    },
    {
      name: 'LinkedIn',
      handle: 'Devanshu Wartakar',
      url: 'https://www.linkedin.com/in/devanshu-wartakar-318ab53aa/',
      icon: Linkedin,
      tag: 'NETWORK',
    },
    {
      name: 'GitHub',
      handle: 'Grim-235',
      url: 'https://github.com/Grim-235',
      icon: Github,
      tag: 'CODE',
    },
    {
      name: 'X (Twitter)',
      handle: '@Devanshu_Patil_',
      url: 'https://x.com/Devanshu_Patil_',
      icon: XIcon,
      tag: 'UPDATES',
    },
    {
      name: 'Instagram',
      handle: 'the_devanshu_235',
      url: 'https://www.instagram.com/the_devanshu_235',
      icon: Instagram,
      tag: 'SOCIAL',
    },
    {
      name: 'Discord',
      handle: '863312400979591180',
      url: 'https://discord.com/users/863312400979591180',
      icon: DiscordIcon,
      tag: 'COMMUNITY',
    },
  ];

  return (
    <motion.section
      ref={containerRef}
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
      style={{ opacity, scale }}
    >
      <motion.div className="max-w-4xl mx-auto" style={{ y }}>
        {/* Section Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 font-orbitron text-xs text-neon-cyan tracking-[4px] mb-3">

            <span className="text-white/40"></span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black tracking-wide text-white">
            LET'S <span className="text-neon-cyan neon-glow">CONNECT</span>
          </h2>
          <p className="font-rajdhani text-lg text-white/60 mt-4 max-w-xl mx-auto">
          </p>
        </motion.div>

        {/* Main Interactive Transparent Card */}
        <motion.div
          className={`group p-8 md:p-12 relative rounded-xl transition-all duration-500 cursor-pointer ${
            isActive
              ? 'bg-white/[0.02] border border-neon-cyan/50 shadow-[0_0_35px_rgba(143,211,244,0.2)]'
              : 'bg-transparent border border-transparent hover:border-neon-cyan/40 hover:bg-white/[0.015] hover:shadow-[0_0_30px_rgba(143,211,244,0.15)]'
          }`}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => setIsActive(!isActive)}
          onMouseEnter={onCursorEnter}
          onMouseLeave={onCursorLeave}
        >
          {/* Corner brackets - visible only on hover or click */}
          <div
            className={`pointer-events-none transition-opacity duration-300 ${
              isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan" />
          </div>

          {/* Card Top Sub-bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan" />
              </span>
              <span className="font-orbitron text-xs tracking-[2px] text-neon-cyan font-bold">
                Yeah!, If you wanna connect...
              </span>
            </div>

            <div className="flex items-center gap-2 text-white/50 font-rajdhani text-sm">
              <MapPin className="w-3.5 h-3.5 text-neon-cyan" />
              <span>Maharashtra, India</span>
            </div>
          </div>

          {/* Social Channels 2-Col / 3-Col Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-4 md:p-5 rounded-lg border border-white/5 hover:border-neon-cyan/60 bg-white/[0.02] hover:bg-neon-cyan/[0.06] transition-all duration-300 flex items-center justify-between group/link"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 group-hover/link:border-neon-cyan/50 group-hover/link:bg-neon-cyan/10 group-hover/link:text-neon-cyan flex items-center justify-center text-white/70 transition-all duration-300 flex-shrink-0">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-orbitron text-sm font-bold text-white group-hover/link:text-neon-cyan transition-colors">
                        {social.name}
                      </h4>
                    </div>
                    <p className="font-rajdhani text-xs md:text-sm text-white/50 truncate group-hover/link:text-white/80 transition-colors">
                      {social.handle}
                    </p>
                  </div>
                </div>

                <div className="text-white/30 group-hover/link:text-neon-cyan transition-colors pl-2 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom Card Footer with Signature Tagline */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 font-orbitron text-xs md:text-sm tracking-[2px] text-neon-cyan">
              <Sparkles className="w-4 h-4 text-neon-cyan shrink-0" />
              <span>Quote for ya,</span>.
              <span>How dare I crave connection when all I have to offer is Silence.</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded font-rajdhani text-xs text-white/60 tracking-wider">
                COMMUNICATION
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded font-rajdhani text-xs text-neon-cyan tracking-wider">
                TRANSMISSION
              </span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-32 pt-16 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            {/* Logo */}
            <div className="font-orbitron text-2xl font-bold tracking-wider">
              <span className="text-white">Yeah,</span>
              <span className="text-neon-cyan"> That's it.</span>
            </div>

            {/* Copyright */}
            <p className="font-rajdhani text-white/50 text-base">
              &copy; 2026 Built by Devanshu Wartakar.
            </p>

            {/* Back to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 font-orbitron text-xs text-white/50 hover:text-neon-cyan transition-colors"
              onMouseEnter={onCursorEnter}
              onMouseLeave={onCursorLeave}
              whileHover={{ y: -3 }}
            >
              <span>BACK TO TOP</span>
              <ArrowUpRight className="w-4 h-4 rotate-[-45deg]" />
            </motion.button>
          </div>
        </motion.footer>
      </motion.div>

      {/* Subtle Ambient Background Accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-neon-cyan/[0.03] rounded-full blur-[140px] pointer-events-none" />
    </motion.section>
  );
};

export default Contact;

